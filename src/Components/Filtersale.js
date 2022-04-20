import React, { useState, useEffect } from "react";
import flashlight from "../assets/img/custom/flashlight-line.png";
// import userProfile from "../assets/img/custom/userProfilePictures.png";
// import { Select } from "antd";

export default function Filtersale({
  setFilterSort,
  filterSort,
  filterCategory,
  filterCollections,
  filterProperties,
  filtersale,
  filterRange,
  setFilterCategory,
  setFilterCollections,
  setFilterProperties,
  setFiltersale,
  setFilterRange,
}) {
  // const { Option } = Select;
  // const [isActive, setActive] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [checkedValues, setCheckedValues] = useState([]);
  const handleToggle = () => {
    setFilterSort(false);
    setFilterCategory(false);
    setFilterCollections(false);
    setFilterProperties(false);
    setFiltersale(!filtersale);
    setFilterRange(false);
  };
  const unCheckedCheckBox = () => {
    setFiltersale(false);
    setIsChecked(false);
    let node = document.querySelectorAll(
      ".filtersale-check input[type='checkbox']"
    );
    node.forEach((ele) => {
      ele.checked = false;
    });
  };
  useEffect(() => {
    let checkedV = document.querySelectorAll(
      ".filtersale-check input[type='checkbox']"
    );
    let arr = [];
    checkedV.forEach((ele) => {
      if (ele.checked === true) {
        setIsChecked(true);
        arr.push(ele.value);
      }
    });
    setCheckedValues(arr);
  }, [filtersale]);

  console.log(checkedValues, "checked values");
  // console.log(document.querySelectorAll(".custom-filter ul input[type='checkbox']"), 'checkboxes')
  return (
    <li>
      <div className="icon">
        <img src={flashlight} alt={""} />
      </div>
      <div
        className="ant-select ant-select-single ant-select-show-arrow"
        onClick={handleToggle}
      >
        <div className="ant-select-selector">
          <span className="ant-select-selection-item">
            {isChecked ? checkedValues : "Sale type"}
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
              <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
            </svg>
          </span>
        </span>
      </div>

      {(filterCategory === false ||
        filterSort === false ||
        filterProperties === false ||
        filterCollections === false ||
        filterRange === false) && (
        <div
          className={`app ${
            filtersale ? "custom-filter show-filter" : "custom-filter"
          }`}
        >
          <ul className="filtersale-check">
            <li>
              <input type="checkbox" id="TimedAuction" value="Timed Auction" />
              <label for="TimedAuction">Timed Auction</label>
            </li>

            <li>
              <input type="checkbox" id="Fixedprice" value="Fixed price" />
              <label for="Fixedprice">Fixed price</label>
            </li>

            <li>
              <input type="checkbox" id="Notforsale" value="Not for sale" />
              <label for="Notforsale">Not for sale</label>
            </li>

            <li>
              <input
                type="checkbox"
                id="Openforoffers"
                value="Open for offers"
              />
              <label for="Openforoffers">Open for offers</label>
            </li>
          </ul>

          <div className="filter-button">
            <a
              className="btn btn-primary-outline"
              href="/#"
              onClick={() => unCheckedCheckBox()}
            >
              Clear
            </a>
            <a
              className="btn btn-primary"
              href="/#"
              onClick={() => {
                setFiltersale(false);
                setIsChecked(false);
              }}
            >
              Apply
            </a>
          </div>
        </div>
      )}
    </li>
  );
}
