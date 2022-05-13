import React, { useState } from "react";
import ActivityNumberCard from "../ActivityNumberCard";
import myimg from "../../assets/img/icons/custom/fill-label.svg";
import ActivityCard from "../../assets/img/custom/activity-cardonly.png";
// import { Tabs } from 'antd';

// const { TabPane } = Tabs;
const Activitytab = () => {
  const [listing, Setlisting] = useState("Listing");
  const error_data = "";

  const all_filter = [
    {
      name: "Listing",
      _filter_: "Listing",
    },
    {
      name: "Purchases",
      _filter_: "Purchases",
    },
    {
      name: "Sales",
      _filter_: "Sales",
    },
    {
      name: "Transfer",
      _filter_: "Transfer",
    },
    {
      name: "Burns",
      _filter_: "Burns",
    },
    {
      name: "Bids",
      _filter_: "Bids",
    },
    {
      name: "Like",
      _filter_: "Like",
    },
    {
      name: "Following",
      _filter_: "Following",
    },
  ];

  const [filterData, setFIlterData] = useState(all_filter);

  const findFilter = (key) => {
    Setlisting(key);
    let arr = [];
    all_filter.forEach((v) => {
      if (v._filter_ === key) {
        arr.push(v);
      }
    });
    setFIlterData(arr);
  };

  // useEffect(() => {
  //     if(filterData.length > 0){
  //         seterror_data('');
  //     } else{
  //         seterror_data('Data Not Found..!')
  //     }
  // }, [filterData]);

  return (
    <div>
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
            <div className="filtername">
              {listing === "Listing" ? <h6>Listing</h6> : ""}
              {listing === "Purchases" ? <h6>Purchases</h6> : ""}
              {listing === "Sales" ? <h6>Sales</h6> : ""}
              {listing === "Transfer" ? <h6>Transfer</h6> : ""}
              {listing === "Burns" ? <h6>Burn</h6> : ""}
              {listing === "Bids" ? <h6>Bids</h6> : ""}
              {listing === "Like" ? <h6>Likes</h6> : ""}
              {listing === "Following" ? <h6>Following</h6> : ""}
            </div>
            <div className="row align-items-start">
              <div className="d-flex col-lg-8 activity activity-number-card-left">
                <h5 id="not_match" style={{ color: "red" }}>
                  {error_data}
                </h5>

                {filterData.map(() => (
                  <ActivityNumberCard
                    activitynumbercardimg={ActivityCard}
                    title="123456"
                    FillLabel={myimg}
                    filter={listing}
                    pixelpunks="pixelpunks"
                    eth="0.05 ETH"
                    seenstatus="Just now"
                  />
                ))}
              </div>
              <div className="col-sm-12 col-lg-4 mb-4 activity-number-card-right">
                <div className="filters-listing-reset">
                  <div className="d-flex mb-2">
                    <h5 className="mr-3">
                      <b>Filters</b>
                    </h5>
                    <h5>
                      <b>
                        <a href="/#" className="text-pink">
                          Reset filter
                        </a>
                      </b>
                    </h5>
                  </div>
                  <div className="filters-listing-button-list">
                    {all_filter.map((fill_) => (
                      <button
                        className={`btn-light mr-2 mt-2 bg-white ${
                          listing === fill_.name ? "active" : ""
                        } `}
                        onClick={() => findFilter(fill_.name)}
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
                        <span className="ml-2">{fill_.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activitytab;
