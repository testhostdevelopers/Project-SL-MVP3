import React, { useState } from "react";
import { Link } from "react-router-dom";

import signInBanner from "../assets/img/custom/signInBanner.png";
import metamask from "../assets/img/custom/metamask.svg";

import Torus from "../assets/img/icons/custom/Torus.svg";
import MobileWallet from "../assets/img/icons/custom/MobileWallet.svg";
import Porttis from "../assets/img/icons/custom/Porttis.svg";
import Coinbase from "../assets/img/icons/custom/Coinbase.svg";
import MyEtherWallet from "../assets/img/icons/custom/MyEtherWallet.svg";
import Fortmatic from "../assets/img/icons/custom/Fortmatic.svg";
import backArrow from "../assets/img/icons/custom/arrow.svg";
import { motion } from "framer-motion";

const SignIn = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        className="container-fluid sign-in-container-section"
      >
        <div className="row">
          <div className="col-sm-12 col-lg-6 mx-auto d-flex justify-content-center sig-in-mobile">
            <div>
              <div className="mt-5">
                <Link className="d-flex align-items-center" to="/create">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 12 12"
                    fill="black"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 5.33464H2.55333L6.28 1.60797L5.33333 0.667969L0 6.0013L5.33333 11.3346L6.27333 10.3946L2.55333 6.66797H12V5.33464Z"
                      fill="#141414"
                    />
                  </svg>
                  <h6 className="ml-3 mb-0">Back</h6>
                </Link>
              </div>

              <div className="mt-5">
                <h3>Sign in with your wallet</h3>
                <p className="mb-4 mt-3">
                  Sign in with one of available wallet providers or create a new
                  wallet <br />
                  <span className="color-ping">
                    {" "}
                    <b>What is a wallet?</b>
                  </span>
                </p>

                <button className="btn ml-0 btn-ping signInActiveBtn w-100 d-flex align-items-center justify-content-center mb-4">
                  <img src={metamask} width="20px" />
                  <div style={{ margin: "auto auto" }}>
                    Sign in with Metamask
                  </div>
                </button>

                <button className="btn ml-0 btn-primary-outline w-100 d-flex align-items-center justify-content-center mb-4">
                  <img src={Torus} width="20px" />
                  <div style={{ margin: "auto auto" }}>
                    <b>Torus</b>
                  </div>
                </button>

                <button className="btn ml-0 btn-primary-outline w-100 d-flex align-items-center justify-content-center mb-4">
                  <img src={MobileWallet} width="20px" alt={''}/>
                  <div style={{ margin: "auto auto" }}>
                    <b>Mobile Wallet</b>
                  </div>
                </button>

                <button className="btn ml-0 btn-primary-outline w-100 d-flex align-items-center justify-content-center mb-4">
                  <div style={{ margin: "auto auto" }}>
                    <b>Show less options</b>
                  </div>
                </button>

                <p className="bottom-sign-text">
                  We do not own private keys and cannot access your funds
                  without your confirmation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default SignIn;
