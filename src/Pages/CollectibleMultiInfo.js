import React from "react";
import infoCard from "../assets/img/custom/multiple-info-card.png";
import collectibleSingle from "../assets/img/icons/custom/collectible-single.svg";
import sonsuz from "../assets/img/icons/custom/sonsuz.svg";
import plus from "../assets/img/icons/custom/plus.svg";
import darkCircle from "../assets/img/icons/custom/darkcircle.svg";
import topSellerUser1 from "../assets/img/custom/topSellerUser1.png";
import topSellerUser2 from "../assets/img/custom/topSellerUser2.png";
import topSellerUser3 from "../assets/img/custom/topSellerUser3.png";
import multipleInfoCard from "../assets/img/custom/multiple-info-card.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CollectibleMultiInfo = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={variants}
      className="create-single-section-container"
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Link
              className="d-flex align-items-center"
              to="/CreateCollectibleMulti"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14 7.33341H4.55333L8.28 3.60675L7.33333 2.66675L2 8.00008L7.33333 13.3334L8.27333 12.3934L4.55333 8.66675H14V7.33341Z"
                  fill="#141414"
                />
              </svg>
              <h6 className="ml-3 mb-0">Back</h6>
            </Link>
          </div>

          <div className="col-sm-12 mt-4 mb-4">
            <h2>Create multiple collectible</h2>
          </div>

          <div className="col-sm-12 col-md-7 mobile-sm-order-right">
            <b className="mt-5">Upload File</b>

            <div className="upload-file-container">
              <div className="color-gray">
                <img src={infoCard} width="300" alt="" />
              </div>
            </div>

            <div className="mt-5">
              <div className="d-flex justify-content-between">
                <b>
                  <h5>Put on marketplace</h5>
                </b>
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customSwitch1"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customSwitch1"
                  ></label>
                </div>
              </div>

              <div className="color-gray">
                Enter price to allow user instantly purchase your NFT
              </div>

              <div className="d-flex mt-3">
                <div className="putOnMarketplace border-radius btn-primary-outline-responsive">
                  <img src={collectibleSingle} width="32" alt="" />
                  <b> Fixed Price</b>
                </div>
                <div className="putOnMarketplace ml-3 border-radius border">
                  <img src={sonsuz} width="40" alt="" /> <b>Open for bids</b>
                </div>
              </div>

              <div className="mt-5">
                <h5>
                  <b>Prize</b>
                </h5>

                <div className="prize-single-collectible">
                  <input type="text" placeholder="Enter price for one piece " />
                  <span className="color-gray ">ETH</span>
                </div>

                <div className="mt-4">
                  <b>
                    <span className="color-gray">Service fee </span>{" "}
                    <span>2.5%</span>
                  </b>
                </div>
                <div className="mt-2">
                  <b>
                    <span className="color-gray">You will receive </span>{" "}
                    <span>0 ETH</span>
                  </b>
                </div>
              </div>

              <div className="d-flex justify-content-between mt-5">
                <b>
                  <h5 className="color-ping">Put on marketplace</h5>
                </b>
                <div className="custom-control custom-switch">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customSwitch2"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customSwitch2"
                  ></label>
                </div>
              </div>

              <div className="color-gray">
                Enter price to allow user instantly purchase your NFT
              </div>

              <div className="d-flex mt-3">
                <div className="putOnMarketplace border-radius border">
                  <img src={plus} width="40" alt="" />
                  <b> Create</b>
                  <div>
                    <small className="color-gray">ERC-721</small>
                  </div>
                </div>
                <div className="putOnMarketplace ml-3 border-radius btn-primary-outline-responsive">
                  <img src={darkCircle} width="40" alt="" /> <b>--------</b>
                  <div>
                    <small className="color-gray">---</small>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <h5>
                  <b>Title</b>
                </h5>

                <div className="prize-single-collectible">
                  <input
                    type="text"
                    placeholder="e. g.  “Redeemable T-Shirt with logo”"
                  />
                </div>
              </div>

              <div className="mt-5">
                <div className="d-flex">
                  <h5>
                    <b>Description</b>{" "}
                  </h5>
                  <span>
                    <small className="color-gray ml-2">(Optional)</small>
                  </span>
                </div>

                <div className="prize-single-collectible">
                  <input
                    type="text"
                    placeholder="e. g. “After purchasing you will be able to get the real T-Shirt””"
                  />
                </div>

                <div className="mt-2">
                  <small>
                    <span className="color-gray">
                      With preserved line-breaks{" "}
                    </span>
                  </small>
                </div>
              </div>

              <div className="mt-5">
                <div className="d-flex">
                  <h5>
                    <b>Royalties</b>{" "}
                  </h5>
                </div>

                <div className="prize-single-collectible">
                  <input type="text" placeholder="10" />
                  <span className="color-gray ">%</span>
                </div>

                <div className="mt-2">
                  <small>
                    <span className="color-gray">
                      Suggested: 0%, 10%, 20%,30% Maximum is 50%
                    </span>
                  </small>
                </div>
              </div>

              <div className="mt-5">
                <div className="d-flex">
                  <h5>
                    <b>No. of copies</b>{" "}
                  </h5>
                </div>

                <div className="prize-single-collectible">
                  <input type="text" placeholder="Eg. 10”" />
                  <span className="color-gray ">%</span>
                </div>

                <div className="mt-2">
                  <small>
                    <span className="color-gray">Amount of tokens</span>
                  </small>
                </div>
              </div>

              <div className="mt-5">
                <div className="d-flex">
                  <h5>
                    <b>Properties</b>{" "}
                  </h5>
                  <span className="color-gray ml-2">(Optional)</span>
                </div>

                <div className="d-flex">
                  <div className="prize-single-collectible w-100">
                    <input type="text" placeholder="e.g. Size" />
                  </div>

                  <div className="prize-single-collectible ml-2">
                    <input type="text" placeholder="e.g. M" />
                  </div>
                </div>

                <div className="mt-2">
                  <small>
                    <span className="color-gray">
                      With preserved line-breaks
                    </span>
                  </small>
                </div>
              </div>

              <div className="mt-5">
                <div className="d-flex">
                  <h5>
                    <b>Alternative text for NFT</b>{" "}
                  </h5>
                  <span className="color-gray ml-2">(Optional)</span>
                </div>

                <div className="d-flex">
                  <div className="prize-single-collectible w-100">
                    <input
                      type="text"
                      placeholder="Image description in detail (Don’t start the with word 'Image'"
                    />
                  </div>
                </div>

                <div className="mt-2">
                  <small>
                    <span className="color-gray">
                      Text that will be used in VoiceOver for people with
                      disabilities
                    </span>
                  </small>
                </div>
              </div>

              <div className="mt-5">
                <button className="btn-primary-outline w-100">
                  Show less advance setting
                </button>
              </div>

              <div className="mt-4">
                <button className="btn-ping  w-100">Create Item</button>
              </div>

              <div className="mt-4 color-gray text-center">
                <span>Unsaved Changes </span>{" "}
                <span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.66602 9.99984C1.66602 14.6023 5.39685 18.3332 9.99935 18.3332C14.6018 18.3332 18.3327 14.6023 18.3327 9.99984C18.3327 5.39734 14.6018 1.6665 9.99935 1.6665C5.39685 1.6665 1.66602 5.39734 1.66602 9.99984ZM16.6657 9.99988C16.6657 13.6818 13.6809 16.6665 9.99902 16.6665C6.31712 16.6665 3.33236 13.6818 3.33236 9.99988C3.33236 6.31798 6.31712 3.33321 9.99902 3.33321C13.6809 3.33321 16.6657 6.31798 16.6657 9.99988ZM10.8324 12.4999V14.1665H9.16569V12.4999H10.8324ZM10.8327 11.6665V11.129C12.2024 10.7207 13.0746 9.38034 12.8932 7.96267C12.7118 6.54499 11.53 5.46749 10.1017 5.41735C8.6733 5.36721 7.41891 6.3592 7.13851 7.76066L8.77351 8.08816C8.90257 7.44247 9.51039 7.00762 10.1632 7.09395C10.8159 7.18029 11.2898 7.75821 11.2466 8.41525C11.2033 9.07229 10.6578 9.58312 9.99934 9.58316C9.53911 9.58316 9.16601 9.95626 9.16601 10.4165V11.6665H10.8327Z"
                      fill="#979797"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-5 pl-5 brand-new-nfp">
            <b>Preview</b>
            <div className="liveAuction upload-box">
              <div className="liveAuction-card-container">
                <div className="live-image">
                  <img src={multipleInfoCard} width="100%" alt="" />
                </div>

                <div className="bg-white p-4">
                  <div className="live-user-list pl-2">
                    <img src={topSellerUser1} width="36px" alt="" />
                    <img src={topSellerUser2} width="36px" alt="" />
                    <img src={topSellerUser3} width="36px" alt="" />
                    <div className="live-card-tick">
                      <i className="fas fa-check"></i>
                    </div>
                  </div>

                  <h6 className="mt-3">Abstract 4our</h6>

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="text-danger">
                      <b>Place a bid</b>
                    </div>
                    <small className="text-secondary">Place a bid</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default CollectibleMultiInfo;
