import React, {useState} from "react";
import {motion} from "framer-motion";
import closeicon from "../../assets/img/custom/close.svg";
import axios from "axios";

const CreateCollectibleMultiplePopup = (props) => {
  const variants = {
    hidden: {opacity: 0},
    visible: {opacity: 1},
  };
  const profileUploader = React.useRef(null);
  let {setSingleCollectionPopup} = props;
  let [collectibleData, setCollectibleData] = useState({});

  const handleCollectionPicUpload = (e) => {
    const file = e.target.files[0];
    setCollectibleData({...collectibleData, main_img: file.name});
    console.log('file', file.name);
    console.log('collectibleData', collectibleData);
  };

  const handleSubmit = async () => {
    const apiToken = sessionStorage.getItem("apiToken")
    if (apiToken) {
      console.log(collectibleData);
      let form = {
        title: collectibleData.title,
        description: collectibleData.description,
        symbol: collectibleData.symbol,
        custom_url: collectibleData.custom_url,
        main_img: collectibleData.main_img,
      };
      console.log(form);
      await axios.post('http://localhost:8000/v1/collection/create', form,
        {
          headers: {
            "Authorization": `Bearer ${apiToken}`,
          }
        }).then((res) => {
        console.log(res)
      });
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className="place-a-bid-popup-container"
    >
      <div
        className="border-radius bg-white popup-width"
        style={{padding: "48px"}}
      >
        <div className="d-flex justify-content-between cursor-pointer">
          <h3>New Collection</h3>
          <div
            className="popup-close-btn-outline"
            onClick={() => {
              setSingleCollectionPopup(false);
              document.body.style.overflow = "scroll";
            }}
          >
            <img src={closeicon} alt={""}/>
          </div>
        </div>

        <div className="d-flex mt-3">
          <div className="fallow-steps-active">
            <i className="fas fa-check-circle"/>
          </div>
          <div className="ml-3">
            <h6 className="mb-1">
              <b>Deposit wETH</b>
            </h6>
            <p className="color-gray">
              <small>
                We recommend an image of atleast 400x400. Gifs work too.
              </small>
            </p>
            <input
              type="file"
              accept="image/*,video/mp4,video/x-m4v,video/*,image/x-png,image/gif,image/jpeg"
              onChange={handleCollectionPicUpload}
              ref={profileUploader}
              id="profilephoto"
              style={{
                display: "none",
              }}
            />
            <button
              className="btn-primary-outline w-100"
              onClick={() => profileUploader.current.click()}
            >Choose File
            </button>
          </div>
        </div>

        <div className="mt-4">
          <div className="d-flex">
            <h5>
              <b>Display name</b>
            </h5>{" "}
            <span className="color-gray ml-2">(Optional)</span>
          </div>

          <div className="pt-2 pb-2 border-bottom d-flex justify-content-between prize-single-collectible">
            <input
              type="text"
              placeholder="Enter token name"
              onChange={(e) => {
                setCollectibleData({...collectibleData, title: e.target.value});
                console.log('collectibleData', collectibleData);
              }}
              className="w-100"
            />
          </div>
          <div className="color-gray">
            <small>(Token name cannot be changed)</small>
          </div>
        </div>

        <div className="mt-2">
          <div className="d-flex">
            <h5>
              <b>Symbol</b>
            </h5>{" "}
            <span className="color-gray ml-2">(Required)</span>
          </div>

          <div className="pt-2 pb-2 border-bottom d-flex justify-content-between prize-single-collectible">
            <input
              type="text"
              placeholder="Enter token symbol"
              onChange={(e) => {
                setCollectibleData({...collectibleData, symbol: e.target.value});
                console.log('collectibleData', collectibleData);
              }}
              className="w-100"
            />
          </div>
        </div>

        <div className="mt-3">
          <div className="d-flex">
            <h5>
              <b>Description</b>
            </h5>{" "}
            <span className="color-gray ml-2">(Optional)</span>
          </div>

          <div className="pt-2 pb-2 border-bottom d-flex justify-content-between prize-single-collectible">
            <input
              type="text"
              placeholder="Some words about the token collection"
              onChange={(e) => {
                setCollectibleData({...collectibleData, description: e.target.value});
                console.log('collectibleData', collectibleData);
              }}
              className=" w-100 "
            />
          </div>
        </div>

        <div className="mt-3">
          <div className="d-flex">
            <h5>
              <b>Custom URL</b>
            </h5>{" "}
            <span className="color-gray ml-2">
              (Will be used as public profile)
            </span>
          </div>

          <div className="pt-2 pb-2 border-bottom d-flex justify-content-between prize-single-collectible">
            <span className="color-gray mr-2">starlight.com/</span>
            <input
              type="text"
              placeholder="Enter your custom URL  "
              onChange={(e) => {
                setCollectibleData({...collectibleData, custom_url: 'starlight.com/' + e.target.value});
                console.log('collectibleData', collectibleData);
              }}
              className=" w-100 "
            />
          </div>
          <p className="color-gray">
            <small>Will be used as public profile</small>
          </p>
        </div>

        <button
          className="btn-ping  w-100 mt-2 mb-3 "
          onClick={handleSubmit}
        >
          Create Collection
        </button>
      </div>
    </motion.div>
  );
};

export default CreateCollectibleMultiplePopup;
