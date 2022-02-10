import React, { useState } from 'react'
import {Link} from "react-router-dom";
import signInBanner from "../assets/img/custom/signInBanner.png";
import metamask from "../assets/img/custom/metamask.svg";

import Torus from "../assets/img/icons/custom/Torus.svg";
import MobileWallet from "../assets/img/icons/custom/MobileWallet.svg";
import Porttis from "../assets/img/icons/custom/Porttis.svg";
import Coinbase from "../assets/img/icons/custom/Coinbase.svg";
import MyEtherWallet from "../assets/img/icons/custom/MyEtherWallet.svg";
import Fortmatic from "../assets/img/icons/custom/Fortmatic.svg";
import backArrow from "../assets/img/icons/custom/arrow.svg";
import { motion } from "framer-motion"
import WhatWallet from '../Components/Popup/Whatwallet';


const SignIn = () => {
    const [Whatwallet, setWhatwallet] = useState(false);
    const navRef = React.useRef(null);

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }

    const onToggleClick = (e) => {
        navRef.current.classList.toggle("showWallet");
      };

      const less_button = [
          {btn_img: Torus, btn_text: 'Torus'},
          {btn_img: MobileWallet, btn_text: 'Mobile Wallet'}
      ];

      const more_button = [
        {btn_img: Porttis, btn_text: 'Porttis'},
        {btn_img: Coinbase, btn_text: 'Coinbase'},
        {btn_img: MyEtherWallet, btn_text: 'MyEtherWallet'},
        {btn_img: Fortmatic, btn_text: 'Fortmatic'}
      ];

    return (
        <>
            {
                Whatwallet && <WhatWallet setWhatwallet={setWhatwallet} />
            }
            <motion.div
                initial="hidden"
                animate="visible"
                variants={variants} className="container-fluid sign-in-container-section">
                <div className="row">
                    <div className="col-sm-12 col-lg-8 mx-auto d-flex justify-content-center sig-in-mobile">
                        <div>
                            <div className="mt-5">
                                <Link className="d-flex align-items-center" to="/">
                                    <svg width="18" height="18" viewBox="0 0 12 12" fill="black" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 5.33464H2.55333L6.28 1.60797L5.33333 0.667969L0 6.0013L5.33333 11.3346L6.27333 10.3946L2.55333 6.66797H12V5.33464Z" fill="#141414" />
                                    </svg>
                                    <h6 className="ml-3 mb-0">Back</h6>
                                </Link>
                            </div>

                            <div className="mt-5"  ref={navRef}>
                                <h3>Sign in with your wallet</h3>
                                <p className="mb-4 mt-3">Sign in with one of available wallet providers or create a new wallet <br />
                                    <span className="color-ping" onClick={() => setWhatwallet(true)}> <b>What is a wallet?</b></span></p>

                                    <button className="btn ml-0 btn-ping signInActiveBtn w-100 d-flex align-items-center justify-content-center mb-4">
                                            <img src={metamask} width="20px" />
                                            <div style={{ margin: "auto auto" }}>Sign in with Metamask</div>
                                        </button>
                                {
                                    less_button.map((less) =>    
                                    <button className="btn ml-0 btn-primary-outline w-100 d-flex align-items-center justify-content-center mb-4">
                                        <img src={less.btn_img} width="20px" />
                                             <div style={{ margin: "auto auto" }}><b>{less.btn_text}</b></div>
                                     </button>
                                    )
                                }
                                
                                <div className='showmorewallet'>
                                    {
                                        more_button.map((more) =>    
                                            <button className="btn ml-0 btn-primary-outline w-100 d-flex align-items-center justify-content-center mb-4">
                                                <img src={more.btn_img} width="20px" />
                                                <div style={{ margin: "auto auto" }}><b>{more.btn_text}</b></div>
                                            </button>
                                        )
                                    }

                                </div>

                                <button onClick={onToggleClick} className="loadmore-wallet btn ml-0 btn-primary-outline w-100 d-flex align-items-center justify-content-center mb-4">
                                    <div className='more' style={{ margin: "auto auto" }}><b>Show more options</b></div>
                                    <div className='less' style={{ margin: "auto auto" }}><b>Show less options</b></div>
                                </button>

                                

                                <p>We do not own private keys and cannot access your funds without your confirmation.</p>
                            </div>
                        </div>
                    </div>

                </div>
                
            </motion.div>
        </>
    )
}

export default SignIn
