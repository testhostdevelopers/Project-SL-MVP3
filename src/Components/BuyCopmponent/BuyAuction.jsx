import React, { useState, useEffect } from "react";
import topSellerUser4 from "../../assets/img/custom/topSellerUser4.png";
import axios from "axios";
import { Config } from '../../utils/config';

const BuyAuction = (props) => {
  const apiToken = sessionStorage.getItem("apiToken");
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(2);
  const [min, setMin] = useState(10);
  const [seconds, setSeconds] = useState(44);
  const data = props;
  // var length = data.props.bids.length;
  console.log(data.props);
  const update = async () => {
    await axios
      .put(`${Config.baseURL}v1/collectible/update/`,{
        isAuctionCompleted: true,
        _collectible_id: data.props._id
      }, {
        headers: {
          Authorization: `Bearer ${apiToken}`,
        },
      })
      .then((res) => {
        // console.log(res.data.data);
        // setSingleCollectibleData(res.data.data);
        // console.log(singleCollectibleData.bids)
       
      });
  };
  useEffect(() => {
    if(seconds !== 0 || min !== 0 || hour !== 0 || day !== 0){
      const interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (min === 0) {
            clearInterval(interval);
          } else {
            setMin(min - 1);
            setSeconds(59);
          }
          if (hour === 0) {
            clearInterval(interval);
            setHour(hour - 1);
            setMin(59);
          }
          if (day === 0) {
            clearInterval(interval);
            setDay(day - 1);
            setHour(24);
          }
          if(seconds === 0 && min === 0 && hour === 0 && day === 0){
            setDay(0);
            setHour(0);
            setMin(0);
            setSeconds(0);
          }
        } 
      }, 1000);
      
      return () => {
          clearInterval(interval);
      }
    };
    if((seconds === 0 && min === 0 && hour === 0 && day === 0) && data.props.isAuctionCompleted === false ){
      if (apiToken) {
        update();
      }
    }
  });

  return (
    <>
      <div className="d-flex mt-4 justify-content-center mt-5 buy-font buy-highest-bid-block">
          { data && data.props.bids.length > 0 ? 
          <div className="pr-3 border-right buy-highest-bid-block-left">
            <span className="text-secondary">Highest bid by </span>
            <span>
              <b> The first of art</b>
            </span>
            <div className="d-flex mt-2">
              <div className="user-img">
                <img src={topSellerUser4} width="42" alt="" />
              </div>
              <div className="ml-3">
                <h5 className="m-1">
                  <b>0.066 wETH</b>
                </h5>
                <div className="text-secondary">~$261</div>
              </div>
            </div>
          </div>
          : '' }

        <div className="pl-3 buy-highest-bid-block-right">
          <div className="text-secondary">Auction ends in</div>
          <div className="d-flex mt-3">
            <div className="mr-3">
              <h5 className="mb-1">
                <b>{day}</b>
              </h5>
              <div className="text-secondary">Days</div>
            </div>

            <div className="mr-3">
              <h5 className="mb-1">
                <b>{hour}</b>
              </h5>
              <div className="text-secondary">Hours</div>
            </div>

            <div className="mr-3">
              <h5 className="mb-1">
                <b>{min}</b>
              </h5>
              <div className="text-secondary">Minutes</div>
            </div>

            <div className="mr-3">
              <h5 className="mb-1">
                <b>{seconds < 10 ? `0${seconds}` : seconds}</b>
              </h5>
              <div className="text-secondary">Second</div>
            </div>
          </div>
        </div>
      </div>
      {/* <button
        className="btn-primary-outline mt-3 ml-3 w-100"
        // onClick={() => setSingleCollectionPopup(true)}
      >
        Place a Bid
      </button> */}
      {/* <div>
        {day === 0 && hour === 0 && min === 0 && seconds === 0 
          ? "All Auction Done"
          : ""}
      </div> */}
    </>
  );
};

export default BuyAuction;
