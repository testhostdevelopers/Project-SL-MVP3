import React, { useState } from "react";
import { motion } from "framer-motion";
import artWorkWeek1 from "../assets/img/custom/artWorkWeek1.png";
import artWorkWeek2 from "../assets/img/custom/artWorkWeek2.png";
import artWorkWeek3 from "../assets/img/custom/artWorkWeek3.png";
import artWorkWeek4 from "../assets/img/custom/artWorkWeek4.png";
import propertiesicon from "../assets/img/custom/properties.svg";
import HotBids from "../Components/HotBids";
import FullScreenImage from "../Components/Popup/FullScreenImage";
import FilterSort from "../Components/FilterSort";
import FilterCategory from "../Components/FilterCategory";
import FilterCollections from "../Components/FilterCollections";
import Filtersale from "../Components/Filtersale";
import FilterRange from "../Components/FilterRange";
import FilterProperties from "../Components/FilterProperties";

// const { TabPane } = Tabs;
// const { Option } = Select;

const Cryptoloria = () => {
  let [openImage, setOpenImage] = useState(false);
  const [filterSort, setFilterSort] = useState(false);
  const [filterCategory, setFilterCategory] = useState(false);
  const [filterCollections, setFilterCollections] = useState(false);
  const [filterProperties, setFilterProperties] = useState(false);
  const [filtersale, setFiltersale] = useState(false);
  const [filterRange, setFilterRange] = useState(false);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  /*const menu = (
    <Menu>
      <Menu.Item>Change Price</Menu.Item>
      <Menu.Item>Transfer Token</Menu.Item>
      <Menu.Item>Burn Token</Menu.Item>
      <Menu.Item>Report</Menu.Item>
    </Menu>
  );*/

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
              <b>Explore</b>
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
            <HotBids
              Coverimg={artWorkWeek1}
              heartcount="24"
              time="3H : 15M : 50S left"
              title="Memescalf#782021"
              WETH="1.2 WETH"
              bid="Highest bid 1/1"
            />
            <HotBids
              Coverimg={artWorkWeek2}
              heartcount="24"
              time="3H : 15M : 50S left"
              title="Memescalf#782021"
              WETH="1.2 WETH"
              bid="Highest bid 1/1"
            />
            <HotBids
              Coverimg={artWorkWeek3}
              heartcount="24"
              time="3H : 15M : 50S left"
              title="Memescalf#782021"
              WETH="1.2 WETH"
              bid="Highest bid 1/1"
            />
            <HotBids
              Coverimg={artWorkWeek4}
              heartcount="24"
              time="3H : 15M : 50S left"
              title="Memescalf#782021"
              WETH="1.2 WETH"
              bid="Highest bid 1/1"
            />
            <HotBids
              Coverimg={artWorkWeek1}
              heartcount="24"
              time="3H : 15M : 50S left"
              title="Memescalf#782021"
              WETH="1.2 WETH"
              bid="Highest bid 1/1"
            />
            <HotBids
              Coverimg={artWorkWeek2}
              heartcount="24"
              time="3H : 15M : 50S left"
              title="Memescalf#782021"
              WETH="1.2 WETH"
              bid="Highest bid 1/1"
            />
            <HotBids
              Coverimg={artWorkWeek3}
              heartcount="24"
              time="3H : 15M : 50S left"
              title="Memescalf#782021"
              WETH="1.2 WETH"
              bid="Highest bid 1/1"
            />
            <HotBids
              Coverimg={artWorkWeek4}
              heartcount="24"
              time="3H : 15M : 50S left"
              title="Memescalf#782021"
              WETH="1.2 WETH"
              bid="Highest bid 1/1"
            />
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Cryptoloria;
