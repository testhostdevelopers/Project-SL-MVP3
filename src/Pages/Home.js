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
import ArtWork from "../Components/ArtWork";
import artWorkWeekOne from "../assets/img/custom/artWorkWeekOne.png";
import artWorkWeek1 from "../assets/img/custom/artWorkWeek1.png";
import artWorkWeek2 from "../assets/img/custom/artWorkWeek2.png";
import artWorkWeek3 from "../assets/img/custom/artWorkWeek3.png";
import artWorkWeek4 from "../assets/img/custom/artWorkWeek4.png";
import artWorkWeek5 from "../assets/img/custom/artWorkWeek5.png";
import artWorkWeek6 from "../assets/img/custom/artWorkWeek6.png";
import topSeller2 from "../assets/img/custom/topSeller2.png";
import topSeller3 from "../assets/img/custom/topSeller3.png";
import topSeller4 from "../assets/img/custom/topSeller4.png";
import topSeller5 from "../assets/img/custom/topSeller5.png";
import topSeller6 from "../assets/img/custom/topSeller6.png";
import topSeller7 from "../assets/img/custom/topSeller7.png";
import topSeller8 from "../assets/img/custom/topSeller8.png";
import topSeller9 from "../assets/img/custom/topSeller9.png";
import topSeller10 from "../assets/img/custom/topSeller10.png";
import topSellerUser1 from "../assets/img/custom/topSellerUser1.png";
import topSellerUser2 from "../assets/img/custom/topSellerUser2.png";
import topSellerUser3 from "../assets/img/custom/topSellerUser3.png";
import topSellerUser4 from "../assets/img/custom/topSellerUser4.png";
import topSellerUser5 from "../assets/img/custom/topSellerUser5.png";
import topSellerUser6 from "../assets/img/custom/topSellerUser6.png";
import topSellerUser7 from "../assets/img/custom/topSellerUser7.png";
import topSellerUser8 from "../assets/img/custom/topSellerUser8.png";
import topSellerUser9 from "../assets/img/custom/topSellerUser9.png";
import topSellerUser10 from "../assets/img/custom/topSellerUser10.png";
import FullScreenImage from "../Components/Popup/FullScreenImage";
import TopCard from "../Components/TopCard";
import LiveAuctions from "../Components/LiveAuctions";
import HotBids from "../Components/HotBids";
import QuickExplore from "../Components/Tabs/QuickExplore";
import axios from "axios";
import { Config } from '../utils/config';           
// const { TabPane } = Tabs;
// const { Option } = Select;

SwiperCore.use([Keyboard, Pagination, Navigation, Autoplay]);

