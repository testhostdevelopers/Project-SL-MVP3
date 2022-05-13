import React, { useState, useEffect } from "react";
import unlock from "../assets/img/icons/custom/unlock.svg";
import sonsuz from "../assets/img/icons/custom/open_p.png";
import plus from "../assets/img/icons/custom/plus.svg";
import priceP from "../assets/img/icons/custom/price_p.svg";
import { Link } from "react-router-dom";
import CreateCollectibleMultiplePopup from "../Components/Popup/CreateCollectibleMultiplePopup";
import { Select } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Keyboard, Pagination, Navigation } from "swiper/core";
import { motion } from "framer-motion";
import { NFTStorage, File } from 'nft.storage';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { actions, utils, programs, NodeWallet} from '@metaplex/js'; 
import { clusterApiUrl, Connection, Keypair, LAMPORTS_PER_SOL } from '@solana/web3.js';


SwiperCore.use([Keyboard, Pagination, Navigation]);

const NFT_STORAGE_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEYyNGU0OEJjMTdBMzE3Q2MzYjY4RjYyMEFEMTE3NTRDMDdmMDYxZWIiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY0ODE5MDI0NzY5MiwibmFtZSI6Im5mdCJ9.twfnx5glu50givzgLNy0-I_ocYZXQ97MxKZkLeCGzL4';
const client = new NFTStorage({ token: NFT_STORAGE_TOKEN })
// var pubKey;

