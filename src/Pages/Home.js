import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Select } from "antd";
import { motion } from "framer-motion";
import SwiperCore, {
  Keyboard,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/core";
import axios from "axios";
import { Config } from '../utils/config';
import { Link } from "react-router-dom";
import ArtWork from "../Components/ArtWork";
import FullScreenImage from "../Components/Popup/FullScreenImage";
import TopCard from "../Components/TopCard";
import LiveAuctions from "../Components/LiveAuctions";
import QuickExplore from "../Components/Tabs/QuickExplore";
import artWorkWeek1 from "../assets/img/custom/artWorkWeek1.png";

SwiperCore.use([Keyboard, Pagination, Navigation, Autoplay]);

const Home = () => {
  const apiToken = sessionStorage.getItem("apiToken");
  const userData = JSON.parse(sessionStorage.getItem("userdata")) || {};
  let [openImage, setOpenImage] = useState(false);
  let [openImagePath, setOpenImagePath] = useState(artWorkWeek1);
  let [dashboard, setDashboard] = useState([]);
  let [dashboardArtWork, setDashboardArtWork] = useState([]);
  let [liveAuctionList, setLiveAuctionList] = useState([]);
  let [hotCollectionsList, setHotCollectionsList] = useState([]);
  let [topSellerUser, setTopSellerUser] = useState([]);
  let [topBuyerUser, setTopBuyerUser] = useState([]);
  let [QuickExploreCollectible, setQuickExploreCollectible] = useState([]);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const top_seller_combo = [
    "Today",
    "This week",
    "This month",
    "Last 6 months",
    "Last 1 year",
  ];

  const getDashboard = async () => {
    await axios
        .get(`${Config.baseURL}v1/dashboard/getdashboard`)
        .then(response => {
          // console.log('getDashboard', response.data);
          if (response.data.response_code === "API_SUCCESS") {
            response.data.data.forEach((element) => {
              if (element.artType === "collectible") {
                dashboardArtWork.push(element);
              } else if (element.artType === "collection") {
                dashboard.push(element);
              }
            });
            // setDashboard(response.data.data);
          }
        })
        .catch(err => {
          console.log(err);
        });
  };
  const getLiveAuctionCollectibleList = async () => {
    await axios
      .get(`${Config.baseURL}v1/collectible/getallcollectiblelist/0/8`, {})
      .then(response => {
        response.data.data.forEach((element) => {
          if (element.likedBy.includes(userData._id)) {
            element.like = true;
          } else {
            element.like = false;
          }
        });
        setLiveAuctionList(response.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const getHotCollectionsList = async () => {
    await axios
        .get(`${Config.baseURL}v1/collection/hotcollectionslist/0/8`, {
              data: {
                user_id: userData._id
              },
              headers: {
                Authorization: `Bearer ${apiToken}`,
              }
            })
        .then(response => {
          setHotCollectionsList(response.data.data);
        })
        .catch(err => {
          console.log(err);
        });
  };
  const getTopBuyerUser = async () => {
    await axios
      .get(`${Config.baseURL}v1/user/getTopBuyerUser/0/10`, {
        data: {
          user_id: userData._id
        },
        headers: {
          Authorization: `Bearer ${apiToken}`,
        }
      })
      .then(async response => {
        if (response.data.data) {
          if (apiToken) {
            await response.data.data.forEach((element) => {
              if (element.followers.includes(userData._id)) {
                element.isImFollowing = true;
              } else {
                element.isImFollowing = false;
              }
            });
            setTopBuyerUser([...response.data.data]);
          } else {
            setTopBuyerUser([...response.data.data]);
          }
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  const getTopSellerUser = async () => {
    await axios
      .get(`${Config.baseURL}v1/user/getTopSellerUser/0/10`, {
        data: {
          user_id: userData._id
        },
        headers: {
          Authorization: `Bearer ${apiToken}`,
        }
      })
      .then(async response => {
        if (response.data.data) {
          if (apiToken) {
            await response.data.data.forEach((element) => {
              if (element.followers.includes(userData._id)) {
                element.isImFollowing = true;
              } else {
                element.isImFollowing = false;
              }
            });
            setTopSellerUser([...response.data.data]);
          } else {
            setTopSellerUser([...response.data.data]);
          }
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  const getAllCollectibleList = async () => {
    await axios
        .get(`${Config.baseURL}v1/collectible/getallcollectiblelist/0/12`, {
          data: {
            user_id: userData._id
          },
          headers: {
            Authorization: `Bearer ${apiToken}`,
          }
        })
        .then(response => {
          // console.log('response.data', response.data);
          if (response.data.response_code === "API_SUCCESS") {
            response.data.data.forEach((element, index) => {
              response.data.data[index].show = true;
              if (element.likedBy.includes(userData._id)) {
                response.data.data[index].like = true;
              } else {
                response.data.data[index].like = false;
              }
            });
            setQuickExploreCollectible(response.data.data);
          }
        })
        .catch(err => {
          console.log(err);
        });
  };

  useEffect(() => {
    getDashboard().then(r => {});
    getLiveAuctionCollectibleList().then(r => {});
    getHotCollectionsList().then(r => {});
    getTopSellerUser().then(r => {});
    getTopBuyerUser().then(r => {});
    getAllCollectibleList().then(r => {});
    // if(apiToken){
    //   window.solana.connect();
    // }
  }, []);

  return (
    <>
      {openImage && <FullScreenImage setOpenImage={setOpenImage} Image={openImagePath} />}

      {/* Dashboard Div 4 Slides*/}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={variants}
        className="nft-start"
      >
        <div className="container-fluid">
          <div className="row">
            {/* <div className="col-sm-12 col-lg-5 home-nft-slider-section margin-50">
                            <div className="d-flex align-items-start flex-column w-100">
                                <div className="d-flex align-items-end w-100 home-banner-description">
                                    <h1 className="section-title mb-0 ml-0" style={{ fontSize: "72px" }}>
                                        Starlight
                                    </h1>

                                    <h3 className="mb-0 ml-3" style={{ fontSize: "32px" }}>(SLX)</h3>
                                </div>
                                <h4 className="mt-2 w-100" style={{ fontSize: "40px" }}>the NFT Governance Token</h4>
                            </div>

                            <h6 style={{ fontSize: "18px" }}>
                                A perfect place to buy and sell digital art, as well as updating <br /> your NFT collection.
                            </h6>
                            <div className="d-flex nft-start-counter align-items-start flex-column justify-content-between">

                                <button className="btn-primary">Explore all</button>

                                <div className="d-flex mt-4">
                                    <div className="border-right pr-4">
                                        <h4 className="m-0 p-0 text-center"><b>123k</b></h4>
                                        <small className="pl-2">User</small>
                                    </div>

                                    <div className="pl-4 pr-4">
                                        <h4 className="m-0 p-0 text-center"><b>156k</b></h4>
                                        <small className="pl-2">Artwork</small>
                                    </div>

                                    <div className="border-left pl-4 pr-4">
                                        <h4 className="m-0 p-0 text-center"><b>200k</b></h4>
                                        <small className="pl-2">Artist</small>
                                    </div>
                                </div>
                            </div>
                        </div> */}

            <div className="col-sm-12 col-lg-12  home-nft-slider margin-50 ">
              {/* <div className="bg-lines"></div>
                            <div className="bg-lines1"></div>
                            <div className="bg-lines2"></div> */}

              <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                style={{ marginTop: 15 }}
                spaceBetween={10}
                slidesPerView={1}
                navigation={false}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
              >
                {dashboard.slice(0, 4).map((SingleSlide, key) => (
                    <SwiperSlide>
                      <img src={SingleSlide?.collection_id?.main_img} width="100%" alt={""} />
                      {/* <div className="slider-content">
                                      <img src={topSellerUser1} width="52px" height="52px" />
                                      <div className="slider-conter-absolute d-flex">
                                          <div className="d-flex flex-column">
                                              <small>Current Bid</small>
                                              <div className="d-flex align-items-end">
                                                  <h5><b>2.20 ETH</b></h5>
                                                  <small className="ml-2">($3,321,45)</small>
                                              </div>
                                          </div>
                                          <div className="d-flex flex-column">
                                              <small style={{ marginTop: "-3px", marginBottom: "2px" }}>Remaining time</small>
                                              <h5 style={{ fontSize: "18px" }}>23H : 11M: 32S</h5>
                                          </div>
                                      </div>
                                      <div className="ml-3 d-flex flex-column position-relative">
                                          Liquid Abstract Painting
                                          <small>@gshsj56</small>
                                      </div>
                                  </div> */}
                      <div id="message-container">
                        <div id="main-heading">{SingleSlide?.collection_id?.title}</div>
                        {/*<div id="by">By {SingleSlide?.collection_id?.title}</div>*/}
                        <div id="sub-heading">
                          {SingleSlide?.collection_id?.description}
                        </div>
                        <Link to={'/collection/' + SingleSlide?.collection_id?._id}>
                          <button
                              type="button"
                              className="ant-btn ant-btn-default Explore Collection"
                          >
                            <span>How to Buy</span>
                          </button></Link>
                      </div>
                    </SwiperSlide>
                ))}
                {/*<SwiperSlide>
                  <img src={artWorkWeek2} width="100%" alt={""} />
                  <div id="message-container">
                    <div id="main-heading">Name of Collection</div>
                    <div id="by">By Lorem Ipsum</div>
                    <div id="sub-heading">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </div>
                    <button
                      type="button"
                      className="ant-btn ant-btn-default Explore Collection"
                    >
                      <span>How to Buy</span>
                    </button>
                  </div>
                   <div className="slider-content">
                                        <img src={topSellerUser1} width="52px" height="52px" />
                                        <div className="slider-conter-absolute d-flex">
                                            <div className="d-flex flex-column">
                                                <small>Current Bid</small>
                                                <div className="d-flex align-items-end">
                                                    <h5><b>2.20 ETH</b></h5>
                                                    <small className="ml-2">($3,321,45)</small>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-column">
                                                <small style={{ marginTop: "-3px", marginBottom: "2px" }}>Remaining time</small>
                                                <h5 style={{ fontSize: "18px" }}>23H : 11M: 32S</h5>
                                            </div>
                                        </div>
                                        <div className="ml-3 d-flex flex-column position-relative">
                                            Liquid Abstract Painting
                                            <small>@gshsj56</small>
                                        </div>
                                    </div>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={artWorkWeek3} width="100%" alt={""} />
                   <div className="slider-content">
                                        <img src={topSellerUser1} width="52px" height="52px" />
                                        <div className="slider-conter-absolute d-flex">
                                            <div className="d-flex flex-column">
                                                <small>Current Bid</small>
                                                <div className="d-flex align-items-end">
                                                    <h5><b>2.20 ETH</b></h5>
                                                    <small className="ml-2">($3,321,45)</small>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-column">
                                                <small style={{ marginTop: "-3px", marginBottom: "2px" }}>Remaining time</small>
                                                <h5 style={{ fontSize: "18px" }}>23H : 11M: 32S</h5>
                                            </div>
                                        </div>
                                        <div className="ml-3 d-flex flex-column position-relative">
                                            Liquid Abstract Painting
                                            <small>@gshsj56</small>
                                        </div>
                                    </div>
                  <div id="message-container">
                    <div id="main-heading">Name of Collection</div>
                    <div id="by">By Lorem Ipsum</div>
                    <div id="sub-heading">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </div>
                    <button
                      type="button"
                      className="ant-btn ant-btn-default Explore Collection"
                    >
                      <span>How to Buy</span>
                    </button>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={artWorkWeek4} width="100%" alt={""} />
                   <div className="slider-content">
                                        <img src={topSellerUser1} width="52px" height="52px" />
                                        <div className="slider-conter-absolute d-flex">
                                            <div className="d-flex flex-column">
                                                <small>Current Bid</small>
                                                <div className="d-flex align-items-end">
                                                    <h5><b>2.20 ETH</b></h5>
                                                    <small className="ml-2">($3,321,45)</small>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-column">
                                                <small style={{ marginTop: "-3px", marginBottom: "2px" }}>Remaining time</small>
                                                <h5 style={{ fontSize: "18px" }}>23H : 11M: 32S</h5>
                                            </div>
                                        </div>
                                        <div className="ml-3 d-flex flex-column position-relative">
                                            Liquid Abstract Painting
                                            <small>@gshsj56</small>
                                        </div>
                                    </div>
                  <div id="message-container">
                    <div id="main-heading">Name of Collection</div>
                    <div id="by">By Lorem Ipsum</div>
                    <div id="sub-heading">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </div>
                    <button
                      type="button"
                      className="ant-btn ant-btn-default Explore Collection"
                    >
                      <span>How to Buy</span>
                    </button>
                  </div>
                </SwiperSlide>*/}
              </Swiper>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Artwork of the week Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={variants}
        className="artWorkWeekSection"
      >
        <div className="container-fluid">
          <div className="w-100 d-flex justify-content-between align-items-center">
            <h3 className="main-title">
              <b>Artwork of the week</b>
            </h3>
            <button className="btn-primary-outline">
              <Link to="following">
                View All
              </Link>
            </button>
          </div>

          <div className="row mt-5">
            <div className="col-sm-12 col-md-5 col-lg-5 position-relative">
              <img
                src={'https://' + dashboardArtWork[0]?.collectible_id?.img_path}
                className="cursor-pointer"
                width="95%"
                alt=""
                onClick={() => {
                  setOpenImagePath('https://' + dashboardArtWork[0]?.collectible_id?.img_path);
                  setOpenImage(true);
                  document.body.style.overflow = "hidden";
                }}
              />
              <div className="art-work-description-container">
                <h4 className="mb-0">
                  <Link to={'/buy/' + dashboardArtWork[0]?.collectible_id?._id}>
                    <b>{dashboardArtWork[0]?.collectible_id?.title}</b>
                  </Link>
                </h4>
                <small>{dashboardArtWork[0]?.category}</small>
              </div>
            </div>

            <div className="col-sm-12 col-md-7 col-lg-7 home-artwork-week-day position-relative d-flex flex-column align-items-stretch justify-content-between">
              <div className="d-flex overflow-auto justify-content-between w-100 justify-content-between">
                {dashboardArtWork.slice(1,7) .map((artwork, key) => (
                  <div key={key} className="art-list">
                    <ArtWork
                      id={artwork.collectible_id._id}
                      title={artwork.collectible_id.title}
                      artworkimg={'https://' + artwork.collectible_id.img_path}
                      setOpenImage={(imgFlag) => {
                        setOpenImagePath('https://' + artwork.collectible_id.img_path)
                        setOpenImage(imgFlag);
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Top Sellers Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={variants}
        className="topSeller"
      >
        <div className="container-fluid">
          <div className="w-100 headerSelect">
            <h3>
              <b>Top Sellers</b>
            </h3>
            <Select className="section-select-filter" defaultValue="day">
              {top_seller_combo.map((x, y) => (
                <Select.Option key={y}>{x}</Select.Option>
              ))}
            </Select>
          </div>

          <div className="topSellerContent mt-5">
            <div className="d-flex">
              {topSellerUser.map((top_seller_profile, key) => (
                <TopCard
                  key={top_seller_profile._id}
                  topcoverimg={top_seller_profile.cover_img_url}
                  topuserimg={top_seller_profile.profile_img_url}
                  title={top_seller_profile.display_name}
                  confirmation={top_seller_profile.verified}
                  id={top_seller_profile._id}
                  follow={top_seller_profile.followersCount + ' followers'}
                  btnname={top_seller_profile.isImFollowing ? "Unfollow" : "Follow"}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Top Buyers Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={variants}
        className="topSeller"
      >
        <div className="container-fluid">
          <div className="w-100 headerSelect">
            <h3>
              <b>Top Buyers</b>
            </h3>
            <Select className="section-select-filter" defaultValue="day">
              {top_seller_combo.map((x, y) => (
                <Select.Option key={y}>{x}</Select.Option>
              ))}
            </Select>
          </div>

          <div className="topSellerContent mt-5">
            <div className="d-flex">
              {topBuyerUser.map((top_buyer_profile, key) => (
                <TopCard
                  key={top_buyer_profile._id}
                  topcoverimg={top_buyer_profile.cover_img_url}
                  topuserimg={top_buyer_profile.profile_img_url}
                  title={top_buyer_profile.display_name}
                  confirmation={top_buyer_profile.verified}
                  id={top_buyer_profile._id}
                  follow={top_buyer_profile.followersCount + ' followers'}
                  btnname={top_buyer_profile.isImFollowing ? "Unfollow" : "Follow"}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Hot Bids Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={variants}
        className="liveAuction live-auction-none-mobile"
      >
        <div className="container-fluid">
          <div className="w-100">
            <h3>
              <b>Hot Bids</b>
            </h3>
          </div>

          <div className="row  mt-5">
            {liveAuctionList.slice(0, 8).map((SingleCollectible, key) => (
              <LiveAuctions
                key={SingleCollectible._id}
                isCollection={false}
                id={SingleCollectible._id}
                Coverimg={SingleCollectible.img_path?.indexOf('nftstorage.link') > -1 ? 'https://' + SingleCollectible.img_path : artWorkWeek1}
                liked={SingleCollectible.like}
                title={SingleCollectible.title}
                heartcount={SingleCollectible.likes ? SingleCollectible.likes : 0}
                User1={SingleCollectible.bids[0]?.user_id?.profile_img_url}
                User2={SingleCollectible.bids[1]?.user_id?.profile_img_url}
                User3={SingleCollectible.bids[2]?.user_id?.profile_img_url}
                WETH={SingleCollectible.price}
                bid={Math.max(...SingleCollectible.bids.map(o => o.amount)) == "-Infinity" ? "No Bid" : "Highest bid " + Math.max(...SingleCollectible.bids.map(o => o.amount))}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Hot Bids Mobile */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={variants}
        className="liveAuction-web-none liveAuction proile-liked-filter mobile-filter-live-auc"
      >
        <div className="container-fluid">
          <div className="w-100">
            <h3>
              <b>Hot Bids</b>
            </h3>
          </div>
          <Swiper
            style={{ marginTop: 15 }}
            spaceBetween={10}
            slidesPerView={1}
            navigation={true}
          >
            {liveAuctionList.map((SingleCollectible, key) => (
              <SwiperSlide>
                <LiveAuctions
                    key={SingleCollectible._id}
                    isCollection={false}
                    id={SingleCollectible._id}
                    Coverimg={SingleCollectible.img_path?.indexOf('nftstorage.link') > -1 ? 'https://' + SingleCollectible.img_path : artWorkWeek1}
                    liked={SingleCollectible.like}
                    title={SingleCollectible.title}
                    heartcount={SingleCollectible.likes ? SingleCollectible.likes : 0}
                    User1={SingleCollectible.bids[0]?.user_id?.profile_img_url}
                    User2={SingleCollectible.bids[1]?.user_id?.profile_img_url}
                    User3={SingleCollectible.bids[2]?.user_id?.profile_img_url}
                    WETH={SingleCollectible.price}
                    bid={Math.max(...SingleCollectible.bids.map(o => o.amount)) == "-Infinity" ? "No Bid" : "Highest bid " + Math.max(...SingleCollectible.bids.map(o => o.amount))}
                  isOpenInProfile={false}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.section>

      {/* Live Auction Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={variants}
        className="liveAuction live-auction-none-mobile proile-liked-filter"
      >
        <div className="container-fluid">
          <div className="w-100">
            <h3>
              <b>Live Auction</b>
            </h3>
          </div>

          <div className="row mt-5">
            {liveAuctionList.slice(0, 8).map((SingleCollectible, key) => (
              <LiveAuctions
                key={SingleCollectible._id}
                isCollection={false}
                id={SingleCollectible._id}
                Coverimg={SingleCollectible.img_path?.indexOf('nftstorage.link') > -1 ? 'https://' + SingleCollectible.img_path : artWorkWeek1}
                liked={SingleCollectible.like}
                title={SingleCollectible.title}
                heartcount={SingleCollectible.likes ? SingleCollectible.likes : 0}
                User1={SingleCollectible.bids[0]?.user_id?.profile_img_url}
                User2={SingleCollectible.bids[1]?.user_id?.profile_img_url}
                User3={SingleCollectible.bids[2]?.user_id?.profile_img_url}
                WETH={SingleCollectible.price}
                bid={Math.max(...SingleCollectible.bids.map(o => o.amount)) == "-Infinity" ? "No Bid" : "Highest bid " + Math.max(...SingleCollectible.bids.map(o => o.amount))}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Live Auction Section Mobile */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={variants}
        className="liveAuction-web-none liveAuction proile-liked-filter mobile-filter-live-auc"
      >
        <div className="container-fluid">
          <div className="w-100">
            <h3>
              <b>Live Auction</b>
            </h3>
          </div>
          <Swiper
            style={{ marginTop: 15 }}
            spaceBetween={10}
            slidesPerView={1}
            navigation={true}
          >
            {liveAuctionList.map((SingleCollectible, key) => (
              <SwiperSlide>
                <LiveAuctions
                    key={SingleCollectible._id}
                    isCollection={false}
                    id={SingleCollectible._id}
                    Coverimg={SingleCollectible.img_path?.indexOf('nftstorage.link') > -1 ? 'https://' + SingleCollectible.img_path : artWorkWeek1}
                    liked={SingleCollectible.like}
                    title={SingleCollectible.title}
                    heartcount={SingleCollectible.likes ? SingleCollectible.likes : 0}
                    User1={SingleCollectible.bids[0]?.user_id?.profile_img_url}
                    User2={SingleCollectible.bids[1]?.user_id?.profile_img_url}
                    User3={SingleCollectible.bids[2]?.user_id?.profile_img_url}
                    WETH={SingleCollectible.price}
                    bid={Math.max(...SingleCollectible.bids.map(o => o.amount)) == "-Infinity" ? "No Bid" : "Highest bid " + Math.max(...SingleCollectible.bids.map(o => o.amount))}
                  isOpenInProfile={false}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.section>

      {/* Hot Collections Section Desktop*/}
      <motion.section
          initial="hidden"
          animate="visible"
          variants={variants}
          className="liveAuction live-auction-none-mobile proile-liked-filter"
      >
        <div className="container-fluid">
          <div className="w-100">
            <h3>
              <b>Hot Collections</b>
            </h3>
          </div>

          <div className="row mt-5">
            {hotCollectionsList.slice(0, 8).map((SingleCollection, key) => (
              <LiveAuctions
                  isCollection={true}
                  id={SingleCollection._id}
                  Coverimg={SingleCollection.main_img.indexOf('https://storage.googleapis.com') > -1 ? SingleCollection.main_img : artWorkWeek1}
                  liked={SingleCollection.like}
                  title={SingleCollection.title}
                  heartcount={SingleCollection.likes ? SingleCollection.likes : 0}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Hot Collections Section Mobile*/}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={variants}
        className="topSeller liveAuction-web-none"
      >
        <div className="container-fluid">
          <div className="w-100 headerSelect">
            <h3>
              <b>Hot Collections</b>
            </h3>
          </div>
          <div className="topSellerContent">
            <Swiper
              style={{ marginTop: 15 }}
              spaceBetween={10}
              slidesPerView={1}
              navigation={true}
            >
              {hotCollectionsList.map((SingleCollection, key) => (
                <SwiperSlide>
                  <LiveAuctions
                    isCollection={true}
                    id={SingleCollection._id}
                    Coverimg={SingleCollection.main_img.indexOf('https://storage.googleapis.com') > -1 ? SingleCollection.main_img : artWorkWeek1}
                    liked={SingleCollection.like}
                    title={SingleCollection.title}
                    heartcount={SingleCollection.likes ? SingleCollection.likes : 0}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </motion.section>

      {/* Quick Explore Section*/}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={variants}
        className="liveAuction quickExplore"
      >
        <div className="container-fluid">
          <div className="mb-3 row">
            <div className="col-sm-6 col-lg-4 order-1 order-sm-1 d-flex justify-content-between">
              <h3>
                <b>Quick Explore</b>
              </h3>
              {/*<button className="m-0 btn-primary-outline-responsive d-lg-none">
                 <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 0V1.66667H15V0H0ZM5.83333 10H9.16667V8.33333H5.83333V10ZM12.5 5.83333H2.5V4.16667H12.5V5.83333Z" fill="black" />
                  </svg>
                view all
              </button>*/}
            </div>

            <div className="col-sm-12 col-lg-8 order-sm-3 order-2 d-flex align-items-center">
              <QuickExplore />
            </div>
          </div>

          <div
            className="tab-content w-100 d-flex justify-content-center flex-column align-items-center mt-5"
            id="myTabContent"
          >
            <div
              className="tab-pane w-100 fade show active"
              id="all"
              role="tabpanel"
              aria-labelledby="all-tab"
            >
              <div className="row">
                {QuickExploreCollectible.map((SingleCollectible, key) => (
                  <LiveAuctions
                    key={key}
                    liked={SingleCollectible.like}
                    Coverimg={SingleCollectible.img_path.indexOf('nftstorage.link') > -1 ? 'https://' + SingleCollectible.img_path : artWorkWeek1}
                    heartcount={SingleCollectible.likes}
                    time={new Date(SingleCollectible.createdAt).toLocaleString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: 'numeric',
                      minute: 'numeric',
                      second: 'numeric',
                    })}
                    id={SingleCollectible._id}
                    title={SingleCollectible.title}
                    WETH={SingleCollectible.price}
                    isOpenInProfile={false}
                    isLiveAuctions={false}
                    bid={Math.max(...SingleCollectible.bids.map(o => o.amount)) == "-Infinity" ? "No Bid" : "Highest bid " + Math.max(...SingleCollectible.bids.map(o => o.amount))}
                  />
                ))}
              </div>
            </div>
            <div
              className="tab-pane w-100 fade"
              id="art"
              role="tabpanel"
              aria-labelledby="art-tab"
            >
              <div className="row">
                {QuickExploreCollectible.map((SingleCollectible, key) => (
                  SingleCollectible.category === "Art" ?
                    <LiveAuctions
                      key={key}
                      liked={SingleCollectible.like}
                      Coverimg={SingleCollectible.img_path.indexOf('nftstorage.link') > -1 ? 'https://' + SingleCollectible.img_path : artWorkWeek1}
                      heartcount={SingleCollectible.likes}
                      time={new Date(SingleCollectible.createdAt).toLocaleString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: 'numeric',
                      minute: 'numeric',
                      second: 'numeric',
                    })}
                      id={SingleCollectible._id}
                      title={SingleCollectible.title}
                      WETH={SingleCollectible.price}
                      isOpenInProfile={false}
                      isLiveAuctions={false}
                      bid={Math.max(...SingleCollectible.bids.map(o => o.amount)) == "-Infinity" ? "No Bid" : "Highest bid " + Math.max(...SingleCollectible.bids.map(o => o.amount))}
                    /> : <></>
                ))}
              </div>
            </div>
            <div
              className="tab-pane w-100 fade"
              id="photo"
              role="tabpanel"
              aria-labelledby="photo-tab"
            >
              <div className="row">
                {QuickExploreCollectible.map((SingleCollectible, key) => (
                  SingleCollectible.category === "Photography" ?
                    <LiveAuctions
                      key={key}
                      liked={SingleCollectible.like}
                      Coverimg={SingleCollectible.img_path.indexOf('nftstorage.link') > -1 ? 'https://' + SingleCollectible.img_path : artWorkWeek1}
                      heartcount={SingleCollectible.likes}
                      time={new Date(SingleCollectible.createdAt).toLocaleString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric',
                        second: 'numeric',
                      })}
                      id={SingleCollectible._id}
                      title={SingleCollectible.title}
                      WETH={SingleCollectible.price}
                      isOpenInProfile={false}
                      isLiveAuctions={false}
                      bid={Math.max(...SingleCollectible.bids.map(o => o.amount)) == "-Infinity" ? "No Bid" : "Highest bid " + Math.max(...SingleCollectible.bids.map(o => o.amount))}
                    /> : <></>
                ))}
              </div>
            </div>
            <div
              className="tab-pane w-100 fade"
              id="games"
              role="tabpanel"
              aria-labelledby="games-tab"
            >
              <div className="row">
                {QuickExploreCollectible.map((SingleCollectible, key) => (
                  SingleCollectible.category === "Games" ?
                    <LiveAuctions
                      key={key}
                      liked={SingleCollectible.like}
                      Coverimg={SingleCollectible.img_path.indexOf('nftstorage.link') > -1 ? 'https://' + SingleCollectible.img_path : artWorkWeek1}
                      heartcount={SingleCollectible.likes}
                      time={new Date(SingleCollectible.createdAt).toLocaleString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric',
                        second: 'numeric',
                      })}
                      id={SingleCollectible._id}
                      title={SingleCollectible.title}
                      WETH={SingleCollectible.price}
                      isOpenInProfile={false}
                      isLiveAuctions={false}
                      bid={Math.max(...SingleCollectible.bids.map(o => o.amount)) == "-Infinity" ? "No Bid" : "Highest bid " + Math.max(...SingleCollectible.bids.map(o => o.amount))}
                    /> : <></>
                ))}
              </div>
            </div>

            <div
              className="tab-pane w-100 fade"
              id="metaverses"
              role="tabpanel"
              aria-labelledby="metaverses-tab"
            >
              <div className="row">
                {QuickExploreCollectible.map((SingleCollectible, key) => (
                  SingleCollectible.category === "Metaverse" ?
                    <LiveAuctions
                      key={key}
                      liked={SingleCollectible.like}
                      Coverimg={SingleCollectible.img_path.indexOf('nftstorage.link') > -1 ? 'https://' + SingleCollectible.img_path : artWorkWeek1}
                      heartcount={SingleCollectible.likes}
                      time={new Date(SingleCollectible.createdAt).toLocaleString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric',
                        second: 'numeric',
                      })}
                      id={SingleCollectible._id}
                      title={SingleCollectible.title}
                      WETH={SingleCollectible.price}
                      isOpenInProfile={false}
                      isLiveAuctions={false}
                      bid={Math.max(...SingleCollectible.bids.map(o => o.amount)) == "-Infinity" ? "No Bid" : "Highest bid " + Math.max(...SingleCollectible.bids.map(o => o.amount))}
                    /> : <></>
                ))}
              </div>
            </div>
            <div
              className="tab-pane w-100 fade"
              id="music"
              role="tabpanel"
              aria-labelledby="music-tab"
            >
              <div className="row">
                {QuickExploreCollectible.map((SingleCollectible, key) => (
                  SingleCollectible.category === "Music" ?
                    <LiveAuctions
                      key={key}
                      liked={SingleCollectible.like}
                      Coverimg={SingleCollectible.img_path.indexOf('nftstorage.link') > -1 ? 'https://' + SingleCollectible.img_path : artWorkWeek1}
                      heartcount={SingleCollectible.likes}
                      time={new Date(SingleCollectible.createdAt).toLocaleString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric',
                        second: 'numeric',
                      })}
                      id={SingleCollectible._id}
                      title={SingleCollectible.title}
                      WETH={SingleCollectible.price}
                      isOpenInProfile={false}
                      isLiveAuctions={false}
                      bid={Math.max(...SingleCollectible.bids.map(o => o.amount)) == "-Infinity" ? "No Bid" : "Highest bid " + Math.max(...SingleCollectible.bids.map(o => o.amount))}
                    /> : <></>
                ))}
              </div>
            </div>

            <div
              className="tab-pane w-100 fade"
              id="memes"
              role="tabpanel"
              aria-labelledby="memes-tab"
            >
              <div className="row">
                {QuickExploreCollectible.map((SingleCollectible, key) => (
                  SingleCollectible.category === "Meme" ?
                    <LiveAuctions
                      key={key}
                      liked={SingleCollectible.like}
                      Coverimg={SingleCollectible.img_path.indexOf('nftstorage.link') > -1 ? 'https://' + SingleCollectible.img_path : artWorkWeek1}
                      heartcount={SingleCollectible.likes}
                      time={new Date(SingleCollectible.createdAt).toLocaleString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric',
                        second: 'numeric',
                      })}
                      id={SingleCollectible._id}
                      title={SingleCollectible.title}
                      WETH={SingleCollectible.price}
                      isOpenInProfile={false}
                      isLiveAuctions={false}
                      bid={Math.max(...SingleCollectible.bids.map(o => o.amount)) == "-Infinity" ? "No Bid" : "Highest bid " + Math.max(...SingleCollectible.bids.map(o => o.amount))}
                    /> : <></>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/*<div className="w-100 mt-5 pl-3 pr-3">
          <div className="view-all-items">
            <button className="btn-primary-outline w-100"><b>View all</b></button>
          </div>
        </div>*/}
      </motion.section>
    </>
  );
};

export default Home;
