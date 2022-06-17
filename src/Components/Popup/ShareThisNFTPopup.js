import React from "react";
import { motion } from "framer-motion";
import closeicon from "../../assets/img/custom/close.svg";

const ShareThisNFTPopup = (props) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  let { setsharePopup, id = ''} = props;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className="place-a-bid-popup-container"
    >
      <div className="border-radius bg-white popup-width">
        <div className="justify-content-between d-flex cursor-pointer mb-3">
          <h3 className="">Share this NFT</h3>
          <div
            className="popup-close-btn-outline cursor-pointer"
            onClick={() => {
              setsharePopup(false);
              document.body.style.overflow = "scroll";
            }}
          >
            <img src={closeicon} alt={""} />
          </div>
        </div>

        <div className="nft-share-icons">
          <ul>
            <li>
              <a href={"https://twitter.com/intent/tweet?text=Hello, See This NFT here...&url=" + window.location.host + "/buy/" + id}
                 rel="noopener" target="_blank">
                <span>
                  <i className="fab fa-twitter" />
                </span>
                Twitter
              </a>
            </li>
            <li>
              <a href={"https://www.facebook.com/sharer/sharer.php?u=" + window.location.host + "/User/" + id} rel="noopener" target="_blank">
                <span>
                  <i className="fab fa-facebook-f" />
                </span>
                Facebook
              </a>
            </li>
            <li>
              <a href={"https://telegram.me/share/url?text=Hello, See This NFT here...&url=" + window.location.host + "/User/" + id} rel="noopener" target="_blank">
                <span>
                  <i className="fab fa-telegram-plane" />
                </span>
                Telegram
              </a>
            </li>
            <li>
              <a href={"mailto:?subject=Hello&amp;body=Hello See This NFT here. " + window.location.host + "/User/" + id}
                 title="Share by Email">
                <span>
                  <i className="fas fa-envelope" />
                </span>
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default ShareThisNFTPopup;
