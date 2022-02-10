import React, { useState, useEffect } from 'react'
import topSellerUser4 from '../../assets/img/custom/topSellerUser4.png';

const BuyAuction = () => {
    const [seconds, setSeconds] = useState(50);
    const [min, setMin] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds - 1);
            
          }, 1000);
          return () => clearInterval(interval);
    }, [])
    
  return (
    <>
        <div className="d-flex mt-4 justify-content-center mt-5 buy-font buy-highest-bid-block">
                                    <div className="pr-3 border-right buy-highest-bid-block-left">
                                        <span className="text-secondary">Highest bid by </span><span><b> The first of art</b></span>
                                        <div className="d-flex mt-2">
                                            <div className="user-img">
                                                <img src={topSellerUser4} width="42" alt="" />
                                            </div>
                                            <div className="ml-3">
                                                <h5 className="m-1"><b>0.066 wETH</b></h5>
                                                <div className="text-secondary">~$261</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pl-3 buy-highest-bid-block-right">
                                        <div className="text-secondary">Auction ends in</div>
                                        <div className="d-flex mt-3">
                                            <div className="mr-3">
                                                <h5 className="mb-1"><b>0</b></h5>
                                                <div className="text-secondary">Days</div>
                                            </div>

                                            <div className="mr-3">
                                                <h5 className="mb-1"><b>0</b></h5>
                                                <div className="text-secondary">Hours</div>
                                            </div>

                                            <div className="mr-3">
                                                <h5 className="mb-1"><b>{min    }</b></h5>
                                                <div className="text-secondary">Minutes</div>
                                            </div>

                                            <div className="mr-3">
                                                <h5 className="mb-1"><b>{seconds}</b></h5>
                                                <div className="text-secondary">Second</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
    </>
  )
}

export default BuyAuction