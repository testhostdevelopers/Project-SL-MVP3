import React from 'react'
import { motion } from "framer-motion"

const UpdateCoverPopup = (props) => {

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }

    let { setUpdateCoverPopup } = props;

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={variants} className="place-a-bid-popup-container">
            <div className="border-radius bg-white popup-width">
                <div className="justify-content-between d-flex cursor-pointer mb-3">
                    <h3 className="">Update cover</h3>
                    <div className="popup-close-btn-outline cursor-pointer" onClick={() => { setUpdateCoverPopup(false); document.body.style.overflow = "scroll"; }}>
                        <i className="fas fa-times"></i>
                    </div>
                </div>
                <p className="sub-heading">Upload new cover for your collection. We recommend to upload images in 1440x260 resolution.</p>

                <div className="upload-file-field">
                    <input type="file" placeholder="Choose image" className="" />
                    <label className="btn-ping w-100 mb-0">Choose image</label>
                </div>

            </div>
        </motion.div>
    )
}

export default UpdateCoverPopup

