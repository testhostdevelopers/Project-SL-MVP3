import React from 'react'
import { Menu, Dropdown, Tabs, Select } from 'antd';
import { motion } from "framer-motion"
import menuline from "../assets/img/custom/menu-line-icon.png";
import categoryicon from "../assets/img/custom/category-icon.svg";
import propertiesicon from "../assets/img/custom/properties.png";
import flashlight from "../assets/img/custom/flashlight-line.png";
import Priceicon from "../assets/img/custom/u_dollar-alt.png";


const { TabPane } = Tabs;
const { Option } = Select;

const Following = () => {

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }


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
                        {/* <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
                                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M13 1.9987V0.332031H3V1.9987H13ZM15.5 6.16536V7.83203H0.5V6.16536H15.5ZM13 11.9987V13.6654H3V11.9987H13Z" fill="black" />
                                    </svg>
                                    Recently added</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">
                                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0.5 5.83203H2.16667V4.16537H0.5V5.83203ZM0.5 9.16536H2.16667V7.4987H0.5V9.16536ZM0.5 2.4987H2.16667V0.832031H0.5V2.4987ZM3.83333 5.83203H15.5V4.16537H3.83333V5.83203ZM3.83333 9.16536H15.5V7.4987H3.83333V9.16536ZM3.83333 0.832031V2.4987H15.5V0.832031H3.83333Z" fill="#1D1D1D" />
                                    </svg>
                                    Category</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">
                                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0.5 5.83203H2.16667V4.16537H0.5V5.83203ZM0.5 9.16536H2.16667V7.4987H0.5V9.16536ZM0.5 2.4987H2.16667V0.832031H0.5V2.4987ZM3.83333 5.83203H15.5V4.16537H3.83333V5.83203ZM3.83333 9.16536H15.5V7.4987H3.83333V9.16536ZM3.83333 0.832031V2.4987H15.5V0.832031H3.83333Z" fill="#1D1D1D" />
                                    </svg>
                                    Collections</a>
                            </li>

                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">
                                    <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M14.5026 7.5H7.83594V0L0.335938 12.5H6.16927V20L14.5026 7.5ZM6.16734 6.0166V9.1666H11.3865L7.83401 14.4949V10.8333H3.27734L6.16734 6.0166Z" fill="black" />
                                    </svg>
                                    Sale type</a>
                            </li>

                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">
                                    <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.66667 8.16797H5.83333V4.83464H7.5C7.72101 4.83464 7.93297 4.92243 8.08926 5.07871C8.24554 5.23499 8.33333 5.44696 8.33333 5.66797C8.33333 5.88898 8.42113 6.10094 8.57741 6.25722C8.73369 6.4135 8.94565 6.5013 9.16667 6.5013C9.38768 6.5013 9.59964 6.4135 9.75592 6.25722C9.9122 6.10094 10 5.88898 10 5.66797C10 5.00493 9.73661 4.36904 9.26777 3.9002C8.79893 3.43136 8.16304 3.16797 7.5 3.16797H5.83333V1.5013C5.83333 1.28029 5.74554 1.06833 5.58926 0.912046C5.43297 0.755766 5.22101 0.667969 5 0.667969C4.77899 0.667969 4.56702 0.755766 4.41074 0.912046C4.25446 1.06833 4.16667 1.28029 4.16667 1.5013V3.16797H3.33333C2.44928 3.16797 1.60143 3.51916 0.976311 4.14428C0.351189 4.7694 0 5.61725 0 6.5013C0 7.38536 0.351189 8.2332 0.976311 8.85833C1.60143 9.48345 2.44928 9.83464 3.33333 9.83464H4.16667V13.168H2.5C2.27899 13.168 2.06702 13.0802 1.91074 12.9239C1.75446 12.7676 1.66667 12.5556 1.66667 12.3346C1.66667 12.1136 1.57887 11.9017 1.42259 11.7454C1.26631 11.5891 1.05435 11.5013 0.833333 11.5013C0.61232 11.5013 0.400358 11.5891 0.244078 11.7454C0.0877975 11.9017 0 12.1136 0 12.3346C0 12.9977 0.263392 13.6336 0.732233 14.1024C1.20107 14.5712 1.83696 14.8346 2.5 14.8346H4.16667V16.5013C4.16667 16.7223 4.25446 16.9343 4.41074 17.0906C4.56702 17.2468 4.77899 17.3346 5 17.3346C5.22101 17.3346 5.43297 17.2468 5.58926 17.0906C5.74554 16.9343 5.83333 16.7223 5.83333 16.5013V14.8346H6.66667C7.55072 14.8346 8.39857 14.4834 9.02369 13.8583C9.64881 13.2332 10 12.3854 10 11.5013C10 10.6172 9.64881 9.7694 9.02369 9.14428C8.39857 8.51916 7.55072 8.16797 6.66667 8.16797ZM4.16667 8.16797H3.33333C2.89131 8.16797 2.46738 7.99237 2.15482 7.67981C1.84226 7.36725 1.66667 6.94333 1.66667 6.5013C1.66667 6.05927 1.84226 5.63535 2.15482 5.32279C2.46738 5.01023 2.89131 4.83464 3.33333 4.83464H4.16667V8.16797ZM6.66667 13.168H5.83333V9.83464H6.66667C7.10869 9.83464 7.53262 10.0102 7.84518 10.3228C8.15774 10.6354 8.33333 11.0593 8.33333 11.5013C8.33333 11.9433 8.15774 12.3673 7.84518 12.6798C7.53262 12.9924 7.10869 13.168 6.66667 13.168Z" fill="black" />
                                    </svg>
                                    Price range</a>
                            </li>
                        </ul> */}

                        <ul className="filter topSeller" >
                            <li>
                                <span className="label">Filter & Sort</span>
                                <span className="icon">
                                    <img src={menuline}/>
                                </span>
                                <Select className="section-select-filter" defaultValue="Recently added">
                                    <Option value="day">Recently added</Option>
                                    <Option value="week">Price: Low to High</Option>
                                    <Option value="month">Price: High to Low</Option>
                                    <Option value="sixYear">Auction ending soon</Option>
                                </Select>
                            </li>
                            <li>
                                <span className="icon">
                                    <img src={categoryicon}/>
                                </span>
                                <Select className="section-select-filter" defaultValue="Category">
                                    <Option value="All">All</Option>
                                    <Option value="Cryptoloria">Cryptoloria</Option>
                                    <Option value="Art">Art</Option>
                                    <Option value="Photography">Photography</Option>
                                    <Option value="Games">Games</Option>
                                    <Option value="Metaverses">Metaverses</Option>
                                </Select>
                            </li>
                            <li>
                                <span className="icon">
                                    <img src={categoryicon}/>
                                </span>
                                <Select className="section-select-filter" defaultValue="Collections">
                                    <Option value="Cryptoloria">Cryptoloria</Option>
                                    <Option value="Art">Art</Option>
                                    <Option value="Photography">Photography</Option>
                                    <Option value="Games">Games</Option>
                                    <Option value="Metaverses">Metaverses</Option>
                                </Select>
                            </li>
                            <li>
                                <span className="label">Properties</span>
                                <span className="icon">
                                    <img src={propertiesicon}/>
                                </span>
                                <Select className="section-select-filter" defaultValue="All 257">
                                    <Option value="day">Option 1</Option>
                                    <Option value="week">Option 2</Option>
                                    <Option value="month">Option 3</Option>
                                    <Option value="sixYear">Option 4</Option>
                                </Select>
                            </li>
                            <li>
                                <span className="icon">
                                    <img src={flashlight}/>
                                </span>
                                <Select className="section-select-filter" defaultValue="Sale type">
                                    <Option value="day">Timed Auction</Option>
                                    <Option value="week">Fixed price</Option>
                                    <Option value="month">Not for sale</Option>
                                    <Option value="sixYear">Open for offers</Option>
                                </Select>
                            </li>

                            <li>
                                <span className="icon">
                                    <img src={Priceicon}/>
                                </span>
                                <Select className="section-select-filter" defaultValue="Price range">
                                    <Option value="day">0 - 5</Option>
                                    <Option value="week">5 - 10</Option>
                                    <Option value="month">10 - 15</Option>
                                    <Option value="sixYear">15 - 20</Option>
                                </Select>
                            </li>

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
