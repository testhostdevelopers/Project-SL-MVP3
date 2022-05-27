import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import {useParams} from "react-router-dom";
import {toast} from "react-toastify";

const ReportPopup = (props) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  let { setReportPopup, type = '' } = props;
  // console.log('type',type);
  const { user_id } = useParams();
  const apiToken = sessionStorage.getItem("apiToken");
  let [msg, setMsg] = useState("");
  const reportUser = async () => {
    if (type === 'User') {
      await axios
          .delete('http://localhost:8000/v1/user/reportuser/' + user_id, {
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
            console.log('response', response.data);
          })
          .catch(err => {
            console.log(err);
          });
    }
  };

  return (
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
  );
};

export default ReportPopup;
