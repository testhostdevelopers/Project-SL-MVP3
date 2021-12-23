import React from 'react'
import { motion } from "framer-motion"

const ErrorPopup = (props) => {

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }

    let { setErrorPopup } = props;

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={variants} className="place-a-bid-popup-container">
            <div className="border-radius bg-white popup-width">
                <div className="justify-content-between d-flex cursor-pointer mb-3">
                    <h3 className="">Error</h3>
                    <div className="popup-close-btn-outline cursor-pointer" onClick={() => { setErrorPopup(false); document.body.style.overflow = "scroll"; }}>
                        <i class="fas fa-times"></i>
                    </div>
                </div>
                <p className="sub-heading">Metamask Message Signature: User denied message signature. If the problem persist please <strong>contact support.</strong></p>

                <div className="">
                    <button className="btn-ping w-100 mt-4">
                        Try again
                    </button>
                </div>

            </div>
        </motion.div>
    )
}

export default ErrorPopup
