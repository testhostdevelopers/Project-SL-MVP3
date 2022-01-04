import React, { useEffect, useState } from 'react'
import searchLine from "../../assets/img/icons/custom/search-line.svg";
import vectorLogo from "../../assets/img/custom/Vector.svg";
import menu4Line from "../../assets/img/icons/custom/menu-4-line.svg";
import userProfilePictures from "../../assets/img/icons/custom/userNav.svg";
import fabaLogo from "../../assets/img/custom/x.svg";
import { useLocation, Link } from "react-router-dom";
import userTick from "../../assets/img/custom/StarlightbalanceIcon.svg";
import grayPp from "../../assets/img/custom/grayPp.png";
import McdoIcon from "../../assets/img/custom/mcdoicon.svg";
import menuclose from "../../assets/img/custom/close.png";
import BalanceIcon from "../../assets/img/custom/BalanceIcon.svg";
import starlight from "../../assets/img/custom/starlight.png";
import BidingbalanceIcon from "../../assets/img/custom/BidingbalanceIcon.svg";



const Navbar = () => {

    const [theme, setTheme] = useState(localStorage.getItem('theme'))
    const [openProfileDropMenu, setOpenProfileDropMenu] = useState(false);
    const [notificationPopup, setNotificationPopup] = useState(false);

    const location = useLocation();

    useEffect(() => {
        localStorage.setItem('theme', theme);
        if (theme === true) {
            document.documentElement.classList.add('dark-md');
            document.documentElement.classList.remove('light-md');
            document.documentElement.style.setProperty('--bg-main', '#121212');
            document.documentElement.style.setProperty('--bg-card', '#181818');
            document.documentElement.style.setProperty('--bg-white', '#000');
            document.documentElement.style.setProperty('--black-color', '#fff');
            document.documentElement.style.setProperty('--gray-bg', '#232323');
            document.documentElement.style.setProperty('--white-color', '#111');
            document.documentElement.style.setProperty('--black-text', '#fff');
            document.documentElement.style.setProperty('--gray-color', '#979797');
            document.documentElement.style.setProperty('--faq-container', '#000');
            document.documentElement.style.setProperty('--slider-opacity-card', '0, 0, 0');
            document.documentElement.style.setProperty('--btn-light-white', '#232323');
            document.documentElement.style.setProperty('--text-light-color', '#8D9299');
            document.documentElement.style.setProperty('--notification-ping-bg', "#402F5B");
            document.documentElement.style.setProperty('--footer-input-bg', "#C7C7C7");
            document.documentElement.style.setProperty('--bg-main-white', "#121212");
            document.documentElement.style.setProperty('--menu-link', "#fff");
            document.documentElement.style.setProperty('--light-gray', "#2a2a2a");
            document.documentElement.style.setProperty('--bgopacity', "rgba(21, 21, 21, 0.8)");
            document.documentElement.style.setProperty('--arrowbg', "#392F3B");
            document.documentElement.style.setProperty('--bothblack', "#000");


        } else {
            document.documentElement.classList.remove('dark-md');
            document.documentElement.classList.add('light-md');
            document.documentElement.style.setProperty('--bg-main', '#FCFCFC');
            document.documentElement.style.setProperty('--bg-card', '#fff');
            document.documentElement.style.setProperty('--bg-white', '#fff');
            document.documentElement.style.setProperty('--black-color', '#000');
            document.documentElement.style.setProperty('--gray-bg', '#EDEDED');
            document.documentElement.style.setProperty('--white-color', '#fff');
            document.documentElement.style.setProperty('--black-text', '#000');
            document.documentElement.style.setProperty('--gray-color', '#9D9D9D');
            document.documentElement.style.setProperty('--faq-container', '#1a252f');
            document.documentElement.style.setProperty('--slider-opacity-card', '255, 255, 255');
            document.documentElement.style.setProperty('--btn-light-white', '#fff');
            document.documentElement.style.setProperty('--text-light-color', '#111');
            document.documentElement.style.setProperty('--notification-ping-bg', "#F7F2FF");
            document.documentElement.style.setProperty('--footer-input-bg', "#fff");
            document.documentElement.style.setProperty('--bg-main-white', "#fff");
            document.documentElement.style.setProperty('--menu-link', "#fff");
            document.documentElement.style.setProperty('--light-gray', "#C7C7C7");
            document.documentElement.style.setProperty('--bgopacity', "rgba(255, 255, 255, 0.8)");
            document.documentElement.style.setProperty('--arrowbg', "#F0E7F2");
            document.documentElement.style.setProperty('--bothblack', "#000");
        }
    }, [theme])

    let activeMode = () => {
        setTheme(!theme)
        localStorage.setItem('theme', theme);
        if (theme === true) {
            document.documentElement.classList.add('dark-md');
            document.documentElement.classList.remove('light-md');
            document.documentElement.style.setProperty('--bg-main', '#121212');
            document.documentElement.style.setProperty('--bg-card', '#181818');
            document.documentElement.style.setProperty('--bg-white', '#000');
            document.documentElement.style.setProperty('--black-color', '#fff');
            document.documentElement.style.setProperty('--gray-bg', '#232323');
            document.documentElement.style.setProperty('--white-color', '#111');
            document.documentElement.style.setProperty('--black-text', '#fff');
            document.documentElement.style.setProperty('--gray-color', '#979797');
            document.documentElement.style.setProperty('--faq-container', '#000');
            document.documentElement.style.setProperty('--slider-opacity-card', '0, 0, 0');
            document.documentElement.style.setProperty('--btn-light-white', '#232323');
            document.documentElement.style.setProperty('--text-light-color', '#8D9299');
            document.documentElement.style.setProperty('--gray-bg-color', '#fff');
            document.documentElement.style.setProperty('--notification-ping-bg', "#402F5B");
            document.documentElement.style.setProperty('--footer-input-bg', "#C7C7C7");
            document.documentElement.style.setProperty('--bg-main-white', "#121212");
            document.documentElement.style.setProperty('--menu-link', "#fff");
            document.documentElement.style.setProperty('--bgopacity', "rgba(21, 21, 21, 0.8)");
            document.documentElement.style.setProperty('--arrowbg', "#392F3B");
            document.documentElement.style.setProperty('--bothblack', "#000");

        } else {
            document.documentElement.classList.remove('dark-md');
            document.documentElement.classList.add('light-md');
            document.documentElement.style.setProperty('--bg-main', '#FCFCFC');
            document.documentElement.style.setProperty('--bg-card', '#fff');
            document.documentElement.style.setProperty('--bg-white', '#fff');
            document.documentElement.style.setProperty('--black-color', '#000');
            document.documentElement.style.setProperty('--gray-bg', '#EDEDED');
            document.documentElement.style.setProperty('--white-color', '#fff');
            document.documentElement.style.setProperty('--black-text', '#000');
            document.documentElement.style.setProperty('--gray-color', '#9D9D9D');
            document.documentElement.style.setProperty('--faq-container', '#1a252f');
            document.documentElement.style.setProperty('--slider-opacity-card', '255, 255, 255');
            document.documentElement.style.setProperty('--btn-light-white', '#fff');
            document.documentElement.style.setProperty('--text-light-color', '#111');
            document.documentElement.style.setProperty('--gray-bg-color', '#8D9299');
            document.documentElement.style.setProperty('--notification-ping-bg', "#F7F2FF");
            document.documentElement.style.setProperty('--footer-input-bg', "#fff");
            document.documentElement.style.setProperty('--bg-main-white', "#fff");
            document.documentElement.style.setProperty('--menu-link', "#fff");
            document.documentElement.style.setProperty('--bgopacity', "rgba(255, 255, 255, 0.8)");
            document.documentElement.style.setProperty('--arrowbg', "#F0E7F2");
            document.documentElement.style.setProperty('--bothblack', "#000");
        }
    }

    const [isShow, SetIsShow] = useState(false);
    const [closeNotification, setCloseNotification] = useState(true);

    const notifications = ["add your email", "subscribe", "go to website"];

    return (
        <>
            {/* {
                location.pathname === "/Profile" ? <div style={{ backgroundColor: "#6300FF" }} className="p-3 d-flex justify-content-center text-white">DesignerName - choose yours and earn x3 Starlight rewards!</div> :
                    location.pathname === "/Buy" ? <div style={{ backgroundColor: "#6300FF" }} className="p-3 d-flex justify-content-center text-white">DesignerName - choose yours and earn x3 Starlight rewards!</div> :
                        location.pathname === "/CreateCollectibleEdit" ? <div style={{ backgroundColor: "#6300FF" }} className="p-3 d-flex justify-content-center text-white">DesignerName - choose yours and earn x3 Starlight rewards!</div> :
                            location.pathname === "/SignIn" ? <div style={{ backgroundColor: "#6300FF" }} className="p-3 d-flex justify-content-center text-white">DesignerName - choose yours and earn x3 Starlight rewards!</div> :
                                location.pathname === "/Token" ? <div style={{ backgroundColor: "#6300FF" }} className="p-3 d-flex justify-content-center text-white">DesignerName - choose yours and earn x3 Starlight rewards!</div> :
                                    location.pathname === "/Activity" ? <div style={{ backgroundColor: "#6300FF" }} className="p-3 d-flex justify-content-center text-white">DesignerName - choose yours and earn x3 Starlight rewards!</div> :
                                        location.pathname === "/FullScreenImage" ? <div style={{ backgroundColor: "#6300FF" }} className="p-3 d-flex justify-content-center text-white">DesignerName - choose yours and earn x3 Starlight rewards!</div> : ""
            } */}

            <header className="pl-4 pr-4">
                {/* <nav className="navbar navbar-light navbar-expand-lg" id="myNavbar" style={{
                    position: location.pathname === "/Profile" ? "relative" :
                        location.pathname === "/Buy" ? "relative" :
                            location.pathname === "/CreateCollectibleEdit" ? "relative" :
                                location.pathname === "/SignIn" ? "relative" :
                                    location.pathname === "/Token" ? "relative" :
                                        location.pathname === "/Activity" ? "relative" :
                                            location.pathname === "/FullScreenImage" ? "relative" : "absolute"
                }}> */}
                <nav className="navbar navbar-light navbar-expand-lg" id="myNavbar">
                    <div className="container-fluid menu-reverse container-fluid menu-reverse">

                        <div className="d-flex d-lg-none align-items-center">

                            <div className="d-lg-none d-sm-block mr-1">
                                <a className="nav-link nav-dark-button">
                                    <img src={searchLine} alt="" />
                                </a>
                            </div>

                            <div className="d-lg-none d-sm-block mr-1">
                                <a className="nav-link nav-dark-button" onClick={() => activeMode()}>
                                    <img src={vectorLogo} alt="" />
                                </a>
                            </div>

                            <div className="navbar-toggler p-0 mr-1" type="button" data-toggle="collapse" data-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
                                <a className="nav-link nav-dark-button">
                                    <img src={menu4Line} className="navbar-hamburger-show" alt="" />
                                </a>
                            </div>

                            <div className="d-lg-none d-sm-block">
                                <a className="nav-link nav-dark-button p-0 nav-dark-button mr-2 position-relative">
                                    <svg onClick={() => setOpenProfileDropMenu(!openProfileDropMenu)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                    </svg>
                                    {
                                        openProfileDropMenu === false ? "" : <div className="openProfileDropMenu">
                                            <h4 className="text-left">0×hubwc8fh2f....hb8fhr</h4>
                                            <div className="notipopup-display">
                                                <a href="#0" className="color-ping"><b>Set display name</b></a>
                                                <a href="#0" className="color-ping"><b>Upload profile picture</b></a>
                                            </div>

                                            <div className="border-section pt-3 mt-3">

                                                <div className="d-flex justify-content-between mb-3">
                                                    <div className="d-flex">
                                                        <div>
                                                            <img src={userTick} width="36" />
                                                        </div>

                                                        <div className="ml-3">
                                                            <div><span className="color-gray">Starlight balance</span></div>
                                                            <div className="text-left">0 Starlight</div>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <button className="btn-dark-outline">Claim</button>
                                                    </div>
                                                </div>

                                                <div className="d-flex justify-content-between mb-3">
                                                    <div className="d-flex">
                                                        <div>
                                                            <img src={BalanceIcon} width="36" />
                                                        </div>

                                                        <div className="ml-3">
                                                            <div className="text-left"><span className="color-gray">Balance</span></div>
                                                            <div className="text-left">0 Starlight</div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="d-flex justify-content-between mb-3">
                                                    <div className="d-flex">
                                                        <div>
                                                            <img src={BidingbalanceIcon} width="36" />
                                                        </div>

                                                        <div className="ml-3">
                                                            <div><span className="color-gray">Biding balance</span></div>
                                                            <div className="text-left">0 weTH</div>
                                                        </div>
                                                    </div>

                                                    <a className="nav-link nav-dark-button">
                                                        <svg width="20" height="20" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M6.02452 4.24267L6.96719 3.3L3.66719 0L0.367188 3.3L1.31052 4.24267L3.00052 2.552V11.3333H4.33385V2.552L6.02452 4.24267ZM10.3352 12.0001L13.6352 8.70008L12.6925 7.75741L11.0018 9.44808V0.666748H9.66849L9.66916 9.44808L7.97782 7.75741L7.03516 8.70008L10.3352 12.0001Z" fill="black" />
                                                        </svg>
                                                    </a>
                                                </div>

                                                <div className="add-funds-with-btn">Add funds with 
                                                    <span>
                                                        <img src={McdoIcon} />
                                                    </span>
                                                </div>

                                            </div>


                                            {/* <div className="d-flex justify-content-between mb-3 mt-3">
                                                <Link to="/Profile"> <h6>My Profile</h6></Link>
                                            </div>

                                            <div className="d-flex justify-content-between mb-3">
                                                <Link to="/CreateCollectibleEdit"><h6>Edit Profile</h6></Link>
                                            </div> */}

                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <h6 className="m-0">Manage funds</h6>

                                                <div className="custom-control custom-switch">
                                                    <input type="checkbox" defaultChecked className="custom-control-input" id="profileSwitch3" />
                                                    <label className="custom-control-label" htmlFor="profileSwitch3"></label>
                                                </div>
                                            </div>

                                            <div className="d-flex justify-content-between mb-3">
                                                <h6>Autoplay</h6>
                                            </div>

                                            <div className="d-flex justify-content-between">
                                                <h6>Sign out</h6>
                                            </div>


                                        </div>
                                    }
                                </a>
                            </div>
                        </div>

                        <Link to="/" className="navbar-brand m-0 d-flex align-items-center"> <img src={fabaLogo} width="24" alt="" /> <h3 className="ml-2" style={{ fontSize: "22px", fontFamily: 'LoRes 9 Plus OT Narrow' }}>Starlight</h3></Link>

                        <div className={`collapse navbar-collapse${isShow ? ' noshow' : ''}`} id="mainNav">
                            <div className='close' onClick={() => SetIsShow(!isShow)}>
                                <img src={menuclose} />
                            </div>
                            {/* <ul className="navbar-nav nav-fill align-items-center center-menu">
                                <li>
                                    <Link to="/Explore" className="nav-link">Explore Starlight</Link>
                                </li>
                                <li>
                                    <Link to="/Cryptoloria" className="nav-link">Cryptoloria</Link>
                                </li>
                                <li>
                                    <Link to="#0" className="nav-link">SLX Token</Link>
                                </li>
                                <li className='mobile-social'>
                                    <div className="d-flex footer-social-icons">
                                        <Link to={{ pathname: "https://twitter.com/starlight_meta" }} target="_blank">
                                            <i className="fab fa-twitter"></i>
                                        </Link>
                                        <Link to={{ pathname: "https://t.me/starlightmeta" }} target="_blank">
                                            <i className="fab fa-telegram-plane"></i>
                                        </Link>
                                        <Link to={{ pathname: "https://www.instagram.com/starlightmeta/" }} target="_blank">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.9991 8.87531C10.2788 8.87531 8.87491 10.2792 8.87491 11.9995C8.87491 13.7198 10.2788 15.1237 11.9991 15.1237C13.7194 15.1237 15.1234 13.7198 15.1234 11.9995C15.1234 10.2792 13.7194 8.87531 11.9991 8.87531ZM21.3694 11.9995C21.3694 10.7058 21.3812 9.42374 21.3085 8.13234C21.2358 6.63234 20.8937 5.30109 19.7968 4.20421C18.6976 3.10499 17.3687 2.76515 15.8687 2.69249C14.5749 2.61984 13.2929 2.63156 12.0015 2.63156C10.7077 2.63156 9.4257 2.61984 8.13429 2.69249C6.63429 2.76515 5.30304 3.10734 4.20617 4.20421C3.10695 5.30343 2.7671 6.63234 2.69445 8.13234C2.62179 9.42609 2.63351 10.7081 2.63351 11.9995C2.63351 13.2909 2.62179 14.5753 2.69445 15.8667C2.7671 17.3667 3.10929 18.698 4.20617 19.7948C5.30538 20.8941 6.63429 21.2339 8.13429 21.3066C9.42804 21.3792 10.7101 21.3675 12.0015 21.3675C13.2952 21.3675 14.5773 21.3792 15.8687 21.3066C17.3687 21.2339 18.6999 20.8917 19.7968 19.7948C20.896 18.6956 21.2358 17.3667 21.3085 15.8667C21.3835 14.5753 21.3694 13.2933 21.3694 11.9995ZM11.9991 16.8066C9.33898 16.8066 7.1921 14.6597 7.1921 11.9995C7.1921 9.33937 9.33898 7.19249 11.9991 7.19249C14.6593 7.19249 16.8062 9.33937 16.8062 11.9995C16.8062 14.6597 14.6593 16.8066 11.9991 16.8066ZM17.003 8.11828C16.3819 8.11828 15.8804 7.61671 15.8804 6.99562C15.8804 6.37453 16.3819 5.87296 17.003 5.87296C17.6241 5.87296 18.1257 6.37453 18.1257 6.99562C18.1259 7.1431 18.097 7.28917 18.0406 7.42546C17.9843 7.56175 17.9016 7.68559 17.7973 7.78987C17.693 7.89416 17.5692 7.97684 17.4329 8.0332C17.2966 8.08955 17.1505 8.11846 17.003 8.11828Z" fill="#9D9D9D" />
                                            </svg>
                                        </Link>
                                        <Link to={{ pathname: "https://discord.com/invite/h3pWz4fY72" }} target="_blank">
                                            <i className="fab fa-discord"></i>
                                        </Link>
                                        <Link to={{ pathname: "https://www.reddit.com/r/starlightmeta/" }} target="_blank">
                                            <i className="fab fa-reddit" aria-hidden="true"></i>
                                        </Link>
                                        <Link to={{ pathname: "#0" }}>
                                            <i className="fab fa-youtube"></i>
                                        </Link>
                                    </div>
                                </li>
                            </ul> */}
                            <ul className="navbar-nav nav-fill align-items-center">

                                <li className="nav-item">
                                    <div className="navbar-search">
                                        <i className="fas fa-search"></i>
                                        <input type="text" placeholder="Search by creator, collectible or collection" />
                                    </div>
                                </li>

                                <li className="nav-item ">
                                    <Link to="/Profile" className="nav-link">My Item</Link>
                                </li>

                                <li className="nav-item ">
                                    <Link to="/Following" className="nav-link">Following</Link>
                                </li>

                                <li className="nav-item ">
                                    <Link to="/Activity" className="nav-link">Activity</Link>
                                </li>

                                <li className="nav-item ">
                                    <Link to="/Faq" className="nav-link">How it works</Link>
                                </li>


                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" id="servicesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Community</a>
                                    <div className="dropdown-menu" aria-labelledby="servicesDropdown">
                                        <ul className="menu-dropdown">
                                            <Link to="/Token"><li>Token</li></Link>
                                            <Link to="/"><li>Discussion</li></Link>
                                            <Link to="/"><li>Voting</li></Link>
                                            <Link to="/"><li>Suggest feature</li></Link>
                                            <Link to="/"><li>Subscribe</li></Link>
                                            <ul className="nav-bar-social-items mt-3 border-top">
                                                <li><i className="fab fa-twitter"></i></li>
                                                <li><i className="fab fa-telegram-plane"></i></li>
                                                <li><svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M9.99913 6.87726C8.27882 6.87726 6.87491 8.28117 6.87491 10.0015C6.87491 11.7218 8.27882 13.1257 9.99913 13.1257C11.7194 13.1257 13.1234 11.7218 13.1234 10.0015C13.1234 8.28117 11.7194 6.87726 9.99913 6.87726ZM19.3694 10.0015C19.3694 8.70773 19.3812 7.4257 19.3085 6.13429C19.2358 4.63429 18.8937 3.30304 17.7968 2.20617C16.6976 1.10695 15.3687 0.767103 13.8687 0.694447C12.5749 0.621791 11.2929 0.63351 10.0015 0.63351C8.70773 0.63351 7.4257 0.621791 6.13429 0.694447C4.63429 0.767103 3.30304 1.10929 2.20617 2.20617C1.10695 3.30538 0.767103 4.63429 0.694447 6.13429C0.621791 7.42804 0.63351 8.71007 0.63351 10.0015C0.63351 11.2929 0.621791 12.5773 0.694447 13.8687C0.767103 15.3687 1.10929 16.6999 2.20617 17.7968C3.30538 18.896 4.63429 19.2359 6.13429 19.3085C7.42804 19.3812 8.71007 19.3694 10.0015 19.3694C11.2952 19.3694 12.5773 19.3812 13.8687 19.3085C15.3687 19.2359 16.6999 18.8937 17.7968 17.7968C18.896 16.6976 19.2358 15.3687 19.3085 13.8687C19.3835 12.5773 19.3694 11.2952 19.3694 10.0015ZM9.99913 14.8085C7.33898 14.8085 5.1921 12.6616 5.1921 10.0015C5.1921 7.34132 7.33898 5.19445 9.99913 5.19445C12.6593 5.19445 14.8062 7.34132 14.8062 10.0015C14.8062 12.6616 12.6593 14.8085 9.99913 14.8085ZM15.003 6.12023C14.3819 6.12023 13.8804 5.61867 13.8804 4.99757C13.8804 4.37648 14.3819 3.87492 15.003 3.87492C15.6241 3.87492 16.1257 4.37648 16.1257 4.99757C16.1259 5.14505 16.097 5.29112 16.0406 5.42741C15.9843 5.5637 15.9016 5.68754 15.7973 5.79182C15.693 5.89611 15.5692 5.9788 15.4329 6.03515C15.2966 6.0915 15.1505 6.12041 15.003 6.12023Z" fill="#9D9D9D" />
                                                </svg>
                                                </li>
                                                <li><i className="fab fa-discord"></i></li>
                                                <li><i className="fab fa-youtube"></i></li>
                                                <li><i className="fab fa-medium-m"></i></li>
                                            </ul>
                                        </ul>

                                    </div>
                                </li> 

                                <li className="nav-item d-sm-none d-lg-block p-0 d-flex align-items-center">
                                    <Link to="/create" className="nav-link p-0">
                                        <button className="btn btn-primary">Create</button>
                                    </Link>
                                </li>

                                {
                                    location.pathname === "/" ? <li className="nav-item d-sm-none d-lg-block m-0 p-0 d-flex align-items-center">
                                        <Link to="/SignIn" className="nav-link p-0">
                                            <button className="btn btn-primary-outline">Sign In</button>
                                        </Link>
                                    </li> : ""
                                }



                                <li className="nav-item p-0">

                                    {
                                        location.pathname !== "/" ? <a className="nav-link d-sm-none d-lg-block nav-dark-button notification-popup-outline position-relative mr-2" >
                                            <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => { setNotificationPopup(!notificationPopup); document.body.style.overflow = "scroll"; }}>
                                                <path d="M8.91211 9.16675H15.3288L7.07878 21.0834V12.8334H0.662109L8.91211 0.916748V9.16675Z" fill="black" />
                                            </svg>
                                            {
                                                notificationPopup === false ? "" : <div className="notificationPopup p-0">
                                                    <div className="d-flex justify-content-between align-items-center p-4">
                                                        <h5>Notifications</h5>
                                                        <div className="color-ping text-left">See all</div>
                                                    </div>

                                                    {notifications.map((n, i) =>
                                                        <div className={`d-flex justify-content-between notification-ping-bg position-relative p-4 ${!closeNotification ? " notifyclose" : ""}`}>
                                                            <div className="popup-close-btn-outline" onClick={() => setCloseNotification(false)}>
                                                                <i className="fas fa-times" ></i>
                                                            </div>
                                                            <div className="d-flex">
                                                                <div>
                                                                    <img src={grayPp} width="56" />
                                                                </div>

                                                                <div className="ml-3">
                                                                    <div className="text-left">{n}</div>
                                                                    <div className="text-left">
                                                                        <span className="color-gray">to get all the important notifications
                                                                            right into your inbox</span>
                                                                    </div>

                                                                    <div className="d-flex justify-content-between gray-color mt-3" style={{ borderRadius: "30px" }}>
                                                                        <input width="100%" className="border-none bg-white" style={{ border: "none", paddingLeft: "10px", outline: "none", borderTopLeftRadius: "30px", borderBottomLeftRadius: "30px" }} placeholder="Your email" />
                                                                        <button className="single-create-collectible btn-ping pt-0 pb-0 pl-4 pr-4 " style={{ fontSize: "12px", marginLeft: "-15px" }}><small>Get notified</small></button>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                    }

                                                </div>
                                            }
                                        </a> : ""
                                    }


                                    {
                                        location.pathname !== "/" ? <a className="d-sm-none d-lg-block nav-link p-0 nav-dark-button mr-2 position-relative" onClick={() => setOpenProfileDropMenu(!openProfileDropMenu)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                            </svg>
                                            {
                                                openProfileDropMenu === false ? "" : <div className="notificationPopup">
                                                    <h4 className="text-left">0×hubwc8fh2f....hb8fhr</h4>
                                                    <div className="notipopup-display">
                                                        <a href="#0" className="color-ping"><b>Set display name</b></a>
                                                        <a href="#0" className="color-ping"><b>Upload profile picture</b></a>
                                                    </div>

                                                    <div className="border-section pt-3 mt-3">

                                                        <div className="d-flex justify-content-between mb-3">
                                                            <div className="d-flex">
                                                                <div className="token-img">
                                                                    <img src={userTick} width="36" />
                                                                </div>

                                                                <div className="ml-3">
                                                                    <div><span className="color-gray">Starlight balance</span></div>
                                                                    <div className="text-left">0 Starlight</div>
                                                                </div>
                                                            </div>

                                                            <div>
                                                                <button className="btn-dark-outline">Claim</button>
                                                            </div>
                                                        </div>

                                                        <div className="d-flex justify-content-between mb-3">
                                                            <div className="d-flex">
                                                                <div className="token-img">
                                                                    <img src={BalanceIcon} width="36" />
                                                                </div>

                                                                <div className="ml-3">
                                                                    <div className="text-left"><span className="color-gray">Balance</span></div>
                                                                    <div className="text-left">0 Starlight</div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="d-flex justify-content-between mb-3">
                                                            <div className="d-flex">
                                                                <div className="token-img">
                                                                    <img src={BidingbalanceIcon} width="36" />
                                                                </div>

                                                                <div className="ml-3">
                                                                    <div><span className="color-gray">Biding balance</span></div>
                                                                    <div className="text-left">0 weTH</div>
                                                                </div>
                                                            </div>

                                                            <a className="nav-link nav-dark-button">
                                                                <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M6.02452 4.24267L6.96719 3.3L3.66719 0L0.367188 3.3L1.31052 4.24267L3.00052 2.552V11.3333H4.33385V2.552L6.02452 4.24267ZM10.3352 12.0001L13.6352 8.70008L12.6925 7.75741L11.0018 9.44808V0.666748H9.66849L9.66916 9.44808L7.97782 7.75741L7.03516 8.70008L10.3352 12.0001Z" fill="black" />
                                                                </svg>

                                                            </a>
                                                        </div>

                                                        <div className="add-funds-with-btn">Add funds with
                                                            <span>
                                                                <img src={McdoIcon} />
                                                            </span>
                                                        </div>

                                                    </div>


                                                    {/* <div className="d-flex justify-content-between mb-3 mt-3">
                                                        <Link to="/Profile"> <h6>My Profile</h6></Link>
                                                    </div>

                                                    <div className="d-flex justify-content-between mb-3">
                                                        <Link to="/CreateCollectibleEdit"><h6>Edit Profile</h6></Link>
                                                    </div> */}

                                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                                        <h6 className="m-0">Manage funds</h6>

                                                        <div className="custom-control custom-switch">
                                                            <input type="checkbox" className="custom-control-input" id="profileSwitch1" />
                                                            <label className="custom-control-label" htmlFor="profileSwitch1"></label>
                                                        </div>
                                                    </div>

                                                    <div className="d-flex justify-content-between mb-3">
                                                        <h6>Autoplay</h6>
                                                    </div>

                                                    <div className="d-flex justify-content-between">
                                                        <h6>Sign out</h6>
                                                    </div>


                                                </div>
                                            }
                                        </a> : ""
                                    }

                                    <a className="nav-link nav-dark-button d-sm-none d-lg-block" onClick={() => activeMode()}>
                                        {
                                            theme === true ? <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.00056 4.49219C6.5146 4.49219 4.49219 6.51499 4.49219 9.00096C4.49219 11.4869 6.5146 13.5097 9.00056 13.5097C11.4861 13.5097 13.5089 11.4873 13.5089 9.00096C13.5089 6.5146 11.4861 4.49219 9.00056 4.49219Z" fill="white" />
                                                <path d="M9.00077 3.16634C8.51489 3.16634 8.12109 2.77254 8.12109 2.28707V0.879672C8.12109 0.3938 8.51489 0 9.00077 0C9.48664 0 9.88044 0.3938 9.88044 0.879672V2.28707C9.88044 2.77254 9.48624 3.16634 9.00077 3.16634Z" fill="white" />
                                                <path d="M9.00077 14.833C8.51489 14.833 8.12109 15.2268 8.12109 15.7127V17.1197C8.12109 17.6059 8.51489 17.9997 9.00077 17.9997C9.48664 17.9997 9.88044 17.6059 9.88044 17.1197V15.7127C9.88044 15.2268 9.48624 14.833 9.00077 14.833Z" fill="white" />
                                                <path d="M13.1246 4.87553C12.7814 4.53195 12.7814 3.97513 13.1246 3.63155L14.1198 2.63629C14.463 2.29311 15.0202 2.29311 15.3638 2.63629C15.7074 2.97987 15.7074 3.53709 15.3638 3.88027L14.3686 4.87553C14.0254 5.21911 13.4685 5.21911 13.1246 4.87553Z" fill="white" />
                                                <path d="M4.87568 13.1252C4.5321 12.7812 3.97528 12.7812 3.6317 13.1252L2.63644 14.12C2.29326 14.4632 2.29286 15.0208 2.63644 15.364C2.98002 15.7072 3.53724 15.7072 3.88042 15.364L4.87568 14.3684C5.21926 14.0252 5.21926 13.468 4.87568 13.1252Z" fill="white" />
                                                <path d="M14.834 8.99979C14.834 8.51392 15.2278 8.12012 15.7137 8.12012H17.1211C17.6069 8.12012 18.0007 8.51392 18.0007 8.99979C18.0007 9.48566 17.6069 9.87906 17.1211 9.87906H15.7137C15.2278 9.87906 14.834 9.48566 14.834 8.99979Z" fill="white" />
                                                <path d="M3.16634 8.99979C3.16634 8.51392 2.77254 8.12012 2.28667 8.12012H0.879672C0.3938 8.12012 0 8.51392 0 8.99979C0 9.48566 0.3938 9.87906 0.879672 9.87906H2.28707C2.77254 9.87906 3.16634 9.48566 3.16634 8.99979Z" fill="white" />
                                                <path d="M13.1249 13.1255C13.4684 12.7824 14.0257 12.7824 14.3688 13.1255L15.3641 14.1208C15.7077 14.4636 15.7077 15.0212 15.3641 15.3644C15.0205 15.7076 14.4637 15.7076 14.1201 15.3644L13.1249 14.3691C12.7813 14.0255 12.7813 13.4687 13.1249 13.1255Z" fill="white" />
                                                <path d="M4.87583 4.87445C5.21941 4.53087 5.21941 3.97405 4.87583 3.63048L3.88057 2.63561C3.53699 2.29204 2.98017 2.29204 2.63659 2.63561C2.29301 2.97879 2.29301 3.53601 2.63659 3.87919L3.63185 4.87445C3.97543 5.21843 4.53225 5.21843 4.87583 4.87445Z" fill="white" />
                                            </svg>
                                                :
                                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17.2426 13.0248C17.0818 12.8268 16.8118 12.7536 16.5742 12.8388C15.9082 13.0776 15.1858 13.2 14.425 13.2C10.7854 13.2 7.825 10.2384 7.825 6.6C7.825 4.41 8.9062 2.3712 10.717 1.1448C10.9222 1.0056 11.0206 0.7548 10.9654 0.5136C10.9102 0.2724 10.7122 0.09 10.4662 0.054C10.1854 0.0132 9.9058 0 9.625 0C4.6618 0 0.625 4.0368 0.625 9C0.625 13.9632 4.6618 18 9.625 18C12.775 18 15.6406 16.3992 17.2882 13.7184C17.4214 13.5012 17.4022 13.224 17.2426 13.0248Z" fill="black" />
                                                </svg>
                                        }

                                    </a>
                                </li>

                                <li className="nav-item d-sm-block d-lg-none menu-create-width">
                                    <Link to="/create" className="w-100 nav-link">
                                        <button className="btn btn-primary">Create</button>
                                    </Link>
                                </li>

                            </ul>
                        </div>

                    </div>
                </nav>
            </header>

        </>
    )
}

export default Navbar
