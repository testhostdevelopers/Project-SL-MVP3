import React from "react";
import userTick from '../../assets/img/custom/userTick.png';

const BuyHistory = () => {
    const buy_history = [
        {hist_img: userTick, hist_title: 'Listen 1 edition for', hist_coin: '0.024 ETH', hist_who: 'By', hist_name: 'Mad Scientist', hist_time: '1 hour ago'},
        {hist_img: userTick, hist_title: 'Listen 3 edition for', hist_coin: '0.024 Startlight', hist_who: 'By', hist_name: 'Sam', hist_time: '1/2 hour ago'},
        {hist_img: userTick, hist_title: 'Listen 5 edition for', hist_coin: '0.024 Bitcoin', hist_who: 'By', hist_name: 'Piter', hist_time: '4 hour ago'},
        {hist_img: userTick, hist_title: 'Listen 7 edition for', hist_coin: '0.024 Bitcoin', hist_who: 'By', hist_name: 'Piter', hist_time: '2 hour ago'},
        {hist_img: userTick, hist_title: 'Listen 4 edition for', hist_coin: '0.024 Bitcoin', hist_who: 'By', hist_name: 'Robert', hist_time: '7 hour ago'},
    ];
    
    
  return (
    <>
        {
            buy_history.map((buy_, hi_) =>

            <div key={hi_} className="w-100 d-flex justify-content-between mb-3">
                <div className="d-flex">
                <div className="user-img">
                    <img src={buy_.hist_img} width="36" alt="" />
                </div>
                <div className="ml-4">
                    <div>
                    <span className="color-gray"> {buy_.hist_title} </span>
                    <b>{buy_.hist_coin} </b>
                    </div>
                    <div>
                    <span className="color-gray"> {buy_.hist_who} </span>
                    <b>{buy_.hist_name}</b>
                    <span className="color-gray"> {buy_.hi} </span>

                    </div>
                </div>
                </div>
            </div>
            )
        }

    </>
  );
};

export default BuyHistory;
