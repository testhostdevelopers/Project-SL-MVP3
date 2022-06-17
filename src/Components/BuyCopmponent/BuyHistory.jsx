import React, { useState, useEffect } from "react";
import userTick from "../../assets/img/custom/userTick.png";
import { Config } from "../../utils/config";
import axios from "axios";
import artWorkWeek1 from "../../../src/assets/img/custom/artWorkWeek1.png";

const BuyHistory = (props) => {
  let {page = 'Activity', collectibleId = '', userId = ''} = props;
  const apiToken = sessionStorage.getItem("apiToken");
  const userData = JSON.parse(sessionStorage.getItem("userdata")) || {};
  const [historyData, setHistory] = useState([]);
  const getHistory = async () => {
    if (collectibleId.length > 0) {
      // console.log('collectionId.length', collectibleId.length);
      await axios
          .get(`${Config.baseURL}v1/collectible/getcollectiblehistory/` + collectibleId, {
            data: {
              user_id: userData._id
            },
            headers: {
              Authorization: `Bearer ${apiToken}`,
            }
          })
          .then(response => {
            if (response.data.response_code === "API_SUCCESS") {
              setHistory(response.data.data);
            }
          })
          .catch(err => {
            console.log(err);
          });
    } else {
      console.log('length', collectibleId.length);
    }
  };
  useEffect(() => {
    if (sessionStorage.getItem("apiToken")) {
      getHistory().then(r => {});
    }
  }, []);

  return (
    <>
      {historyData.map((singleData, counter) => (
        <div key={counter} className="w-100 d-flex justify-content-between mb-3">
          <div className="d-flex">
            <div className="user-img">
              <img src={singleData.collectible_id.img_path.indexOf('nftstorage.link') > -1 ? 'https://' + singleData.collectible_id.img_path : artWorkWeek1} width="36" alt="" />
            </div>
            <div className="ml-4">
              <div>
                <span className="color-gray"> {singleData.collectible_id.title} </span>
                <b>{singleData.collectible_id.price} </b>
              </div>
              <div>
                <span className="color-orange"><b>{singleData.filter.title} </b> </span>
                <span className="color-gray">By </span>
                <b>{singleData.user_id.display_name}</b>
                {/*<span className="color-gray"> {singleData.collectible_id.hi} </span>*/}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BuyHistory;
