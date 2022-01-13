import React, { useState, useContext, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { Keyboard, Pagination, Navigation, Autoplay } from "swiper/core";

import ArtWork from '../Components/ArtWork';
import artWorkWeekOne from "../assets/img/custom/artWorkWeekOne.png";
import artWorkWeek1 from "../assets/img/custom/artWorkWeek1.png";
import artWorkWeek2 from "../assets/img/custom/artWorkWeek2.png";
import artWorkWeek3 from "../assets/img/custom/artWorkWeek3.png";
import artWorkWeek4 from "../assets/img/custom/artWorkWeek4.png";
import categoryicon from "../assets/img/custom/category-icon.svg";


import HotBids from '../Components/HotBids';
import fabaLogo from "../assets/img/custom/x.svg";
import { Menu, Dropdown, Select } from 'antd';
import { motion } from "framer-motion"
import FullScreenImage from '../Components/Popup/FullScreenImage';
import TopCard from '../Components/TopCard';
import LiveAuctions from '../Components/LiveAuctions';

import FilterSort from '../Components/FilterSort';
import FilterCategory from '../Components/FilterCategory';
import FilterCollections from '../Components/FilterCollections';
import Filtersale from '../Components/Filtersale';
import FilterRange from '../Components/FilterRange';
import FilterProperties from '../Components/FilterProperties';


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
                            <FilterSort/>
                            <FilterCategory/>
                            <FilterCollections/>
                            <FilterProperties/>
                            <Filtersale/>
                            <FilterRange/>
                        </ul>
                    </div>
                    
                    <div className="row  mt-5">
                        <HotBids Coverimg={artWorkWeek1} heartcount="24" time="3H : 15M : 50S left" title="Memescalf#782021" WETH="1.2 WETH" bid="Highest bid 1/1" />
                        <HotBids Coverimg={artWorkWeek2} heartcount="24" time="3H : 15M : 50S left" title="Memescalf#782021" WETH="1.2 WETH" bid="Highest bid 1/1" />
                        <HotBids Coverimg={artWorkWeek3} heartcount="24" time="3H : 15M : 50S left" title="Memescalf#782021" WETH="1.2 WETH" bid="Highest bid 1/1" />
                        <HotBids Coverimg={artWorkWeek4} heartcount="24" time="3H : 15M : 50S left" title="Memescalf#782021" WETH="1.2 WETH" bid="Highest bid 1/1" />
                        <HotBids Coverimg={artWorkWeek1} heartcount="24" time="3H : 15M : 50S left" title="Memescalf#782021" WETH="1.2 WETH" bid="Highest bid 1/1" />
                        <HotBids Coverimg={artWorkWeek2} heartcount="24" time="3H : 15M : 50S left" title="Memescalf#782021" WETH="1.2 WETH" bid="Highest bid 1/1" />
                        <HotBids Coverimg={artWorkWeek3} heartcount="24" time="3H : 15M : 50S left" title="Memescalf#782021" WETH="1.2 WETH" bid="Highest bid 1/1" />
                        <HotBids Coverimg={artWorkWeek4} heartcount="24" time="3H : 15M : 50S left" title="Memescalf#782021" WETH="1.2 WETH" bid="Highest bid 1/1" />
                    </div>
                </div>
            </motion.section>




        </>
    )
}

export default Cryptoloria
