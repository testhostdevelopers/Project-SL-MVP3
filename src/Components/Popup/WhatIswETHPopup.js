import React from "react";
import { motion } from "framer-motion";
import closeicon from "../../assets/img/custom/close.svg";

const WhatIswETHPopup = (props) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  let { setSingleCollectionPopup, setSinglePopup, sethelpPopup } = props;
  console.log('setSingleCollectionPopup', setSingleCollectionPopup);
  console.log('setSinglePopup', setSinglePopup);


  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className="place-a-bid-popup-container"
    >
      <div className="border-radius bg-white popup-width">
        <div className="justify-content-between d-flex cursor-pointer mb-3">
          <h3 className="">What is wETH</h3>
          <div
            className="popup-close-btn-outline cursor-pointer"
            onClick={() => {
              sethelpPopup(false);
              document.body.style.overflow = "scroll";
            }}
          >
            <img src={closeicon} alt={''}/>
          </div>
        </div>
        <p className="sub-heading">
          wETH which stands for “wrapped Ether”, is a cryptocurrency used to
          make bids for digital goods on Starlight. There is a 1:1 exchange
          between wETH and ETH, so you can always convert it back and forth
          anytime.
        </p>
        <p className="sub-heading">
          The first time you convert ETH into wETH, there’s a second transaction
          needed to approve Starlight to access your wETH when a sale occurs.
          This only needs to happen once per user.
        </p>
        <p className="sub-heading">
          If you have more questions, email us at{" "}
          <a href="mailto:support@starlight.com">
            <b>support@starlight.com</b>
          </a>{" "}
          or learn more about wETH at{" "}
          <a href="#0">
            <b>weth.io</b>
          </a>
        </p>

        <div>
          <button className="btn btn-ping w-100">Continue</button>
        </div>
      </div>
    </motion.div>
  );
};

export default WhatIswETHPopup;
