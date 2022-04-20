import React from "react";
import { motion } from "framer-motion";
import EthereumLogo from "../../assets/img/custom/Ethereum-Logo-1.png";
import closeicon from "../../assets/img/custom/close.svg";

const WethPopup = (props) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  let { setSingleCollectionPopup } = props;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className="place-a-bid-popup-container"
    >
      <div className="border-radius bg-white popup-width">
        <div className="justify-content-end d-flex cursor-pointer mb-3">
          <div
            className="popup-close-btn-outline cursor-pointer"
            onClick={() => {
              setSingleCollectionPopup(false);
              document.body.style.overflow = "scroll";
            }}
          >
            <img src={closeicon} alt={''}/>
          </div>
        </div>
        <div className="text-center mb-2">
          <img src={EthereumLogo} alt={''}/>
        </div>
        <p>
          <b>
            Get started with your Ethereum wallet to sign message and send
            transaction to Ethereum blockchain.
          </b>
        </p>

        <div>
          <button className="btn btn-ping w-100 mt-3">
            Sign in with your wallet
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default WethPopup;
