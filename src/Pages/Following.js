
import React, { useState, useContext, useEffect } from 'react';
import { Menu, Dropdown, Tabs, Select } from 'antd';
import { motion } from "framer-motion"
import menuline from "../assets/img/custom/menu-line-icon.png";
import categoryicon from "../assets/img/custom/category-icon.svg";
import propertiesicon from "../assets/img/custom/properties.svg";
import flashlight from "../assets/img/custom/flashlight-line.png";
import Priceicon from "../assets/img/custom/u_dollar-alt.png";

import FilterSort from '../Components/FilterSort';
import FilterCategory from '../Components/FilterCategory';
import FilterCollections from '../Components/FilterCollections';
import Filtersale from '../Components/Filtersale';
import FilterRange from '../Components/FilterRange';
import FilterProperties from '../Components/FilterProperties';


const { TabPane } = Tabs;
const { Option } = Select;

const Following = () => {

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }
    const [filterSort, setFilterSort] = useState(false);
    const [filterCategory, setFilterCategory] = useState(false);
    const [filterCollections, setFilterCollections] = useState(false);
    const [filterProperties, setFilterProperties] = useState(false);
    const [filtersale, setFiltersale] = useState(false);
    const [filterRange, setFilterRange] = useState(false);

    return (
        <>
            <motion.section
                initial="hidden"
                animate="visible"
                variants={variants}
                className="create-single-section-container following-page-section">
                <div className="container-fluid">
                    <div className="following-divition">
                        <h2>Following</h2>
                    

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
                                    <img src={propertiesicon} />
                                </div>
                                <div className="ant-select ant-select-single ant-select-show-arrow" onClick={() => setFilterProperties(true)}>
                                    <div className="ant-select-selector">
                                    <span className="ant-select-selection-item">All 257</span>
                                    </div>
                                    <span className="ant-select-arrow">
                                    <span role="img" aria-label="down" className="anticon anticon-down ant-select-suffix">
                                        <svg viewBox="64 64 896 896" focusable="false" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path></svg>
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
                    <div className="tab-content w-100 d-flex justify-content-center flex-column align-items-center mt-5" id="myTabContent">
                        <div className="tab-pane w-100 fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <h3>Not items found 1</h3>
                            <div>
                                <span className="color-gray">Come back soon or browse the
                                    items on our marketplace.</span>
                            </div>
                            <button className="bg-white border-radius profile-not-found-browse-btn mt-4 p-3" style={{ borderRadius: "30px" }}>Browse marketplace</button>
                        </div>
                        <div className="tab-pane w-100 fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <h3>Not items found 2</h3>
                            <div>
                                <span className="color-gray">Come back soon or browse the
                                    items on our marketplace.</span>
                            </div>
                            <button className="bg-white border-radius profile-not-found-browse-btn mt-4 p-3" style={{ borderRadius: "30px" }}>Browse marketplace</button>
                        </div>
                        <div className="tab-pane w-100 fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                            <h3>Not items found 3</h3>
                            <div>
                                <span className="color-gray">Come back soon or browse the
                                    items on our marketplace.</span>
                            </div>
                            <button className="bg-white border-radius profile-not-found-browse-btn mt-4 p-3" style={{ borderRadius: "30px" }}>Browse marketplace</button>
                        </div>
                    </div>
                </div>
            </motion.section>
        </>
    )
}

export default Following
