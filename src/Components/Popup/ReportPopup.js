import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
// import {useParams} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";

const ReportPopup = (props) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  let { setReportPopup, type = '', id } = props;
  // console.log('type',type);
  // const { user_id } = useParams();
  const apiToken = sessionStorage.getItem("apiToken");
  let [msg, setMsg] = useState("");
  const reportUser = async () => {
    if (msg.length === 0) {
      toast("Message is Required!");
      return;
    }
    let API_URL = '';
    if (type === 'User') {
      API_URL = 'http://localhost:8000/v1/user/reportuser/' + id;
    } else if (type === 'Collectible') {
      API_URL = 'http://localhost:8000/v1/collectible/reportcollectible/' + id;
    } else if (type === 'Collection') {
      API_URL = 'http://localhost:8000/v1/collection/reportcollection/' + id;
    }
    if (API_URL.length) {
      await axios
        .delete(API_URL, {
          headers: {
            Authorization: `Bearer ${apiToken}`,
          },
          data: {
            source: msg
          }
        })
        .then(response => {
          if (response.data.response_code === "API_SUCCESS") {
            toast(response.data.response_code);
            setReportPopup(false);
          }
          if (response.data.response_code === "API_ERROR") {
            toast(response.data.error.type);
            // setReportPopup(false);
          }
          console.log('response', response.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  return (
      <>
        <ToastContainer />
        <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            className="place-a-bid-popup-container"
        >
          <div className="border-radius bg-white popup-width">
            <div className="justify-content-between cursor-pointer">
              <h3 className="mb-2">Why are you reporting?</h3>
              <p className="sub-heading">
                Describe why you think this item should be removed from the marketplace.
              </p>
            </div>

            <div className="input-field">
              <label>Message</label>
              <input type="text" placeholder="Tell us some details" onChange={(e) => setMsg(e.target.value)}/>
            </div>

            <div className="border-bottom pb-3">
              <button onClick={reportUser} className="btn-ping w-100 mt-4">Report {type}</button>
            </div>

            <button
                className="btn-primary-outline w-100 mt-3 mb-3"
                onClick={() => setReportPopup(false)}
            >
              Cancel
            </button>
          </div>
        </motion.div>
      </>
  );
};

export default ReportPopup;
