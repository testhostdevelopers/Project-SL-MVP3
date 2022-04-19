import React from "react";
import { motion } from "framer-motion";
import closeicon from "../../assets/img/custom/close.svg";

const ComingSoonPopup = (props) => {
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
        <div className="justify-content-between d-flex cursor-pointer mb-3">
          <h3 className="">Coming soon!</h3>
          <div
            className="popup-close-btn-outline cursor-pointer"
            onClick={() => {
              setSingleCollectionPopup(false);
              document.body.style.overflow = "scroll";
            }}
          >
            <img src={closeicon} />
          </div>
        </div>
        <p>
          This feature is coming soon, take a look at our roadmap. You can also
          vote on what features you would like to include in the coming months.
        </p>

        <div>
          <button className="btn btn-ping w-100 mt-3">What’s coming</button>
        </div>
      </div>
    </motion.div>
  );
};

export default ComingSoonPopup;
