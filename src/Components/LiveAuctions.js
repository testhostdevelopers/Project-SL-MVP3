import React, { useState } from "react";
import axios from "axios";
import { Menu, Dropdown } from "antd";
import ReportPopup from "../Components/Popup/ReportPopup";
import { Config } from '../utils/config';
import artWorkWeek1 from "../../src/assets/img/custom/artWorkWeek1.png";
import ShareThisNFTPopup from "./Popup/ShareThisNFTPopup";
import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";

export default function LiveAuctions({
  title,
  id = '',
  WETH = 0,
  bid,
  isCollection = false,
  isLiveAuctions = true,
  heartcount,
  liked = false,
  Coverimg = artWorkWeek1,
  User1,
  User2,
  User3,
  isOpenInProfile,
}) {
  const apiToken = sessionStorage.getItem("apiToken");
  const userData = JSON.parse(sessionStorage.getItem("userdata")) || {};
  const [ReportPopups, setReportPopup] = useState(false);
  const [liked1, setLiked1] = useState(liked);
  const [heartcount1, setHeartcount1] = useState(heartcount);
  const [sharePopup, setsharePopup] = useState(false);
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
        .put(`${Config.baseURL}v1/` + a + '/like/' + id, {
          user: userData._id
        }, {
          headers: {
            Authorization: `Bearer ${apiToken}`,
          }
        })
        .then(response => {
          // console.log('response', response);
          if (response.data.response_code === "API_SUCCESS") {
            setLiked1(true);
            setHeartcount1(heartcount1 + 1);
          }
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
        .put(`${Config.baseURL}v1/` + a + '/unlike/' + id, {
          user: userData._id
        }, {
          headers: {
            Authorization: `Bearer ${apiToken}`,
          }
        })
        .then(response => {
          // console.log('response', response);
          if (response.data.response_code === "API_SUCCESS") {
            setLiked1(false);
            setHeartcount1(heartcount1 - 1);
          }
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
        <Menu.Item onClick={() => setsharePopup(true)}>Share</Menu.Item>
        <Menu.Item onClick={() => setReportPopup(true)}>Report</Menu.Item>
      </Menu>
    );
  }

  return (
    <>
      {sharePopup && <ShareThisNFTPopup setsharePopup={setsharePopup} id={id} />}
      {ReportPopups && (
        <ReportPopup
          // setSinglePopup={setSinglePopup}
          type={isCollection === true ? 'Collection' : 'Collectible'}
          id={id}
          setReportPopup={setReportPopup}
        />
      )}
      <div className="col-sm-12 col-lg-3">
        <div className="liveAuction-card-container">
          <div className="live-image">
            <img src={Coverimg} width="100%" alt={title} />
            <div className="card-heart-icon">
              {liked1 ?
                <><i onClick={apiToken ? disLikeCollectible : null} className="fas fa-heart" /> {heartcount1}</>
                :
                <><i onClick={apiToken ? likeCollectible : null} className="far fa-heart" /> {heartcount1}</>
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
            {isLiveAuctions === true ?
                <div className="live-user-list">
                  {User1 ?
                      <img src={User1} width="36px" alt="" /> : <></>
                  }
                  {User2 ?
                      <img src={User2} width="36px" alt="" /> : <></>
                  }
                  {User3 ?
                      <img src={User3} width="36px" alt="" /> : <></>
                  }
                  {/*<div className="live-card-tick">
                    <i className="fas fa-check" />
                  </div>*/}
                </div> : <></>
            }

            {isCollection === true ?
                <Link to={'/collection/'+id}><h6>{title}</h6></Link> : <Link to={'/buy/'+id}><h6>{title} 321</h6></Link>
            }
            <div className="d-flex justify-content-between align-items-center">
              <div className="text-danger">
                  {!isCollection ?
                      <b>{WETH} WETH</b> : <></>
                  }
              </div>
              {!isCollection ?
                  <small className="text-secondary">{bid}</small> : <></>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
