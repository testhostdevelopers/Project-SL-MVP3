import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import WhatWallet from "../Components/Popup/Whatwallet";
import phantom from "../assets/img/icons/custom/phantom.png";
import solflare from "../assets/img/icons/custom/solflare.png";
import { Config } from '../utils/config';           
// import signInBanner from "../assets/img/custom/signInBanner.png";
// import metamask from "../assets/img/custom/metamask.svg";
// import Torus from "../assets/img/icons/custom/Torus.svg";
// import MobileWallet from "../assets/img/icons/custom/MobileWallet.svg";
// import Porttis from "../assets/img/icons/custom/Porttis.svg";
// import Coinbase from "../assets/img/icons/custom/Coinbase.svg";
// import MyEtherWallet from "../assets/img/icons/custom/MyEtherWallet.svg";
// import Fortmatic from "../assets/img/icons/custom/Fortmatic.svg";
// import backArrow from "../assets/img/icons/custom/arrow.svg";

let data = {
  conEstablished: false,
  wallet: "",
  pubKey: "",
};

const connectStore = async (pkey, wal, con) => {
  data.conEstablished = con;
  if (data.conEstablished === true) {
    data.pubKey = pkey;
    data.wallet = wal;
    localStorage.setItem("PublicKey", pkey);
    localStorage.setItem("wallet", wal);
    axios
      .post(`${Config.baseURL}v1/user/signup`, {
        walletToken: pkey,
        walletName: wal,
      })
      .then((res) => {
        axios
          .put(`${Config.baseURL}v1/user/gettoken`, {
            walletToken: pkey,
          })
          .then((r) => {
            sessionStorage.setItem("apiToken", r.data.data.apiToken);
            sessionStorage.setItem("userdata", JSON.stringify(r.data.data.userdata));
            window.location.reload(false);
          });
      });
  }
};

const SignIn = () => {
  const [Whatwallet, setWhatwallet] = useState(false);
  const navRef = React.useRef(null);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const connectPhantom = () => {
    try {
      if ("solana" in window) {
        const resp = window.solana.connect();
        resp.publicKey.toString();
      } else {
        window.open("https://phantom.app/", "_blank");
      }
    } catch (err) {
      console.log(err);
    }
    window.solana.on("connect", () =>
      connectStore(window.solana.publicKey.toString(), "phantom", true)
    );
  };

  const connectSolflare = () => {
    if ("solflare" in window) {
      // const provider = window.solflare;
      //   if (provider.isSolFlare) {
      // const solRes = window.solflare.connect();
      window.solflare.on("connect", () =>
        connectStore(window.solflare.publicKey.toString(), "solflare", true)
      );
      //   }
    } else {
      window.open("https://solflare.com", "_blank");
    }
  };

  /*const connect = () => {
    console.log("connect");
  };*/

  /*const onToggleClick = (e) => {
    navRef.current.classList.toggle("showWallet");
  };*/

  const less_button = [
    {
      btn_img: phantom,
      btn_text: "Phantom",
      btn_function: () => {
        connectPhantom();
      },
    },
    {
      btn_img: solflare,
      btn_text: "Solflare",
      btn_function: () => {
        connectSolflare();
      },
    },
  ];

  const more_button = [];

  return (
    <>
      {Whatwallet && <WhatWallet setWhatwallet={setWhatwallet} />}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        className="container-fluid sign-in-container-section"
      >
        <div className="row">
          <div className="col-sm-12 col-lg-5 mx-auto d-flex justify-content-center sig-in-mobile">
            <div>
              <div className="mt-5">
                <Link className="d-flex align-items-center" to="/">
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

              <div className="mt-5" ref={navRef}>
                <h3>Sign in with your wallet</h3>
                <p className="mb-4 mt-3">
                  Sign in with one of available wallet providers or create a new
                  wallet <br />
                  <span
                    className="color-ping"
                    onClick={() => setWhatwallet(true)}
                  >
                    {" "}
                    <b>What is a wallet?</b>
                  </span>
                </p>

                {less_button.map((less) => (
                  <button
                    onClick={less.btn_function}
                    className="btn ml-0 btn-primary-outline w-100 d-flex align-items-center justify-content-center mb-4"
                  >
                    <img src={less.btn_img} width="20px" alt={""} />
                    <div style={{ margin: "auto auto" }}>
                      <b>{less.btn_text}</b>
                    </div>
                  </button>
                ))}

                <div className="showmorewallet">
                  {more_button.map((more) => (
                    <button className="btn ml-0 btn-primary-outline w-100 d-flex align-items-center justify-content-center mb-4">
                      <img src={more.btn_img} width="20px" alt={""} />
                      <div style={{ margin: "auto auto" }}>
                        <b>{more.btn_text}</b>
                      </div>
                    </button>
                  ))}
                </div>

                {/*<button onClick={onToggleClick} className="loadmore-wallet btn ml-0 btn-primary-outline w-100 d-flex align-items-center justify-content-center mb-4">
                                    <div className='more' style={{ margin: "auto auto" }}><b>Show more options</b></div>
                                    <div className='less' style={{ margin: "auto auto" }}><b>Show less options</b></div>
                                </button>*/}

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
