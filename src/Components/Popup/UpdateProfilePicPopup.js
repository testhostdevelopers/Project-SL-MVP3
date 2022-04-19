import React from "react";
import { motion } from "framer-motion";
import closeicon from "../../assets/img/custom/close.svg";

const UpdateProfilePicPopup = (props) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  let { setprofilePopup } = props;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className="place-a-bid-popup-container"
    >
      <div className="border-radius bg-white popup-width">
        <div className="justify-content-between d-flex cursor-pointer mb-3">
          <h3 className="">Update profile pic</h3>
          <div
            className="popup-close-btn-outline cursor-pointer"
            onClick={() => {
              setprofilePopup(false);
              document.body.style.overflow = "scroll";
            }}
          >
            <img src={closeicon} alt={""} />
          </div>
        </div>
        <p className="sub-heading">
          Upload new profile picture for your profile. We recommend to upload
          images in 200x200 resolution.
        </p>

        <div className="upload-file-field">
          <input type="file" placeholder="Choose image" className="" />
          <label className="btn-ping w-100 mb-0">Choose image</label>
        </div>
      </div>
    </motion.div>
  );
};

export default UpdateProfilePicPopup;
