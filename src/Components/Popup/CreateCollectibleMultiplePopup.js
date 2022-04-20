import React from "react";
import { motion } from "framer-motion";
import closeicon from "../../assets/img/custom/close.svg";

const CreateCollectibleMultiplePopup = (props) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  let { setSingleCollectionPopup } = props;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className="place-a-bid-popup-container"
    >
      <div
        className="border-radius bg-white popup-width"
        style={{ padding: "48px" }}
      >
        <div className="d-flex justify-content-between cursor-pointer">
          <h3>New Collection</h3>
          <div
            className="popup-close-btn-outline"
            onClick={() => {
              setSingleCollectionPopup(false);
              document.body.style.overflow = "scroll";
            }}
          >
            <img src={closeicon} alt={""} />
          </div>
        </div>

        <div className="d-flex mt-3">
          <div className="fallow-steps-active">
            <i className="fas fa-check-circle" />
          </div>
          <div className="ml-3">
            <h6 className="mb-1">
              <b>Deposit wETH</b>
            </h6>
            <p className="color-gray">
              <small>
                We recommend an image of atleast 400x400. Gifs work too.
              </small>
            </p>

            <button className="btn-primary-outline w-100">Choose File</button>
          </div>
        </div>

        <div className="mt-4">
          <div className="d-flex">
            <h5>
              <b>Display name</b>
            </h5>{" "}
            <span className="color-gray ml-2">(Optional)</span>
          </div>

          <div className="pt-2 pb-2 border-bottom d-flex justify-content-between prize-single-collectible">
            <input
              type="text"
              placeholder="Enter token name"
              className="w-100"
            />
          </div>
          <div className="color-gray">
            <small>(Token name cannot be changed)</small>
          </div>
        </div>

        <div className="mt-2">
          <div className="d-flex">
            <h5>
              <b>Symbol</b>
            </h5>{" "}
            <span className="color-gray ml-2">(Required)</span>
          </div>

          <div className="pt-2 pb-2 border-bottom d-flex justify-content-between prize-single-collectible">
            <input
              type="text"
              placeholder="Enter token symbol"
              className="w-100"
            />
          </div>
        </div>

        <div className="mt-3">
          <div className="d-flex">
            <h5>
              <b>Description</b>
            </h5>{" "}
            <span className="color-gray ml-2">(Optional)</span>
          </div>

          <div className="pt-2 pb-2 border-bottom d-flex justify-content-between prize-single-collectible">
            <input
              type="text"
              placeholder="Some words about the token collection"
              className=" w-100 "
            />
          </div>
        </div>

        <div className="mt-3">
          <div className="d-flex">
            <h5>
              <b>Custom URL</b>
            </h5>{" "}
            <span className="color-gray ml-2">
              (Will be used as public profile)
            </span>
          </div>

          <div className="pt-2 pb-2 border-bottom d-flex justify-content-between prize-single-collectible">
            <span className="color-gray mr-2">starlight.com/</span>
            <input
              type="text"
              placeholder="Enter your custom URL  "
              className=" w-100 "
            />
          </div>
          <p className="color-gray">
            <small>Will be used as public profile</small>
          </p>
        </div>

        <button className="btn-ping  w-100 mt-2 mb-3 ">
          Create Collection
        </button>
      </div>
    </motion.div>
  );
};

export default CreateCollectibleMultiplePopup;
