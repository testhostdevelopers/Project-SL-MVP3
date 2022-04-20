import React from "react";
import Collections1Img from "../../assets/img/custom/collections1.png";
import Collections2Img from "../../assets/img/custom/collections2.png";
import Collections3Img from "../../assets/img/custom/collections3.png";
import CryptoioriaLogo from "../../assets/img/custom/cryptoioriaLogo.png";
// import { useLocation, Link } from "react-router-dom";

const UpcomingCollectionsSec = () => {
  return (
    <section className="upcoming-collections-sec">
      <div className="container">
        <div className="upcoming-collections-box">
          <div className="upcoming-collections-img">
            <img src={Collections1Img} alt={""} />
          </div>
          <div className="upcoming-collections-info-box">
            <img
              src={CryptoioriaLogo}
              className="upcoming-collections-logo"
              alt={""}
            />
            <p>The soundtrack to the enchanted world of Cryptoloria.</p>
            <div className="upcoming-collections-time">
              <span>1 January 2021</span>
              <span>5pm GMT</span>
            </div>
            <ul className="upcoming-soon-collections-count-list">
              <li>
                4<span>Days</span>
              </li>
              <li>
                5<span>Hours</span>
              </li>
              <li>
                43<span>Minutes</span>
              </li>
              <li>
                25<span>Seconds</span>
              </li>
            </ul>
            <a href="#0" className="add-to-calendar-btn">
              Add to calendar
            </a>
          </div>
        </div>
        <div className="upcoming-collections-box">
          <div className="upcoming-collections-img">
            <img src={Collections2Img} alt={""} />
          </div>
          <div className="upcoming-collections-info-box">
            <div className="upcoming-collections-logo">
              <p>@PixelDrops</p>
            </div>
            <p>
              A collection of 8,888 unique generative NFTs from an other
              universe.{" "}
            </p>
            <div className="upcoming-collections-time">
              <span>1 January 2021</span>
              <span>5pm GMT</span>
            </div>
            <ul className="upcoming-soon-collections-count-list">
              <li>
                4<span>Days</span>
              </li>
              <li>
                5<span>Hours</span>
              </li>
              <li>
                43<span>Minutes</span>
              </li>
              <li>
                25<span>Seconds</span>
              </li>
            </ul>
            <a href="#0" className="add-to-calendar-btn">
              Add to calendar
            </a>
          </div>
        </div>
        <div className="upcoming-collections-box">
          <div className="upcoming-collections-img">
            <img src={Collections3Img} alt={""} />
          </div>
          <div className="upcoming-collections-info-box">
            <img
              src={CryptoioriaLogo}
              className="upcoming-collections-logo"
              alt={""}
            />
            <p>One of five comic book editions</p>
            <div className="upcoming-collections-time">
              <span>30 January 2021</span>
              <span>5pm GMT</span>
            </div>
            <ul className="upcoming-soon-collections-count-list">
              <li>
                4<span>Days</span>
              </li>
              <li>
                5<span>Hours</span>
              </li>
              <li>
                43<span>Minutes</span>
              </li>
              <li>
                25<span>Seconds</span>
              </li>
            </ul>
            <a href="#0" className="add-to-calendar-btn">
              Add to calendar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default UpcomingCollectionsSec;
