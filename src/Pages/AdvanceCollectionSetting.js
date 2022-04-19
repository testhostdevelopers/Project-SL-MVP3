import React from "react";

const AdvanceCollectionSetting = () => {
  return (
    <>
      <div className="col-sm-12 col-lg-7 slowmotion">
        <div className="mt-5">
          <div className="d-flex">
            <h5>
              <b>Properties</b>{" "}
            </h5>
            <span>
              <small className="color-gray ml-2">(Optional)</small>
            </span>
          </div>

          <div className="d-flex">
            <div className="prize-single-collectible d-flex w-100">
              <input type="text" placeholder="e. g.  Size" />
            </div>

            <div className="prize-single-collectible d-flex w-100 ml-3">
              <input type="text" placeholder="e. g.  Medium" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <div className="d-flex">
            <h5>
              <b>Alternative text for NFT</b>{" "}
            </h5>
            <span>
              <small className="color-gray ml-2">(Optional)</small>
            </span>
          </div>

          <div className="prize-single-collectible">
            <input type="text" placeholder="Describe the Image in detail" />
          </div>

          <div className="mt-2">
            <small>
              <span className="color-gray">
                Text that will be used in VoiceOver for people with
                disabilities.
              </span>
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdvanceCollectionSetting;
