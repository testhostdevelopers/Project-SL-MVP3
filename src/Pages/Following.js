import React, { useState, useEffect } from "react";
// import HotBids from "../Components/HotBids";
import { motion } from "framer-motion";
import artWorkWeek1 from "../assets/img/custom/artWorkWeek1.png";
// import artWorkWeek2 from "../assets/img/custom/artWorkWeek2.png";
// import artWorkWeek3 from "../assets/img/custom/artWorkWeek3.png";
// import artWorkWeek4 from "../assets/img/custom/artWorkWeek4.png";
import propertiesicon from "../assets/img/custom/properties.svg";
import FilterSort from "../Components/FilterSort";
import FullScreenImage from "../Components/Popup/FullScreenImage";
import FilterCategory from "../Components/FilterCategory";
import FilterCollections from "../Components/FilterCollections";
import Filtersale from "../Components/Filtersale";
import FilterRange from "../Components/FilterRange";
import FilterProperties from "../Components/FilterProperties";
import axios from "axios";
import {Config} from "../utils/config";
import LiveAuctions from "../Components/LiveAuctions";
// import categoryicon from "../assets/img/custom/category-icon.svg";
// import fabaLogo from "../assets/img/custom/x.svg";
// import { Menu, Dropdown, Select } from "antd";
// import TopCard from "../Components/TopCard";
// import LiveAuctions from "../Components/LiveAuctions";
// const { TabPane } = Tabs;
// const { Option } = Select;

const Following = () => {
  const apiToken = sessionStorage.getItem("apiToken");
  const userData = JSON.parse(sessionStorage.getItem("userdata")) || {};
  let [openImage, setOpenImage] = useState(false);
  const [filterCategory, setFilterCategory] = useState(false);
  const [filterSort, setFilterSort] = useState(false);
  const [filterCollections, setFilterCollections] = useState(false);
  const [filterProperties, setFilterProperties] = useState(false);
  const [filtersale, setFiltersale] = useState([]);
  const [filterRange, setFilterRange] = useState(false);
  let [collectionsList, setCollectionsList] = useState([]);
  let offset = 0;
  let limit = 12;
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const getAllCollectibleList = async () => {
    await axios
      .get(`${Config.baseURL}v1/collectible/getallcollectiblelist/` + offset + `/` + limit, {
        data: {
          user_id: userData._id
        },
        headers: {
          Authorization: `Bearer ${apiToken}`,
        }
      })
      .then(response => {
        // console.log('response.data', response.data);
        if (response.data.response_code === "API_SUCCESS") {
          response.data.data.forEach((element, index) => {
            response.data.data[index].show = true;
            if (element.likedBy.includes(userData._id)) {
              response.data.data[index].like = true;
            } else {
              response.data.data[index].like = false;
            }
          });
          setCollectionsList(response.data.data);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  if (filterCategory) {
    // console.log('filterCategory', filterCategory);
    collectionsList.forEach((SingleData, key) => {
      if (filterCategory === "All") {
        collectionsList[key].show = true;
      } else if (filterCategory.length) {
        collectionsList[key].show = SingleData.category === filterCategory;
      }
    });
  }
  if (filterSort) {
    if (filterSort === "RecentlyAdded") {
      collectionsList.sort((a, b) => {
        let da = new Date(a.createdAt),
            db = new Date(b.createdAt);
        return db - da;
      });
    } else if (filterSort === "LowtoHigh") {
      collectionsList.sort((a, b) => {
        return a.price - b.price;
      });
    } else if (filterSort === "HightoLow") {
      collectionsList.sort((a, b) => {
        return b.price - a.price;
      });
    }
  }
  if (filterCollections) {
    filterCollections.forEach((SingleCollection, key) => {
      // console.log('SingleCollection', SingleCollection);
      collectionsList.forEach((SingleData, key) => {
        if (SingleData.collection_id.title === SingleCollection) {
          collectionsList[key].show = true;
        } else {
          // collectionsList[key].show = false;
        }
      });
    });
  }
  if (filterRange) {
    console.log('filterRange', filterRange);
    if (filterRange[0] > 0 || filterRange[1] > 0) {
      collectionsList.forEach((SingleData, key) => {
        if (SingleData.price > filterRange[0] && SingleData.price < filterRange[1]) {
          console.log('SingleData.price > filterRange[0]', SingleData.price);
          collectionsList[key].show = true;
        } else {
          // console.log('SingleData.price', SingleData.price);
          collectionsList[key].show = false;
        }
      });
    } else {
      collectionsList.forEach((SingleData, key) => {
        collectionsList[key].show = true;
      });
    }
  }
  if (filtersale.length) {
    // console.log('filtersale', filtersale);
    collectionsList.forEach((SingleData, key) => {
      collectionsList[key].show = filtersale.includes(SingleData.price_type);
    });
  } else if (filtersale == []) {
    collectionsList.forEach((SingleData, key) => {
      collectionsList[key].show = true;
    });
  }
  useEffect(() => {
    if (sessionStorage.getItem("apiToken")) {
      getAllCollectibleList().then(r => {});
    }
  }, []);

  return (
    <>
      {openImage && <FullScreenImage setOpenImage={setOpenImage} />}
      {/*{filterProperties && (
        <FilterProperties setFilterProperties={setFilterProperties} />
      )}*/}

      <motion.section
        initial="hidden"
        animate="visible"
        variants={variants}
        className="liveAuction hot-bids-liveAuction margin-50"
      >
        <div className="container-fluid">
          <div className="w-100 d-flex justify-content-between align-items-center explore-page">
            <h3>
              <b>Following</b>
            </h3>
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
              <FilterCollections
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
              {/*<li>
                <span className="label">Properties</span>
                <div className="icon">
                  <img src={propertiesicon} alt={""} />
                </div>
                <div
                  className="ant-select ant-select-single ant-select-show-arrow"
                  onClick={() => setFilterProperties(true)}
                >
                  <div className="ant-select-selector">
                    <span className="ant-select-selection-item">All 257</span>
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
                        <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"/>
                      </svg>
                    </span>
                  </span>
                </div>
              </li>*/}
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
            {collectionsList.map((SingleCollectible, key) => (
              SingleCollectible.show ? <>
                <LiveAuctions
                  key={key}
                  liked={SingleCollectible.like}
                  Coverimg={SingleCollectible.img_path.indexOf('nftstorage.link') > -1 ? 'https://' + SingleCollectible.img_path : artWorkWeek1}
                  heartcount={SingleCollectible.likes}
                  time={new Date(SingleCollectible.createdAt).toLocaleString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric',
                  })}
                  id={SingleCollectible._id}
                  title={SingleCollectible.title}
                  WETH={SingleCollectible.price}
                  isOpenInProfile={false}
                  isLiveAuctions={false}
                  bid="Highest bid 1/1"
                />
              </> : <></>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Following;
