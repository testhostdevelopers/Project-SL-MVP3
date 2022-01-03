import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, Dropdown, Select } from 'antd';
import ReportPopup from '../Components/Popup/ReportPopup';

export default function HotBids ({title,WETH,bid,heartcount, Coverimg,time}) {
    const [ReportPopups, setReportPopup] = useState(false);
    const [singlePopup, setSinglePopup] = useState(false);
    const lastSegment = window.location.pathname.substring(window.location.pathname.lastIndexOf("/") + 1);

    console.log(lastSegment);  
    let menu;
    if( lastSegment === "Profile" ){
        menu = (
            <Menu>
                <Menu.Item>
                    Change Price
                </Menu.Item>
                <Menu.Item>
                    Transfer Token
                </Menu.Item>
                <Menu.Item>
                    Burn Token
                </Menu.Item>
                <Menu.Item onClick={() => setReportPopup(true)}>
                    Report
                </Menu.Item>
            </Menu>
        );
    }else{
        menu = (
            <Menu>
                <Menu.Item>
                    Refresh Matedata
                </Menu.Item>
                <Menu.Item>
                    Share
                </Menu.Item>
                <Menu.Item>
                    Report
                </Menu.Item>
            </Menu>
        );
    }
  return (
    <>
    {
        ReportPopups && <ReportPopup setSinglePopup={setSinglePopup} setReportPopup={setReportPopup} />
    }

    <div className="col-sm-12 col-lg-3">
        <div className="liveAuction-card-container">
            <div className="live-image">
                <img src={Coverimg} width="100%" alt="" />
                <div className="card-heart-icon"><i className="fas fa-heart"></i>{heartcount}</div>
                <Dropdown overlay={menu}>
                    <div className="card-select-icon ant-dropdown-link" onClick={e => e.preventDefault()}>
                        <i className="fas fa-ellipsis-h"></i>
                    </div>
                </Dropdown>
                <div className="card-time-hours"><small><i className="far fa-clock"></i>{time}</small></div>
            </div>

            <div className="bg-white p-4">
                <h6>{title}</h6>

                <div className="d-flex justify-content-between align-items-center">
                    <div className="text-danger"><b>{WETH}</b></div>
                    <small className="text-secondary">{bid}</small>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}


