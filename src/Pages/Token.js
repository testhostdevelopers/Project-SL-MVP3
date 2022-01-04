import React from 'react'
import tokenLogo from "../assets/img/custom/tokenLogo.svg";
import { motion } from "framer-motion"

const Token = () => {

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }

    return (
        <>
            <motion.section
                initial="hidden"
                animate="visible"
                variants={variants} className="create-single-section-container token-page-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-lg-7 token-page-section-content">
                            <img src={tokenLogo} width="75" />
                            <h2>Meet $STARLIGHT <br />DAO Governance Token</h2>

                            <p>
                                Every week, 41,250 $RARI tokens are distributed among applications building on Rarible Protocol (including Rarible.com), proportional to sales volumes.
                            </p>

                            <p>
                                If you made a sale or a purchase last week, you've got some $RARI rewards to claim!
                            </p>

                            <div className="p-3 mt-5 d-flex justify-content-between align-items-center bg-white connect-wallet-section" style={{ borderRadius: "12px" }}>
                                <b>Connect your wallet to check your eligibility</b>
                                <button className="btn-ping">Connect Wallet</button>
                            </div>
                        </div>


                        <div className="col-sm-12 col-lg-5">
                            <h3>How Starlight rewards are calculated for our users:</h3>

                            <p><span className="color-gray">$STARLIGHT rewards distribution on</span> <b>Starlight.com</b> <span className="color-gray">is a part of Starlight Protocol DAO</span> <b>App Mining program</b> <span className="color-gray">and is calculated dynamically each week.</span></p>

                            <div className="wrapper mt-5">
                                <ul className="StepProgress">
                                    <li className="StepProgress-item" data-step="1"><strong>A portion of the 41,250 $RARI distributed every week</strong> <div><span className="color-gray">Proportional to sales, scaled quadratically</span></div></li>
                                    <li className="StepProgress-item" data-step="2"><strong>50% for buyers and 50% for sellers</strong></li>
                                    <li className="StepProgress-item" data-step="3"><strong>+15% $RARI for verified users</strong></li>
                                    <li className="StepProgress-item" data-step="4"><strong>-50% for NFTs created not on Rarible.com</strong></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

        </>
    )
}

export default Token
