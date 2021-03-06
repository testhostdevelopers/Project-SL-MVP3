import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Config } from '../../utils/config';
import closeicon from "../../assets/img/custom/close.svg";

const UpdateCoverPopup = (props) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  let { setUpdateCoverPopup, collectionID, setCoverImg } = props;
  const apiToken = sessionStorage.getItem("apiToken");
  const [file, setFile] = useState();

  function handleChange(event) {
    setFile(event.target.files[0])
  }

  function handleSubmit(event) {
    event.preventDefault()
    const url = `${Config.baseURL}v1/collection/updateimg/` + collectionID;
    const formData = new FormData();
    formData.append('cover_img', file);
    const config = {
      headers: {
        "Authorization": `Bearer ${apiToken}`,
        'content-type': 'multipart/form-data',
      },
    };
    axios
        .put(url, formData, config)
        .then((response) => {
          console.log(response.data.data);
          if (response.data.response_code === "API_SUCCESS") {
            if (response.data.response_code === "API_SUCCESS") {
              setCoverImg(response.data.data.main_img);
              setUpdateCoverPopup(false);
            }
          }
      });
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className="place-a-bid-popup-container"
    >
      <div className="border-radius bg-white popup-width">
        <div className="justify-content-between d-flex cursor-pointer mb-3">
          <h3 className="">Update cover</h3>
          <div
            className="popup-close-btn-outline cursor-pointer"
            onClick={() => {
              setUpdateCoverPopup(false);
              document.body.style.overflow = "scroll";
            }}
          >
            <img src={closeicon} alt={""} />
          </div>
        </div>
        <p className="sub-heading">
          Upload new cover for your collection. We recommend to upload images in 1440x260 resolution.
        </p>
        <form onSubmit={handleSubmit}>
        <div className="upload-file-field">
          <input type="file" placeholder="Choose image" onChange={handleChange} accept="image/png, image/jpeg"/>
            <label className="btn-ping w-100 mb-0">Choose image</label>
          </div>
          <br/>
          <div className="upload-file-field">
            <input type="submit" value={'Submit'} />
            <label className="btn-ping w-100 mb-0">Submit</label>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default UpdateCoverPopup;
