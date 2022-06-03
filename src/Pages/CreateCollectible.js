import React from "react";
import collectibleSingle from "../assets/img/icons/custom/collectibleSingle.png";
import collectibleMulti from "../assets/img/icons/custom/collectibleMulti.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CreateCollectible = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={variants}
      className="create-collectible"
    >
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-sm-12 col-lg-6 mt-4 main-box">
            <h1 className="main-title">
              <div className="back">
                <Link className="d-flex align-items-center" to="/">
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
              Create Collectible
            </h1>

            <p className="color-gray mt-3">
              Choose “single” if you want your collectible to be one of a kind or ”multiple” if you want to sell one collectible multiple times.
            </p>

            <div className="mt-4 d-flex create-collectible-select">
              <div className="position-relative">
                <Link to="/create-single">
                  <div
                    className="create-col border-radius border d-flex justify-content-center align-items-center flex-column">
                    <button className="single-create-collectible btn-primary pt-0 pb-0 pl-4 pr-4">
                      Timed Auctions
                    </button>
                    <img src={collectibleSingle} width="120" alt=""/>
                    <h6 className="mt-3"><b>Single</b></h6>
                  </div>
                </Link>
              </div>
              <div>
                <Link to="/create-multiple">
                  <div
                    className="create-col border-radius border d-flex justify-content-center align-items-center flex-column">
                    <img src={collectibleMulti} width="130" alt=""/>
                    <h6 className="mt-3">
                      <b>Multiple</b>
                    </h6>
                  </div>
                </Link>
              </div>
            </div>
            <p className="color-gray mt-3">
              We do not own your private keys and cannot access your funds without your confirmation.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default CreateCollectible;
