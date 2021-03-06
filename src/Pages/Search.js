import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Tabs } from "antd";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Config } from "../utils/config";
import TopCard from "../Components/TopCard";
import LiveAuctions from "../Components/LiveAuctions";
import artWorkWeek1 from "../assets/img/custom/artWorkWeek1.png";
// import topSellerUser1 from "../assets/img/custom/topSellerUser1.png";
// import topSellerUser2 from "../assets/img/custom/topSellerUser2.png";
// import topSellerUser3 from "../assets/img/custom/topSellerUser3.png";

const { TabPane } = Tabs;

const Search = () => {
  const { keyword } = useParams();
  const apiToken = sessionStorage.getItem("apiToken");
  let udata = JSON.parse(sessionStorage.getItem("userdata")) || {};
  let [searchUsersList, setSearchUsersList] = useState([]);
  let [searchCollectibleList, setSearchCollectibleList] = useState({});
  let [searchCollectionList, setSearchCollectionList] = useState({});
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const getSearchUsers = async () => {
    await axios
        .get(`${Config.baseURL}v1/user/search/`+ keyword, {
          headers: {}
        })
        .then(async response => {
          // console.log('Search Users List', response.data.data);
          if (apiToken) {
            await response.data.data.forEach((element) => {
              if (element.followers.includes(udata._id)) {
                element.isImFollowing = true;
              } else {
                element.isImFollowing = false;
              }
            });
            setSearchUsersList(response.data.data);
          } else {
            setSearchUsersList(response.data.data);
          }
        })
        .catch(err => {
          console.log(err);
        });
  };
  const getSearchCollectible = async () => {
    await axios
        .get(`${Config.baseURL}v1/collectible/getsearchcollectiblelist/`+ keyword, {
          headers: {}
        })
        .then(response => {
          response.data.data.forEach((element) => {
            if (element.likedBy.includes(udata._id)) {
              element.like = true;
            } else {
              element.like = false;
            }
          });
          // console.log('Search Collectible List', response.data.data);
          setSearchCollectibleList(response.data.data);
        })
        .catch(err => {
          console.log(err);
        });
  };
  const getSearchCollection = async () => {
    await axios
        .get(`${Config.baseURL}v1/collection/getsearchcollectionlist/`+ keyword, {
          headers: {}
        })
        .then(response => {
          response.data.data.forEach((element) => {
            if (element.likedBy.includes(udata._id)) {
              element.like = true;
            } else {
              element.like = false;
            }
          });
          console.log('Search Collection List', response.data.data);
          setSearchCollectionList(response.data.data);
        })
        .catch(err => {
          console.log(err);
        });
  };
  useEffect(() => {
    // console.log(apiToken);
    getSearchUsers().then(r => {});
    getSearchCollectible().then(r => {});
    getSearchCollection().then(r => {});
  }, []);

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={variants}
      className="profile-pictures-infos search-page"
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <main className="profile-tab-menu">
              <h2 className="mb-3">Search results for ???{keyword}???</h2>
              <Tabs defaultActiveKey="3" centered>
                <TabPane tab="Collections" key="1" style={{ color: "gray" }}>
                  <div className="topSeller">
                    <div className="w-100 d-flex justify-content-end">
                      <button className="profile-activity-filter-mobile d-web-none">
                        <svg
                          width="48"
                          height="48"
                          viewBox="0 0 48 48"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="0.5"
                            y="0.5"
                            width="47"
                            height="47"
                            rx="23.5"
                            fill="white"
                          />
                          <path
                            clipRule="evenodd"
                            d="M16.5 19V20.6667H31.5V19H16.5ZM22.3333 29H25.6667V27.3333H22.3333V29ZM29 24.8333H19V23.1667H29V24.8333Z"
                            fill="black"
                          />
                          <rect
                            x="0.5"
                            y="0.5"
                            width="47"
                            height="47"
                            rx="23.5"
                            stroke="black"
                          />
                        </svg>
                      </button>
                    </div>

                    <div className="topSellerContent following-profile-topSellerContent">
                      <div className="row mt-5 mb-5">
                        <div className="d-flex col-lg-12 activity ">
                          {searchCollectionList.length > 0 ?
                            <>
                              {searchCollectionList.map((SingleCollection, key) => (
                                <LiveAuctions
                                  isCollection={true}
                                  id={SingleCollection._id}
                                  Coverimg={SingleCollection.main_img.indexOf('https://storage.googleapis.com') > -1 ? SingleCollection.main_img : artWorkWeek1}
                                  liked={SingleCollection.like}
                                  title={SingleCollection.title}
                                  heartcount={SingleCollection.likes ? SingleCollection.likes : 0}
                                />
                              ))}
                            </> : <>
                              <div className="col-sm-12 d-flex justify-content-center flex-column text-center">
                                <h3>Not items found</h3>
                                <span className="color-gray">
                                    Come back soon or browse the items on our marketplace.
                                  </span>
                                <button className="bg-white profile-not-found-browse-btn mt-4 edit-profile w-25">
                                  Browse marketplace
                                </button>
                              </div>
                            </>
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPane>
                <TabPane tab="Collectibles" key="2">
                  <div className="topSeller">
                    <div className="w-100 d-flex justify-content-end">
                      <button className="profile-activity-filter-mobile d-web-none">
                        <svg
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                              x="0.5"
                              y="0.5"
                              width="47"
                              height="47"
                              rx="23.5"
                              fill="white"
                          />
                          <path
                              clipRule="evenodd"
                              d="M16.5 19V20.6667H31.5V19H16.5ZM22.3333 29H25.6667V27.3333H22.3333V29ZM29 24.8333H19V23.1667H29V24.8333Z"
                              fill="black"
                          />
                          <rect
                              x="0.5"
                              y="0.5"
                              width="47"
                              height="47"
                              rx="23.5"
                              stroke="black"
                          />
                        </svg>
                      </button>
                    </div>

                    <div className="topSellerContent following-profile-topSellerContent">
                      <div className="row mt-5 mb-5">
                        <div className="d-flex col-lg-12 activity ">
                          {searchCollectibleList.length > 0 ?
                            <>
                              {searchCollectibleList.map((SingleCollectible, key) => (
                                <LiveAuctions
                                  isCollection={false}
                                  id={SingleCollectible._id}
                                  Coverimg={SingleCollectible.img_path.indexOf('nftstorage.link') > -1 ? 'https://' + SingleCollectible.img_path : artWorkWeek1}
                                  liked={SingleCollectible.like}
                                  title={SingleCollectible.title}
                                  heartcount={SingleCollectible.likes ? SingleCollectible.likes : 0}
                                  User1={SingleCollectible.bids[0]?.user_id?.profile_img_url}
                                  User2={SingleCollectible.bids[1]?.user_id?.profile_img_url}
                                  User3={SingleCollectible.bids[2]?.user_id?.profile_img_url}
                                  WETH="1.2 WETH"
                                  bid="Highest bid 1/1"
                                />
                              ))}
                            </> : <>
                              <div className="col-sm-12 d-flex justify-content-center flex-column text-center">
                                <h3>Not items found</h3>
                                <span className="color-gray">
                                  Come back soon or browse the items on our marketplace.
                                </span>
                                <button className="bg-white profile-not-found-browse-btn mt-4 edit-profile w-25">
                                  Browse marketplace
                                </button>
                              </div>
                            </>
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPane>
                <TabPane tab="Users" key="3">
                  <div className="topSeller">
                    <div className="">
                      <div className="w-100 d-flex justify-content-end">
                        <button className="profile-activity-filter-mobile d-web-none">
                          <svg
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.5"
                              y="0.5"
                              width="47"
                              height="47"
                              rx="23.5"
                              fill="white"
                            />
                            <path
                              clipRule="evenodd"
                              d="M16.5 19V20.6667H31.5V19H16.5ZM22.3333 29H25.6667V27.3333H22.3333V29ZM29 24.8333H19V23.1667H29V24.8333Z"
                              fill="black"
                            />
                            <rect
                              x="0.5"
                              y="0.5"
                              width="47"
                              height="47"
                              rx="23.5"
                              stroke="black"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="topSellerContent following-profile-topSellerContent">
                        <div className="row mt-5 mb-5">
                          <div className="d-flex col-lg-12 activity">
                            {searchUsersList.length > 0 ?
                              <div className="d-flex col-lg-12 activity ">
                                {searchUsersList.map((SingleUser, key) => (
                                  <TopCard
                                    topcoverimg={SingleUser.cover_img_url}
                                    topuserimg={SingleUser.profile_img_url}
                                    title={SingleUser.display_name}
                                    id={SingleUser._id}
                                    follow={SingleUser.followersCount + ' followers'}
                                    btnname={SingleUser.isImFollowing ? "Unfollow" : "Follow"}
                                  />
                                ))}
                              </div> : <div className="col-sm-12 d-flex justify-content-center flex-column text-center">
                                <h3>Not items found</h3>
                                <span className="color-gray">
                                  Come back soon or browse the items on our marketplace.
                                </span>
                                <button className="bg-white profile-not-found-browse-btn mt-4 edit-profile w-25">
                                  Browse marketplace
                                </button>
                              </div>
                            }
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
  );
};

export default Search;
