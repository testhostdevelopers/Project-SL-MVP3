import React from 'react'
import { motion } from "framer-motion"

const PlaceABidFollowPopup = (props) => {

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }

    let { setSinglePopup, setErrorPopup } = props;

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={variants} className="place-a-bid-popup-container">
            <div className="follow-step border-radius bg-white popup-width">

                <div className="d-flex justify-content-between cursor-pointer">
                    <h3>Follow steps</h3>
                    <div className="popup-close-btn-outline" onClick={() => { setSinglePopup(false); document.body.style.overflow = "scroll"; }}>
                        <i claclassNamess="fas fa-times"></i>
                    </div>
                </div>
                <div className="mb-3 mt-4">
                    <div className="d-flex">
                        <div className="fallow-steps-passive">
                            <i className="fas fa-check-circle"></i>
                        </div>
                        <div className="ml-3">
                            <h6 className="mb-1"><b>Deposit wETH</b></h6>
                            <p className="color-gray">
                                <small>Send transaction to convert <b>ETH to wETH</b></small>
                            </p>
                        </div>
                    </div>

                    <button className="btn-gray  w-100 mb-3">
                        Completed
                    </button>
                </div>

                <div className="mb-3">
                    <div className="d-flex">
                        <div className="fallow-steps-active">
                            <i className="fas fa-check-circle"></i>
                        </div>
                        <div className="ml-3">
                            <h6 className="mb-1"><b>Approve asset</b></h6>
                            <p className="color-gray">
                                <small>This transaction is conducted only once per asset</small>
                            </p>
                        </div>
                    </div>

                    <button className="btn-ping w-100 mb-3">
                        Start
                    </button>
                </div>

                <div className="mb-3">
                    <div className="d-flex">
                        <div className="fallow-steps-active">
                            <i className="fas fa-check-circle"></i>
                        </div>
                        <div className="ml-3">
                            <h6 className="mb-1"><b>Place a bid</b></h6>
                            <p className="color-gray">
                                <small>Sign message to set place a bid</small>
                            </p>
                        </div>
                    </div>
                    <button className="btn-ping w-100 mb-3" onClick={() => setErrorPopup(true) }>
                        Start
                    </button>
                </div>

                <button className="btn-primary-outline w-100 mb-3" onClick={() => setSinglePopup(false)}>
                    Cancel
                </button>
            </div>
        </motion.div>
    )
}

export default PlaceABidFollowPopup
