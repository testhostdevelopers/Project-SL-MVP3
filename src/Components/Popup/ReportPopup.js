import React from 'react'
import { motion } from "framer-motion"

const ReportPopup = (props) => {

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }

    let { setreportPopup } = props;

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={variants} className="place-a-bid-popup-container">
            <div className="border-radius bg-white popup-width">
                <div className="justify-content-between cursor-pointer">
                    <h3 className="mb-2">Why are you reporting?</h3>
                    <p className="sub-heading">Describe why you think this item should be removed from the marketplace.</p>
                </div>

                <div className="input-field">
                    <label>Message</label>
                    <input type="text" placeholder="Tell us some details"/>
                </div>

                <div className="border-bottom pb-3">
                    <button className="btn-ping w-100 mt-4">
                        Report
                    </button>
                </div>

                <button className="btn-primary-outline w-100 mt-3 mb-3" onClick={() => setreportPopup(false)}>
                    Cancel
                </button>

            </div>
        </motion.div>
    )
}

export default ReportPopup
