import React, { useState } from "react";
import HotBids from "../Components/HotBids";
import { motion } from "framer-motion";
import { Menu, Dropdown, Tabs } from "antd";
import ReportPopup from "../Components/Popup/ReportPopup";
import UpdateCoverPopup from "../Components/Popup/UpdateCoverPopup";
import UpdateProfilePicPopup from "../Components/Popup/UpdateProfilePicPopup";

import addicon from "../assets/img/custom/Mask_Group.png";
import artWorkWeek1 from "../assets/img/custom/artWorkWeek1.png";
import artWorkWeek2 from "../assets/img/custom/artWorkWeek2.png";
import artWorkWeek3 from "../assets/img/custom/artWorkWeek3.png";
import artWorkWeek4 from "../assets/img/custom/artWorkWeek4.png";
import propertiesicon from "../assets/img/custom/properties.svg";
import CollectionBannerBg from "../assets/img/custom/Collection-banner-bg.png";
import userProfilePictures from "../assets/img/custom/userProfilePictures.png";
import FilterSort from "../Components/FilterSort";
import FilterCategory from "../Components/FilterCategory";
// import FilterCollections from "../Components/FilterCollections";
import Filtersale from "../Components/Filtersale";
import FilterRange from "../Components/FilterRange";
import FilterProperties from "../Components/FilterProperties";
import Activitytab from "../Components/Tabs/Activitytab";
import ProfileLinks from "../Components/ProfileLinks";

const { TabPane } = Tabs;
// const { Option } = Select;

