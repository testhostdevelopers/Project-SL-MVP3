import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';


import ArtWork from '../Components/ArtWork';
import SwiperCore, { Keyboard, Pagination, Navigation, Autoplay } from "swiper/core";
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
import FullScreenImage from '../Components/Popup/FullScreenImage';
import { Menu, Dropdown, Select } from 'antd';
import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import { Tabs } from 'antd';
import TopCard from '../Components/TopCard';
import LiveAuctions from '../Components/LiveAuctions';
import HotBids from '../Components/HotBids';

const { TabPane } = Tabs;
const { Option } = Select;

SwiperCore.use([Keyboard, Pagination, Navigation, Autoplay]);

const Home = () => {

    let [openImage, setOpenImage] = useState(false);
    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }


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
        }
    ]
    

    return (
        <>

            {
                openImage && <FullScreenImage setOpenImage={setOpenImage} />
            }
            <motion.section
                initial="hidden"
                animate="visible"
                variants={variants} className="nft-start">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-lg-5 home-nft-slider-section margin-50">
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
                        </div>

                        <div className="col-sm-12 col-lg-6  home-nft-slider margin-50 ">
                            <div className="bg-lines"></div>

                            <Swiper
                                style={{ marginTop: 15 }}
                                spaceBetween={10}
                                slidesPerView={1}
                                navigation={true}
                                autoplay={{
                                    "delay": 2500,
                                    "disableOnInteraction": false
                                }}
                            >
                                <SwiperSlide>
                                    <img src={artWorkWeek1} width="100%" />
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
                                    <img src={artWorkWeek2} width="100%" />
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
                                    <img src={artWorkWeek3} width="100%" />
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
                                    <img src={artWorkWeek4} width="100%" />
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
                            </Swiper>
                        </div>
                    </div>
                </div>
            </motion.section>


            <motion.section
                initial="hidden"
                animate="visible"
                variants={variants} className="artWorkWeekSection">
                <div className="container-fluid">
                    <div className="w-100 d-flex justify-content-between align-items-center">
                        <h3 className="main-title"><b>Artwork of the week</b></h3>
                        <button className="btn-primary-outline">View All</button>
                    </div>

                    <div className="row mt-5">
                        <div className="col-sm-12 col-md-5 col-lg-5 position-relative">
                            <img src={artWorkWeekOne} className="cursor-pointer" width="95%" alt="" onClick={() => { setOpenImage(true); document.body.style.overflow = "hidden"; }} />
                            <div className="art-work-description-container">
                                <h4 className="mb-0"><b>The Black</b></h4>
                                <small>Original Series</small>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-7 col-lg-7 home-artwork-week-day position-relative d-flex flex-column align-items-stretch justify-content-between">
                            <div className="d-flex overflow-auto justify-content-between w-100 justify-content-between">

                                {
                                    all_atwork.map((artwork) =>
                                    <ArtWork title={artwork.my_title} artworkimg={artwork.artimg} setOpenImage={(imgFlag) => setOpenImage(imgFlag)} />
                                    )
                                }

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
                    <div className="w-100 headerSelect">
                        <h3><b>Top Sellers</b></h3>
                        <Select className="section-select-filter" defaultValue="day" >
                            <Option value="day">Today</Option>
                            <Option value="week">This week</Option>
                            <Option value="month">This month</Option>
                            <Option value="sixYear">Last 6 months</Option>
                            <Option value="year">Last 1 year</Option>
                        </Select>
                    </div>

                    <div className="topSellerContent mt-5">
                        <div className="d-flex">
                            <TopCard topcoverimg={topSeller2} topuserimg={topSellerUser1} title="Courtney Henry" Price="$1,403" />
                            <TopCard topcoverimg={topSeller3} topuserimg={topSellerUser2} title="Eleanor Pena" Price="$1,403" />
                            <TopCard topcoverimg={topSeller4} topuserimg={topSellerUser3} title="Darlene Robertson" Price="$1,403" />
                            <TopCard topcoverimg={topSeller5} topuserimg={topSellerUser4} title="Robert Fox" Price="$1,403" />
                            <TopCard topcoverimg={topSeller6} topuserimg={topSellerUser5} title="Savannah Nguyen" Price="$1,403" />
                            <TopCard topcoverimg={topSeller7} topuserimg={topSellerUser6} title="Devon Lane" Price="$1,403" />
                            <TopCard topcoverimg={topSeller8} topuserimg={topSellerUser7} title="Arlene McCoy" Price="$1,403" />
                            <TopCard topcoverimg={topSeller9} topuserimg={topSellerUser8} title="Albert Flores" Price="$1,403" />
                            <TopCard topcoverimg={topSeller10} topuserimg={topSellerUser9} title="Kristin Watson" Price="$1,403" />
                            <TopCard topcoverimg={topSeller2} topuserimg={topSellerUser10} title="Cody Fisher" Price="$1,403" />
                        </div>
                    </div>
                </div>
            </motion.section>




            <motion.section
                initial="hidden"
                animate="visible"
                variants={variants} className="topSeller">
                <div className="container-fluid">
                    <div className="w-100 headerSelect">
                        <h3><b>Top Buyers</b></h3>
                        <Select className="section-select-filter" defaultValue="day">
                            <Option value="day">Today</Option>
                            <Option value="week">This week</Option>
                            <Option value="month">This month</Option>
                            <Option value="sixYear">Last 6 months</Option>
                            <Option value="year">Last 1 year</Option>
                        </Select>
                    </div>

                    <div className="topSellerContent mt-5">
                        <div className="d-flex">
                            <TopCard topcoverimg={topSeller2} topuserimg={topSellerUser1} title="Courtney Henry" Price="$1,403" />
                            <TopCard topcoverimg={topSeller3} topuserimg={topSellerUser2} title="Eleanor Pena" Price="$1,403" />
                            <TopCard topcoverimg={topSeller2} topuserimg={topSellerUser3} title="Darlene Robertson" Price="$1,403" />
                            <TopCard topcoverimg={topSeller4} topuserimg={topSellerUser4} title="Robert Fox" Price="$1,403" />
                            <TopCard topcoverimg={topSeller5} topuserimg={topSellerUser5} title="Savannah Nguyen" Price="$1,403" />
                            <TopCard topcoverimg={topSeller6} topuserimg={topSellerUser6} title="Devon Lane" Price="$1,403" />
                            <TopCard topcoverimg={topSeller7} topuserimg={topSellerUser7} title="Arlene McCoy" Price="$1,403" />
                            <TopCard topcoverimg={topSeller8} topuserimg={topSellerUser8} title="Albert Flores" Price="$1,403" />
                            <TopCard topcoverimg={topSeller9} topuserimg={topSellerUser9} title="Kristin Watson" Price="$1,403" />
                            <TopCard topcoverimg={topSeller10} topuserimg={topSellerUser10} title="Cody Fisher" Price="$1,403" />
                        </div>
                    </div>
                </div>
            </motion.section>


            <motion.section
                initial="hidden"
                animate="visible"
                variants={variants} className="liveAuction live-auction-none-mobile proile-liked-filter">
                <div className="container-fluid">
                    <div className="w-100">
                        <h3><b>Live Auction</b></h3>
                    </div>

                    <div className="row mt-5">
                        <LiveAuctions Coverimg={artWorkWeek1} title="Memescalf#782021" heartcount="24" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" isOpenInProfile={false} />
                        <LiveAuctions Coverimg={artWorkWeek1} title="Memescalf#782021" heartcount="24" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" isOpenInProfile={false} />
                        <LiveAuctions Coverimg={artWorkWeek1} title="Memescalf#782021" heartcount="24" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" isOpenInProfile={false} />
                        <LiveAuctions Coverimg={artWorkWeek1} title="Memescalf#782021" heartcount="24" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" isOpenInProfile={false} />
                    </div>
                </div>
            </motion.section>


            <motion.section
                initial="hidden"
                animate="visible"
                variants={variants} className="liveAuction-web-none liveAuction proile-liked-filter mobile-filter-live-auc">
                <div className="container-fluid">
                    <div className="w-100">
                        <h3><b>Live Auction</b></h3>
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
                variants={variants} className="liveAuction live-auction-none-mobile">
                <div className="container-fluid">
                    <div className="w-100">
                        <h3><b>Hot Bids</b></h3>
                    </div>

                    <div className="row  mt-5">
                        <HotBids Coverimg={artWorkWeek2} heartcount="24" time="3H : 15M : 50S left" title="Memescalf#782021" WETH="1.2 WETH" bid="Highest bid 1/1" isOpenInProfile={false}/>
                        <HotBids Coverimg={artWorkWeek2} heartcount="24" time="3H : 15M : 50S left" title="Memescalf#782021" WETH="1.2 WETH" bid="Highest bid 1/1" isOpenInProfile={false}/>
                        <HotBids Coverimg={artWorkWeek2} heartcount="24" time="3H : 15M : 50S left" title="Memescalf#782021" WETH="1.2 WETH" bid="Highest bid 1/1" isOpenInProfile={false}/>
                        <HotBids Coverimg={artWorkWeek2} heartcount="24" time="3H : 15M : 50S left" title="Memescalf#782021" WETH="1.2 WETH" bid="Highest bid 1/1" isOpenInProfile={false}/>
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
                            <HotBids Coverimg={artWorkWeek2} heartcount="24" time="3H : 15M : 50S left" title="Memescalf#782021" WETH="1.2 WETH" bid="Highest bid 1/1" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <HotBids Coverimg={artWorkWeek2} heartcount="24" time="3H : 15M : 50S left" title="Memescalf#782021" WETH="1.2 WETH" bid="Highest bid 1/1" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <HotBids Coverimg={artWorkWeek2} heartcount="24" time="3H : 15M : 50S left" title="Memescalf#782021" WETH="1.2 WETH" bid="Highest bid 1/1" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <HotBids Coverimg={artWorkWeek2} heartcount="24" time="3H : 15M : 50S left" title="Memescalf#782021" WETH="1.2 WETH" bid="Highest bid 1/1" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </motion.section>



            <motion.section
                initial="hidden"
                animate="visible"
                variants={variants} className="topSeller live-auction-none-mobile">
                <div className="container-fluid">
                    <div className="w-100 headerSelect">
                        <h3><b>Hot Collections</b></h3>
                    </div>

                    <div className="topSellerContent mt-5">
                        <div className="d-flex overflow-auto justify-content-between w-100 mb-4">
                            <TopCard topcoverimg={topSeller4} topuserimg={topSellerUser3} title="Courtney Henry" Price="$1,403" />
                            <TopCard topcoverimg={topSeller2} topuserimg={topSellerUser2} title="Courtney Henry" Price="$1,403" />
                            <TopCard topcoverimg={topSeller3} topuserimg={topSellerUser3} title="Courtney Henry" Price="$1,403" />
                            <TopCard topcoverimg={topSeller4} topuserimg={topSellerUser4} title="Courtney Henry" Price="$1,403" />
                            <TopCard topcoverimg={topSeller5} topuserimg={topSellerUser5} title="Courtney Henry" Price="$1,403" />
                        </div>
                    </div>
                </div>
            </motion.section>






            <motion.section
                initial="hidden"
                animate="visible"
                variants={variants} className="topSeller liveAuction-web-none">
                <div className="container-fluid">
                    <div className="w-100 headerSelect">
                        <h3><b>Hot Collections</b></h3>
                    </div>
                    <div className="topSellerContent">
                        <Swiper
                            style={{ marginTop: 15 }}
                            spaceBetween={10}
                            slidesPerView={1}
                            navigation={true}
                        >
                            <SwiperSlide>
                                <TopCard topcoverimg={topSeller4} topuserimg={topSellerUser3} title="Courtney Henry" Price="$1,403" />
                            </SwiperSlide>

                            <SwiperSlide>
                                <TopCard topcoverimg={topSeller2} topuserimg={topSellerUser2} title="Courtney Henry" Price="$1,403" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <TopCard topcoverimg={topSeller3} topuserimg={topSellerUser3} title="Courtney Henry" Price="$1,403" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <TopCard topcoverimg={topSeller4} topuserimg={topSellerUser4} title="Courtney Henry" Price="$1,403" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <TopCard topcoverimg={topSeller5} topuserimg={topSellerUser5} title="Courtney Henry" Price="$1,403" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </motion.section>


            <motion.section
                initial="hidden"
                animate="visible"
                variants={variants} className="liveAuction quickExplore">
                <div className="container-fluid">
                    <div className="mb-3 row">
                        <div className="col-sm-6 col-lg-4 order-1 order-sm-1 d-flex justify-content-between">
                            <h3><b>Quick Explore</b></h3>
                            <button className="m-0 btn-primary-outline-responsive d-lg-none">
                                {/* <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 0V1.66667H15V0H0ZM5.83333 10H9.16667V8.33333H5.83333V10ZM12.5 5.83333H2.5V4.16667H12.5V5.83333Z" fill="black" />
                                </svg> */}
                                view all
                            </button>
                        </div>

                        <div className="col-sm-12 col-lg-8 order-sm-3 order-2 d-flex align-items-center">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link active" id="all-tab" data-toggle="tab" href="#all" role="tab" aria-controls="all" aria-selected="true">
                                        All</a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link" id="art-tab" data-toggle="tab" href="#art" role="tab" aria-controls="art" aria-selected="false">
                                        Art</a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link" id="photo-tab" data-toggle="tab" href="#photo" role="tab" aria-controls="photo" aria-selected="false">
                                        Photography</a>
                                </li>

                                <li className="nav-item" role="presentation">
                                    <a className="nav-link" id="games-tab" data-toggle="tab" href="#games" role="tab" aria-controls="games" aria-selected="false">
                                        Games</a>
                                </li>

                                <li className="nav-item" role="presentation">
                                    <a className="nav-link" id="metaverses-tab" data-toggle="tab" href="#metaverses" role="tab" aria-controls="metaverses" aria-selected="false">
                                        Metaverses</a>
                                </li>

                                <li className="nav-item" role="presentation">
                                    <a className="nav-link" id="music-tab" data-toggle="tab" href="#music" role="tab" aria-controls="music" aria-selected="false">
                                        Music</a>
                                </li>

                                <li className="nav-item" role="presentation">
                                    <a className="nav-link" id="memes-tab" data-toggle="tab" href="#memes" role="tab" aria-controls="memes" aria-selected="false">
                                        Memes</a>
                                </li>
                            </ul>
                            <button className="btn-primary-outline-big mt-0 d-mobile-none quick-explore-filter-buton">
                                {/* <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 0V1.66667H15V0H0ZM5.83333 10H9.16667V8.33333H5.83333V10ZM12.5 5.83333H2.5V4.16667H12.5V5.83333Z" fill="black" />
                                </svg> */}
                                view all
                            </button>
                        </div>
                    </div>

                    <div className="tab-content w-100 d-flex justify-content-center flex-column align-items-center mt-5" id="myTabContent">
                        <div className="tab-pane w-100 fade" id="all" role="tabpanel" aria-labelledby="all-tab">
                            <div className="row">
                                <LiveAuctions Coverimg={artWorkWeek2} heartcount="24" title="Memescalf#782021" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                                <LiveAuctions Coverimg={artWorkWeek1} heartcount="24" title="Memescalf#782021" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                                <LiveAuctions Coverimg={artWorkWeek4} heartcount="24" title="Memescalf#782021" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                                <LiveAuctions Coverimg={artWorkWeek2} heartcount="24" title="Memescalf#782021" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                                <HotBids Coverimg={artWorkWeek3} heartcount="24" time="3H : 15M : 50S left" title="Memescalf#782021" WETH="1.2 WETH" bid="Highest bid 1/1" />
                                <HotBids Coverimg={artWorkWeek1} heartcount="24" time="3H : 15M : 50S left" title="Memescalf#782021" WETH="1.2 WETH" bid="Highest bid 1/1" />
                                <HotBids Coverimg={artWorkWeek4} heartcount="24" time="3H : 15M : 50S left" title="Memescalf#782021" WETH="1.2 WETH" bid="Highest bid 1/1" />
                                <HotBids Coverimg={artWorkWeek2} heartcount="24" time="3H : 15M : 50S left" title="Memescalf#782021" WETH="1.2 WETH" bid="Highest bid 1/1" />

                            </div>
                        </div>
                        <div className="tab-pane w-100 fade" id="art" role="tabpanel" aria-labelledby="art-tab">
                            <div className="row">
                                <LiveAuctions Coverimg={artWorkWeek4} heartcount="24" title="Memescalf#782021" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                                <LiveAuctions Coverimg={artWorkWeek5} heartcount="24" title="Memescalf#782021" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                                <LiveAuctions Coverimg={artWorkWeek4} heartcount="24" title="Memescalf#782021" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                                <LiveAuctions Coverimg={artWorkWeek3} heartcount="24" title="Memescalf#782021" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                                <LiveAuctions Coverimg={artWorkWeek1} heartcount="24" title="Memescalf#782021" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                                <LiveAuctions Coverimg={artWorkWeek2} heartcount="24" title="Memescalf#782021" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                                <LiveAuctions Coverimg={artWorkWeek4} heartcount="24" title="Memescalf#782021" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                                <LiveAuctions Coverimg={artWorkWeek5} heartcount="24" title="Memescalf#782021" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                            </div>
                        </div>

                        <div className="tab-pane w-100 fade" id="photo" role="tabpanel" aria-labelledby="photo-tab">
                            <div className="row">
                                <LiveAuctions Coverimg={artWorkWeek6} heartcount="24" title="Memescalf#782021" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                                <LiveAuctions Coverimg={artWorkWeek4} heartcount="24" title="Memescalf#782021" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                                <LiveAuctions Coverimg={artWorkWeek5} heartcount="24" title="Memescalf#782021" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                                <LiveAuctions Coverimg={artWorkWeek2} heartcount="24" title="Memescalf#782021" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                                <LiveAuctions Coverimg={artWorkWeek1} heartcount="24" title="Memescalf#782021" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                                <LiveAuctions Coverimg={artWorkWeek5} heartcount="24" title="Memescalf#782021" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                                <LiveAuctions Coverimg={artWorkWeek6} heartcount="24" title="Memescalf#782021" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                                <LiveAuctions Coverimg={artWorkWeek2} heartcount="24" title="Memescalf#782021" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                            </div>
                        </div>


                        <div className="tab-pane w-100 fade" id="games" role="tabpanel" aria-labelledby="games-tab">
                            <div className="row">
                                <LiveAuctions Coverimg={artWorkWeek4} heartcount="24" title="Memescalf#782021" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                                <LiveAuctions Coverimg={artWorkWeek3} heartcount="24" title="Memescalf#782021" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                                <LiveAuctions Coverimg={artWorkWeek1} heartcount="24" title="Memescalf#782021" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                                <LiveAuctions Coverimg={artWorkWeek4} heartcount="24" title="Memescalf#782021" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                                <LiveAuctions Coverimg={artWorkWeek2} heartcount="24" title="Memescalf#782021" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                                <LiveAuctions Coverimg={artWorkWeek3} heartcount="24" title="Memescalf#782021" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                                <LiveAuctions Coverimg={artWorkWeek5} heartcount="24" title="Memescalf#782021" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                                <LiveAuctions Coverimg={artWorkWeek1} heartcount="24" title="Memescalf#782021" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                            </div>
                        </div>

                        <div className="tab-pane w-100 fade" id="metaverses" role="tabpanel" aria-labelledby="metaverses-tab">
                            <div className="row">
                                <LiveAuctions Coverimg={artWorkWeek1} heartcount="24" title="Memescalf#782021" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                                <LiveAuctions Coverimg={artWorkWeek2} heartcount="24" title="Memescalf#782021" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                                <LiveAuctions Coverimg={artWorkWeek4} heartcount="24" title="Memescalf#782021" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                                <LiveAuctions Coverimg={artWorkWeek3} heartcount="24" title="Memescalf#782021" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                                <LiveAuctions Coverimg={artWorkWeek1} heartcount="24" title="Memescalf#782021" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                                <LiveAuctions Coverimg={artWorkWeek5} heartcount="24" title="Memescalf#782021" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                                <LiveAuctions Coverimg={artWorkWeek2} heartcount="24" title="Memescalf#782021" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                                <LiveAuctions Coverimg={artWorkWeek1} heartcount="24" title="Memescalf#782021" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                            </div>
                        </div>
                        <div className="tab-pane w-100 fade" id="music" role="tabpanel" aria-labelledby="music-tab">
                            <div className="row">
                                <LiveAuctions Coverimg={artWorkWeek5} heartcount="24" title="Memescalf#782021" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                                <LiveAuctions Coverimg={artWorkWeek4} heartcount="24" title="Memescalf#782021" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                                <LiveAuctions Coverimg={artWorkWeek3} heartcount="24" title="Memescalf#782021" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                                <LiveAuctions Coverimg={artWorkWeek2} heartcount="24" title="Memescalf#782021" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                                <LiveAuctions Coverimg={artWorkWeek1} heartcount="24" title="Memescalf#782021" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                                <LiveAuctions Coverimg={artWorkWeek6} heartcount="24" title="Memescalf#782021" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                                <LiveAuctions Coverimg={artWorkWeek5} heartcount="24" title="Memescalf#782021" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                                <LiveAuctions Coverimg={artWorkWeek2} heartcount="24" title="Memescalf#782021" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                            </div>
                        </div>

                        <div className="tab-pane w-100 fade" id="memes" role="tabpanel" aria-labelledby="memes-tab">
                            <div className="row">
                                <LiveAuctions Coverimg={artWorkWeek2} heartcount="24" title="Memescalf#782021" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                                <LiveAuctions Coverimg={artWorkWeek3} heartcount="24" title="Memescalf#782021" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                                <LiveAuctions Coverimg={artWorkWeek4} heartcount="24" title="Memescalf#782021" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                                <LiveAuctions Coverimg={artWorkWeek5} heartcount="24" title="Memescalf#782021" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                                <LiveAuctions Coverimg={artWorkWeek6} heartcount="24" title="Memescalf#782021" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                                <LiveAuctions Coverimg={artWorkWeek1} heartcount="24" title="Memescalf#782021" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                                <LiveAuctions Coverimg={artWorkWeek2} heartcount="24" title="Memescalf#782021" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                                <LiveAuctions Coverimg={artWorkWeek3} heartcount="24" title="Memescalf#782021" User1={topSellerUser1} User2={topSellerUser2} User3={topSellerUser3} WETH="1.2 WETH" bid="Highest bid 1/1" />
                            </div>
                        </div>
                    </div>

                </div>

                <div className="w-100 mt-5 pl-3 pr-3">
                    <div className="view-all-items">
                        <button className="btn-primary-outline w-100"><b>View all</b></button>
                    </div>
                </div>
            </motion.section>

        </>
    )
}

export default Home