import React, { useState, useEffect } from "react";
import categoryicon from "../assets/img/custom/category-icon.svg";
import planet from "../assets/img/custom/ringed-planet.png";
import Photography from "../assets/img/custom/camera.png";
import Games from "../assets/img/custom/joystick.png";
import Metaverses from "../assets/img/custom/alien-monster.png";
import Art from "../assets/img/custom/rainbow.png";
import { Menu, Dropdown, Select } from 'antd';

  export default function FilterCategory({ }) {
    const { Option } = Select;
    const [isActive, setActive] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [checkedValues, setCheckedValues] = useState('Category');
    const handleToggle = () => {
      setActive(!isActive);
    };
    // const unCheckedCheckBox = () => {
    //   setActive(false);
    //   setIsChecked(false);
    //   let node = document.querySelectorAll(".filtersort-check input[type='radio']")
    //   node.forEach((ele) => {
    //     ele.checked = false;
    //   })
    // }
    const isActiveFunc = () => {
      setActive(false);
      setIsChecked(true)
      let checkedV = document.querySelectorAll(".filtercategory-check input[type='radio']");
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
  
        <div className="icon">
          <img src={categoryicon} />
        </div>
        <div className="ant-select ant-select-single ant-select-show-arrow" onClick={handleToggle}>
          <div className="ant-select-selector">
            <span className="ant-select-selection-item">{isChecked ? checkedValues : 'Category'}</span>
          </div>
          <span className="ant-select-arrow">
            <span role="img" aria-label="down" className="anticon anticon-down ant-select-suffix">
              <svg viewBox="64 64 896 896" focusable="false" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg>
            </span>
          </span>
        </div>
  
        <div className={`app ${isActive ? "custom-filter show-filter" : "custom-filter"}`}>
        <ul className="filtercategory-check">
         <li>
            <input type="radio" id="All" value="All" name="filtercategory" />
            <label for="All" onClick={() => isActiveFunc()} >
                All
            </label>
          </li>

          <li>
            <input type="radio" id="ctoCryptoloria" value="Cryptoloria" name="filtercategory" />
            <label for="ctoCryptoloria" onClick={() => isActiveFunc()} >
              <img src={planet} /> Cryptoloria
            </label>
          </li>

          <li>
            <input type="radio" id="ctoArt" value="Art" name="filtercategory" />
            <label for="ctoArt" onClick={() => isActiveFunc()} >
              <img src={Art} /> Art
            </label>
          </li>

          <li>
            <input type="radio" id="ctoPhotography" value="Photography" name="filtercategory" />
            <label for="ctoPhotography" onClick={() => isActiveFunc()} >
              <img src={Photography} /> Photography
            </label>
          </li>

          <li>
            <input type="radio" id="ctoGames" value="Games" name="filtercategory" />
            <label for="ctoGames" onClick={() => isActiveFunc()} >
              <img src={Games} />  Games
            </label>
          </li>

          <li>
            <input type="radio" id="ctoMetaverses" value="Metaverses" name="filtercategory" />
            <label for="ctoMetaverses" onClick={() => isActiveFunc()} >
              <img src={Metaverses} />  Metaverses
            </label>
          </li>
        </ul>
  
        </div>
      </li>
    );
  }
  
  
  


