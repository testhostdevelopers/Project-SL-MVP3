import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { Menu, Dropdown, Tabs } from "antd";
import axios from "axios";
import ProfileLinks from "../Components/ProfileLinks";
import LiveAuctions from "../Components/LiveAuctions";
import TopCard from "../Components/TopCard";
import ReportPopup from "../Components/Popup/ReportPopup";
import artWorkWeek1 from "../assets/img/custom/artWorkWeek1.png";
// import topSellerUser1 from "../assets/img/custom/topSellerUser1.png";
// import topSellerUser2 from "../assets/img/custom/topSellerUser2.png";
// import topSellerUser3 from "../assets/img/custom/topSellerUser3.png";
import { Config } from '../utils/config';
import EarthIcon from "../assets/img/icons/custom/earth.svg";
// import { Link } from "react-router-dom";
// import Activitytab from "../Components/Tabs/Activitytab";
// import topSellerUser4 from "../assets/img/custom/topSellerUser4.png";

const { TabPane } = Tabs;

const User = (props) => {
  const { user_id } = useParams();
  const apiToken = sessionStorage.getItem("apiToken");
  const userData = {};
  const currentUserData = JSON.parse(sessionStorage.getItem("userdata")) || {};
  const [reportPopup, setReportPopup] = useState(false);
  const [followButtonText, setFollowButtonText] = useState('Follow');
  /*if (currentUserData.following.indexOf(user_id) >= 0) {
    // setFollowButtonText("Unfollow");
  }*/
  let [udata, setUdata] = useState({});
  let [userCollectibleList, setUserCollectibleList] = useState([]);
  let [userCollectionList, setUserCollectionList] = useState([]);
  let [userOwnedCollectibleList, setUserOwnedCollectibleList] = useState([]);
  let [userOnSaleCollectibleList, setUserOnSaleCollectibleList] = useState([]);
  let [userFollowerUsersList, setUserFollowerUsersList] = useState([]);
  let [userFollowingUsersList, setUserFollowingUsersList] = useState([]);
  const getFollowerUsers = async () => {
    await axios
      .get(Config.baseURL + 'v1/user/getFollowerUsers/' + user_id, {
        data: {
          user_id: userData._id
        },
        headers: {
          Authorization: `Bearer ${apiToken}`,
        }
      })
      .then(async response => {
        await response.data.data.forEach((element) => {
          if (element.followers.includes(user_id)) {
            element.isImFollowing = true;
          } else {
            element.isImFollowing = false;
          }
        });
        setUserFollowerUsersList(response.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const getFollowingUsers = async () => {
    await axios
      .get(Config.baseURL + 'v1/user/getFollowingUsers/' + user_id, {
        data: {
          user_id: userData._id
        },
        headers: {
          Authorization: `Bearer ${apiToken}`,
        }
      })
      .then(response => {
        setUserFollowingUsersList(response.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const userCollectibleListFunc = async () => {
    await axios
      .get(Config.baseURL + 'v1/collectible/getusercollectiblelist/' + user_id, {
        headers: {
          Authorization: `Bearer ${apiToken}`,
        }
      })
      .then(response => {
        response.data.data.forEach((element) => {
          if (element.likedBy.includes(userData._id)) {
            element.like = true;
          } else {
            element.like = false;
          }
        });
        setUserCollectibleList(response.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const userOwnedCollectible = async () => {
    await axios
        .get(`${Config.baseURL}v1/collectible/getuserownedcollectiblelist/` + user_id, {
              data: {
                user_id: udata._id
              },
              headers: {
                Authorization: `Bearer ${apiToken}`,
              }
            })
        .then(response => {
          response.data.data.forEach((element) => {
            if (element.likedBy.includes(user_id)) {
              element.like = true;
            } else {
              element.like = false;
            }
          });
          setUserOwnedCollectibleList(response.data.data);
          console.log('setUserOwnedCollectibleList', response.data.data);
        })
        .catch(err => {
          console.log(err);
        });
  };
  const userOnSaleCollectible = async () => {
    await axios
        .get(`${Config.baseURL}v1/collectible/getuseronsalecollectiblelist/` + user_id + '/0/100', {
          data: {
            user_id: userData._id
          },
          headers: {
            Authorization: `Bearer ${apiToken}`,
          }
        })
        .then(response => {
          response.data.data.forEach((element) => {
            if (element.likedBy.includes(user_id)) {
              element.like = true;
            } else {
              element.like = false;
            }
          });
          setUserOnSaleCollectibleList(response.data.data);
          // console.log('setUserOnSaleCollectibleList', response.data.data);
        })
        .catch(err => {
          console.log(err);
        });
  };
  const userCollectionListFunc = async () => {
    await axios
        .get(`${Config.baseURL}v1/collection/getusercollectionlist/` + user_id, {
          data: {
            user_id: userData._id
          },
          headers: {
            Authorization: `Bearer ${apiToken}`,
          }
        })
        .then(response => {
          if (response.data.data) {
            response.data.data.forEach((element) => {
              if (element.likedBy.includes(userData._id)) {
                element.like = true;
              } else {
                element.like = false;
              }
            });
            setUserCollectionList(response.data.data);
            // console.log('setUserCollectionList', response.data.data);
          }
        })
        .catch(err => {
          console.log(err);
        });
  };
  const followButton = async () => {
    await axios
      .put(Config.baseURL + 'v1/user/' + followButtonText.toLowerCase() + '/' + user_id, {
        user: currentUserData._id
      }, {
        headers: {
          Authorization: `Bearer ${apiToken}`,
        }
      })
      .then(response => {
        if (response.data.response_code === "API_SUCCESS") {
          setFollowButtonText('Unfollow');
        }
        // console.log('response', response);
      })
      .catch(err => {
        console.log(err);
      });
  };
  useEffect(() => {
    if (sessionStorage.getItem("apiToken")) {
      axios
        .get(`${Config.baseURL}v1/user/userGetId/`+ user_id, {
          headers: {
            Authorization: `Bearer ${apiToken}`,
          },
        })
        .then((res) => {
          setUdata(res.data.data);
        });
      userCollectibleListFunc().then(r => {});
      userCollectionListFunc().then(r => {});
      getFollowerUsers().then(r => {});
      getFollowingUsers().then(r => {});
      userOwnedCollectible().then(r => {});
      userOnSaleCollectible().then(r => {});
    }
  }, []);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const singleoption = (
    <Menu>
      <Menu.Item onClick={() => setReportPopup(true)}>Report</Menu.Item>
    </Menu>
  );
  return (
    <>
      {reportPopup && <ReportPopup id={user_id} type={'User'} setReportPopup={setReportPopup} />}
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
                    <div
                      className="coverpic"
                    >
                      <img
                        alt={"cover pic"}
                        id="mydat"
                        src={
                          udata == null
                            ? ""
                            : udata.cover_img_url
                        }
                        style={{
                          width: "100%",
                          height: "100%",
                          position: "absolute",
                        }}
                      />
                    </div>
                  </div>

                  <div className="profile-info-position">
                    <div className="profile-user-pictures">
                      <div
                        className="profile-pic"
                      >
                        <img
                          alt={"profile-pic"}
                          src={
                            udata == null
                              ? ""
                              : udata.profile_img_url
                          }
                          style={{
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                          }}
                        />
                      </div>
                    </div>
                    <div className="mt-3 profile-usr-name-h3-size">
                      <h3>
                        <b>{udata == null ? "" : udata.display_name}</b>
                      </h3>
                    </div>
                    <div className="profile-usr-info">
                      <p>
                        {udata == null ? "" : udata.bio}{" "}
                        {udata === null && udata.bio.length > 50 ? <a href="#0" className="read-more-link">
                          Read more
                        </a> : ""}
                      </p>
                      <a rel="noopener" target="_blank" href={udata === undefined ? "" : udata.personal_site} className="website-link">
                        <span>
                          <img src={EarthIcon} alt={""} />
                        </span>
                        {udata == null ? "" : udata.personal_site}
                      </a>
                      <div className="follows-block">
                        <span>
                          <b>{udata == null || udata.followersCount == null ? "0" : udata.followersCount} </b>Followers
                        </span>
                        <span>
                        <b>{udata == null || udata.followingCount == null ? "0" : udata.followingCount} </b>Following
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 d-flex justify-content-between align-items-center">
                      <button className="bg-white border-gray edit-profile" onClick={() => {
                        followButton().then(r => {});
                      }}>
                        <b>{followButtonText}</b>
                      </button>
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
                        <ProfileLinks id={user_id}/>
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
                <Tabs defaultActiveKey="3" centered>
                  <TabPane tab={'On Sale (' + userOnSaleCollectibleList.length + ')'} key="1">
                    <div className="liveAuction proile-liked-filter">
                      {userOnSaleCollectibleList.length > 0 ?
                          <div className="col-sm-12 d-flex justify-content-center flex-column text-center">
                            <div className="row ">
                              {userOnSaleCollectibleList.map((SingleCollectible, key) => (
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
                                      WETH={SingleCollectible.price}
                                      bid={Math.max(...SingleCollectible.bids.map(o => o.amount)) == "-Infinity" ? "No Bid" : "Highest bid " + Math.max(...SingleCollectible.bids.map(o => o.amount))}
                                  />
                              ))}
                            </div>
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
                  </TabPane>
                  <TabPane tab={'Owned (' + userOwnedCollectibleList.length + ')'} key="2">
                    <div className="liveAuction proile-liked-filter">
                      <div className="row ">
                        { userOwnedCollectibleList.length > 0 ?
                            <>
                              {userOwnedCollectibleList.map((SingleCollectible, key) => (
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
                                      WETH={SingleCollectible.price}
                                      bid={Math.max(...SingleCollectible.bids.map(o => o.amount)) == "-Infinity" ? "No Bid" : "Highest bid " + Math.max(...SingleCollectible.bids.map(o => o.amount))}
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
                  </TabPane>
                  <TabPane tab={'Collectible (' + userCollectibleList.length + ')'} key="3">
                    <div className="liveAuction proile-liked-filter">
                      {userCollectibleList.length > 0 ?
                        <div className="col-sm-12 d-flex justify-content-center flex-column text-center">
                          <div className="row ">
                            {userCollectibleList.map((SingleCollectible, key) => (
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
                                WETH={SingleCollectible.price}
                                bid={Math.max(...SingleCollectible.bids.map(o => o.amount)) == "-Infinity" ? "No Bid" : "Highest bid " + Math.max(...SingleCollectible.bids.map(o => o.amount))}
                              />
                            ))}
                          </div>
                        </div> : <div className="col-sm-12 d-flex justify-content-center flex-column text-center">
                          <h3>Not items found</h3>
                          <span className="color-gray">
                            Come back soon or browse the items on our marketplace.
                          </span>
                          <button className="bg-white profile-not-found-browse-btn mt-4 edit-profile w-25">
                            Browse marketplace
                          </button>
                        </div>}
                    </div>
                  </TabPane>
                  <TabPane tab={'Collection (' + userCollectionList.length + ')'} key="4">
                    <div className="liveAuction proile-liked-filter">
                      {userCollectionList.length > 0 ?
                        <div className="col-sm-12 d-flex justify-content-center flex-column text-center">
                          <div className="row ">
                            {userCollectionList.map((SingleCollection, key) => (
                              <LiveAuctions
                                isCollection={true}
                                id={SingleCollection._id}
                                Coverimg={SingleCollection.main_img}
                                liked={SingleCollection.like}
                                title={SingleCollection.title}
                                heartcount={SingleCollection.likes ? SingleCollection.likes : 0}
                              />
                            ))}
                          </div>
                        </div> : <div className="col-sm-12 d-flex justify-content-center flex-column text-center">
                          <h3>Not items found</h3>
                          <span className="color-gray">
                          Come back soon or browse the items on our marketplace.
                        </span>
                          <button className="bg-white profile-not-found-browse-btn mt-4 edit-profile w-25">
                            Browse marketplace
                          </button>
                        </div>}
                    </div>
                  </TabPane>
                  <TabPane tab={'Following (' + userFollowingUsersList.length + ')'} key="8">
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
                        <div className="row">
                          {userFollowingUsersList.length > 0 ?
                            <div className="d-flex col-lg-12 activity ">
                              {userFollowingUsersList.map((SingleUser, key) => (
                                <TopCard
                                  topcoverimg={SingleUser.cover_img_url}
                                  topuserimg={SingleUser.profile_img_url}
                                  title={SingleUser.display_name}
                                  id={SingleUser._id}
                                  follow={SingleUser.followersCount + ' followers'}
                                  btnname={"Unfollow"}
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
                  </TabPane>
                  <TabPane tab={'Followers (' + userFollowerUsersList.length + ')'} key="9">
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
                        <div className="row">
                          {userFollowerUsersList.length > 0 ?
                            <div className="d-flex col-lg-12 activity ">
                              {userFollowerUsersList.map((SingleUser, key) => (
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

export default User;
