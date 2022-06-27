import React, { useState } from "react";
import axios from "axios";
import { Config } from '../utils/config';
import { Link } from "react-router-dom";
import userImg from "../assets/img/icons/custom/userProfilePictures.png";
import userCoverImg from "../assets/img/custom/topSeller3.png";

export default function TopCard({
  title,
  follow,
  btnname,
  datetime,
  confirmation = false,
  id,
  Price,
  topuserimg,
  topcoverimg,
}) {
    const apiToken = sessionStorage.getItem("apiToken");
    const userData = JSON.parse(sessionStorage.getItem("userdata")) || {};
    let [btnname1, setbtnname1] = useState(btnname);
    let temp = '';
    const followUser = async () => {
        if (btnname1 === "Unfollow") {
            temp = "unfollow"
        } else if (btnname1 === "Follow") {
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
                // console.log('response', response);
                if (response.data.response_code === "API_SUCCESS") {
                    if (btnname1 === "Unfollow") {
                        setbtnname1('Follow');
                    } else if (btnname1 === "Follow") {
                        setbtnname1('Unfollow');
                    }
                }
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
          src={
                topcoverimg === 'null' || topcoverimg === null || topcoverimg === undefined
                ? userCoverImg
                : topcoverimg
              }
          width="240"
          alt={title + ' Cover Picture'}
        />
      </div>
      <div className="topSellectProfilePicture">
        <img
            src={
                topuserimg === 'null' || topuserimg === null || topuserimg === undefined
                    ? userImg
                    : topuserimg
            }
            width="100%"
            alt={title + ' Profile Picture'}
        />
          {confirmation === true ?
              <div className="confirmation">
                <i className="fas fa-check"/>
              </div> : <></>
          }
      </div>
      <div className="topSellerUserInfo">
        <h5>
          <Link to={'/User/' + id}>
            <b>{title}</b>
          </Link>
        </h5>
        <h5 className="color-ping mt-2 mb-2">{follow}</h5>
        <small>{datetime}</small>
        <small>{Price}</small>
        <button onClick={followUser} className="btn-ping w-100 mt-3">{btnname1}</button>
      </div>
    </div>
  );
}

