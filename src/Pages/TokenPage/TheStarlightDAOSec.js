import React, { useEffect, useState } from 'react'
import SolanaLogo from '../../assets/img/custom/solanalogo.png';
import MetaplexLogo from '../../assets/img/custom/metaplexlogo.png';
import PrimedImg from '../../assets/img/custom/primedimg.png';

const TheStarlightDAOSec = () => {
return (
    <section className="the-starlight-dao-sec">
        <div className="container">
            <div className="the-starlight-first-block">
                <div className="row">
                    <div className="the-starlight-first-left-block">
                        <h2 className="sec-title">The Starlight DAO Governance Token</h2>
                        <p className="text">Every week, 41,250 $SLX tokens are distributed among our users proportional to platform activity and sales volumes.</p>
                        <p className="text">If you made a sale or a purchase last week, you've got some $SLX rewards to claim!</p>
                    </div>
                    <div className="the-starlight-first-right-block">
                        <div className="hard-camp-claim-box">
                            <div className="hard-camp-claim-show-box">
                                <div className="hard-claim-balance-box">
                                    <p>Your balance</p>
                                    <h2>102<sub>SLX</sub></h2>
                                </div>
                                <div className="hard-claim-available-box">
                                    <p>Available for claim</p>
                                    <h2>546<sub>SLX</sub></h2>
                                </div>
                            </div>
                        </div>
                        <div className="hard-claim-btn-block">
                            <p>You are eligible for rewards:</p>
                            <a href="#0" className="btn btn-fill">Claim now  </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="the-starlight-second-block"> 
                <div className="row">
                    <div className="the-starlight-howit-left-block">
                        <h2 className="sec-title">How it works:</h2>
                        <p className="text">$STARLIGHT rewards distribution on Starlight.com is a part of Starlight Protocol DAO App Mining program and is calculated dynamically each week.</p>
                    </div>
                    <div className="the-starlight-howit-right-block">
                        <ul className="how-to-works-list">
                            <li>
                                <span className="num-count">1</span>
                                <h6>A portion of the 41,250 $SLX distributed every week</h6>
                                <p>Proportional to sales, scaled quadratically</p>
                            </li>
                            <li>
                                <span className="num-count">2</span>
                                <h6>50% for buyers and 50% for sellers</h6>
                            </li>
                            <li>
                                <span className="num-count">3</span>
                                <h6>+15% $SLX for verified users</h6>
                            </li>
                            <li>
                                <span className="num-count">4</span>
                                <h6>-50% for NFTs created not on starlight.com</h6>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
export default TheStarlightDAOSec