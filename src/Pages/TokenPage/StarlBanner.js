import React from "react";
import starlBanner from "../../assets/img/custom/starlBanner.png";
import { Link } from "react-router-dom";
// import starlBannerDark from '../../assets/img/custom/starlBannerDark.png'

const StarlBanner = () => {
  return (
    <section className="starl-banner-sec">
      <div className="starl-banner-inner">
        <div className="starl-banner-img">
          <img src={starlBanner} className="show-in-light" alt={""} />
          {/* <img src={starlBannerDark} className="show-in-dark"/> */}
        </div>
        <div className="starl-banner-info">
          <h1>
            Starlight <sub>(SLX)</sub>
          </h1>
          <p>An ever expanding universe of creativity.</p>
          <div className="new-header-right-btn">
            <ul className="d-flex justify-content-center">
              <li className="nav-item p-0 d-flex align-items-center">
                <Link to="/create" className="nav-link p-0">
                  <button className="btn btn-primary-outline">
                    Whitepaper
                  </button>
                </Link>
              </li>

              <li className="nav-item p-0 d-flex align-items-center">
                <Link to="/create" className="nav-link p-0">
                  <button className="btn btn-fill">Buy SLX</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default StarlBanner;
