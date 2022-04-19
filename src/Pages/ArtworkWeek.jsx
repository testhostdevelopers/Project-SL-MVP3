import React from "react";
import userTick from "../assets/img/custom/userTick.png";
import logo from "../assets/img/icons/custom/logo.svg";
import start from "../assets/img/icons/custom/start.svg";

const ArtworkWeek = () => {
  return (
    <>
      <div className="mt-3 bighest-bid-text">
        <b>
          <span className="">Highest bid </span>
          <span className="color-ping">0.066 wETH</span>
        </b>
      </div>

      <p className="mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do
        eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua.
      </p>

      <div className="w-100 d-flex mt-5 heading-text">
        <div className="d-flex flex-column">
          <b className="text-secondary">Creator</b>
          <div className="mt-3">
            <span className="user-img">
              <img src={userTick} width="36" alt="" />
            </span>
            <span className="ml-3">
              <b>Courtney</b>
            </span>
          </div>
        </div>
        <div className="ml-4 d-flex flex-column">
          <b className="text-secondary">Creator</b>
          <div className="mt-3">
            <span className="user-img">
              <img src={logo} width="36" alt="" />
            </span>
            <span className="ml-3">
              <b>EdenSwap</b>
            </span>
          </div>
        </div>
      </div>

      <button className="artwork-sales-btn  btn-primary-outline-responsive mt-4 pt-2 pb-2 pl-3 pr-3 text-dark d-flex align-items-center">
        <img src={start} className="mr-2" width="16" alt="" /> 10% of sales will
        go to creator
      </button>
    </>
  );
};

export default ArtworkWeek;
