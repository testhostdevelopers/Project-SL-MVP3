import React from "react";
// import ClimeworksImg from "../../assets/img/custom/climeworks-img.png";
// import ClimeworksLogo from "../../assets/img/custom/climeworks-logo.png";
// import Charitymobile from "../../assets/img/custom/Charitymobile.png";

const ClimeworksSec = () => {
  return (
    <section className="common-gapping climeworks-sec">
      <div className="container">
        <div className="starlight-reward-tiers-block">
          <h2 className="sec-title">Starlight reward tiers:</h2>
          <div className="tier-full-block">
            <ul className="tier-full-list">
              <li>
                <div className="tier-box">
                  <h3>Tier 1 name</h3>
                  <div className="tier-bottom-box" />
                </div>
              </li>
              <li>
                <div className="tier-box">
                  <h3>Tier 2 name</h3>
                  <div className="tier-bottom-box" />
                </div>
              </li>
              <li>
                <div className="tier-box">
                  <h3>Tier 3 name</h3>
                  <div className="tier-bottom-box" />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="starlight-roadmap-block">
          <h2>Starlight roadmap:</h2>
          <div className="starlight-roadmap-btn-block">
            <p>
              A peak into the future. Project priority is decided <br /> by the
              Starlight community. <b>Have your say:</b>
            </p>
            <a href="#0" className="btn btn-fill">
              Vote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ClimeworksSec;
