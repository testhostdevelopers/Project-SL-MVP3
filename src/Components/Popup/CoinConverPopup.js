import React from 'react'
import { Select } from 'antd';
import { motion } from "framer-motion"

const { Option } = Select;

const CoinConverPopup = ({setCoinConverp}) => {

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={variants} className="place-a-bid-popup-container">
            <div className="border-radius bg-white popup-width coin-covert-popup-container" style={{padding: "48px"}}>
                <div className="d-flex justify-content-between cursor-pointer">
                    <h3>Convert</h3>
                </div>

                <div className="mt-2">
                    <div className="d-flex">
                        <h5><b>You Pay</b></h5> <span className="color-gray ml-3">Max amount is 0 weTH</span>
                    </div>

                    <div className="pt-2 pb-2 border-bottom d-flex justify-content-between prize-single-collectible">
                        <input type="text" placeholder="Enter the amount" className="w-100" />
                        <Select className="section-select-filter ml-0" defaultValue="eth">
                            <Option value="eth">ETH</Option>
                            <Option value="btc">BTC</Option>
                        </Select>
                    </div>
                </div>

                <div className="coin-convert-direction mt-4 mb-4 cursor-pointer">
                    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M10.3194 7.97356L11.9428 6.35008L6.25951 0.666748L0.576172 6.35008L2.2008 7.97356L5.11136 5.06186V20.1853H7.40765V5.06186L10.3194 7.97356ZM17.7439 21.3335L23.4272 15.6501L21.8037 14.0267L18.892 16.9384V1.81495H16.5957L16.5969 16.9384L13.684 14.0267L12.0605 15.6501L17.7439 21.3335Z" fill="black" />
                    </svg>
                </div>

                <div className="mt-3">
                    <div className="d-flex">
                        <h5><b>You recieve</b></h5>
                    </div>

                    <div className="pt-2 pb-2 border-bottom d-flex justify-content-between prize-single-collectible">
                        <input type="text" placeholder="Amount you will recieve" className=" w-100 " />
                        <Select className="section-select-filter ml-0" defaultValue="weth">
                            <Option value="weth">WETH</Option>
                            <Option value="uni">UNI</Option>
                        </Select>
                    </div>
                </div>

                <div className="border-bottom pt-3 pb-3">
                    <button className="btn-primary-outline w-100 mt-3">
                        Convert
                    </button>
                </div>

                <div>
                    <button className="btn-ping w-100 mt-3 mb-3" onClick={() => setCoinConverp(false)}>
                        Close
                    </button>
                </div>
            </div>
        </motion.div>
    )
}

export default CoinConverPopup
