import React from "react";
import Priceicon from "../assets/img/custom/u_dollar-alt.png";
import { Select } from "antd";

export default function FilterRange({
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
  // const [isChecked, setIsChecked] = useState(false);
  // const [checkedValues, setCheckedValues] = useState([]);
  const handleToggle = () => {
    setFilterSort(false);
    setFilterCategory(false);
    setFilterCollections(false);
    setFilterProperties(false);
    setFiltersale(false);
    setFilterRange(!filterRange);
  };
  const unCheckedCheckBox = () => {
    // setActive(false);
    // setIsChecked(false);
    let node = document.querySelectorAll(".rangeselect input");
    node.forEach((ele) => {
      ele.value = "";
    });
  };

  const select_filer = ["ETH", "WETH", "BTC", "DOGE"];

  return (
    <li>
      <div className="icon">
        <img src={Priceicon} alt={""} />
      </div>
      <div
        className="ant-select ant-select-single ant-select-show-arrow"
        onClick={handleToggle}
      >
        <div className="ant-select-selector">
          <span className="ant-select-selection-item">Price range</span>
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
          className={`rangeselect app ${
            filterRange ? "custom-filter show-filter" : "custom-filter"
          }`}
        >
          <div className="input">
            <span>
              <input type="text" placeholder="0" />
            </span>

            <Select className="section-select-filter" defaultValue="ETH">
              {select_filer.map((x, y) => (
                <Select.Option key={y}>{x}</Select.Option>
              ))}
            </Select>
          </div>

          <div className="input">
            <span>
              <input type="text" placeholder="0" />
            </span>
            <Select className="section-select-filter" defaultValue="ETH">
              {select_filer.map((x, y) => (
                <Select.Option key={y}>{x}</Select.Option>
              ))}
            </Select>
          </div>

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
              /*onClick={() => {
                setActive(false);
              }}*/
            >
              Apply
            </a>
          </div>
        </div>
      )}
    </li>
  );
}
