import React, { useState } from "react";
import { Menu, Dropdown } from "antd";
import ReportPopup from "../Components/Popup/ReportPopup";
// import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";

export default function LiveAuctions({
  title,
  WETH,
  bid,
  heartcount,
  liked = false,
  Coverimg,
  User1,
  User2,
  User3,
  isOpenInProfile,
}) {
  const [ReportPopups, setReportPopup] = useState(false);
  // const [singlePopup, setSinglePopup] = useState(false);
  // console.log('singlePopup', singlePopup);
  const lastSegment = window.location.pathname.substring(
    window.location.pathname.lastIndexOf("/") + 1
  );
  // console.log(lastSegment);
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
                <><i className="fas fa-heart" /> {heartcount}</>
                :
                <><i className="far fa-heart" /> {heartcount}</>
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

            <h6>{title}</h6>

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