const Collection = (props) => {
  const [ReportPopups, setReportPopup] = useState(false);
  const [CoverPopup, setUpdateCoverPopup] = useState(false);
  const [profilePopup, setprofilePopup] = useState(false);
  const [filterSort, setFilterSort] = useState(false);
  const [filterCategory, setFilterCategory] = useState(false);
  const [filterCollections, setFilterCollections] = useState(false);
  const [filterProperties, setFilterProperties] = useState(false);
  const [filtersale, setFiltersale] = useState(false);
  const [filterRange, setFilterRange] = useState(false);
  const buttonText = "Edit Cover";

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  /*const menu = (
    <Menu>
      <Menu.Item>Change Price</Menu.Item>
      <Menu.Item>Transfer Token</Menu.Item>
      <Menu.Item>Burn Token</Menu.Item>
      <Menu.Item onClick={() => setReportPopup(true)}>Report</Menu.Item>
    </Menu>
  );*/

  const singleoption = (
    <Menu>
      <Menu.Item onClick={() => setReportPopup(true)}>Report</Menu.Item>
    </Menu>
  );

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

  return (
    <>
      {ReportPopups && <ReportPopup setReportPopup={setReportPopup} />}
      {CoverPopup && (
        <UpdateCoverPopup setUpdateCoverPopup={setUpdateCoverPopup} />
      )}
      {profilePopup && (
        <UpdateProfilePicPopup setprofilePopup={setprofilePopup} />
      )}
      {filterProperties && (
        <FilterProperties setFilterProperties={setFilterProperties} />
      )}

      <motion.section
        initial="hidden"
        animate="visible"
        variants={variants}
        className="profile-pictures-infos margin-50"
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <header>
                <div className="position-relative">
                  <div className="border p-3 gray-color profile-pictures-cover">
                    <img src={CollectionBannerBg} width="100%" alt="" />

                    <button
                      onClick={() => setUpdateCoverPopup(true)}
                      className="bg-white border-gray edit-profile"
                    >
                      {buttonText}
                    </button>
                  </div>
                  <div className="profile-info-position">
                    <div className="profile-user-pictures">
                      <span
                        onClick={() => setprofilePopup(true)}
                        className="edit-proile-img"
                      >
                        <img src={addicon} alt={""} />
                      </span>
                      <img src={userProfilePictures} width="100%" alt="" />
                    </div>
                    <div className="mt-3 profile-usr-name-h3-size">
                      <h3>
                        <b>Arlene McCoy</b>
                      </h3>
                      <div className="btn-gray text-center mt-3">
                        <b>0xbAu7...f08a</b>
                      </div>
                    </div>

                    <div className="mt-4 d-flex justify-content-between align-items-center w-auto">
                      <div className="share-profile">
                        <button className="bg-white border-gray profile-upload">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              clipRule="evenodd"
                              d="M3.75 6.75H7.5V11.25H10.5V6.75H14.25L9 1.5L3.75 6.75ZM15 9V14.25H3V9H1.5V15C1.5 15.4142 1.83579 15.75 2.25 15.75H15.75C16.1642 15.75 16.5 15.4142 16.5 15V9H15Z"
                              fill="black"
                            />
                          </svg>
                        </button>

                        <ProfileLinks />
                      </div>

                      <Dropdown overlay={singleoption}>
                        <button className="bg-white border-gray select">
                          <svg
                            width="14"
                            height="4"
                            viewBox="0 0 14 4"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              clipRule="evenodd"
                              d="M1.75 0.5C0.925 0.5 0.25 1.175 0.25 2C0.25 2.825 0.925 3.5 1.75 3.5C2.575 3.5 3.25 2.825 3.25 2C3.25 1.175 2.575 0.5 1.75 0.5ZM12.25 0.5C11.425 0.5 10.75 1.175 10.75 2C10.75 2.825 11.425 3.5 12.25 3.5C13.075 3.5 13.75 2.825 13.75 2C13.75 1.175 13.075 0.5 12.25 0.5ZM5.5 2C5.5 1.175 6.175 0.5 7 0.5C7.825 0.5 8.5 1.175 8.5 2C8.5 2.825 7.825 3.5 7 3.5C6.175 3.5 5.5 2.825 5.5 2Z"
                              fill="black"
                            />
                          </svg>
                        </button>
                      </Dropdown>
                    </div>
                  </div>
                </div>
              </header>

              <main className="profile-tab-menu">
                <Tabs defaultActiveKey="4" centered>
                  <TabPane tab="Items" key="1">
                    <div className="liveAuction ">
                      <div className="w-100 d-flex justify-content-center align-items-center explore-page">
                        <ul className="filter topSeller">
                          <FilterSort
                            filterSort={filterSort}
                            filterCategory={filterCategory}
                            filterCollections={filterCollections}
                            filterProperties={filterProperties}
                            filtersale={filtersale}
                            filterRange={filterRange}
                            setFilterSort={setFilterSort}
                            setFilterCategory={setFilterCategory}
                            setFilterCollections={setFilterCollections}
                            setFilterProperties={setFilterProperties}
                            setFiltersale={setFiltersale}
                            setFilterRange={setFilterRange}
                          />
                          <FilterCategory
                            filterSort={filterSort}
                            filterCategory={filterCategory}
                            filterCollections={filterCollections}
                            filterProperties={filterProperties}
                            filtersale={filtersale}
                            filterRange={filterRange}
                            setFilterSort={setFilterSort}
                            setFilterCategory={setFilterCategory}
                            setFilterCollections={setFilterCollections}
                            setFilterProperties={setFilterProperties}
                            setFiltersale={setFiltersale}
                            setFilterRange={setFilterRange}
                          />
                          {/* <FilterCollections
                                filterSort={filterSort}
                                filterCategory={filterCategory} 
                                filterCollections={filterCollections} 
                                filterProperties={filterProperties} 
                                filtersale={filtersale} 
                                filterRange={filterRange} 
                                setFilterSort={setFilterSort}
                                setFilterCategory={setFilterCategory} 
                                setFilterCollections={setFilterCollections} 
                                setFilterProperties={setFilterProperties} 
                                setFiltersale={setFiltersale} 
                                setFilterRange={setFilterRange} 
                            /> */}
                          <li>
                            <span className="label">Properties</span>
                            <div className="icon">
                              <img src={propertiesicon} alt={""} />
                            </div>
                            <div
                              className="ant-select ant-select-single ant-select-show-arrow"
                              onClick={() => setFilterProperties(true)}
                            >
                              <div className="ant-select-selector">
                                <span className="ant-select-selection-item">
                                  All 257
                                </span>
                              </div>
                              <span className="ant-select-arrow">
                                <span
                                  role="img"
                                  aria-label="down"
                                  className="anticon anticon-down ant-select-suffix"
                                >
                                  <svg
                                    viewBox="64 64 896 896"
                                    focusable="false"
                                    data-icon="down"
                                    width="1em"
                                    height="1em"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" />
                                  </svg>
                                </span>
                              </span>
                            </div>
                          </li>
                          <Filtersale
                            filterSort={filterSort}
                            filterCategory={filterCategory}
                            filterCollections={filterCollections}
                            filterProperties={filterProperties}
                            filtersale={filtersale}
                            filterRange={filterRange}
                            setFilterSort={setFilterSort}
                            setFilterCategory={setFilterCategory}
                            setFilterCollections={setFilterCollections}
                            setFilterProperties={setFilterProperties}
                            setFiltersale={setFiltersale}
                            setFilterRange={setFilterRange}
                          />
                          <FilterRange
                            filterSort={filterSort}
                            filterCategory={filterCategory}
                            filterCollections={filterCollections}
                            filterProperties={filterProperties}
                            filtersale={filtersale}
                            filterRange={filterRange}
                            setFilterSort={setFilterSort}
                            setFilterCategory={setFilterCategory}
                            setFilterCollections={setFilterCollections}
                            setFilterProperties={setFilterProperties}
                            setFiltersale={setFiltersale}
                            setFilterRange={setFilterRange}
                          />
                        </ul>
                      </div>
                      <div className="row  mt-5">
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
                  </TabPane>
                  <TabPane tab="Activity" key="2">
                    <Activitytab />
                  </TabPane>
                </Tabs>
              </main>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Collection;
