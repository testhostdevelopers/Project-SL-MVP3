import React, { useState, useEffect } from "react";
import { Menu, Dropdown, Select } from 'antd';
import { motion } from "framer-motion"
import closeicon from "../assets/img/custom/close.svg";
import Accordian from "./Accordian";




export default function FilterProperties(props) {
  const { Option } = Select;
  function handleChange(value) {
  }
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  let { setFilterProperties } = props;

  const AccordianData = [
      {
        title:"Eyes",
        options:[
          {subtitle:"Eyes-1",number:"89"},
          {subtitle:"Eyes-2",number:"9"}
        ]
      },
      {
        title:"Clothing",
        options:[
          {subtitle:"Clothing-1",number:"79"},
          {subtitle:"Clothing-2",number:"69"}
        ]
      },
      {
        title:"Headwear",
        options:[
          {subtitle:"Headwear-1",number:"100"},
          {subtitle:"Headwear-2",number:"120"}
        ]
      },
      {
        title:"Background",
        options:[
          {subtitle:"Purple",number:"89"},
          {subtitle:"Blurred",number:"9"},
          {subtitle:"City",number:"57"},
          {subtitle:"Country-side",number:"289"}
        ]
      }
  ];
  const handel_ch = ['Frequency first', 'Rare first'];
  
  return (
    <motion.div
          initial="hidden"
          animate="visible"
          variants={variants} className="place-a-bid-popup-container">
          <div className="border-radius bg-white popup-width">
              <div className="justify-content-between d-flex cursor-pointer mb-3">
                  <h3 className="">Properties</h3>
                  <div className="popup-close-btn-outline cursor-pointer" onClick={() => { setFilterProperties(false); document.body.style.overflow = "scroll"; }}>
                      <img src={closeicon}/>
                  </div>
              </div>

              <div className="navbar-search property-search">
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Search by property" />
                <Select onChange={handleChange}>
                   {
                      handel_ch.map( (searchselect, sear) => 
                      <Select.Option key={sear}>{searchselect}</Select.Option> )
                    }
                </Select>
              </div>

              <div className="pro-accessories">
                  <h3>Accessories</h3>
                  <Accordian AccordianField={AccordianData} />
                  <div className="custom-filter">
                    <div className="filter-button">
                      <a className="btn btn-primary-outline">Clear</a>
                      <a className="btn btn-primary">Apply</a>
                    </div>
                  </div>
              </div>

        </div>
      </motion.div>
  );
}


