import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, Dropdown, Tabs } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import ProfileLinks from "../Components/ProfileLinks";
import LiveAuctions from "../Components/LiveAuctions";
import TopCard from "../Components/TopCard";
import ReportPopup from "../Components/Popup/ReportPopup";
// import Activitytab from "../Components/Tabs/Activitytab";
import artWorkWeek1 from "../assets/img/custom/artWorkWeek1.png";
import topSeller4 from "../assets/img/custom/topSeller4.png";
import topSellerUser1 from "../assets/img/custom/topSellerUser1.png";
import topSellerUser2 from "../assets/img/custom/topSellerUser2.png";
import topSellerUser3 from "../assets/img/custom/topSellerUser3.png";
import { Config } from '../utils/config';           
import EarthIcon from "../assets/img/icons/custom/earth.svg";
import Activity from "./Activity";

var UPubKey = null,
  cutPkey;

if (localStorage.getItem("PublicKey")) {
  UPubKey = localStorage.getItem("PublicKey");
  cutPkey =
    UPubKey.substring(0, 4) + "...." + UPubKey.substring(UPubKey.length - 4);
}

const { TabPane } = Tabs;

const Profile = (props) => {
  // console.log("props.pImage", props.pImage, "sdasadsa");
  var apiToken = sessionStorage.getItem("apiToken");
  // const userData = JSON.parse(sessionStorage.getItem("userdata")) || {};
  const [reportPopup, setReportPopup] = useState(false);
  const [buttonText, setButtonText] = useState("Add Cover");
  let [udata, setUdata] = useState(JSON.parse(sessionStorage.getItem("userdata")) || {});
  let [userCollectibleList, setUserCollectibleList] = useState([]);
  let [userCollectionList, setUserCollectionList] = useState([]);
  let [userLikedCollectionsList, setUserLikedCollectionsList] = useState([]);
  let [userLikedCollectibleList, setUserLikedCollectibleList] = useState([]);
  let [userFollowerUsersList, setUserFollowerUsersList] = useState([]);
  let [userFollowingUsersList, setUserFollowingUsersList] = useState([]);
  const getFollowerUsers = async () => {
    await axios
        .get(`${Config.baseURL}v1/user/getFollowerUsers`, {
              data: {
                user_id: udata._id
              },
              headers: {
                Authorization: `Bearer ${apiToken}`,
              }
            })
        .then(response => {
          // console.log('getFollowerUsers', response.data.data);
          setUserFollowerUsersList(response.data.data);
        })
        .catch(err => {
          console.log(err);
        });
  };
  const getFollowingUsers = async () => {
    await axios
        .get(`${Config.baseURL}v1/user/getFollowingUsers`, {
              data: {
                user_id: udata._id
              },
              headers: {
                Authorization: `Bearer ${apiToken}`,
              }
            }
        )
        .then(response => {
          // console.log('getFollowingUsers', response.data.data);
          setUserFollowingUsersList(response.data.data);
        })
        .catch(err => {
          console.log(err);
        });
  };
  const userCollectibleListFunc = async () => {
    await axios
      .get(`${Config.baseURL}v1/collectible/getusercollectiblelist`, {
          data: {
            user_id: udata._id
          },
          headers: {
            Authorization: `Bearer ${apiToken}`,
          }
        }
      )
      .then(response => {
        response.data.data.forEach((element) => {
          if (element.likedBy.includes(udata._id)) {
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
  const userLikedCollections = async () => {
    await axios
      .get(`${Config.baseURL}v1/collection/getuserlikedcollectionslist`, {
          data: {
            user_id: udata._id
          },
          headers: {
            Authorization: `Bearer ${apiToken}`,
          }
        }
      )
      .then(response => {
        response.data.data.forEach((element) => {
          if (element.likedBy.includes(udata._id)) {
            element.like = true;
          } else {
            element.like = false;
          }
        });
        setUserLikedCollectionsList(response.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const userLikedCollectible = async () => {
    await axios
      .get(`${Config.baseURL}v1/collectible/getuserlikedcollectiblelist`, {
          data: {
            user_id: udata._id
          },
          headers: {
            Authorization: `Bearer ${apiToken}`,
          }
        }
      )
      .then(response => {
        response.data.data.forEach((element) => {
          if (element.likedBy.includes(udata._id)) {
            element.like = true;
          } else {
            element.like = false;
          }
        });
        setUserLikedCollectibleList(response.data.data);
        // console.log('setUserLikedCollectibleList', response.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const userCollectionListFunc = async () => {
    await axios
      .get(`${Config.baseURL}v1/collection/getusercollectionlist`, {
          data: {
            user_id: udata._id
          },
          headers: {
            Authorization: `Bearer ${apiToken}`,
          }
        }
      )
      .then(response => {
        response.data.data.forEach((element) => {
          if (element.likedBy.includes(udata._id)) {
            element.like = true;
          } else {
            element.like = false;
          }
        });
        setUserCollectionList(response.data.data);
        // console.log('setUserCollectionList', response.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  useEffect(() => {
    if (sessionStorage.getItem("apiToken")) {
      axios
        .get(`${Config.baseURL}v1/user/getUser`, {
          headers: {
            Authorization: `Bearer ${apiToken}`,
          },
        })
        .then((res) => {
          setUdata(res.data.data);
        });
      userCollectibleListFunc();
      userCollectionListFunc();
      userLikedCollections();
      userLikedCollectible();
      getFollowerUsers();
      getFollowingUsers();
    }
  }, []);

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

  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);
  const profileImage = React.useRef(null);
  const profileUploader = React.useRef(null);

  const handleImageUpload = async (e) => {
    const ig = e.target.files[0];
    if (sessionStorage.getItem("apiToken")) {
      var apiToken = sessionStorage.getItem("apiToken");
      var formData = new FormData();
      if (e.target.id === "uploadcoverphoto") {
        formData.append("cover_img_url", ig);
      }
      if (e.target.id === "profilephoto") {
        formData.append("profile_img_url", ig);
      }
      await axios
        .put(`${Config.baseURL}v1/user/update`, formData, {
          headers: {
            Authorization: `Bearer ${apiToken}`,
          },
        })
        .then((res) => {
          // console.log(res)
        });
      const [file] = e.target.files;
      if (file) {
        if (e.target.id === "uploadcoverphoto") {
          const reader = new FileReader();
          const { current } = uploadedImage;
          current.file = file;
          reader.onload = (e) => {
            current.src = e.target.result;
            if (e.target.result) {
              setButtonText("Edit Cover");
            }
          };
          reader.readAsDataURL(file);
        }
        if (e.target.id === "profilephoto") {
          const reader = new FileReader();
          const {current} = profileImage;
          current.file = file;
          reader.onload = (e) => {
            current.src = e.target.result;
          };
          reader.readAsDataURL(file);
        }
      }
    }
  };
  /*const handleprofilepicUploadr = async (e) => {
    const [file] = e.target.files;
    if (file) {
        const reader = new FileReader();
        const { current } = profileImage;
        current.file = file;
        reader.onload = e => {
            current.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
  };*/

  return (
    <>
      {reportPopup && <ReportPopup setReportPopup={setReportPopup} />}
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
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      ref={imageUploader}
                      id="uploadcoverphoto"
                      style={{
                        display: "none",
                      }}
                    />
                    <div
                      className="coverpic"
                      onClick={() => imageUploader.current.click()}
                    >
                      <img
                        alt={""}
                        id="mydat"
                        src={
                          udata == null
                            ? ""
                            : `${Config.baseURL}` + udata.cover_img_url
                        }
                        ref={uploadedImage}
                        style={{
                          width: "100%",
                          height: "100%",
                          position: "absolute",
                        }}
                      />
                    </div>

                    <label
                      htmlFor="uploadcoverphoto"
                      className="bg-white border-gray edit-profile"
                    >
                      {" "}
                      {buttonText}
                    </label>
                  </div>

                  <div className="profile-info-position">
                    <div className="profile-user-pictures">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        ref={profileUploader}
                        id="profilephoto"
                        style={{
                          display: "none",
                        }}
                      />
                      <div
                        className="profile-pic"
                        onClick={() => profileUploader.current.click()}
                      >
                        <label>Add Profile Picture</label>
                        <img
                          alt={""}
                          src={
                            udata == null
                              ? ""
                              : `${Config.baseURL}` + udata.profile_img_url
                          }
                          ref={profileImage}
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
                      <div className="btn-gray text-center mt-3">
                        <b>{UPubKey == null ? "" : cutPkey}</b>
                      </div>
                    </div>

                    <div className="profile-usr-info">
                      <p>
                        {udata == null ? "" : udata.bio}{" "}
                        {udata === null && udata.bio.length > 50 ? <a href="#0" className="read-more-link">
                          Read more
                        </a> : ""}
                      </p>
                      <a href={udata === undefined ? "" : udata.personal_site} className="website-link">
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
                      <Link to="/edit-profile">
                        <button className="bg-white border-gray edit-profile">
                          <b>Edit Profile</b>
                        </button>
                      </Link>
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
                        <ProfileLinks/>
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
                  <TabPane tab="On sale" key="1">
                    <div className="row mt-5 mb-5">
                      <div className="col-sm-12 d-flex justify-content-center flex-column text-center">
                        <h3>Not items found</h3>
                        <span className="color-gray">
                          Come back soon or browse the items on our marketplace.
                        </span>
                        <button className="bg-white profile-not-found-browse-btn mt-4 edit-profile w-25">
                          Browse marketplace
                        </button>
                      </div>
                    </div>
                  </TabPane>
                  <TabPane tab="Owned" key="2">
                    <div className="liveAuction proile-liked-filter">
                      <div className="row ">
                        <LiveAuctions
                          isOpenInProfile="true"
                          Coverimg={artWorkWeek1}
                          title="Memescalf#782021"
                          heartcount="24"
                          User1={topSellerUser1}
                          User2={topSellerUser2}
                          User3={topSellerUser3}
                          WETH="1.2 WETH"
                          bid="Highest bid 1/1"
                        />
                        <LiveAuctions
                          isOpenInProfile="true"
                          Coverimg={artWorkWeek1}
                          title="Memescalf#782021"
                          heartcount="24"
                          User1={topSellerUser1}
                          User2={topSellerUser2}
                          User3={topSellerUser3}
                          WETH="1.2 WETH"
                          bid="Highest bid 1/1"
                        />
                        <LiveAuctions
                          isOpenInProfile="true"
                          Coverimg={artWorkWeek1}
                          title="Memescalf#782021"
                          heartcount="24"
                          User1={topSellerUser1}
                          User2={topSellerUser2}
                          User3={topSellerUser3}
                          WETH="1.2 WETH"
                          bid="Highest bid 1/1"
                        />
                        <LiveAuctions
                          isOpenInProfile="true"
                          Coverimg={artWorkWeek1}
                          title="Memescalf#782021"
                          heartcount="24"
                          User1={topSellerUser1}
                          User2={topSellerUser2}
                          User3={topSellerUser3}
                          WETH="1.2 WETH"
                          bid="Highest bid 1/1"
                        />
                      </div>
                    </div>
                  </TabPane>
                  <TabPane tab={'My Collectible' + ' (' + userCollectibleList.length + ')'} key="3">
                    <div className="liveAuction proile-liked-filter">
                      {userCollectibleList.length > 0 ?
                        <div className="col-sm-12 d-flex justify-content-center flex-column text-center">
                          <div className="row ">
                            {userCollectibleList.map((SingleCollectible, key) => (
                              <LiveAuctions
                                isCollection={false}
                                id={SingleCollectible._id}
                                Coverimg={"https://"+SingleCollectible.img_path}
                                liked={SingleCollectible.like}
                                title={SingleCollectible.title}
                                heartcount={SingleCollectible.likes ? SingleCollectible.likes : 0}
                                User1={topSellerUser1}
                                User3={topSellerUser3}
                                User2={topSellerUser2}
                                WETH={SingleCollectible.price}
                                bid="Highest bid 1/1"
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
                  <TabPane tab={'My Collection' + ' (' + userCollectionList.length + ')'} key="4">
                    <div className="liveAuction proile-liked-filter">
                      {userCollectionList.length > 0 ?
                        <div className="col-sm-12 d-flex justify-content-center flex-column text-center">
                          <div className="row ">
                            {userCollectionList.map((SingleCollection, key) => (
                              <LiveAuctions
                                isCollection={true}
                                id={SingleCollection._id}
                                Coverimg={artWorkWeek1}
                                liked={SingleCollection.like}
                                title={SingleCollection.title}
                                heartcount={SingleCollection.likes ? SingleCollection.likes : 0}
                                User1={topSellerUser1}
                                User2={topSellerUser2}
                                User3={topSellerUser3}
                                WETH={SingleCollection.price}
                                bid="Highest bid 1/1"
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
                  <TabPane tab={'Liked Collectible (' + userLikedCollectibleList.length + ')'} key="5">
                    <div className="liveAuction proile-liked-filter">
                      {userLikedCollectibleList.length > 0 ?
                        <div className="col-sm-12 d-flex justify-content-center flex-column text-center">
                          <div className="row ">
                        {userLikedCollectibleList.map((SingleCollectible, key) => (
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
                            WETH="1.2 WETH"
                            bid="Highest bid 1/1"
                          />
                        ))}
                      </div>
                        </div>: <div className="col-sm-12 d-flex justify-content-center flex-column text-center">
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
                  <TabPane tab={'Liked Collections (' + userLikedCollectionsList.length + ')'} key="6">
                    <div className="liveAuction proile-liked-filter">
                      {userLikedCollectibleList.length > 0 ?
                        <div className="col-sm-12 d-flex justify-content-center flex-column text-center">
                          <div className="row ">
                            {userLikedCollectionsList.map((SingleCollection, key) => (
                              <LiveAuctions
                                isCollection={true}
                                id={SingleCollection._id}
                                Coverimg={artWorkWeek1}
                                liked={SingleCollection.like}
                                title={SingleCollection.title}
                                heartcount={SingleCollection.likes ? SingleCollection.likes : 0}
                                User1={topSellerUser1}
                                User2={topSellerUser2}
                                User3={topSellerUser3}
                                WETH="1.2 WETH"
                                bid="Highest bid 1/1"
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
                  <TabPane tab="Activity" key="7">
                    <Activity />
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
                                    topcoverimg={topSeller4}
                                    topuserimg={topSellerUser1}
                                    title={SingleUser.display_name}
                                    id={SingleUser._id}
                                    follow={SingleUser.followersCount + ' followers'}
                                    btnname="Unfollow"
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
                                  topcoverimg={topSeller4}
                                  topuserimg={topSellerUser1}
                                  title={SingleUser.display_name}
                                  id={SingleUser._id}
                                  follow={SingleUser.followersCount + ' followers'}
                                  btnname="Follow"
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
                  <TabPane tab="Hidden" key="10">
                    <div className="row mt-5 mb-5">
                      <div className="col-sm-12 d-flex justify-content-center flex-column text-center">
                        <h3>Not items found</h3>
                        <span className="color-gray">
                          Come back soon or browse the items on our marketplace.
                        </span>
                        <button className="bg-white profile-not-found-browse-btn mt-4 edit-profile w-25">
                          Browse marketplace
                        </button>
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
export default Profile;
