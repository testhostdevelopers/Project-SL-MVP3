import React, { useState } from "react";
import axios from "axios";
import { Menu, Dropdown } from "antd";
import ReportPopup from "../Components/Popup/ReportPopup";
// import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";

export default function LiveAuctions({
  title,
  id = '',
  WETH,
  bid,
  isCollection = false,
  heartcount,
  liked = false,
  Coverimg,
  User1,
  User2,
  User3,
  isOpenInProfile,
}) {
  var apiToken = sessionStorage.getItem("apiToken");
  const userData = JSON.parse(sessionStorage.getItem("userdata")) || {};
  const [ReportPopups, setReportPopup] = useState(false);
  // const [singlePopup, setSinglePopup] = useState(false);
  // console.log('singlePopup', singlePopup);
  const lastSegment = window.location.pathname.substring(
    window.location.pathname.lastIndexOf("/") + 1
  );
  const likeCollectible = async () => {
    let a = '';
    if (isCollection === true) {
      a = 'collection';
    } else {
      a = 'collectible';
    }
    if (id.length) {
      await axios
        .put('http://be.starlight.webcase.me/v1/' + a + '/like/' + id, {
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
    }
  };
  const disLikeCollectible = async () => {
    let a = '';
    if (isCollection === true) {
      a = 'collection';
    } else {
      a = 'collectible';
    }
    if (id.length) {
      await axios
        .put('http://be.starlight.webcase.me/v1/' + a + '/unlike/' + id, {
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
    }
  };
  let menu;
  if (lastSegment === "Profile") {
    menu = (
      <Menu>
        <Menu.Item>Change Price</Menu.Item>
        <Menu.Item>Transfer Token</Menu.Item>
        <Menu.Item>Burn Token</Menu.Item>
        <Menu.Item onClick={() => setReportPopup(true)}>Report</Menu.Item>
      </Menu>
    );
  } else {
    menu = (
      <Menu>
        <Menu.Item>Refresh Matedata</Menu.Item>
        <Menu.Item>Share</Menu.Item>
        <Menu.Item onClick={() => setReportPopup(true)}>Report</Menu.Item>
      </Menu>
    );
  }

  return (
    <>
      {ReportPopups && (
        <ReportPopup
          // setSinglePopup={setSinglePopup}
          setReportPopup={setReportPopup}
        />
      )}
      <div className="col-sm-12 col-lg-3">
        <div className="liveAuction-card-container">
          <div className="live-image">
            <img src={Coverimg} width="100%" alt="" />
            <div className="card-heart-icon">
              {liked ?
                <><i onClick={disLikeCollectible} className="fas fa-heart" /> {heartcount}</>
                :
                <><i onClick={likeCollectible} className="far fa-heart" /> {heartcount}</>
              }
            </div>
            <Dropdown overlay={menu}>
              <div
                className="card-select-icon ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fas fa-ellipsis-h" />
              </div>
            </Dropdown>
          </div>

          <div className="bg-white p-4">
            <div className="live-user-list">
              <img src={User1} width="36px" alt="" />
              <img src={User2} width="36px" alt="" />
              <img src={User3} width="36px" alt="" />
              <div className="live-card-tick">
                <i className="fas fa-check" />
              </div>
            </div>

            <a href={'/buy/'+id}><h6>{title}</h6></a>

            <div className="d-flex justify-content-between align-items-center">
              <div className="text-danger">
                <b>{WETH}</b>
              </div>
              <small className="text-secondary">{bid}</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
