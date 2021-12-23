import React, { useState } from 'react'
import artWorkWeekOne from "../assets/img/custom/artWorkWeekOne.png";
import userTick from "../assets/img/custom/userTick.png";
import logo from "../assets/img/icons/custom/logo.svg";
import start from "../assets/img/icons/custom/start.svg";
import AlienMonster from "../assets/img/icons/custom/alien-monster.svg";
import RainbowIcon from "../assets/img/icons/custom/rainbow.svg";
import topSellerUser4 from "../assets/img/custom/topSellerUser4.png";
import FinishedCollectiblePopup from '../Components/Popup/PlaceABidPopup';
import PlaceABidFollowPopup from '../Components/Popup/PlaceABidFollowPopup';
import ErrorPopup from '../Components/Popup/ErrorPopup';
import ShareThisNFTPopup from '../Components/Popup/ShareThisNFTPopup';
import WhatIswETHPopup from '../Components/Popup/WhatIswETHPopup';

import CheckOut from '../Components/Popup/CheckOut';
import { Menu, Dropdown, Select } from 'antd';
import { motion } from "framer-motion"

const Buy = () => {
    const [singleCollectionPopup, setSingleCollectionPopup] = useState(false);
    const [singlePopup, setSinglePopup] = useState(false);
    const [errorPopups, setErrorPopup] = useState(false);
    const [sharePopup, setsharePopup] = useState(false);
    const [helpPopup, sethelpPopup] = useState(false);
    

    const menu = (
        <Menu>
            <Menu.Item>
                New bid
            </Menu.Item>
            <Menu.Item>
                Purchase now
            </Menu.Item>
            <div className="mt-3 mb-3 border-bottom w-100"></div>
            <Menu.Item>
                View on opensea
            </Menu.Item>
            <Menu.Item>
                Refresh Metadata
            </Menu.Item>
            <Menu.Item onClick={() => setsharePopup(true)}>
                Share
            </Menu.Item>
            <Menu.Item>
                Report
            </Menu.Item>
        </Menu>
    );

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }


    return (
        <>
            {
                singleCollectionPopup && <FinishedCollectiblePopup setSinglePopup={setSinglePopup}  sethelpPopup={sethelpPopup} setSingleCollectionPopup={setSingleCollectionPopup} />
            }
            {
                singlePopup && <PlaceABidFollowPopup setSinglePopup={setSinglePopup} setErrorPopup={setErrorPopup} />
            }
            {
                errorPopups && <ErrorPopup setErrorPopup={setErrorPopup} />
            }
            {
                sharePopup && <ShareThisNFTPopup setsharePopup={setsharePopup} />
            }
            {
                helpPopup && <WhatIswETHPopup  sethelpPopup={sethelpPopup} />
            }

            <motion.section
                initial="hidden"
                animate="visible"
                variants={variants} className="buy-art-work-week">
                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-sm-12 col-lg-6">
                            <img src={artWorkWeekOne} className="border-radius" width="100%" alt="" />
                        </div>
                        <div className="col-sm-12 col-lg-6">
                            <div className="buy-art-work-week-card border-radius">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h3><b>Artwork of the week</b></h3>
                                    <div className="d-flex">
                                        <div className="card-heart-icon"><i className="fas fa-heart"></i> 24</div>
                                        <Dropdown overlay={menu}>
                                            <div className="card-select-icon ml-2" onClick={e => e.preventDefault()}>
                                                <i className="fas fa-ellipsis-h"></i>
                                            </div>
                                        </Dropdown>
                                    </div>
                                </div>

                                <div className="mt-3 bighest-bid-text">
                                    <b>
                                        <span className="">Highest bid </span>
                                        <span className="color-ping">0.066 wETH</span>
                                    </b>
                                </div>

                                <p className="mt-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua.
                                </p>

                                <div className="w-100 d-flex mt-5 heading-text">
                                    <div className="d-flex flex-column">
                                        <b className="text-secondary">Creator</b>
                                        <div className="mt-3">
                                            <span className="user-img">
                                                <img src={userTick} width="36" alt="" />
                                            </span>
                                            <span className="ml-3"><b>Courtney</b></span>
                                        </div>
                                    </div>
                                    <div className="ml-4 d-flex flex-column">
                                        <b className="text-secondary">Creator</b>
                                        <div className="mt-3">
                                            <span className="user-img">
                                                <img src={logo} width="36" alt="" />
                                            </span>
                                            <span className="ml-3"><b>EdenSwap</b></span>
                                        </div>
                                    </div>
                                </div>


                                <button className="artwork-sales-btn  btn-primary-outline-responsive mt-4 pt-2 pb-2 pl-3 pr-3 text-dark d-flex align-items-center">
                                    <img src={start} className="mr-2" width="16" alt="" /> 10% of sales will go to creator
                                </button>


                                <div className="mt-5">
                                    <ul className="nav nav-pills mb-3 artwork-tab-nav" id="pills-tab" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-Details" role="tab" aria-controls="pills-details" aria-selected="true">Details</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Owner</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Bids</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">History</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content artwork-tab-content" id="pills-tabContent">

                                        <div className="tab-pane fade  show active" id="pills-Details" role="tabpanel" aria-labelledby="pills-details-tab">
                                            <div className="details-tab-block mb-2">
                                                <b className="text-secondary d-block mb-2">Owner</b>
                                                <div className="w-100 d-flex justify-content-between mb-3">
                                                    <div className="d-flex align-items-center">
                                                        <div className="user-img"><img src={userTick} width="36" alt="" /></div>
                                                        <div className="ml-4">
                                                            <div><b>Mad Scientist</b></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="details-tab-block mb-2">
                                                <b className="text-secondary d-block mb-2">Properties</b>
                                                <ul className="owner-details-list">
                                                    <li>
                                                        <a href="#0">
                                                            Eyes
                                                            <span>Empty</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#0">
                                                            Ears
                                                            <span>Empty</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#0">
                                                            Mouth
                                                            <span>Peircing</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#0">
                                                            Body
                                                            <span>Green</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#0">
                                                            Neck
                                                            <span>Empty</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#0">
                                                            Head
                                                            <span>Black Wreath</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="details-tab-block">
                                                <b class="text-secondary d-block mb-2">Category</b>
                                                <ul className="category-btn-list">
                                                    <li>
                                                        <a href="#0">
                                                            <span>
                                                                <img src={RainbowIcon}/>
                                                            </span>
                                                            Art
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#0">
                                                            <span>
                                                                <img src={AlienMonster}/>
                                                            </span>
                                                            Metaverse
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="tab-pane fade" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                            <div className="w-100 d-flex justify-content-between mb-3">
                                                <div className="d-flex">
                                                    <div className="user-img">
                                                        <img src={userTick} width="36" alt="" />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div><span className="color-gray">Listed 1 edition for</span> <b> 0.024 ETH</b></div>
                                                        <div><span className="color-gray">By </span><b>Mad Scientist</b> <span className="color-gray"> 1 hour ago</span></div>
                                                    </div>
                                                </div>

                                                <button className="btn-ping" style={{ height: "45px" }}>Buy</button>
                                            </div>

                                            <div className="w-100 d-flex justify-content-between mb-3">
                                                <div className="d-flex">
                                                    <div className="user-img">
                                                        <img src={userTick} width="36" alt="" />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div><span className="color-gray">Listed 1 edition for</span> <b> 0.024 ETH</b></div>
                                                        <div><span className="color-gray">1 edition </span><b>not for sale</b></div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                            <div className="w-100 d-flex justify-content-between mb-3">
                                                <div className="d-flex">
                                                    <div className="user-img"><img src={userTick} width="36" alt="" /></div>
                                                    <div className="ml-4">
                                                        <div><b>0.0002 ETH </b><span className="color-gray">by </span><b>tanelen tivan </b><span className="color-gray">for 10 editions</span></div>
                                                        <div><span className="color-gray">26/072021, 16:28</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                            <div className="w-100 d-flex justify-content-between mb-3">
                                                <div className="d-flex">
                                                    <div className="user-img"><img src={userTick} width="36" alt="" /></div>
                                                    <div className="ml-4">
                                                        <div><span className="color-gray">Listen 1 edition for </span><b>0.024 ETH</b></div>
                                                        <div><span className="color-gray">By </span><b>Mad Scientist</b><span className="color-gray"> 1 hour ago</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-100 d-flex justify-content-between mb-3">
                                                <div className="d-flex">
                                                    <div className="user-img"><img src={userTick} width="36" alt="" /></div>
                                                    <div className="ml-4">
                                                        <div><span className="color-gray">Listen 1 edition for </span><b>0.024 ETH</b></div>
                                                        <div><span className="color-gray">By </span><b>Mad Scientist</b><span className="color-gray"> 1 hour ago</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-100 d-flex justify-content-between mb-3">
                                                <div className="d-flex">
                                                    <div className="user-img"><img src={userTick} width="36" alt="" /></div>
                                                    <div className="ml-4">
                                                        <div><span className="color-gray">Listen 1 edition for </span><b>0.024 ETH</b></div>
                                                        <div><span className="color-gray">By </span><b>Mad Scientist</b><span className="color-gray"> 1 hour ago</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-100 d-flex justify-content-between mb-3">
                                                <div className="d-flex">
                                                    <div className="user-img"><img src={userTick} width="36" alt="" /></div>
                                                    <div className="ml-4">
                                                        <div><span className="color-gray">Listen 1 edition for </span><b>0.024 ETH</b></div>
                                                        <div><span className="color-gray">By </span><b>Mad Scientist</b><span className="color-gray"> 1 hour ago</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-100 d-flex justify-content-between mb-3">
                                                <div className="d-flex">
                                                    <div className="user-img"><img src={userTick} width="36" alt="" /></div>
                                                    <div className="ml-4">
                                                        <div><span className="color-gray">Listen 1 edition for </span><b>0.024 ETH</b></div>
                                                        <div><span className="color-gray">By </span><b>Mad Scientist</b><span className="color-gray"> 1 hour ago</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-100 d-flex justify-content-between mb-3">
                                                <div className="d-flex">
                                                    <div className="user-img"><img src={userTick} width="36" alt="" /></div>
                                                    <div className="ml-4">
                                                        <div><span className="color-gray">Listen 1 edition for </span><b>0.024 ETH</b></div>
                                                        <div><span className="color-gray">By </span><b>Mad Scientist</b><span className="color-gray"> 1 hour ago</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-100 d-flex justify-content-between mb-3">
                                                <div className="d-flex">
                                                    <div className="user-img"><img src={userTick} width="36" alt="" /></div>
                                                    <div className="ml-4">
                                                        <div><span className="color-gray">Listen 1 edition for </span><b>0.024 ETH</b></div>
                                                        <div><span className="color-gray">By </span><b>Mad Scientist</b><span className="color-gray"> 1 hour ago</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-100 d-flex justify-content-between mb-3">
                                                <div className="d-flex">
                                                    <div className="user-img"><img src={userTick} width="36" alt="" /></div>
                                                    <div className="ml-4">
                                                        <div><span className="color-gray">Listen 1 edition for </span><b>0.024 ETH</b></div>
                                                        <div><span className="color-gray">By </span><b>Mad Scientist</b><span className="color-gray"> 1 hour ago</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane-bottom-solid"></div>
                                </div>


                                <div className="d-flex mt-4 justify-content-center mt-5 buy-font buy-highest-bid-block">
                                    <div className="pr-3 border-right buy-highest-bid-block-left">
                                        <span className="text-secondary">Highest bid by </span><span><b> The first of art</b></span>
                                        <div className="d-flex mt-2">
                                            <div className="user-img">
                                                <img src={topSellerUser4} width="42" alt="" />
                                            </div>
                                            <div className="ml-3">
                                                <h5 className="m-1"><b>0.066 wETH</b></h5>
                                                <div className="text-secondary">~$261</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pl-3 buy-highest-bid-block-right">
                                        <div className="text-secondary">Auction ends in</div>
                                        <div className="d-flex mt-3">
                                            <div className="mr-3">
                                                <h5 className="mb-1"><b>0</b></h5>
                                                <div className="text-secondary">Days</div>
                                            </div>

                                            <div className="mr-3">
                                                <h5 className="mb-1"><b>9</b></h5>
                                                <div className="text-secondary">Hours</div>
                                            </div>

                                            <div className="mr-3">
                                                <h5 className="mb-1"><b>6</b></h5>
                                                <div className="text-secondary">Minutes</div>
                                            </div>

                                            <div className="mr-3">
                                                <h5 className="mb-1"><b>21</b></h5>
                                                <div className="text-secondary">Seconds</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row d-flex justify-content-center mt-5 action-btn buy-highest-bid-block-btn">
                                    <div className="col-sm-12 col-lg-8 d-flex">
                                        <button className="btn-ping  w-100" onClick={() => setSingleCollectionPopup(true)}>
                                            Buy for 1.25 ETH
                                        </button>

                                        <button className="btn-primary-outline ml-3 w-100" onClick={() => setSingleCollectionPopup(true)}>
                                            Place a Bid
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

        </>
    )
}

export default Buy
