import React from 'react'
import activityCard from "../assets/img/custom/activity-card.png";
import artWorkWeek1 from "../assets/img/custom/artWorkWeek1.png";
import { motion } from "framer-motion"
import ActivityNumberCard from '../Components/ActivityNumberCard';
import LiveAuctions from '../Components/LiveAuctions';
import FillLabel from "../assets/img/icons/custom/fill-label.png";
import ActivityCard from "../assets/img/custom/activity-cardonly.png";

import topSeller3 from "../assets/img/custom/topSeller3.png";
import topSeller4 from "../assets/img/custom/topSeller4.png";
import topSellerUser1 from "../assets/img/custom/topSellerUser1.png";
import topSellerUser2 from "../assets/img/custom/topSellerUser2.png";
import topSellerUser3 from "../assets/img/custom/topSellerUser3.png";
import topSellerUser4 from "../assets/img/custom/topSellerUser4.png";
import TopCard from '../Components/TopCard';

import { Menu, Dropdown, Tabs } from 'antd';

const { TabPane } = Tabs;

const search = () => {

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }

    return (
        <motion.section
                initial="hidden"
                animate="visible"
                variants={variants} className="profile-pictures-infos search-page">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <main className="profile-tab-menu">

                            <h2 className="mb-3">Search results for “Users”</h2>

                            <Tabs defaultActiveKey="3" centered>
                                <TabPane tab="Collections" key="1">
                                    <div className="topSeller">
                                        <div className="w-100 d-flex justify-content-end">
                                            <button className="profile-activity-filter-mobile d-web-none">
                                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" fill="white" />
                                                    <path clipRule="evenodd" clipRule="evenodd" d="M16.5 19V20.6667H31.5V19H16.5ZM22.3333 29H25.6667V27.3333H22.3333V29ZM29 24.8333H19V23.1667H29V24.8333Z" fill="black" />
                                                    <rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="black" />
                                                </svg>
                                            </button>
                                        </div>

                                        <div className="topSellerContent following-profile-topSellerContent">
                                            <div className="row">
                                                <div className="d-flex col-lg-12 activity ">
                                                    <TopCard topcoverimg={topSeller4} topuserimg={topSellerUser1} title="Courtney Henry" follow="10.8k followers" btnname="Unfollow" />
                                                    <TopCard topcoverimg={topSeller3} topuserimg={topSellerUser3} title="Arlene McCoy" follow="10.8k followers" btnname="Unfollow" />
                                                    <TopCard topcoverimg={topSeller4} topuserimg={topSellerUser4} title="Bessie Cooper" follow="10.8k followers" btnname="Unfollow" />
                                                    <TopCard topcoverimg={topSeller4} topuserimg={topSellerUser4} title="Jerome Bell" follow="10.8k followers" btnname="Unfollow" />
                                                    <TopCard topcoverimg={topSeller4} topuserimg={topSellerUser4} title="Arlene McCoy" follow="10.8k followers" btnname="Unfollow" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPane>

                                <TabPane tab="Items" key="2">
                                    <div className="row mt-5 mb-5">
                                        <div className="col-sm-12 d-flex justify-content-center flex-column text-center">
                                            <h3>Not items found</h3>
                                            <span className="color-gray">Come back soon or browse the
                                                items on our marketplace.</span>
                                            <button class="bg-white profile-not-found-browse-btn mt-4 edit-profile w-25">Browse marketplace</button>
                                        </div>
                                    </div>
                                </TabPane>
                                <TabPane tab="Users" key="3">
                                    <div className="topSeller">
                                        <div className="">
                                            <div className="w-100 d-flex justify-content-end">
                                                <button class="profile-activity-filter-mobile d-web-none"><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.5" y="0.5" width="47" height="47" rx="23.5" fill="white"></rect><path clipRule="evenodd" d="M16.5 19V20.6667H31.5V19H16.5ZM22.3333 29H25.6667V27.3333H22.3333V29ZM29 24.8333H19V23.1667H29V24.8333Z" fill="black"></path><rect x="0.5" y="0.5" width="47" height="47" rx="23.5" stroke="black"></rect></svg></button>
                                            </div>

                                            <div className="topSellerContent following-profile-topSellerContent">
                                                <div className="row">
                                                    <div className="d-flex col-lg-12 activity">
                                                    <TopCard topcoverimg={topSeller4} topuserimg={topSellerUser1} title="Courtney Henry" follow="10.8k followers"  btnname="Unfollow" />
                                                        <TopCard topcoverimg={topSeller3} topuserimg={topSellerUser3} title="Arlene McCoy" follow="10.8k followers" btnname="Follow" />
                                                        <TopCard topcoverimg={topSeller4} topuserimg={topSellerUser4} title="Bessie Cooper" follow="10.8k followers" btnname="Unfollow" />
                                                        <TopCard topcoverimg={topSeller4} topuserimg={topSellerUser4} title="Jerome Bell" follow="10.8k followers" btnname="Follow" />
                                                        <TopCard topcoverimg={topSeller4} topuserimg={topSellerUser4} title="Arlene McCoy" follow="10.8k followers" btnname="Unfollow" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabPane>
                            </Tabs>
                        </main>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default search
