import React from 'react'
import { motion } from "framer-motion"

const Whatwallet = (props) => {

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }

    let { setWhatwallet } = props;

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={variants} className="place-a-bid-popup-container">
            <div className="border-radius bg-white popup-width whatiswallet">
                <div className="justify-content-between d-flex cursor-pointer mb-3">
                    <h3>What is a wallet?</h3>
                    <div className="popup-close-btn-outline cursor-pointer" onClick={() => { setWhatwallet(false); document.body.style.overflow = "scroll"; }}>
                        <i className="fas fa-times"></i>
                    </div>
                </div>

                <p>
                    Wallets are used to send, receive, and store digital assets like Ether. Wallets come in many forms. They are either built into your browser.an extension added to your browser, a piece
                    of hardware plugged into your computer or even an app on your phone. For more information about wallets, see this explanation.
                </p>

            </div>
        </motion.div>
    )
}

export default Whatwallet

