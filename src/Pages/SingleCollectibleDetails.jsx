import React from 'react'

const SingleCollectibleDetails = () => {
  return (
    <>
                        <div className="col-sm-12 col-lg-7">
                            
                            <div className="mt-5">
                                <h5><b>Title</b></h5>

                                <div className="prize-single-collectible">
                                    <input type="text" placeholder="e. g. Redeemable T-Shirt with logo" />
                                </div>
                            </div>

                            <div className="mt-3">
                                <div className="d-flex">
                                    <h5><b>Description</b> </h5><span><small className="color-gray ml-2">(Optional)</small></span>
                                </div>

                                <div className="prize-single-collectible">
                                    <input type="text" placeholder="e. g.  “After purchasing you will be able to get the real T-Shirt" />
                                </div>

                                <div className="mt-2"><small><span className="color-gray">With preserved line-breaks </span></small></div>
                            </div>

                            {/* <div className="mt-5">
                                <div className="d-flex">
                                    <h5><b>Properties</b> </h5><span><small className="color-gray ml-2">(Optional)</small></span>
                                </div>

                                <div className="d-flex">
                                    <div className="prize-single-collectible d-flex w-100">
                                        <input type="text" placeholder="e. g.  Size" />
                                    </div>

                                    <div className="prize-single-collectible d-flex w-100 ml-3">
                                        <input type="text" placeholder="e. g.  Medium" />
                                    </div>

                                </div>
                            </div> */}



                            {/* <div className="mt-5">
                                <div className="d-flex">
                                    <h5><b>Alternative text for NFT</b> </h5><span><small className="color-gray ml-2">(Optional)</small></span>
                                </div>

                                <div className="prize-single-collectible">
                                    <input type="text" placeholder="Describe the Image in detail" />
                                </div>

                                <div className="mt-2"><small><span className="color-gray">Text that will be used in VoiceOver for people with disabilities.</span></small></div>
                            </div> */}



                        </div>

                        <div className="col-sm-12 col-lg-5">
                            <div className="mt-5 border-gray border-radius p-4">
                                <div className="d-flex">
                                    <h5><b>Royalties</b> </h5>
                                </div>

                                <div className="prize-single-collectible">
                                    <input type="text" placeholder="10" />
                                    <span className="color-gray ">%</span>
                                </div>

                                <div className="mt-2 w-100">
                                    <small className="d-flex">
                                        <span className="color-gray">Suggested:</span>
                                        <div className="text-right w-100"><span className="color-gray">0%, 10%, 20%,30%</span><br /><span className="color-gray">Maximum is 50%</span></div>
                                    </small>
                                </div>
                            </div>
                        </div>
    </>
  )
}

export default SingleCollectibleDetails