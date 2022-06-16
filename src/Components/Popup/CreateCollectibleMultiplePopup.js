import React, {useState} from "react";
import {motion} from "framer-motion";
import closeicon from "../../assets/img/custom/close.svg";
import axios from "axios";
import { Config } from '../../utils/config';

const CreateCollectibleMultiplePopup = (props) => {
  const variants = {
    hidden: {opacity: 0},
    visible: {opacity: 1},
  };
  const user_id = JSON.parse(sessionStorage.getItem("userdata")) || {};
  const profileUploader = React.useRef(null);
  const [selectedFile, setSelectedFile] = React.useState(null);
  let {setSingleCollectionPopup} = props;
  let [collectibleData, setCollectibleData] = useState({});

  const makeURL = (text) => {
    text = 'starlight.com/' + text.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'');
    // console.log(text);
    return text;
  }

  const handleCollectionPicUpload = (e) => {
    const file = e.target.files[0];
    setSelectedFile(e.target.files[0]);
    setCollectibleData({...collectibleData, main_img: file});
    // console.log('file', file.name);
    // console.log('collectibleData', collectibleData);
  };

  const handleSubmit = async (event) => {
    const apiToken = sessionStorage.getItem("apiToken");
    if (apiToken) {
      // console.log(collectibleData);
      event.preventDefault();
      const formData = new FormData();
      // formData.append("file", selectedFile);
      formData.append("title", collectibleData.title);
      formData.append("description", collectibleData.description);
      formData.append("symbol", collectibleData.symbol);
      formData.append("custom_url", collectibleData.custom_url);
      formData.append("main_img", collectibleData.main_img);
      formData.append("user_id", user_id._id);

      /*let form = {
        title: collectibleData.title,
        description: collectibleData.description,
        symbol: collectibleData.symbol,
        custom_url: collectibleData.custom_url,
        main_img: collectibleData.main_img,
        user_id: user_id,
      };*/
      // console.log(form);
      await axios.post(`${Config.baseURL}v1/collection/create`, formData, {
        headers: {
          "Authorization": `Bearer ${apiToken}`,
        }
      }).then((res) => {
        // console.log('res.data.data.length', res.statusText);
        if (res.statusText === "OK") {
          setSingleCollectionPopup(false);
          // console.log(res)
        }
      });
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className="place-a-bid-popup-container"
    >
      <form onSubmit={handleSubmit}>
        <div
            className="border-radius bg-white popup-width"
            style={{padding: "48px"}}
        >
          <div className="d-flex justify-content-between cursor-pointer">
            <h3>New Collection</h3>
            <div
                className="popup-close-btn-outline"
                onClick={() => {
                  setSingleCollectionPopup(false);
                  document.body.style.overflow = "scroll";
                }}
            >
              <img src={closeicon} alt={""}/>
            </div>
          </div>

          <div className="d-flex mt-3">
            <div className="fallow-steps-active">
              <i className="fas fa-check-circle"/>
            </div>
            <div className="ml-3">
              <h6 className="mb-1">
                <b>Deposit wETH</b>
              </h6>
              <p className="color-gray">
                <small>
                  We recommend an image of atleast 400x400. Gifs work too.
                </small>
              </p>
              <input
                type="file"
                accept="image/*,video/mp4,video/x-m4v,video/*,image/x-png,image/gif,image/jpeg"
                onChange={handleCollectionPicUpload}
                ref={profileUploader}
                name="main_img"
                id="profilephoto"
                style={{
                  display: "none",
                }}
              />
              <button
                className="btn-primary-outline w-100"
                onClick={() => profileUploader.current.click()}
              >
                Choose File
              </button>
            </div>
          </div>

          <div className="mt-4">
            <div className="d-flex">
              <h5>
                <b>Display name</b>
              </h5>{" "}
              <span className="color-gray ml-2">(Token name cannot be changed)</span>
            </div>

            <div className="pt-2 pb-2 border-bottom d-flex justify-content-between prize-single-collectible">
              <input
                  type="text"
                  placeholder="Enter token name"
                  required={true}
                  onChange={(e) => {
                    setCollectibleData({...collectibleData, title: e.target.value});
                    // console.log('collectibleData', collectibleData);
                  }}
                  className="w-100"
              />
            </div>
            {/*<div className="color-gray">
            <small>(Token name cannot be changed)</small>
          </div>*/}
          </div>

          <div className="mt-2">
            <div className="d-flex">
              <h5>
                <b>Symbol</b>
              </h5>{" "}
              <span className="color-gray ml-2">(Required)</span>
            </div>

            <div className="pt-2 pb-2 border-bottom d-flex justify-content-between prize-single-collectible">
              <input
                  type="text"
                  placeholder="Enter token symbol"
                  onChange={(e) => {
                    setCollectibleData({...collectibleData, symbol: e.target.value});
                    // console.log('collectibleData', collectibleData);
                  }}
                  required={true}
                  className="w-100"
              />
            </div>
          </div>

          <div className="mt-3">
            <div className="d-flex">
              <h5>
                <b>Description</b>
              </h5>{" "}
              <span className="color-gray ml-2">(Optional)</span>
            </div>

            <div className="pt-2 pb-2 border-bottom d-flex justify-content-between prize-single-collectible">
              <input
                  type="text"
                  placeholder="Some words about the token collection"
                  onChange={(e) => {
                    setCollectibleData({...collectibleData, description: e.target.value});
                    // console.log('collectibleData', collectibleData);
                  }}
                  className=" w-100 "
              />
            </div>
          </div>

          <div className="mt-3">
            <div className="d-flex">
              <h5>
                <b>Custom URL</b>
              </h5>{" "}
              <span className="color-gray ml-2">
              (Will be used as public profile)
            </span>
            </div>

            <div className="pt-2 pb-2 border-bottom d-flex justify-content-between prize-single-collectible">
              <span className="color-gray mr-2">starlight.com/</span>
              <input
                  type="text"
                  placeholder="Enter your custom URL"
                  onChange={(e) => {
                    setCollectibleData({...collectibleData, custom_url: makeURL(e.target.value)});
                    // console.log('collectibleData', collectibleData);
                  }}
                  className=" w-100 "
              />
            </div>
            <p className="color-gray">
              <small><b><u>{collectibleData.custom_url}</u></b></small>
            </p>
          </div>

          {/*<button
              className="btn-ping  w-100 mt-2 mb-3 "
              onClick={handleSubmit}
          >
            Create Collection
          </button>*/}
          <input className="btn-ping  w-100 mt-2 mb-3 " type="submit" value="Create Collection" />
        </div>
      </form>
    </motion.div>
  );
};

export default CreateCollectibleMultiplePopup;
