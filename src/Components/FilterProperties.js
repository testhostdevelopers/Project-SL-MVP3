import React, { useState, useEffect } from "react";
import propertiesicon from "../assets/img/custom/properties.png";
import { Menu, Dropdown, Select } from 'antd';

export default function FilterProperties({ }) {
  const { Option } = Select;
  const [isActive, setActive] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [checkedValues, setCheckedValues] = useState('All 257');
  const handleToggle = () => {
    setActive(!isActive);
  };
  const isActiveFunc = () => {
    setActive(false);
    setIsChecked(true)
    let checkedV = document.querySelectorAll(".filterproperties-check input[type='radio']");
    console.log(checkedV, 'elements');
    setTimeout(() => {
      setValueForInput(checkedV);
    }, 100);
  }

  const setValueForInput = (array) => {
    array.forEach((ele) => {
      console.log(ele.checked, 'checked', ele.id)
      if (ele.checked === true) {
        setCheckedValues(ele.value);
      }
    });
  }

  // console.log(document.querySelectorAll(".custom-filter ul input[type='checkbox']"), 'checkboxes')
  return (
    <li>
      <span className="label">Properties</span>
      <div className="icon">
        <img src={propertiesicon} />
      </div>
      <div className="ant-select ant-select-single ant-select-show-arrow" onClick={handleToggle}>
        <div className="ant-select-selector">
          <span className="ant-select-selection-item">{isChecked ? checkedValues : 'All 257'}</span>
        </div>
        <span className="ant-select-arrow">
          <span role="img" aria-label="down" className="anticon anticon-down ant-select-suffix">
            <svg viewBox="64 64 896 896" focusable="false" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg>
          </span>
        </span>
      </div>

      <div className={`app ${isActive ? "custom-filter show-filter" : "custom-filter"}`}>
        <ul className="filterproperties-check">
          <li>
            <input type="radio" id="All" value="All" name="properties" />
            <label for="Recentlyadded" onClick={() => isActiveFunc()} >
              All
            </label>
          </li>

          <li>
            <input type="radio" id="Option1" value="Option 1" name="properties" />
            <label for="Option1" onClick={() => isActiveFunc()} >
              Option 1
            </label>
          </li>

          <li>
            <input type="radio" id="Option2" value="Option 2" name="properties" />
            <label for="Option2" onClick={() => isActiveFunc()} >
              Option 1
            </label>
          </li>
          <li>
            <input type="radio" id="Option3" value="Option 3" name="properties" />
            <label for="Option3" onClick={() => isActiveFunc()} >
              Option 1
            </label>
          </li>
          <li>
            <input type="radio" id="Option4" value="Option 4" name="properties" />
            <label for="Option4" onClick={() => isActiveFunc()} >
              Option 1
            </label>
          </li>
        </ul>

      </div>
    </li>
  );
}


