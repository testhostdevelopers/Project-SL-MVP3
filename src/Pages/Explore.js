import React, { useState,useContext, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { Keyboard, Pagination, Navigation, Autoplay } from "swiper/core";

import ArtWork from '../Components/ArtWork';
import artWorkWeekOne from "../assets/img/custom/artWorkWeekOne.png";
import artWorkWeek1 from "../assets/img/custom/artWorkWeek1.png";
import artWorkWeek2 from "../assets/img/custom/artWorkWeek2.png";
import artWorkWeek3 from "../assets/img/custom/artWorkWeek3.png";
import artWorkWeek4 from "../assets/img/custom/artWorkWeek4.png";
import menuline from "../assets/img/custom/menu-line-icon.png";
import categoryicon from "../assets/img/custom/category-icon.png";
import propertiesicon from "../assets/img/custom/properties.png";

import flashlight from "../assets/img/custom/flashlight-line.png";
import Priceicon from "../assets/img/custom/u_dollar-alt.png";

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
import { Menu, Dropdown, Select } from 'antd';
import { motion } from "framer-motion"
import FullScreenImage from '../Components/Popup/FullScreenImage';
import TopCard from '../Components/TopCard';
import LiveAuctions from '../Components/LiveAuctions';

// const { TabPane } = Tabs;
const { Option } = Select;

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

            <motion.section
                initial="hidden"
                animate="visible"
                variants={variants} className="liveAuction hot-bids-liveAuction margin-50">
                <div className="container-fluid">
                    <div className="w-100 d-flex justify-content-between align-items-center explore-page">
                        <h3><b>Explore</b></h3>
                        <ul className="filter topSeller">
                            <li>
                                <span className="label">Filter & Sort</span>
                                <span className="icon">
                                    <img src={menuline}/>
                                </span>
                                <Select className="section-select-filter" defaultValue="Recently added">
                                    <Option value="day">Recently added</Option>
                                    <Option value="week">Price: Low to High</Option>
                                    <Option value="month">Price: High to Low</Option>
                                    <Option value="sixYear">Auction ending soon</Option>
                                </Select>
                            </li>
                            <li>
                                <span className="icon">
                                    <img src={categoryicon}/>
                                </span>
                                <Select className="section-select-filter" defaultValue="Category">
                                    <Option value="All">All</Option>
                                    <Option value="Cryptoloria">Cryptoloria</Option>
                                    <Option value="Art">Art</Option>
                                    <Option value="Photography">Photography</Option>
                                    <Option value="Games">Games</Option>
                                    <Option value="Metaverses">Metaverses</Option>
                                </Select>
                            </li>
                            <li>
                                <span className="icon">
                                    <img src={categoryicon}/>
                                </span>
                                <Select className="section-select-filter" defaultValue="Collections">
                                    <Option value="Cryptoloria">Cryptoloria</Option>
                                    <Option value="Art">Art</Option>
                                    <Option value="Photography">Photography</Option>
                                    <Option value="Games">Games</Option>
                                    <Option value="Metaverses">Metaverses</Option>
                                </Select>
                            </li>
                            <li>
                                <span className="label">Properties</span>
                                <span className="icon">
                                    <img src={propertiesicon}/>
                                </span>
                                <Select className="section-select-filter" defaultValue="All 257">
                                    <Option value="day">Option 1</Option>
                                    <Option value="week">Option 2</Option>
                                    <Option value="month">Option 3</Option>
                                    <Option value="sixYear">Option 4</Option>
                                </Select>
                            </li>
                            <li>
                                <span className="icon">
                                    <img src={flashlight}/>
                                </span>
                                <Select className="section-select-filter" defaultValue="Sale type">
                                    <Option value="day">Timed Auction</Option>
                                    <Option value="week">Fixed price</Option>
                                    <Option value="month">Not for sale</Option>
                                    <Option value="sixYear">Open for offers</Option>
                                </Select>
                            </li>

                            <li>
                                <span className="icon">
                                    <img src={Priceicon}/>
                                </span>
                                <Select className="section-select-filter" defaultValue="Price range">
                                    <Option value="day">0 - 5</Option>
                                    <Option value="week">5 - 10</Option>
                                    <Option value="month">10 - 15</Option>
                                    <Option value="sixYear">15 - 20</Option>
                                </Select>
                            </li>

                        </ul>

                    </div>

                    <div className="row  mt-5">
                    <HotBids Coverimg={artWorkWeek1} heartcount="24" time="3H : 15M : 50S left" title="Memescalf#782021"  WETH="1.2 WETH" bid="Highest bid 1/1" />
                    <HotBids Coverimg={artWorkWeek2} heartcount="24" time="3H : 15M : 50S left" title="Memescalf#782021"  WETH="1.2 WETH" bid="Highest bid 1/1" />
                    <HotBids Coverimg={artWorkWeek3} heartcount="24" time="3H : 15M : 50S left" title="Memescalf#782021"  WETH="1.2 WETH" bid="Highest bid 1/1" />
                    <HotBids Coverimg={artWorkWeek4} heartcount="24" time="3H : 15M : 50S left" title="Memescalf#782021"  WETH="1.2 WETH" bid="Highest bid 1/1" />
                    <HotBids Coverimg={artWorkWeek1} heartcount="24" time="3H : 15M : 50S left" title="Memescalf#782021"  WETH="1.2 WETH" bid="Highest bid 1/1" />
                    <HotBids Coverimg={artWorkWeek2} heartcount="24" time="3H : 15M : 50S left" title="Memescalf#782021"  WETH="1.2 WETH" bid="Highest bid 1/1" />
                    <HotBids Coverimg={artWorkWeek3} heartcount="24" time="3H : 15M : 50S left" title="Memescalf#782021"  WETH="1.2 WETH" bid="Highest bid 1/1" />
                    <HotBids Coverimg={artWorkWeek4} heartcount="24" time="3H : 15M : 50S left" title="Memescalf#782021"  WETH="1.2 WETH" bid="Highest bid 1/1" />
                    </div>
                </div>
            </motion.section>

            


        </>
    )
}

export default Cryptoloria
