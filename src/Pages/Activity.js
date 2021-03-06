import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ActivityNumberCard from "../Components/ActivityNumberCard";
import FillLabel from "../assets/img/icons/custom/fill-label.svg";
import ActivityCard from "../assets/img/custom/activity-cardonly.png";
import userImg from "../assets/img/icons/custom/userProfilePictures.png";
import axios from "axios";
import { Config } from '../utils/config';

const Activity = (props) => {
  let {page = 'Activity', collectionId = '', userId = ''} = props;
  // console.log('page', page);
  const apiToken = sessionStorage.getItem("apiToken");
  const userData = JSON.parse(sessionStorage.getItem("userdata")) || {};
  const [filterValue, setFilterValue] = useState("All");
  const error_data = "";
  const [all_filter, setAllFilter] = useState([]);
  const [allTransactionData, setAllTransactionData] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 10;
  const [showTransactionData, setShowTransactionData] = useState(true);
  const [LoadMore, setShowLoadMore] = useState(true);
  const [filterTransactionData, setFilterTransactionData] = useState([]);
  const resetFilterValue = async () => {
    findFilter('All');
  }
  const getallactivityfilters = async () => {
    await axios
        .get(`${Config.baseURL}v1/activityfilter/getallactivityfilters`, {
              data: {
                user_id: userData._id
              },
              headers: {
                Authorization: `Bearer ${apiToken}`,
              }
            })
        .then(response => {
          setAllFilter(response.data.data);
        })
        .catch(err => {
          console.log(err);
        });
  };
  const gettransactions = async (page) => {
    // console.log('page', page);
    let API_URL = '';
    if (filterValue == "All") {
      if (page === 'Activity') {
        API_URL = `${Config.baseURL}v1/transaction/gettransactions/` + offset + '/' + limit;
      } else if (page === 'User') {
        API_URL = `${Config.baseURL}v1/transaction/getusertransactions/` + userId + `/` + offset + '/' + limit;
      } else if (page === 'Collection') {
        API_URL = `${Config.baseURL}v1/transaction/getcollectiontransactions/` + collectionId + `/` + offset + '/' + limit;
      }
    } else {
      // console.log('all_filter title', all_filter.find(c => c.title == filterValue).title);
      if (page === 'Activity') {
        API_URL = `${Config.baseURL}v1/transaction/getfiltertransactions/` + all_filter.find(c => c.title == filterValue)._id + '/' + filterTransactionData.length + '/' + limit;
      } else if (page === 'User') {
        API_URL = `${Config.baseURL}v1/transaction/getuserfiltertransactions/` + all_filter.find(c => c.title == filterValue)._id + '/' + userId + `/` + filterTransactionData.length + '/' + limit;
      } else if (page === 'Collection') {
        API_URL = `${Config.baseURL}v1/transaction/getcollectionfiltertransactions/` + all_filter.find(c => c.title == filterValue)._id + '/' + collectionId + `/` + filterTransactionData.length + '/' + limit;
      }
    }
    // console.log('API_URL', API_URL);
    if (API_URL.length) {
      await axios
        .get(API_URL, {
          data: {
            user_id: userData._id
          },
          headers: {
            Authorization: `Bearer ${apiToken}`,
          }
        })
        .then((response) => {
          if (response.data.response_code === "API_SUCCESS") {
            setOffset(offset + parseInt(response.data.data.length));
            setAllTransactionData(allTransactionData => [...allTransactionData, ...response.data.data]);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  };
  const findFilter = (key) => {
    // console.log('findFilter func ', key);
    setFilterValue(key);
    // setAllTransactionData(getUniqueListBy(allTransactionData, '_id'));
    if (key === 'All') {
      setShowTransactionData(true);
    } else {
      setShowTransactionData(false);
      let arr = [];
      // console.log('allTransactionData', allTransactionData.length);
      allTransactionData.forEach((SingleData) => {
        // console.log('SingleData', SingleData.filter.title);
        // console.log('key', key);
        if (SingleData.filter.title === key) {
          arr.push(SingleData);
        }
      });
      setFilterTransactionData(arr);
    }
  };
  const loadMore = async () => {
    await gettransactions(page).then(() => {
      findFilter(filterValue);
    });
  };
  const makeTitle = (activity) => {
    let title = '';
    if (activity.user_id?._id === userData._id) {
      activity.user_id.display_name = "You";
    }
    if (activity?.filter?.title === 'Like' || activity?.filter?.title === 'UnLike' ) {
      if (activity.collectible_id) {
        title = activity.user_id?.display_name + ' ' + activity.name + ' ' + activity?.collectible_id?.title
      } else if (activity.collection_id) {
        title = activity.user_id?.display_name + ' ' + activity.name + ' ' + activity?.collection_id?.title
      }
    } else if (activity?.filter?.title === 'Following') {
      title = activity.user_id?.display_name + ' ' + activity.name
    }
    if (title === '') {
      title = activity.name;
    }
    return title;
  };
  const img = (activity) => {
    // console.log('activity', activity);
    let defaultImg = ActivityCard;
    if (activity.collectible_id) {
      defaultImg = activity.collectible_id.img_path.indexOf('nftstorage.link') > -1 ? 'https://' + activity.collectible_id.img_path : defaultImg
    }
    else if (activity.collection_id) {
      defaultImg = activity.collection_id.main_img
      defaultImg = activity.collection_id.main_img.indexOf('https://storage.googleapis.com') > -1 ? activity.collection_id.main_img : ActivityCard
    }
    else if (activity.followed_user_id) {
      if (activity.followed_user_id.profile_img_url === "null") {
        defaultImg = userImg;
      } else {
        defaultImg = activity.followed_user_id.profile_img_url
      }
    }
    return defaultImg;
  };
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  useEffect(() => {
    if (sessionStorage.getItem("apiToken")) {
      getallactivityfilters().then(r => {});
      gettransactions(page).then(r => {});
    }
  }, []);
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={variants}
      className="profile-pictures-infos"
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <main className="profile-tab-menu">
              <h2>Activity : {filterValue}</h2>
              <br/>
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

                  <div className="topSellerContent Collection-topSellerContent">
                    <div className="row align-items-start">
                      <div className="d-flex col-lg-8 activity activity-number-card-left">
                        <h5 id="not_match" style={{ color: "red" }}>
                          {error_data}
                        </h5>
                        {showTransactionData > 0 ?
                          <>
                            {allTransactionData.map((single) => (
                              <ActivityNumberCard
                                activitynumbercardimg={img(single)}
                                FillLabel={FillLabel}
                                title={makeTitle(single)}
                                filter={single.filter.title}
                                //pixelpunks="pixelpunks"
                                // eth={single.collectible_id !== undefined ? single.collectible_id.price + ' ETH' : ' '}
                                seenstatus={new Date(single.createdAt).toLocaleString('en-US', {
                                  weekday: 'long',
                                  year: 'numeric',
                                  month: 'long',
                                  hour: 'numeric',
                                  minute: 'numeric',
                                  second: 'numeric',
                                  day: 'numeric'
                                })}
                              />
                            ))}
                          </> : <>
                            {filterTransactionData.map((single) => (
                              <ActivityNumberCard
                                activitynumbercardimg={img(single)}
                                FillLabel={FillLabel}
                                title={makeTitle(single)}
                                filter={single.filter.title}
                                info={single.info !== undefined ? single.info : '' }
                                // pixelpunks="pixelpunks"
                                // eth={single.collectible_id.price + " ETH"}
                                seenstatus={new Date(single.createdAt).toLocaleString('en-US', {
                                  weekday: 'long',
                                  year: 'numeric',
                                  month: 'long',
                                  hour: 'numeric',
                                  minute: 'numeric',
                                  second: 'numeric',
                                  day: 'numeric'
                                  })}
                              />
                            ))}
                          </>
                        }
                        { LoadMore ?
                            <div className="d-flex">
                              <button
                                  className="btn btn-primary"
                                  onClick={loadMore}
                              >
                                Load More
                              </button>
                            </div> : <></> }
                      </div>
                      <div className="col-sm-12 col-lg-4 mb-4 activity-number-card-right">
                        <div className="filters-listing-reset">
                          <div className="d-flex mb-2">
                            <h5 className="mr-3">
                              <b>Filters</b>
                            </h5>
                            <h5>
                              <b>
                                <a className="text-pink" onClick={resetFilterValue}>
                                  Reset filter
                                </a>
                              </b>
                            </h5>
                          </div>
                          <div className="filters-listing-button-list">
                            <button
                                className={`btn-light mr-2 mt-2 bg-white ${
                                    filterValue === 'All' ? "active" : ""
                                } `}
                                onClick={() => findFilter('All')}
                            >
                              <svg
                                  width="10"
                                  height="11"
                                  viewBox="0 0 10 11"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                    d="M0 5.18711V1.65443C0 1.27008 0.311582 0.958496 0.695937 0.958496H4.40931C4.59388 0.958496 4.77089 1.03182 4.90141 1.16233L9.425 5.68592C9.69678 5.9577 9.69678 6.39834 9.425 6.67012L5.87761 10.2175C5.60897 10.4861 5.17454 10.4897 4.90154 10.2255L0.211967 5.68721C0.0764892 5.55611 0 5.37564 0 5.18711Z"
                                    fill="#0E0E0E"
                                />
                                <circle
                                    cx="2.61"
                                    cy="3.22035"
                                    r="0.695937"
                                    fill="#121212"
                                />
                              </svg>
                              <span className="ml-2">All</span>
                            </button>
                            {all_filter.map((fill_) => (
                                <button
                                    className={`btn-light mr-2 mt-2 bg-white ${
                                        filterValue === fill_.title ? "active" : ""
                                    } `}
                                    onClick={() => findFilter(fill_.title)}
                                >
                                  <svg
                                      width="10"
                                      height="11"
                                      viewBox="0 0 10 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                        d="M0 5.18711V1.65443C0 1.27008 0.311582 0.958496 0.695937 0.958496H4.40931C4.59388 0.958496 4.77089 1.03182 4.90141 1.16233L9.425 5.68592C9.69678 5.9577 9.69678 6.39834 9.425 6.67012L5.87761 10.2175C5.60897 10.4861 5.17454 10.4897 4.90154 10.2255L0.211967 5.68721C0.0764892 5.55611 0 5.37564 0 5.18711Z"
                                        fill="#0E0E0E"
                                    />
                                    <circle
                                        cx="2.61"
                                        cy="3.22035"
                                        r="0.695937"
                                        fill="#121212"
                                    />
                                  </svg>
                                  <span className="ml-2">{fill_.title}</span>
                                </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Activity;
