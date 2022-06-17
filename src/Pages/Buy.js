import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import userTick from "../assets/img/custom/userTick.png";
import FinishedCollectiblePopup from "../Components/Popup/PlaceABidPopup";
import PlaceABidFollowPopup from "../Components/Popup/PlaceABidFollowPopup";
import ErrorPopup from "../Components/Popup/ErrorPopup";
import ShareThisNFTPopup from "../Components/Popup/ShareThisNFTPopup";
import WhatIswETHPopup from "../Components/Popup/WhatIswETHPopup";
import FullScreenImage from "../Components/Popup/FullScreenImage";
import ReportPopup from "../Components/Popup/ReportPopup";
import CheckOut from "../Components/Popup/CheckOut";
import { Menu, Dropdown } from "antd";
import { motion } from "framer-motion";
import Buytab from "../Components/Tabs/Buytab";
import BuyHistory from "../Components/BuyCopmponent/BuyHistory";
import BuyAuction from "../Components/BuyCopmponent/BuyAuction";
import axios from "axios";
import start from "../assets/img/icons/custom/start.svg";
import { Config } from '../utils/config';
import artWorkWeekOne from "../assets/img/custom/artWorkWeekOne.png";
// import AlienMonster from "../assets/img/icons/custom/alien-monster.svg";
// import RainbowIcon from "../assets/img/icons/custom/rainbow.svg";
// import ArtworkWeek from "./ArtworkWeek";
// import logo from "../assets/img/icons/custom/logo.svg";

