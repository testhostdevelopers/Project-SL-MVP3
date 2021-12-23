import React, { useState,useContext, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { Keyboard, Pagination, Navigation, Autoplay } from "swiper/core";

import ArtWork from '../Components/ArtWork';
import artWorkWeekOne from "../assets/img/custom/artWorkWeekOne.png";
import artWorkWeek1 from "../assets/img/custom/artWorkWeek1.png";
import artWorkWeek2 from "../assets/img/custom/artWorkWeek2.png";
import artWorkWeek3 from "../assets/img/custom/artWorkWeek3.png";
import artWorkWeek4 from "../assets/img/custom/artWorkWeek4.png";
import artWorkWeek5 from "../assets/img/custom/artWorkWeek5.png";
import artWorkWeek6 from "../assets/img/custom/artWorkWeek6.png";
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
import topSeller2 from "../assets/img/custom/topSeller2.png";
import topSeller3 from "../assets/img/custom/topSeller3.png";
import topSeller4 from "../assets/img/custom/topSeller4.png";
import topSeller5 from "../assets/img/custom/topSeller5.png";
import topSeller6 from "../assets/img/custom/topSeller6.png";
import topSeller7 from "../assets/img/custom/topSeller7.png";
import topSeller8 from "../assets/img/custom/topSeller8.png";
import topSeller9 from "../assets/img/custom/topSeller9.png";
import topSeller10 from "../assets/img/custom/topSeller10.png";
import logo from "../assets/img/custom/cryptoioriaLogo.png";
import shape from "../assets/img/icons/custom/Shape.svg";
import HotBids from '../Components/HotBids';
import fabaLogo from "../assets/img/custom/x.svg";
import { Menu, Dropdown } from 'antd';
import { motion } from "framer-motion"
import FullScreenImage from '../Components/Popup/FullScreenImage';
import TopCard from '../Components/TopCard';
import LiveAuctions from '../Components/LiveAuctions';


const Cryptoloria = () => {
    let [openImage, setOpenImage] = useState(false)

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }

    const menu = (
        <Menu>
            <Menu.Item>
                Change Price
            </Menu.Item>
            <Menu.Item>
                Transfer Token
            </Menu.Item>
            <Menu.Item>
                Burn Token
            </Menu.Item>
            <Menu.Item>
                Report
            </Menu.Item>
        </Menu>
    );

    return (
        <>
          {
            openImage && <FullScreenImage setOpenImage={setOpenImage} />
        }

            <motion.div
                initial="hidden"
                animate="visible"
                variants={variants} className="container-fluid p-0 d-flex justify-content-center align-items-center flex-column cryptoloria-page">
                <img src={logo} className="artCryptoLogo" />
                <div className="cryptoioria-banner-container">
                    <div className="position-absolute text-center d-flex flex-column">
                        <div className="navbar-brand bottom-logo-x-icons mb-3">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.2881 24L17.4619 24.5633L17.7596 25H18.2881V24ZM12.0481 14.848L12.8744 14.2847L12.5766 13.848H12.0481V14.848ZM11.9841 14.848V13.848H11.4556L11.1579 14.2847L11.9841 14.848ZM5.74413 24V25H6.27263L6.57035 24.5633L5.74413 24ZM2.44813 24L1.62293 23.4352L0.551781 25H2.44813V24ZM10.2241 12.64L11.0493 13.2048L11.4336 12.6435L11.0526 12.0799L10.2241 12.64ZM2.54413 1.28V0.279999H0.660988L1.71568 1.84007L2.54413 1.28ZM5.74413 1.28L6.57127 0.718004L6.27367 0.279999H5.74413V1.28ZM11.9841 10.464L11.157 11.026L11.4546 11.464H11.9841V10.464ZM12.0481 10.464V11.464H12.5792L12.8766 11.024L12.0481 10.464ZM18.2561 1.28V0.279999H17.7251L17.4276 0.71998L18.2561 1.28ZM21.4881 1.28L22.3184 1.83739L23.3639 0.279999H21.4881V1.28ZM13.8401 12.672L13.0099 12.1146L12.6323 12.6771L13.0146 13.2363L13.8401 12.672ZM21.5841 24V25H23.4791L22.4097 23.4356L21.5841 24ZM19.1144 23.4367L12.8744 14.2847L11.2219 15.4113L17.4619 24.5633L19.1144 23.4367ZM12.0481 13.848H11.9841V15.848H12.0481V13.848ZM11.1579 14.2847L4.9179 23.4367L6.57035 24.5633L12.8104 15.4113L11.1579 14.2847ZM5.74413 23H2.44813V25H5.74413V23ZM3.27332 24.5648L11.0493 13.2048L9.39893 12.0751L1.62293 23.4352L3.27332 24.5648ZM11.0526 12.0799L3.37257 0.719925L1.71568 1.84007L9.39568 13.2001L11.0526 12.0799ZM2.54413 2.28H5.74413V0.279999H2.54413V2.28ZM4.91698 1.84199L11.157 11.026L12.8113 9.902L6.57127 0.718004L4.91698 1.84199ZM11.9841 11.464H12.0481V9.464H11.9841V11.464ZM12.8766 11.024L19.0846 1.84002L17.4276 0.71998L11.2196 9.90398L12.8766 11.024ZM18.2561 2.28H21.4881V0.279999H18.2561V2.28ZM20.6579 0.72261L13.0099 12.1146L14.6704 13.2294L22.3184 1.83739L20.6579 0.72261ZM13.0146 13.2363L20.7586 24.5644L22.4097 23.4356L14.6657 12.1077L13.0146 13.2363ZM21.5841 23H18.2881V25H21.5841V23Z" fill="black" />
                            </svg>
                        </div>
                        <a className="navbar-brand mb-3 pl-0 mr-0">
                            <img src={fabaLogo} width="30" alt="" />
                            <span className="ml-2">Starlight</span>
                        </a>
                        <div className="pl-4 pr-4">
                            The enchanted universe of Cryptoloria in partnership with Starlight
                            Exclusive NFT collection drops
                        </div>

                        <div className="d-flex justify-content-center mt-4">
                            <div className="crypto-border-right">
                                <h4 className="m-0"><b>4</b></h4>
                                <div>Days</div>
                            </div>

                            <div className="crypto-border-right">
                                <h4 className="m-0"><b>5</b></h4>
                                <div>Hours</div>
                            </div>

                            <div className="crypto-border-right">
                                <h4 className="m-0"><b>43</b></h4>
                                <div>Minutes</div>
                            </div>

                            <div className="crypto-border-right">
                                <h4 className="m-0"><b>25</b></h4>
                                <div>Seconds</div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>


            <motion.section
                initial="hidden"
                animate="visible"
                variants={variants} className="artWorkWeekSection">
                <div className="container-fluid">
                    <div className="w-100 d-flex justify-content-between align-items-center">
                        <h3 className="main-title"><b>Featured Collection Name</b></h3>
                        <button className="btn-primary-outline">View All</button>
                    </div>

                    <div className="row mt-5">
                        <div className="col-sm-12 col-md-5 col-lg-5 position-relative">
                            <img src={artWorkWeekOne} className="cursor-pointer" width="95%" alt="" onClick={() => {setOpenImage(true); document.body.style.overflow = "hidden";}} />
                            <div className="art-work-description-container">
                                <h4 className="mb-0"><b>Moon Landing</b></h4>
                                <small>Original Series</small>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-7 col-lg-7 home-artwork-week-day position-relative d-flex flex-column align-items-stretch justify-content-between">
                            <div className="d-flex overflow-auto justify-content-between w-100 justify-content-between">
                                <ArtWork title="Butterfly" artworkimg={artWorkWeek1} setOpenImage={(imgFlag) => setOpenImage(imgFlag)} />
                                <ArtWork title="Butterfly" artworkimg={artWorkWeek2} setOpenImage={(imgFlag) => setOpenImage(imgFlag)} />
                                <ArtWork title="Butterfly" artworkimg={artWorkWeek3} setOpenImage={(imgFlag) => setOpenImage(imgFlag)} />
                                <ArtWork title="Butterfly" artworkimg={artWorkWeek4} setOpenImage={(imgFlag) => setOpenImage(imgFlag)} />
                                <ArtWork title="Butterfly" artworkimg={artWorkWeek5} setOpenImage={(imgFlag) => setOpenImage(imgFlag)} />
                                <ArtWork title="Butterfly" artworkimg={artWorkWeek6} setOpenImage={(imgFlag) => setOpenImage(imgFlag)} />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>


            <motion.section
                initial="hidden"
                animate="visible"
                variants={variants} className="topSeller">
                <div className="container-fluid">
                    <div className="w-100 d-flex justify-content-between align-items-center">
                        <h3 className="main-title"><b>Hot Collections</b></h3>
                        <button className="btn-primary-outline">View All</button>
                    </div>

                    <div className="topSellerContent mt-5">
                        <div className="d-flex">
                            <TopCard topcoverimg={topSeller2} topuserimg={topSellerUser1} title="Courtney Henry" Price="$1,403"  />
                            <TopCard topcoverimg={topSeller3} topuserimg={topSellerUser2} title="Eleanor Pena" Price="$1,403"  />
                            <TopCard topcoverimg={topSeller2} topuserimg={topSellerUser3} title="Darlene Robertson" Price="$1,403"  />
                            <TopCard topcoverimg={topSeller4} topuserimg={topSellerUser4} title="Robert Fox" Price="$1,403"  />
                            <TopCard topcoverimg={topSeller5} topuserimg={topSellerUser5} title="Savannah Nguyen" Price="$1,403"  />
                            <TopCard topcoverimg={topSeller6} topuserimg={topSellerUser6} title="Devon Lane" Price="$1,403"  />
                            <TopCard topcoverimg={topSeller7} topuserimg={topSellerUser7} title="Arlene McCoy" Price="$1,403"  />
                            <TopCard topcoverimg={topSeller8} topuserimg={topSellerUser8} title="Albert Flores" Price="$1,403"  />
                            <TopCard topcoverimg={topSeller9} topuserimg={topSellerUser9} title="Kristin Watson" Price="$1,403"  />
                            <TopCard topcoverimg={topSeller10} topuserimg={topSellerUser10} title="Cody Fisher" Price="$1,403"  />
                        </div>
                    </div>
                </div>
            </motion.section>


            <motion.section
                initial="hidden"
                animate="visible"
                variants={variants} className="liveAuction live-auction-none-mobile proile-liked-filter cryptoloria-hidden-bids">
                <div className="container-fluid">
                    <div className="w-100 d-flex justify-content-between align-items-center">
                        <h3><b>Hidden Bids</b></h3>
                        <button className="btn-primary-outline">View All</button>
                    </div>

                    <div className="row mt-5">
                        <LiveAuctions Coverimg={artWorkWeek1} title="Memescalf#782021" heartcount="24" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                        <LiveAuctions Coverimg={artWorkWeek2} title="Memescalf#782021" heartcount="24" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                        <LiveAuctions Coverimg={artWorkWeek3} title="Memescalf#782021" heartcount="24" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                        <LiveAuctions Coverimg={artWorkWeek4} title="Memescalf#782021" heartcount="24" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                    </div>
                </div>
            </motion.section>

            <motion.section
                initial="hidden"
                animate="visible"
                variants={variants} className="liveAuction-web-none cryptoloria-hidden-bids liveAuction">
                <div className="container-fluid">
                    <div className="w-100">
                        <h3><b>Hidden Bids</b></h3>
                    </div>
                    <Swiper
                        style={{ marginTop: 15 }}
                        spaceBetween={10}
                        slidesPerView={1}
                        navigation={true}
                    >
                        <SwiperSlide>
                            <LiveAuctions Coverimg={artWorkWeek1} title="Memescalf#782021" heartcount="24" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <LiveAuctions Coverimg={artWorkWeek1} title="Memescalf#782021" heartcount="24" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <LiveAuctions Coverimg={artWorkWeek1} title="Memescalf#782021" heartcount="24" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <LiveAuctions Coverimg={artWorkWeek1} title="Memescalf#782021" heartcount="24" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                        </SwiperSlide>

                    </Swiper>
                </div>
            </motion.section>


            <motion.section
                initial="hidden"
                animate="visible"
                variants={variants} className="liveAuction live-auction-none-mobile hot-bids-liveAuction">
                <div className="container-fluid">
                    <div className="w-100 d-flex justify-content-between align-items-center">
                        <h3><b>Hot Bids</b></h3>
                        <button className="btn-primary-outline">View All</button>
                    </div>

                    <div className="row  mt-5">
                    <HotBids Coverimg={artWorkWeek1} heartcount="24" time="3H : 15M : 50S left" title="Memescalf#782021"  WETH="1.2 WETH" bid="Highest bid 1/1" />
                    <HotBids Coverimg={artWorkWeek2} heartcount="24" time="3H : 15M : 50S left" title="Memescalf#782021"  WETH="1.2 WETH" bid="Highest bid 1/1" />
                    <HotBids Coverimg={artWorkWeek3} heartcount="24" time="3H : 15M : 50S left" title="Memescalf#782021"  WETH="1.2 WETH" bid="Highest bid 1/1" />
                    <HotBids Coverimg={artWorkWeek4} heartcount="24" time="3H : 15M : 50S left" title="Memescalf#782021"  WETH="1.2 WETH" bid="Highest bid 1/1" />
                    </div>
                </div>
            </motion.section>

            <motion.section
                initial="hidden"
                animate="visible"
                variants={variants} className="liveAuction-web-none liveAuction proile-liked-filter mobile-filter-live-auc">
                <div className="container-fluid">
                    <div className="w-100">
                        <h3><b>Hot Bids</b></h3>
                    </div>
                    <Swiper
                        style={{ marginTop: 15 }}
                        spaceBetween={10}
                        slidesPerView={1}
                        navigation={true}
                    >
                        <SwiperSlide>
                            <HotBids Coverimg={artWorkWeek2} heartcount="24" time="3H : 15M : 50S left" title="Memescalf#782021"  WETH="1.2 WETH" bid="Highest bid 1/1" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <HotBids Coverimg={artWorkWeek2} heartcount="24" time="3H : 15M : 50S left" title="Memescalf#782021"  WETH="1.2 WETH" bid="Highest bid 1/1" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <HotBids Coverimg={artWorkWeek2} heartcount="24" time="3H : 15M : 50S left" title="Memescalf#782021"  WETH="1.2 WETH" bid="Highest bid 1/1" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <HotBids Coverimg={artWorkWeek2} heartcount="24" time="3H : 15M : 50S left" title="Memescalf#782021"  WETH="1.2 WETH" bid="Highest bid 1/1" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </motion.section>


        </>
    )
}

export default Cryptoloria
