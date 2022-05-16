import React from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import { Config } from '../utils/config';           

export default function TopCard({
  title,
  follow,
  btnname,
  datetime,
  id,
  Price,
  topuserimg,
  topcoverimg,
}) {
    var apiToken = sessionStorage.getItem("apiToken");
    const userData = JSON.parse(sessionStorage.getItem("userdata")) || {};
    let temp = '';
    const followUser = async () => {
        if (btnname === "Unfollow") {
            temp = "unfollow"
        } else if (btnname === "Follow") {
            temp = "follow"
        }
        await axios
            .put(`${Config.baseURL}v1/user/` + temp + '/' + id, {
                user: userData._id
            }, {
                headers: {
                    Authorization: `Bearer ${apiToken}`,
                }
            })
            .then(response => {
                console.log('response', response);
            })
            .catch(err => {
                console.log(err);
            });
    };
  return (
    <div className="topSellerCard">
      <div className="w-100 topSellerCardImageover">
        <img
          className="seller-banner-image"
          src={topcoverimg}
          width="240"
          alt=""
        />
      </div>

      <div className="topSellectProfilePicture">
        <img src={topuserimg} width="100%" alt="" />
        <div className="confirmation">
          <i className="fas fa-check" />
        </div>
      </div>
      <div className="topSellerUserInfo">
        <h5>
          <b>{title}</b>
        </h5>
        <h5 className="color-ping mt-2 mb-2">{follow}</h5>
        <small>{datetime}</small>
        <small>{Price}</small>
        <button onClick={followUser} className="btn-ping w-100 mt-3">{btnname}</button>
      </div>
    </div>
  );
}
