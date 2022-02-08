import React from 'react'
import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import CheckFillClrIcon from '../assets/img/icons/custom/check-fill-clr.png'

const CreateCollectibleEdit = () => {

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }

    return (
        <>
            <motion.section
                initial="hidden"
                animate="visible"
                variants={variants} className="create-single-section-container">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <Link className="d-flex align-items-center" to="/">
                                <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M14 7.33341H4.55333L8.28 3.60675L7.33333 2.66675L2 8.00008L7.33333 13.3334L8.27333 12.3934L4.55333 8.66675H14V7.33341Z" fill="#141414" />
                                </svg>
                                <h6 className="ml-3 mb-0">Back</h6>
                            </Link>
                        </div>

                        <div className="col-sm-12 mt-5">
                            <h2 className='edit_title'>Edit Profile</h2>
                        </div>

                        <div className="col-sm-12 col-md-7 mobile-sm-order-right CreateCollectibleEdit-left">
                            <div className="mt-5">
                                <h5 className="m-0"><b>Display Name</b></h5>

                                <div className="prize-single-collectible">
                                    <input type="text" placeholder="PixelDrops" />
                                    <span className="color-gray "><img src={CheckFillClrIcon} /></span>
                                </div>
                            </div>

                            <div className="mt-5">
                                <h5 className="m-0"><b>Bio</b></h5>
                                <div className="prize-single-collectible">
                                    <input type="text" placeholder="Tell us about yourself" />
                                </div>
                            </div>

                            <div className="mt-5">
                                <h5 className="m-0"><b>Custom URL</b></h5>

                                <div className="prize-single-collectible">
                                    starlight.ooo/
                                    <input type="text" className="ml-3" placeholder="Enter your custom URL" />
                                </div>
                            </div>


                            <div className="mt-5">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="m-0"><b>Twitter Username</b></h5>
                                    <div className="color-gray text-right" style={{ fontSize: "10px" }}>Link your Twitter account to gain more trust on the marketplace</div>

                                </div>
                                <div className="prize-single-collectible">
                                    <input type="text" placeholder="@PixelDrops" />
                                    <span className="color-gray "><button className="btn-primary-outline">Link</button></span>
                                </div>
                            </div>

                            <div className="mt-5">
                                <h5 className="m-0"><b>Personal Site or Portfolio</b></h5>

                                <div className="prize-single-collectible">
                                    <input type="text" placeholder="https://" />
                                </div>
                            </div>

                            <div className="mt-5">
                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="m-0"><b>Email</b></h5>
                                    <div className="color-gray text-right" style={{ fontSize: "10px" }}>Your email for marketplace notifications.</div>

                                </div>

                                <div className="prize-single-collectible">
                                    <input type="text" placeholder="PixelDrops@gmail.com" />
                                    <span className="color-gray "><button className="btn-primary-outline">Confirm</button></span>
                                </div>
                            </div>


                        </div>
                        <div className="col-sm-12 col-md-5 mobile-sm-order-left CreateCollectibleEdit-right">
                            <div className="w-100">
                                <h5><b> Upload Profile Picture</b></h5>
                            </div>
                            <div className="upload-file-container border-radius color-gray d-flex text-center justify-content-center flex-column align-items-center">
                                <div className="color-gray">PNG, GIF, WEBP. Max 10mb</div>
                                <div className="mt-3">
                                    <button className="btn-primary w-100 ml-0 "></button>
                                </div>
                            </div>

                            <div className="w-100 mt-5">
                                <h5><b> Upload Cover Image</b></h5>
                            </div>
                            <div className="upload-file-container border-radius color-gray d-flex text-center justify-content-center flex-column align-items-center">
                                <div className="color-gray">PNG, GIF, WEBP. Max 10mb</div>
                                <div className="mt-3">
                                    <button className="btn-primary w-100 ml-0"></button>
                                </div>
                            </div>
                        </div>



                        <div className="col-sm-12 mobile-sm-order-right gray-color profile-edit-verified-container p-4 mt-5" style={{ borderRadius: "25px" }}>
                            <div className="row">
                                <div className="gray-color col-sm-12 col-lg-2">
                                    <h5 className="m-0 gray-color"><b>Verfication</b></h5>
                                </div>

                                <div className="col-sm-12 col-lg-6 gray-color">
                                    <span className="color-gray">
                                        Proceed with verification process to get <br /> more visibility and gain trust on Starlight  <br />  Marketplace.
                                    </span>
                                </div>

                                <div className="gray-color col-sm-12 col-lg-4 text-right">
                                    <button className="btn-primary-outline profile-edit-verified-btn w-50">Get Verified</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 mt-5 mobile-sm-order-right">
                            <button className="btn-primary profile-edit-verified-btn w-100 ">Update Profile</button>
                        </div>

                    </div>

                </div>
            </motion.section>

        </>
    )
}

export default CreateCollectibleEdit