const CreateCollectibleSingle = () => {
  const apiToken = sessionStorage.getItem("apiToken");
  const user_id = JSON.parse(sessionStorage.getItem("userdata")) || {};
  // console.log('user_id', user_id);
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  let [udata, setUdata] = useState({
    user_id: user_id._id,
    oncePurchase: false,
    putOnMarket: false,
    is_single: true,
    price_currency: "SOL",
    price_type: "fixed_price",
  });
  let [price, setPrice] = useState(0);
  let [collection_list, setcollectionList] = useState([]);
  const [filesize, setfilesize] = useState("");
  const [changetext, setChangetext] = useState(
    "Upload file to preview your brand new NFT"
  );
  const profileImage = React.useRef(null);
  const profileUploader = React.useRef(null);
  const collectionListFunc = async () => {
    await axios({
      url: 'http://localhost:8000/v1/collection/getAllCollection',
      method: 'get',
      headers: {
        "Authorization": `Bearer ${apiToken}`,
      }
    })
      .then(response => {
        setcollectionList(response.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
  useEffect(() => {
    collectionListFunc();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  /*const imageUpload = async (file) => {
    // console.log("imageUpload file details:-", file);
    // const arweave = Arweave.init({
    //   host: "arweave.net", // Hostname or IP address for a Arweave host
    //   port: 443, // Port
    //   protocol: "TLS", // Network protocol http or https
    //   timeout: 20000, // Network request timeouts in milliseconds
    //   logging: false, // Enable network request logging
    // });

    // // Upload image to

    // let readers = new FileReader();
    // readers.readAsArrayBuffer(file);

    // let key = await arweave.wallets.generate();

    // // console.log("arweave key", key);
    // // console.log("readers.result", readers.result);

    // const wallet = await arweave.wallets.jwkToAddress(key);
    // console.log("wallet", wallet);

    // const transaction = await arweave.createTransaction(
    //   {
    //     data: readers.result,
    //   },
    //   key
    // );

    // let fileExt = file.name.split(".").pop();
    // // console.log("fileExt", fileExt, `image/${fileExt}`);
    // transaction.addTag("Content-Type", `image/${fileExt}`);
    // // console.log("transaction", transaction);

    // await arweave.transactions.sign(transaction, key);

    // // console.log(sign)
    // // console.log(transaction)

    // const response = await arweave.transactions.post(transaction);
    // console.log("arweave.transactions.response", response);

    // const { id } = transaction;
    // const imageUrl = id ? `https://arweave.net/${id}` : undefined;
    // console.log("imageUrl", imageUrl);
    //   setUdata({ img_path: imageUrl })
  };*/

  const uploadNftStorage = async (file) => {
    console.log(file)
    let fileExt = file.name.split(".").pop();
    let readers = new FileReader();
    readers.readAsDataURL(file);
    const imageFile = new File([ file ], file.name , { type: `image/${fileExt}` })
    console.log(imageFile)
    console.log(fileExt)
    const metadata = await client.store({
      image: imageFile,
      name: "Storing the World's Most Valuable Virtual Assets with NFT.Storage",
      description: "The metaverse is here. Where is it all being stored?",
      properties: {
        type: "blog-post",
        origins: {
          http: "https://nft.storage/blog/post/2021-11-30-hello-world-nft-storage/",
          ipfs: "ipfs://bafybeieh4gpvatp32iqaacs6xqxqitla4drrkyyzq6dshqqsilkk3fqmti/blog/post/2021-11-30-hello-world-nft-storage/"
        },
        authors: [{ name: "David Choi" }],
        content: {
          "text/markdown": "The last year has witnessed the explosion of NFTs onto the world’s mainstage. From fine art to collectibles to music and media, NFTs are quickly demonstrating just how quickly grassroots Web3 communities can grow, and perhaps how much closer we are to mass adoption than we may have previously thought. <... remaining content omitted ...>"
        }
      }
    })
    console.log(metadata)

    const imageUrl = metadata.url;
    const imageUrlNft = metadata.ipnft + '.ipfs.nftstorage.link';
    console.log(imageUrl)
    console.log(imageUrlNft)
    setUdata({...udata, img_path: imageUrlNft })

    const connection = new Connection(  
      clusterApiUrl('devnet'),
      'confirmed',
    );
    const keypair = Keypair.generate();
    const feePayerAirdropSignature = await connection.requestAirdrop(keypair.publicKey, LAMPORTS_PER_SOL);
    await connection.confirmTransaction(feePayerAirdropSignature);

    const mintNFTResponse = await actions.mintNFT({
      connection,
      wallet: new NodeWallet(keypair),
      uri: imageUrl,
      maxSupply: 1
    });

    console.log(mintNFTResponse);
  }

  const handleprofilepicUploadr = (e) => {
    const file = e.target.files[0];
    // console.log('file', file);
    setUdata({ ...udata, img_path: e.target.files[0] });
    if (file) {
      const reader = new FileReader();
      const { current } = profileImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
        if (!file) {
          setfilesize("Please select Valid Image .");
          return false;
        }
        if (e.target.result) {
          setChangetext("");
        }
      };
      reader.readAsDataURL(file);
      uploadNftStorage(e.target.files[0]);
      // imageUpload(e.target.files[0]);

    }
  };

  const [singleCollectionPopup, setSingleCollectionPopup] = useState(false);
  // console.log(filesize, "setfilesize");

  const price_one = ["SOL", "BTC"];

  const [showDetail, setShowDetail] = useState(true);

  const handleToggle = () => setShowDetail(!showDetail);

  const handleSubmit = async () => {
    if (apiToken) {
      // let apiToken = sessionStorage.getItem('apiToken');
      let formData = new FormData();
      formData.append("aaa", "aaaaa");
      let form = {
        put_on_market_place: udata.putOnMarket,
        price: price,
        price_type: udata.price_type,
        price_currency: udata.price_currency,
        unlock_once_purchased: udata.oncePurchase,
        collection_id: udata.collection_id,
        title: udata.title,
        description: udata.description,
        royalties: 11,                                                                                                                                                                                                                                                                                                            
        is_single: true,  
        img_path: udata.img_path,
        digital_key: "11",
        user_id: user_id._id,
        properties: udata.properties,
        alt_text_nft: udata.alterText,
      };
      var file = form.img_path;
      console.log(file)
      let fileExt = file.name.split(".").pop();
      let readers = new FileReader();
      readers.readAsDataURL(file);
      const imageFile = new File([ file ], file.name , { type: `image/${fileExt}` })
      console.log(imageFile)
      console.log(fileExt)
      const metadata = await client.store({
        image: imageFile,
        name: form.title,
        description: form.description,
        properties: {
          type: "blog-post",
          origins: {
            http: "https://nft.storage/blog/post/2021-11-30-hello-world-nft-storage/",
            ipfs: "ipfs://bafybeieh4gpvatp32iqaacs6xqxqitla4drrkyyzq6dshqqsilkk3fqmti/blog/post/2021-11-30-hello-world-nft-storage/"
          },
          authors: [{ name: "David Choi" }],
          content: {
            "text/markdown": "The last year has witnessed the explosion of NFTs onto the world’s mainstage. From fine art to collectibles to music and media, NFTs are quickly demonstrating just how quickly grassroots Web3 communities can grow, and perhaps how much closer we are to mass adoption than we may have previously thought. <... remaining content omitted ...>"
          }
        }
      })
      console.log(metadata)

      const imageUrl = metadata.url;
      const imageUrlNft = metadata.ipnft + '.ipfs.nftstorage.link';
      console.log(imageUrl)
      console.log(imageUrlNft)
      setUdata({...udata, img_path: imageUrlNft })
      form.img_path = imageUrlNft;
      if(imageUrlNft){
        console.log(udata)
        await axios.post('http://localhost:8000/v1/collectible/create', form,
          {
            headers: {
              "Authorization": `Bearer ${apiToken}`,
            }
          })
        .then((res) => {
          console.log(res);
          if(res.data.response_code === "API_ERROR") {
            toast("" + res.data.error.message);
          } else if (res.data.response_code === "API_SUCCESS") {
            var transactions = {
              type: "collectible",
              amount: 10
            }
            axios.put('http://localhost:8000/v1/user/transaction/create',transactions,
            {
              headers: {
                "Authorization": `Bearer ${apiToken}`,
              }  
            }).then((res) => {
              console.log(res);
              toast("" + res.data.message);
            })
          }
        })
        .catch(error => {
          // this.setState({ errorMessage: error.message });
          console.log('There was an error!', error);
          toast("" + error);
        });
    }
  };

  const handlePriceChange = (e) => {
    let price = e;
    let less = price * 0.025;
    let final = price - less;
    // console.log(final, less);
    setPrice(final);
  };

  const handleRadio = (val) => {
    setUdata({ ...udata, price_type: val });
  };

  return (
    <>
      {singleCollectionPopup && (
        <CreateCollectibleMultiplePopup
          setSingleCollectionPopup={setSingleCollectionPopup}
        />
      )}
      <ToastContainer />
      <motion.section
        initial="hidden"
        animate="visible"
        variants={variants}
        className="create-single-section-container"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <Link className="d-flex align-items-center" to="/create">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14 7.33341H4.55333L8.28 3.60675L7.33333 2.66675L2 8.00008L7.33333 13.3334L8.27333 12.3934L4.55333 8.66675H14V7.33341Z"
                    fill="#141414"
                  />
                </svg>
                <h6 className="ml-3 mb-0">Back</h6>
              </Link>
            </div>

            <div className="col-sm-12 mt-4 mb-4">
              <h2>Create single collectible</h2>
            </div>

            <div className="col-sm-12 col-md-7">
              <b className="mt-5">Upload File</b>

              <div>
                <div className="upload-file-container">
                  <div className="color-gray">
                    PNG, GIF, WEBP, MP4 OR MP3. MAX 100MB
                  </div>
                  <p style={{color: "red"}}>{filesize}</p>
                  <input
                    type="file"
                    accept="image/*,video/mp4,video/x-m4v,video/*,image/x-png,image/gif,image/jpeg"
                    onChange={handleprofilepicUploadr}
                    ref={profileUploader}
                    id="profilephoto"
                    style={{
                      display: "none",
                    }}
                  />
                  <button
                    className="btn-primary w-50 mt-4"
                    onClick={() => profileUploader.current.click()}
                  >
                    Choose file
                  </button>
                </div>
              </div>

              <div className="mt-5 marketplace">
                <div className="d-flex justify-content-between">
                  <b>
                    <h5>Put on marketplace</h5>
                  </b>
                  <div className="custom-control custom-switch">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      onChange={(e) => {
                        setUdata({...udata, putOnMarket: e.target.checked});
                      }}
                      id="customSwitch1"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customSwitch1"
                    />
                  </div>
                </div>

                <div className="color-gray marketplace-content">
                  Enter price to allow user instantly purchase your NFT
                </div>

                <div className="d-flex justify-content-between mt-4">
                  <div
                    onClick={() => {
                      handleRadio("fixed_price");
                    }}
                    className={`${
                      udata.price_type === "fixed_price"
                        ? "putOnMarketplace border-radius btn-primary-outline-responsive"
                        : "putOnMarketplace border-gray  border-radius"
                    } `}
                  >
                    <img src={priceP} width="32" alt=""/>
                    <b>
                      {" "}
                      Fixed
                      <br />
                      Price
                    </b>
                  </div>
                  <div
                    onClick={() => {
                      handleRadio("time_auction");
                    }}
                    className={`${
                      udata.price_type === "time_auction"
                        ? "putOnMarketplace border-radius btn-primary-outline-responsive"
                        : "putOnMarketplace border-gray  border-radius"
                    } `}
                  >
                    <img src={unlock} width="32" alt="" />{" "}
                    <b>
                      Time
                      <br /> auction
                    </b>
                  </div>
                  <div
                    onClick={() => {
                      handleRadio("open_for_bid");
                    }}
                    className={`${
                      udata.price_type === "open_for_bid"
                        ? "putOnMarketplace border-radius btn-primary-outline-responsive"
                        : "putOnMarketplace border-gray  border-radius"
                    } `}
                  >
                    <img src={sonsuz} width="40" alt=""/>{" "}
                    <b>
                      Open for <br/>
                      bids
                    </b>
                  </div>
                </div>

                <div className="mt-3">
                  <h5>
                    <b>Price</b>
                  </h5>

                  <div className="prize-single-collectible d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="color-gray">
                        Enter price for one piece
                      </span>
                      <span className="color-gray">
                        <div className="d-flex border">
                          <input
                            type="number"
                            onChange={(e) => handlePriceChange(e.target.value)}
                            placeholder="0"
                            style={{maxWidth: "50px"}}
                          />
                          <Select
                            className="section-select-filter ml-0"
                            onChange={(e) => {
                              setUdata({...udata, price_currency: e});
                            }}
                            defaultValue="SOL"
                          >
                            {price_one.map((x, y) => (
                              <Select.Option value={x} key={y}>
                                {x}
                              </Select.Option>
                            ))}
                          </Select>
                        </div>
                      </span>
                    </div>
                    <div>
                      <div className="mt-4 text-right">
                        <b>
                          <span className="color-gray">Service fee </span>
                          <span>2.5%</span>
                        </b>
                      </div>
                      <div className="mt-2 text-right">
                        <b>
                          <span className="color-gray">You will receive </span>
                          <span>{price}</span>
                        </b>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="prize-single-collectible d-flex flex-column">
                  <div className="d-flex justify-content-between mt-3">
                    <b>
                      <h5>Unlock once Purchased</h5>
                    </b>
                    <div className="custom-control custom-switch">
                      <input
                        type="checkbox"
                        onChange={(e) => {
                          setUdata({
                            ...udata,
                            oncePurchase: e.target.checked,
                          });
                        }}
                        className="custom-control-input"
                        id="customSwitch2"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customSwitch2"
                      />
                    </div>
                  </div>
                  <div className="color-gray">
                    Content will be unlocked after successful transaction
                  </div>
                  {/* <div>
                                        <p className="color-gray mt-3 mb-0">Digital key, code to redeem or link to a file.</p>
                                    </div> */}
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-5 pl-5 brand-new-nfp">
              <b>Preview</b>
              <div
                className="border-gray upload-box text-center border-radius mt-4 color-gray d-flex justify-content-center align-items-center p-5">
                <label>{changetext}</label>
                <img
                  src=""
                  alt={"profileImage"}
                  ref={profileImage}
                  style={{
                    position: "absolute",
                    insetInlineStart: "auto",
                    borderRadius: "13px",
                    overflow: "hidden",
                  }}
                />
              </div>
            </div>
            {/* <SingleChooesColl /> */}
            <div className="position-relative col-sm-12">
              <div className="mt-3 mb-4">
                {/* <p className="color-gray">Markdown is supported.</p> */}
                <b>
                  <h5>Choose collection</h5>
                </b>
              </div>

              <div className="d-flex choose-collection">
                <div
                  className="putOnMarketplace border-gray border-radius btn-primary-outline-responsive"
                  onClick={() => {
                    setSingleCollectionPopup(true);
                  }}
                >
                  <img src={plus} width="40" alt="" />
                  <b> Create</b>
                  <div>
                    <small className="color-gray">ERC-721</small>
                  </div>
                </div>
                <Swiper
                  className="slider"
                  slidesPerView={4.3}
                  navigation={true}
                >
                  {collection_list.length > 0 && collection_list.map((sing, key) => (
                    <SwiperSlide
                      key={key}
                      onClick={() => {
                        setUdata({
                          ...udata,
                          collection_id: sing._id,
                        });
                      }}>
                      <div className={`${
                      udata.collection_id === sing._id
                        ? "putOnMarketplace ml-3 border-radius btn-primary-outline-responsive"
                        : "putOnMarketplace border-gray ml-3 border-radius"
                    } `}>
                        <img src={sing.main_img} width="40" alt=""/>
                        <div className="starslide">{sing.title}</div>
                        <div>
                          <small className="color-gray">{sing.symbol}</small>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            <div className="col-sm-12 col-lg-7">
              <div className="mt-5">
                <h5>
                  <b>Title</b>
                </h5>
                <div className="prize-single-collectible">
                  <input
                    type="text"
                    onChange={(e) => {
                      setUdata({ ...udata, title: e.target.value });
                    }}
                    value={udata === null ? "" : udata.title}
                    placeholder="e. g. Redeemable T-Shirt with logo"
                  />
                </div>
              </div>

              <div className="mt-3">
                <div className="d-flex">
                  <h5>
                    <b>Description</b>
                  </h5>
                  <span>
                    <small className="color-gray ml-2">(Optional)</small>
                  </span>
                </div>

                <div className="prize-single-collectible">
                  <input
                    type="text"
                    onChange={(e) => {
                      setUdata({ ...udata, description: e.target.value });
                    }}
                    value={udata === null ? "" : udata.description}
                    placeholder="e. g.  “After purchasing you will be able to get the real T-Shirt"
                  />
                </div>

                <div className="mt-2">
                  <small>
                    <span className="color-gray">
                      With preserved line-breaks{" "}
                    </span>
                  </small>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-lg-5">
              <div className="mt-5 border-gray border-radius p-4">
                <div className="d-flex">
                  <h5>
                    <b>Royalties</b>
                  </h5>
                </div>

                <div className="prize-single-collectible">
                  <input
                    type="number"
                    onChange={(e) => {
                      setUdata({ ...udata, royalties: e.target.value });
                    }}
                    value={udata == null ? "" : udata.royalties}
                    placeholder="10"
                  />
                  <span className="color-gray ">%</span>
                </div>

                <div className="mt-2 w-100">
                  <small className="d-flex">
                    <span className="color-gray">Suggested:</span>
                    <div className="text-right w-100">
                      <span className="color-gray">0%, 10%, 20%,30%</span>
                      <br />
                      <span className="color-gray">Maximum is 50%</span>
                    </div>
                  </small>
                </div>
              </div>
            </div>

            {showDetail && (
              <div className="col-sm-12 col-lg-7 slowmotion">
                <div className="mt-5">
                  <div className="d-flex">
                    <h5>
                      <b>Properties</b>
                    </h5>
                    <span>
                      <small className="color-gray ml-2">(Optional)</small>
                    </span>
                  </div>

                  <div className="d-flex">
                    <div className="prize-single-collectible d-flex w-100">
                      <input
                        type="text"
                        onChange={(e) => {
                          setUdata({ ...udata, properties: e.target.value });
                        }}
                        placeholder="e. g.  Size"
                      />
                    </div>

                    <div className="prize-single-collectible d-flex w-100 ml-3">
                      <input type="text" placeholder="e. g.  Medium" />
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <div className="d-flex">
                    <h5>
                      <b>Alternative text for NFT</b>
                    </h5>
                    <span>
                      <small className="color-gray ml-2">(Optional)</small>
                    </span>
                  </div>

                  <div className="prize-single-collectible">
                    <input
                      type="text"
                      onChange={(e) => {
                        setUdata({ ...udata, alterText: e.target.value });
                      }}
                      placeholder="Describe the Image in detail"
                    />
                  </div>

                  <div className="mt-2">
                    <small>
                      <span className="color-gray">
                        Text that will be used in VoiceOver for people with
                        disabilities.
                      </span>
                    </small>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="mt-4">
            <button
              className="btn-primary-outline w-100"
              onClick={handleToggle}
            >
              {showDetail
                ? "Hide advanced settings"
                : "Show advanced settings "}
            </button>
          </div>

          <div className="mt-4">
            <button onClick={handleSubmit} className="btn-ping  w-100" >Save Item</button>
          </div>

          <div className="mt-4 color-gray text-center">
            <span>Unsaved Changes </span>
            <span
              className="tooltp"
              data-title="Attach file or add title to save your changes."
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.66602 9.99984C1.66602 14.6023 5.39685 18.3332 9.99935 18.3332C14.6018 18.3332 18.3327 14.6023 18.3327 9.99984C18.3327 5.39734 14.6018 1.6665 9.99935 1.6665C5.39685 1.6665 1.66602 5.39734 1.66602 9.99984ZM16.6657 9.99988C16.6657 13.6818 13.6809 16.6665 9.99902 16.6665C6.31712 16.6665 3.33236 13.6818 3.33236 9.99988C3.33236 6.31798 6.31712 3.33321 9.99902 3.33321C13.6809 3.33321 16.6657 6.31798 16.6657 9.99988ZM10.8324 12.4999V14.1665H9.16569V12.4999H10.8324ZM10.8327 11.6665V11.129C12.2024 10.7207 13.0746 9.38034 12.8932 7.96267C12.7118 6.54499 11.53 5.46749 10.1017 5.41735C8.6733 5.36721 7.41891 6.3592 7.13851 7.76066L8.77351 8.08816C8.90257 7.44247 9.51039 7.00762 10.1632 7.09395C10.8159 7.18029 11.2898 7.75821 11.2466 8.41525C11.2033 9.07229 10.6578 9.58312 9.99934 9.58316C9.53911 9.58316 9.16601 9.95626 9.16601 10.4165V11.6665H10.8327Z"
                  fill="#979797"
                />
              </svg>
            </span>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default CreateCollectibleSingle;
