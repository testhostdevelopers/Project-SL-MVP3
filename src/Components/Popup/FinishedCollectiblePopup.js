import React from "react";
import { motion } from "framer-motion";
// import closeicon from "../../assets/img/custom/close.svg";

const FinishedCollectiblePopup = (props) => {
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
      <div
        className="border-radius bg-white popup-width"
        style={{ padding: "48px" }}
      >
        <div className="d-flex justify-content-between cursor-pointer">
          <h3>Follow steps</h3>
          {/* <div className="popup-close-btn-outline" onClick={() => { setSingleCollectionPopup(false); document.body.style.overflow = "scroll"; }}>
                        <img src={closeicon}/>
                    </div> */}
        </div>

        <div className="d-flex mt-3 flex-column">
          <div className="fallow-steps-passive">
            <i className="fas fa-check-circle" />
          </div>
          <div className="ml-3">
            <h6 className="mb-1">
              <b>Deploy contract</b>
            </h6>
            <p className="color-gray">
              <small>Deploy code for the new collection smart contract</small>
            </p>
          </div>
          <button className="btn-gray w-100">Complated</button>
        </div>

        <div className="d-flex mt-3">
          <div className="fallow-steps-active">
            <i className="fas fa-check-circle" />
          </div>
          <div className="ml-3">
            <h6 className="mb-1">
              <b>Sign message</b>
            </h6>
            <p className="color-gray">
              <small>Sign message with new collection preferences</small>
            </p>
          </div>
        </div>

        <div className="border-bottom pb-3">
          <button className="btn-ping w-100 mt-4">Start</button>
        </div>

        <button
          className="btn-primary-outline w-100 mt-3 mb-3 "
          onClick={() => {
            setSingleCollectionPopup(false);
            document.body.style.overflow = "scroll";
          }}
        >
          Cancel
        </button>
      </div>
    </motion.div>
  );
};

export default FinishedCollectiblePopup;