const Buy = () => {
  const apiToken = sessionStorage.getItem("apiToken");
  const userData = JSON.parse(sessionStorage.getItem("userdata")) || {};
  const { collectibleId } = useParams();
  // console.log('collectibleId', collectibleId);
  const [singleCollectionPopup, setSingleCollectionPopup] = useState(false);
  const [singleCollectibleData, setSingleCollectibleData] = useState([]);
  const [udata, setUdata] = useState([]);

  // const [placedBids, setplacedBids] = useState([]);
  const [singlePopup, setSinglePopup] = useState(false);
  const [errorPopups, setErrorPopup] = useState(false);
  const [sharePopup, setsharePopup] = useState(false);
  const [reportPopup, setReportPopup] = useState(false);
  const [helpPopup, sethelpPopup] = useState(false);
  const [CheckOutPopup, setCheckOutPopup] = useState(false);
  let [openImage, setOpenImage] = useState(false);
  const likeCollectible = async () => {
    // console.log('LikeCollectible');
    let a = 'collectible';
    await axios
      .put(`${Config.baseURL}v1/` + a + '/like/' + collectibleId, {
        user: userData._id
      }, {
        headers: {
          Authorization: `Bearer ${apiToken}`,
        }
      })
      .then(response => {
        singleCollectible();
        // console.log('LikeCollectible response', response);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const disLikeCollectible = async () => {
    // console.log('disLikeCollectible');
    let a = 'collectible';
    await axios
      .put(`${Config.baseURL}v1/` + a + '/unlike/' + collectibleId, {
        user: userData._id
      }, {
        headers: {
          Authorization: `Bearer ${apiToken}`,
        }
      })
      .then(response => {
        // console.log('disLikeCollectible response', response);
        singleCollectible();
      })
      .catch(err => {
        console.log(err);
      });
  };
  const singleCollectible = async () => {
    await axios
      .get(`${Config.baseURL}v1/collectible/singleCollectible/` + collectibleId, {
        headers: {
          Authorization: `Bearer ${apiToken}`,
        },
      })
      .then((res) => {
        // console.log(res.data.data);
        setSingleCollectibleData(res.data.data);
        // console.log(singleCollectibleData.bids)
        axios
          .get(`${Config.baseURL}v1/user/getUser`, {
            headers: {
              Authorization: `Bearer ${apiToken}`,
            },
          })
          .then((res) => {
            // console.log(res.data);
            setUdata(res.data.data);
          });
      });
  };

  useEffect(() => {
    if (apiToken) {
      singleCollectible().then(r => {});
    }
  }, []);

  const menu = (
    <Menu>
      {singleCollectibleData.price_type === 'time_auction' || singleCollectibleData.price_type === 'open_for_bid'  ?
        <Menu.Item onClick={() => setSingleCollectionPopup(true)}>
          New bid
        </Menu.Item> : " "
      }
      {singleCollectibleData.price_type === 'fixed_price' ?
        <Menu.Item onClick={() => setCheckOutPopup(true)}>Purchase now</Menu.Item>
         : "" 
      }
      <div className="mt-3 mb-3 border-bottom w-100" />
      <Menu.Item>View on opensea</Menu.Item>
      <Menu.Item>Refresh Metadata</Menu.Item>
      <Menu.Item onClick={() => setsharePopup(true)}>Share</Menu.Item>
      <Menu.Item onClick={() => setReportPopup(true)}>Report</Menu.Item>
    </Menu>
  );

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const properties = [
    { pr_name: singleCollectibleData.properties, pr_subname: "Wealth" },
  ];

  // const category = [
  //   { cat_img: RainbowIcon, cat_title: "Art" },
  //   { cat_img: AlienMonster, cat_title: "Metaverse" },
  // ];

  return (
    <>
      {openImage && <FullScreenImage setOpenImage={setOpenImage} Image={singleCollectibleData.img_path?.indexOf('nftstorage.link') > -1 ? 'https://' + singleCollectibleData.img_path : artWorkWeekOne} />}
      {singleCollectionPopup && (
        <FinishedCollectiblePopup
          setSinglePopup={setSinglePopup}
          sethelpPopup={sethelpPopup}
          setSingleCollectionPopup={setSingleCollectionPopup}
        />
      )}
      {singlePopup && (
        <PlaceABidFollowPopup
          setSinglePopup={setSinglePopup}
          setErrorPopup={setErrorPopup}
          setCheckOutPopup={setCheckOutPopup}
        />
      )}
      {errorPopups && <ErrorPopup setErrorPopup={setErrorPopup} />}
      {sharePopup && <ShareThisNFTPopup setsharePopup={setsharePopup} />}
      {reportPopup && <ReportPopup type={'Collectible'} id={collectibleId} setReportPopup={setReportPopup} />}
      {helpPopup && <WhatIswETHPopup sethelpPopup={sethelpPopup} />}
      {CheckOutPopup && (
        <CheckOut
          setCheckOutPopup={setCheckOutPopup}
          setSinglePopup={setSinglePopup}
        />
      )}

      <motion.section
        initial="hidden"
        animate="visible"
        variants={variants}
        className="buy-art-work-week"
      >
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-sm-12 col-lg-6">
              <img
                src={singleCollectibleData.img_path?.indexOf('nftstorage.link') > -1 ? 'https://' + singleCollectibleData.img_path : artWorkWeekOne}
                className="border-radius"
                width="100%"
                alt={singleCollectibleData.title + ' image'}
                onClick={() => {
                  setOpenImage(true);
                  document.body.style.overflow = "hidden";
                }}
              />
            </div>
            <div className="col-sm-12 col-lg-6">
              <div className="buy-art-work-week-card border-radius">
                <div className="d-flex justify-content-between align-items-center">
                  <h3>
                    <b>{singleCollectibleData.title}</b>
                  </h3>
                  <div className="d-flex">
                    <div className="card-heart-icon">
                      {singleCollectibleData.likedBy?.includes(userData._id) ?
                        <><i onClick={disLikeCollectible} className="fas fa-heart" />{singleCollectibleData.likes}</>
                        :
                        <><i onClick={likeCollectible} className="far fa-heart" />{singleCollectibleData.likes}</>
                      }
                    </div>
                    <Dropdown overlay={menu}>
                      <div
                        className="card-select-icon ml-2"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-ellipsis-h" />
                      </div>
                    </Dropdown>
                  </div>
                </div>
                {singleCollectibleData.price_type === 'open_for_bid' ?
                <div className="mt-3 bighest-bid-text">
                  <b>
                    <span className="">Highest bid </span>
                    <span className="color-ping">0.066 wETH</span>
                  </b>
                </div> : '' }
                <p className="mt-4">
                  {singleCollectibleData.description}
                </p>

                <div className="w-100 d-flex mt-3 heading-text">
                  <div className="d-flex flex-column">
                    <b className="text-secondary">Creator</b>
                    <div className="mt-3">
                      <span className="user-img">
                        <img src={udata == null
                          ? ""
                          : udata.profile_img_url} width="36" alt="" />
                      </span>
                      <span className="ml-3">
                        <b>{udata == null
                          ? ""
                          : udata.display_name}</b>
                      </span>
                    </div>
                  </div>
                </div>

                <button className="artwork-sales-btn  btn-primary-outline-responsive mt-4 pt-2 pb-2 pl-3 pr-3 text-dark d-flex align-items-center">
                  <img src={start} className="mr-2" width="16" alt="" /> {singleCollectibleData.royalties}% of sales will
                  go to creator
                </button>

                <div className="mt-4">
                  <Buytab />

                  <div
                    className="tab-content artwork-tab-content"
                    id="pills-tabContent"
                  >
                    <div
                      className="tab-pane fade  show active"
                      id="pills-Details"
                      role="tabpanel"
                      aria-labelledby="pills-details-tab"
                    >
                      <div className="details-tab-block mb-2">
                        <b className="text-secondary d-block mb-2">Owner</b>
                        <div className="w-100 d-flex justify-content-between mb-3">
                          <div className="d-flex align-items-center">
                            <div className="user-img">
                            <img src={udata == null
                              ? ""
                              : udata.profile_img_url} width="36" alt="" />
                            </div>
                            <div className="ml-4">
                              <div>
                                <b>{udata == null
                                  ? ""
                                  : udata.display_name}</b>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="details-tab-block mb-2">
                        <b className="text-secondary d-block mb-2">
                          Properties
                        </b>
                        <ul className="owner-details-list">
                          {properties.map((pr_data, pr_) => (
                            <li key={pr_}>
                              <a href="#0">
                                {pr_data.pr_name}
                                <span>{pr_data.pr_subname}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="details-tab-block">
                        <b className="text-secondary d-block mb-2">Category</b>
                        <ul className="category-btn-list">
                            <li>
                              <a href="#">
                                {singleCollectibleData.category === undefined
                                  ? ""
                                  : singleCollectibleData.category}
                              </a>
                            </li>
                        </ul>
                      </div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="pills-home"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      <div className="w-100 d-flex justify-content-between mb-3">
                        <div className="d-flex">
                          <div className="user-img">
                            <img src={userTick} width="36" alt="" />
                          </div>
                          <div className="ml-4">
                            <div>
                              <span className="color-gray">
                                Listed 1 edition for
                              </span>{" "}
                              <b> 0.024 ETH</b>
                            </div>
                            <div>
                              <span className="color-gray">By </span>
                              <b>Mad Scientist</b>{" "}
                              <span className="color-gray"> 1 hour ago</span>
                            </div>
                          </div>
                        </div>

                        <button
                          onClick={() => setCheckOutPopup(true)}
                          className="new-buy btn-ping"
                        >
                          Buy
                        </button>
                      </div>

                      <div className="w-100 d-flex justify-content-between mb-3">
                        <div className="d-flex">
                          <div className="user-img">
                            <img src={userTick} width="36" alt="" />
                          </div>
                          <div className="ml-4">
                            <div>
                              <span className="color-gray">
                                Listed 1 edition for
                              </span>{" "}
                              <b> 0.024 ETH</b>
                            </div>
                            <div>
                              <span className="color-gray">1 edition </span>
                              <b>not for sale</b>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-profile"
                      role="tabpanel"
                      aria-labelledby="pills-profile-tab"
                    >
                      <div className="w-100 d-flex justify-content-between mb-3">

                        <div className="d-flex">
                          <div className="user-img">
                            <img src={userTick} width="36" alt="" />
                          </div>
                          <div className="ml-4">
                            <div>
                              <b>0.0002 ETH </b>
                              <span className="color-gray">by </span>
                              <b>tanelen tivan </b>
                              <span className="color-gray">
                                for 10 editions
                              </span>
                            </div>
                            <div>
                              <span className="color-gray">
                                26/072021, 16:28
                              </span>
                            </div>
                          </div>
                        </div>
                            
                      <ul>
                      {/* { singleCollectibleData.bids.map((bids, key) =>(
                        <li>{bids}</li>
                      )) } */}
                      </ul>
                      </div>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="pills-contact"
                      role="tabpanel"
                      aria-labelledby="pills-contact-tab"
                    >
                      <BuyHistory collectibleId={collectibleId} />
                    </div>
                  </div>
                  <div className="tab-pane-bottom-solid" />
                </div>
                {singleCollectibleData.price_type === 'time_auction' ?
                  <BuyAuction props={singleCollectibleData} />
                  : ''
                }
                <div className="row d-flex justify-content-center mt-5 action-btn buy-highest-bid-block-btn">
                  <div className="col-sm-12 col-lg-8 d-flex">
                {singleCollectibleData.price_type === 'fixed_price' ?
                    <button
                    className="btn-ping  w-100"
                    onClick={() => setCheckOutPopup(true)}
                    >
                      Buy for 1.25 ETH
                    </button>
                      : '' }
                    {singleCollectibleData.price_type === 'open_for_bid' ?
                    <button
                        className="btn-primary-outline ml-3 w-100"
                        onClick={() => setSingleCollectionPopup(true)}
                      >
                        Place a Bid
                      </button>
                          : '' }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Buy;