const Home = () => {
  var apiToken = sessionStorage.getItem("apiToken");
  const userData = JSON.parse(sessionStorage.getItem("userdata")) || {};
  let [openImage, setOpenImage] = useState(false);
  let [liveAuctionList, setLiveAuctionList] = useState([]);
  let [topSellerUser, setTopSellerUser] = useState([
    {
      cover_img_url: topSeller2,
      profile_img_url: topSellerUser1,
      display_name: "Courtney Henry",
    },
    {
      cover_img_url: topSeller3,
      profile_img_url: topSellerUser2,
      display_name: "Darlene Robertson",
    },
    {
      cover_img_url: topSeller4,
      profile_img_url: topSellerUser3,
      display_name: "Robert Fox",
    },
    {
      cover_img_url: topSeller5,
      profile_img_url: topSellerUser4,
      display_name: "Savannah Nguyen",
    },
    {
      cover_img_url: topSeller6,
      profile_img_url: topSellerUser5,
      display_name: "Devon Lane",
    },
    {
      cover_img_url: topSeller7,
      profile_img_url: topSellerUser6,
      display_name: "Arlene McCoy",
    },
    {
      cover_img_url: topSeller8,
      profile_img_url: topSellerUser7,
      display_name: "Albert Flores",
    },
    {
      cover_img_url: topSeller9,
      profile_img_url: topSellerUser8,
      display_name: "Kristin Watson",
    },
    {
      cover_img_url: topSeller10,
      profile_img_url: topSellerUser9,
      display_name: "Cody Fisher",
    },
    {
      cover_img_url: topSeller2,
      profile_img_url: topSellerUser10,
      display_name: "Courtney Henry",
    },
  ]);
  let [topBuyerUser, setTopBuyerUser] = useState(topSellerUser);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const all_atwork = [
    {
      my_title: "Butterfly",
      artimg: artWorkWeek1,
    },
    {
      my_title: "Butterfly",
      artimg: artWorkWeek2,
    },
    {
      my_title: "Butterfly",
      artimg: artWorkWeek3,
    },
    {
      my_title: "Butterfly",
      artimg: artWorkWeek4,
    },
    {
      my_title: "Butterfly",
      artimg: artWorkWeek5,
    },
    {
      my_title: "Butterfly",
      artimg: artWorkWeek6,
    },
  ];

  const top_seller = [
    "Today",
    "This week",
    "This month",
    "Last 6 months",
    "Last 1 year",
  ];

  const live_auction = [
    {
      cover_img: artWorkWeek1,
      auction_name: "Memescalf#782021",
      h_count: "24",
      auc_user1: topSellerUser1,
      auc_user2: topSellerUser2,
      auc_user3: topSellerUser3,
      auction_WETH: "1.2 WETH",
      auction_bid: "Highest bid 1/1",
    },
    {
      cover_img: artWorkWeek2,
      auction_name: "Memescalf#782022",
      h_count: "27",
      auc_user1: topSellerUser1,
      auc_user2: topSellerUser2,
      auc_user3: topSellerUser3,
      auction_WETH: "1.3 WETH",
      auction_bid: "Highest bid 1/1",
    },
    {
      cover_img: artWorkWeek3,
      auction_name: "Memescalf#782021",
      h_count: "30",
      auc_user1: topSellerUser1,
      auc_user2: topSellerUser2,
      auc_user3: topSellerUser3,
      auction_WETH: "1.7 WETH",
      auction_bid: "Highest bid 1/1",
    },
    {
      cover_img: artWorkWeek4,
      auction_name: "Memescalf#782022",
      h_count: "36",
      auc_user1: topSellerUser1,
      auc_user2: topSellerUser2,
      auc_user3: topSellerUser3,
      auction_WETH: "1.6 WETH",
      auction_bid: "Highest bid 1/1",
    },
  ];

  const hot_bide = [
    {
      cover_bide: artWorkWeek2,
      bide_heartcount: "23",
      bide_time: "3H : 15M : 50S left",
      bide_name: "Memescalf#782021",
      bide_weth: "1.3 WETH",
      bide_bid: "Highest bid 1/1",
    },
    {
      cover_bide: artWorkWeek3,
      bide_heartcount: "25",
      bide_time: "7H : 13M : 50S left",
      bide_name: "Memescalf#782022",
      bide_weth: "1.6 WETH",
      bide_bid: "Highest bid 1/16",
    },
    {
      cover_bide: artWorkWeek1,
      bide_heartcount: "26",
      bide_time: "8H : 20M : 50S left",
      bide_name: "Memescalf#782023",
      bide_weth: "1.2 WETH",
      bide_bid: "Highest bid 6/6",
    },
    {
      cover_bide: artWorkWeek4,
      bide_heartcount: "26",
      bide_time: "8H : 40M : 50S left",
      bide_name: "Memescalf#782022",
      bide_weth: "1.2 WETH",
      bide_bid: "Highest bid 6/5",
    },
  ];

  const top_card = [
    {
      top_cover: topSeller6,
      top_user: topSellerUser3,
      top_name: "Courtney Henry",
      top_price: "$1,403",
    },
    {
      top_cover: topSeller2,
      top_user: topSellerUser4,
      top_name: "Courtney Henry",
      top_price: "$3,403",
    },
    {
      top_cover: topSeller3,
      top_user: topSellerUser5,
      top_name: "Courtney Henry",
      top_price: "$5,403",
    },
    {
      top_cover: topSeller4,
      top_user: topSellerUser6,
      top_name: "Courtney Henry",
      top_price: "$3,403",
    },
    {
      top_cover: topSeller5,
      top_user: topSellerUser7,
      top_name: "Courtney Henry",
      top_price: "$4,403",
    },
  ];

  const slide_data = [
    {
      top_cover: topSeller6,
      top_user: topSellerUser3,
      top_name: "Courtney Henry",
      top_price: "$1,403",
    },
    {
      top_cover: topSeller2,
      top_user: topSellerUser4,
      top_name: "Courtney Henry",
      top_price: "$3,403",
    },
    {
      top_cover: topSeller3,
      top_user: topSellerUser5,
      top_name: "Courtney Henry",
      top_price: "$5,403",
    },
    {
      top_cover: topSeller4,
      top_user: topSellerUser6,
      top_name: "Courtney Henry",
      top_price: "$3,403",
    },
    {
      top_cover: topSeller5,
      top_user: topSellerUser7,
      top_name: "Courtney Henry",
      top_price: "$4,403",
    },
  ];

  const slide_hot_bid = [
    {
      cover_bide: artWorkWeek2,
      bide_heartcount: "23",
      bide_time: "3H : 15M : 50S left",
      bide_name: "Memescalf#782021",
      bide_weth: "1.3 WETH",
      bide_bid: "Highest bid 1/1",
    },
    {
      cover_bide: artWorkWeek3,
      bide_heartcount: "25",
      bide_time: "7H : 13M : 50S left",
      bide_name: "Memescalf#782022",
      bide_weth: "1.6 WETH",
      bide_bid: "Highest bid 1/16",
    },
    {
      cover_bide: artWorkWeek1,
      bide_heartcount: "26",
      bide_time: "8H : 20M : 50S left",
      bide_name: "Memescalf#782023",
      bide_weth: "1.2 WETH",
      bide_bid: "Highest bid 6/6",
    },
    {
      cover_bide: artWorkWeek4,
      bide_heartcount: "26",
      bide_time: "8H : 40M : 50S left",
      bide_name: "Memescalf#782022",
      bide_weth: "1.2 WETH",
      bide_bid: "Highest bid 6/5",
    },
  ];

  const slide_live_auction = [
    {
      cover_img: artWorkWeek1,
      auction_name: "Memescalf#782021",
      h_count: "24",
      auc_user1: topSellerUser1,
      auc_user2: topSellerUser2,
      auc_user3: topSellerUser3,
      auction_WETH: "1.2 WETH",
      auction_bid: "Highest bid 1/1",
    },
    {
      cover_img: artWorkWeek2,
      auction_name: "Memescalf#782022",
      h_count: "27",
      auc_user1: topSellerUser1,
      auc_user2: topSellerUser2,
      auc_user3: topSellerUser3,
      auction_WETH: "1.3 WETH",
      auction_bid: "Highest bid 1/1",
    },
    {
      cover_img: artWorkWeek3,
      auction_name: "Memescalf#782021",
      h_count: "30",
      auc_user1: topSellerUser1,
      auc_user2: topSellerUser2,
      auc_user3: topSellerUser3,
      auction_WETH: "1.7 WETH",
      auction_bid: "Highest bid 1/1",
    },
    {
      cover_img: artWorkWeek4,
      auction_name: "Memescalf#782022",
      h_count: "36",
      auc_user1: topSellerUser1,
      auc_user2: topSellerUser2,
      auc_user3: topSellerUser3,
      auction_WETH: "1.6 WETH",
      auction_bid: "Highest bid 1/1",
    },
  ];

  const getallcollectiblelist = async () => {
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
  const getTopBuyerUser = async () => {
    await axios
      .get('http://localhost:8000/v1/user/getTopBuyerUser/0/10', {
        data: {
          user_id: userData._id
        },
        headers: {
          Authorization: `Bearer ${apiToken}`,
        }
      })
      .then(response => {
        if (response.data.data) {
          // setTopBuyerUser(response.data.data);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  const getTopSellerUser = async () => {
    await axios
      .get('http://localhost:8000/v1/user/getTopSellerUser/0/10', {
        data: {
          user_id: userData._id
        },
        headers: {
          Authorization: `Bearer ${apiToken}`,
        }
      })
      .then(response => {
        if (response.data.data) {
          // setTopSellerUser(response.data.data);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getallcollectiblelist().then(r => {});
    getTopSellerUser().then(r => {});
    getTopBuyerUser().then(r => {});
  }, []);

  return (
    <>
      {openImage && <FullScreenImage setOpenImage={setOpenImage} />}
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
                <SwiperSlide>
                  <img src={artWorkWeek1} width="100%" alt={""} />
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
                  <img src={artWorkWeek2} width="100%" alt={""} />
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
                </SwiperSlide>
                <SwiperSlide>
                  <img src={artWorkWeek3} width="100%" alt={""} />
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
              </Swiper>
            </div>
          </div>
        </div>
      </motion.section>

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
            <button className="btn-primary-outline">View All</button>
          </div>

          <div className="row mt-5">
            <div className="col-sm-12 col-md-5 col-lg-5 position-relative">
              <img
                src={artWorkWeekOne}
                className="cursor-pointer"
                width="95%"
                alt=""
                onClick={() => {
                  setOpenImage(true);
                  document.body.style.overflow = "hidden";
                }}
              />
              <div className="art-work-description-container">
                <h4 className="mb-0">
                  <b>The Black</b>
                </h4>
                <small>Original Series</small>
              </div>
            </div>

            <div className="col-sm-12 col-md-7 col-lg-7 home-artwork-week-day position-relative d-flex flex-column align-items-stretch justify-content-between">
              <div className="d-flex overflow-auto justify-content-between w-100 justify-content-between">
                {all_atwork.map((artwork, key) => (
                  <div key={key} className="art-list">
                    <ArtWork
                      title={artwork.my_title}
                      artworkimg={artwork.artimg}
                      setOpenImage={(imgFlag) => setOpenImage(imgFlag)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

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
              {top_seller.map((x, y) => (
                <Select.Option key={y}>{x}</Select.Option>
              ))}
            </Select>
          </div>

          <div className="topSellerContent mt-5">
            <div className="d-flex">
              {topSellerUser.map((top_seller_profile, key) => (
                <TopCard
                  topcoverimg={top_seller_profile.cover_img_url}
                  topuserimg={top_seller_profile.profile_img_url}
                  title={top_seller_profile.display_name}
                  confirmation={top_seller_profile.verified}
                  id={top_seller_profile._id}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.section>

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
              {top_seller.map((x, y) => (
                <Select.Option key={y}>{x}</Select.Option>
              ))}
            </Select>
          </div>

          <div className="topSellerContent mt-5">
            <div className="d-flex">
              {topBuyerUser.map((top_seller_profile, key) => (
                <TopCard
                  topcoverimg={top_seller_profile.cover_img_url}
                  topuserimg={top_seller_profile.profile_img_url}
                  title={top_seller_profile.display_name}
                  confirmation={top_seller_profile.verified}
                  id={top_seller_profile._id}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.section>

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
                isCollection={false}
                id={SingleCollectible._id}
                Coverimg={"https://"+SingleCollectible.img_path}
                liked={SingleCollectible.like}
                title={SingleCollectible.title}
                heartcount={SingleCollectible.likes ? SingleCollectible.likes : 0}
                User1={topSellerUser1}
                User2={topSellerUser2}
                User3={topSellerUser3}
                WETH={SingleCollectible.price}
                bid="Highest bid 1/1"
              />
            ))}
          </div>
        </div>
      </motion.section>

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
            {slide_hot_bid.map((bide_desk, key) => (
              <SwiperSlide>
                  <HotBids
                    Coverimg={bide_desk.cover_bide}
                    heartcount={bide_desk.bide_heartcount}
                    time={bide_desk.bide_time}
                    title={bide_desk.bide_name}
                    WETH={bide_desk.bide_weth}
                    bid={bide_desk.bide_bid}
                    isOpenInProfile={false}
                  />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.section>

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
                isCollection={false}
                id={SingleCollectible._id}
                Coverimg={"https://"+SingleCollectible.img_path}
                liked={SingleCollectible.like}
                title={SingleCollectible.title}
                heartcount={SingleCollectible.likes ? SingleCollectible.likes : 0}
                User1={topSellerUser1}
                User2={topSellerUser2}
                User3={topSellerUser3}
                WETH={SingleCollectible.price}
                bid="Highest bid 1/1"
              />
            ))}
          </div>
        </div>
      </motion.section>

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
            {slide_live_auction.map((live_a, key) => (
              <SwiperSlide>
                  <LiveAuctions
                    Coverimg={live_a.cover_img}
                    title={live_a.auction_name}
                    heartcount={live_a.h_count}
                    User1={live_a.auc_user1}
                    User2={live_a.auc_user2}
                    User3={live_a.auc_user3}
                    WETH={live_a.auction_WETH}
                    bid={live_a.auction_bid}
                    isOpenInProfile={false}
                  />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={variants}
        className="topSeller live-auction-none-mobile"
      >
        <div className="container-fluid">
          <div className="w-100 headerSelect">
            <h3>
              <b>Hot Collections</b>
            </h3>
          </div>

          <div className="topSellerContent mt-5">
            <div className="d-flex overflow-auto justify-content-between w-100 mb-4">
              {top_card.map((collr_, key) => (
                  <TopCard
                    topcoverimg={collr_.top_cover}
                    topuserimg={collr_.top_user}
                    title={collr_.top_name}
                    id={collr_.top_name}
                    Price={collr_.top_price}
                  />
              ))}
            </div>
          </div>
        </div>
      </motion.section>

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
              {slide_data.map((collr_, key) => (
                <SwiperSlide>
                    <TopCard
                      topcoverimg={collr_.top_cover}
                      topuserimg={collr_.top_user}
                      title={collr_.top_name}
                      id={collr_.top_name}
                      Price={collr_.top_price}
                    />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </motion.section>

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
              <button className="m-0 btn-primary-outline-responsive d-lg-none">
                {/* <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 0V1.66667H15V0H0ZM5.83333 10H9.16667V8.33333H5.83333V10ZM12.5 5.83333H2.5V4.16667H12.5V5.83333Z" fill="black" />
                                </svg> */}
                view all
              </button>
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
                {live_auction.map((live_a, key) => (
                    <LiveAuctions
                      Coverimg={live_a.cover_img}
                      title={live_a.auction_name}
                      heartcount={live_a.h_count}
                      User1={live_a.auc_user1}
                      User2={live_a.auc_user2}
                      User3={live_a.auc_user3}
                      WETH={live_a.auction_WETH}
                      bid={live_a.auction_bid}
                      isOpenInProfile={false}
                    />
                ))}

                {hot_bide.map((bide_desk, ho_B) => (
                  <HotBids
                    key={ho_B}
                    Coverimg={bide_desk.cover_bide}
                    heartcount={bide_desk.bide_heartcount}
                    time={bide_desk.bide_time}
                    title={bide_desk.bide_name}
                    WETH={bide_desk.bide_weth}
                    bid={bide_desk.bide_bid}
                    isOpenInProfile={false}
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
                {liveAuctionList.map((live_a, key) => (
                    <LiveAuctions
                      Coverimg={live_a.cover_img}
                      title={live_a.auction_name}
                      heartcount={live_a.h_count}
                      User1={live_a.auc_user1}
                      User2={live_a.auc_user2}
                      User3={live_a.auc_user3}
                      WETH={live_a.auction_WETH}
                      bid={live_a.auction_bid}
                      isOpenInProfile={false}
                    />
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
                {live_auction.map((live_a, key) => (
                    <LiveAuctions
                      Coverimg={live_a.cover_img}
                      title={live_a.auction_name}
                      heartcount={live_a.h_count}
                      User1={live_a.auc_user1}
                      User2={live_a.auc_user2}
                      User3={live_a.auc_user3}
                      WETH={live_a.auction_WETH}
                      bid={live_a.auction_bid}
                      isOpenInProfile={false}
                    />
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
                {liveAuctionList.map((live_a, key) => (
                    <LiveAuctions
                      Coverimg={live_a.cover_img}
                      title={live_a.auction_name}
                      heartcount={live_a.h_count}
                      User1={live_a.auc_user1}
                      User2={live_a.auc_user2}
                      User3={live_a.auc_user3}
                      WETH={live_a.auction_WETH}
                      bid={live_a.auction_bid}
                      isOpenInProfile={false}
                    />
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
                {live_auction.map((live_a, key) => (
                    <LiveAuctions
                      Coverimg={live_a.cover_img}
                      title={live_a.auction_name}
                      heartcount={live_a.h_count}
                      User1={live_a.auc_user1}
                      User2={live_a.auc_user2}
                      User3={live_a.auc_user3}
                      WETH={live_a.auction_WETH}
                      bid={live_a.auction_bid}
                      isOpenInProfile={false}
                    />
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
                {live_auction.map((live_a, key) => (
                    <LiveAuctions
                      Coverimg={live_a.cover_img}
                      title={live_a.auction_name}
                      heartcount={live_a.h_count}
                      User1={live_a.auc_user1}
                      User2={live_a.auc_user2}
                      User3={live_a.auc_user3}
                      WETH={live_a.auction_WETH}
                      bid={live_a.auction_bid}
                      isOpenInProfile={false}
                    />
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
                {live_auction.map((live_a, key) => (
                  
                    <LiveAuctions
                      Coverimg={live_a.cover_img}
                      title={live_a.auction_name}
                      heartcount={live_a.h_count}
                      User1={live_a.auc_user1}
                      User2={live_a.auc_user2}
                      User3={live_a.auc_user3}
                      WETH={live_a.auction_WETH}
                      bid={live_a.auction_bid}
                      isOpenInProfile={false}
                    />
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
