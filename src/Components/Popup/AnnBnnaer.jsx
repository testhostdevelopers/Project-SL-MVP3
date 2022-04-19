import React, { useState } from "react";
import annbanner from "../../assets/img/custom/rainbow.png";
import closeicon from "../../assets/img/custom/close.svg";

const AnnBnnaer = () => {
  const [annBnner, setannBanner] = useState(true);
  return (
    <>
      {annBnner ? (
        <div className="closebanner">
          <h3>
            <img src={annbanner} alt={""} /> DesignerName -{" "}
            <span> choose yours and earn x3 Starlight rewards! </span>
          </h3>
          <div
            className="popup-close-btn-outline cursor-pointer myclose"
            onClick={() => {
              setannBanner(false);
            }}
          >
            <img src={closeicon} alt={""} />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default AnnBnnaer;
