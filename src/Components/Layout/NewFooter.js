import React from "react";
import fabaLogo from "../../assets/img/custom/x.svg";
import { Select } from "antd";
// import { Link } from "react-router-dom";

const { Option } = Select;

const NewFooter = () => {
  return (
    <footer>
      <section className="m-0">
        <div className="container-fluid">
          <div className="row footer-column-flex-border pb-4 mb-5">
            <div className="col-sm-6 col-lg-4 footer-column mb-4">
              <div className="footer-title d-flex align-items-center">
                <img src={fabaLogo} width="36" alt="" />
                <h3 className="ml-2 text-dark">
                  {" "}
                  Starlight
                  {/* <div className="color-red">NFT</div> */}
                </h3>
              </div>

              <ul className="footer-menu">
                <li>
                  <span className="color-gray">
                    The Eden Smart Chain is a low latency, cross platform smart
                    contract chain for digital assets, fiat on-ramping and
                    dApps.
                  </span>
                </li>
              </ul>
            </div>

            <div className="col-sm-6 col-lg-3 footer-column-flex mb-4">
              <div className="footer-title">
                <h6>Site map</h6>
              </div>

              <ul className="footer-menu">
                <li>Vision</li>
                <li>Token</li>
                <li>Metaverse</li>
                <li>Roadmap</li>
              </ul>
            </div>

            <div className="col-sm-6 col-lg-3 footer-column-flex mb-4">
              <div className="footer-title">
                <h6>Community</h6>
              </div>

              <ul className="footer-menu">
                <li>Discord</li>
                <li>Twitter</li>
                <li>Telegram</li>
                <li>Reddit</li>
              </ul>
            </div>

            <div className="col-sm-6 col-lg-2 mb-4 d-mobile-none">
              <div className="footer-title">
                <h6>Language</h6>
              </div>

              <div className="topSeller">
                <div className="headerSelect">
                  <Select
                    className="section-select-filter"
                    defaultValue="en"
                    style={{ width: "100%", marginLeft: "0" }}
                  >
                    <Option value="en">
                      <svg
                        width="21"
                        height="13"
                        viewBox="0 0 21 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="20.884"
                          height="12.8571"
                          rx="3.03797"
                          fill="white"
                        />
                        <mask
                          id="mask0"
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="21"
                          height="13"
                        >
                          <rect
                            width="20.884"
                            height="12.8571"
                            rx="3.03797"
                            fill="white"
                          />
                        </mask>
                        <g mask="url(#mask0)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M20.884 0H0V0.857143H20.884V0ZM20.884 1.71435H0V2.57149H20.884V1.71435ZM0 3.42849H20.884V4.28563H0V3.42849ZM20.884 5.14284H0V5.99998H20.884V5.14284ZM0 6.85719H20.884V7.71433H0V6.85719ZM20.884 8.57133H0V9.42847H20.884V8.57133ZM0 10.2857H20.884V11.1428H0V10.2857ZM20.884 12H0V12.8572H20.884V12Z"
                            fill="#D02F44"
                          />
                          <rect width="8.95028" height="6" fill="#46467F" />
                          <g filter="url(#filter0_d)">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M1.49336 1.71456C1.76798 1.71456 1.9906 1.52269 1.9906 1.28599C1.9906 1.0493 1.76798 0.857422 1.49336 0.857422C1.21874 0.857422 0.996123 1.0493 0.996123 1.28599C0.996123 1.52269 1.21874 1.71456 1.49336 1.71456ZM3.48225 1.71481C3.75687 1.71481 3.97949 1.52293 3.97949 1.28624C3.97949 1.04954 3.75687 0.857666 3.48225 0.857666C3.20764 0.857666 2.98501 1.04954 2.98501 1.28624C2.98501 1.52293 3.20764 1.71481 3.48225 1.71481ZM5.9685 1.28624C5.9685 1.52293 5.74588 1.71481 5.47127 1.71481C5.19665 1.71481 4.97403 1.52293 4.97403 1.28624C4.97403 1.04954 5.19665 0.857666 5.47127 0.857666C5.74588 0.857666 5.9685 1.04954 5.9685 1.28624ZM7.46016 1.71481C7.73477 1.71481 7.9574 1.52293 7.9574 1.28624C7.9574 1.04954 7.73477 0.857666 7.46016 0.857666C7.18554 0.857666 6.96292 1.04954 6.96292 1.28624C6.96292 1.52293 7.18554 1.71481 7.46016 1.71481ZM2.98511 2.14342C2.98511 2.38011 2.76248 2.57199 2.48787 2.57199C2.21325 2.57199 1.99063 2.38011 1.99063 2.14342C1.99063 1.90672 2.21325 1.71484 2.48787 1.71484C2.76248 1.71484 2.98511 1.90672 2.98511 2.14342ZM4.47676 2.57199C4.75138 2.57199 4.974 2.38011 4.974 2.14342C4.974 1.90672 4.75138 1.71484 4.47676 1.71484C4.20214 1.71484 3.97952 1.90672 3.97952 2.14342C3.97952 2.38011 4.20214 2.57199 4.47676 2.57199ZM6.96289 2.14342C6.96289 2.38011 6.74027 2.57199 6.46565 2.57199C6.19103 2.57199 5.96841 2.38011 5.96841 2.14342C5.96841 1.90672 6.19103 1.71484 6.46565 1.71484C6.74027 1.71484 6.96289 1.90672 6.96289 2.14342ZM7.46016 3.42916C7.73477 3.42916 7.9574 3.23729 7.9574 3.00059C7.9574 2.7639 7.73477 2.57202 7.46016 2.57202C7.18554 2.57202 6.96292 2.7639 6.96292 3.00059C6.96292 3.23729 7.18554 3.42916 7.46016 3.42916ZM5.9685 3.00059C5.9685 3.23729 5.74588 3.42916 5.47127 3.42916C5.19665 3.42916 4.97403 3.23729 4.97403 3.00059C4.97403 2.7639 5.19665 2.57202 5.47127 2.57202C5.74588 2.57202 5.9685 2.7639 5.9685 3.00059ZM3.48225 3.42916C3.75687 3.42916 3.97949 3.23729 3.97949 3.00059C3.97949 2.7639 3.75687 2.57202 3.48225 2.57202C3.20764 2.57202 2.98501 2.7639 2.98501 3.00059C2.98501 3.23729 3.20764 3.42916 3.48225 3.42916ZM1.99057 3.00058C1.99057 3.23728 1.76795 3.42915 1.49333 3.42915C1.21871 3.42915 0.996094 3.23728 0.996094 3.00058C0.996094 2.76389 1.21871 2.57201 1.49333 2.57201C1.76795 2.57201 1.99057 2.76389 1.99057 3.00058ZM2.48787 4.28634C2.76248 4.28634 2.98511 4.09446 2.98511 3.85777C2.98511 3.62108 2.76248 3.4292 2.48787 3.4292C2.21325 3.4292 1.99063 3.62108 1.99063 3.85777C1.99063 4.09446 2.21325 4.28634 2.48787 4.28634ZM4.974 3.85777C4.974 4.09446 4.75138 4.28634 4.47676 4.28634C4.20214 4.28634 3.97952 4.09446 3.97952 3.85777C3.97952 3.62108 4.20214 3.4292 4.47676 3.4292C4.75138 3.4292 4.974 3.62108 4.974 3.85777ZM6.46565 4.28634C6.74027 4.28634 6.96289 4.09446 6.96289 3.85777C6.96289 3.62108 6.74027 3.4292 6.46565 3.4292C6.19103 3.4292 5.96841 3.62108 5.96841 3.85777C5.96841 4.09446 6.19103 4.28634 6.46565 4.28634ZM7.9574 4.71473C7.9574 4.95143 7.73477 5.14331 7.46016 5.14331C7.18554 5.14331 6.96292 4.95143 6.96292 4.71473C6.96292 4.47804 7.18554 4.28616 7.46016 4.28616C7.73477 4.28616 7.9574 4.47804 7.9574 4.71473ZM5.47127 5.14331C5.74588 5.14331 5.9685 4.95143 5.9685 4.71473C5.9685 4.47804 5.74588 4.28616 5.47127 4.28616C5.19665 4.28616 4.97403 4.47804 4.97403 4.71473C4.97403 4.95143 5.19665 5.14331 5.47127 5.14331ZM3.97949 4.71473C3.97949 4.95143 3.75687 5.14331 3.48225 5.14331C3.20764 5.14331 2.98501 4.95143 2.98501 4.71473C2.98501 4.47804 3.20764 4.28616 3.48225 4.28616C3.75687 4.28616 3.97949 4.47804 3.97949 4.71473ZM1.49333 5.1433C1.76795 5.1433 1.99057 4.95142 1.99057 4.71472C1.99057 4.47803 1.76795 4.28615 1.49333 4.28615C1.21871 4.28615 0.996094 4.47803 0.996094 4.71472C0.996094 4.95142 1.21871 5.1433 1.49333 5.1433Z"
                              fill="url(#paint0_linear)"
                            />
                          </g>
                        </g>
                        <defs>
                          <filter
                            id="filter0_d"
                            x="0.996094"
                            y="0.857422"
                            width="6.9613"
                            height="6.28588"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dy="2" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow"
                              result="shape"
                            />
                          </filter>
                          <linearGradient
                            id="paint0_linear"
                            x1="0.996094"
                            y1="0.857422"
                            x2="0.996094"
                            y2="5.1433"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" />
                            <stop offset="1" stopColor="#F0F0F0" />
                          </linearGradient>
                        </defs>
                      </svg>

                      <span className="ml-2">English</span>
                    </Option>
                    <Option value="中文"> 中文</Option>
                    <Option value="한국어">한국어</Option>
                    <Option value="日本語">日本語</Option>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-between d-mobile-flex-column">
            <div
              className="d-flex justify-content-between"
              style={{ fontSize: "12px" }}
            >
              <div className="d-mobile-none">© 2021, All Rights Reserved.</div>
              <div className="margin-mobile-left">Privacy Policy</div>
              <div className="ml-3">Terms of Service</div>
              <div className="d-sm-block d-lg-none">Language: English</div>
            </div>

            <div className="d-flex footer-social-icons">
              <div>
                <i className="fab fa-twitter" />
              </div>
              <div>
                <i className="fab fa-telegram-plane" />
              </div>
              <div>
                <i className="fab fa-discord" />
              </div>
              <div>
                <i className="fab fa-youtube" />
              </div>
            </div>

            <div className="d-web-none">
              <small>© 2021, All Rights Reserved.</small>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default NewFooter;
