import React from "react";
import artWork from "../../assets/img/custom/artWorkWeekOne.png";
import { motion } from "framer-motion";
// import myimg from "../../assets/img/myimg2.jpg";

const FullScreenImage = (props) => {
  let { setOpenImage } = props;

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        className="full-screen-images-popup"
      >
        <div
          className="full-screen-image-resize"
          onClick={() => {
            setOpenImage(false);
            document.body.style.overflow = "scroll";
          }}
        >
          <svg
            width="24"
            height="23"
            viewBox="0 0 24 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.80033 12.6574L5.649 12.6574C5.26645 12.6574 4.94766 12.9762 4.94766 13.3588C4.94766 13.7413 5.26645 14.0601 5.649 14.0601L8.10721 14.0672L3.57333 18.6011C3.29705 18.8774 3.29705 19.3166 3.57333 19.5929C3.84961 19.8691 4.28883 19.8691 4.56512 19.5929L9.09899 15.059L9.099 17.5101C9.099 17.8927 9.41778 18.2114 9.80033 18.2114C9.99869 18.2114 10.1758 18.1335 10.3033 18.006C10.4308 17.8785 10.5087 17.7014 10.5087 17.503L10.5087 13.3659C10.5087 13.1817 10.4379 12.9975 10.3033 12.8629C10.1687 12.7283 9.9916 12.6504 9.80033 12.6574Z"
              fill="black"
            />
            <path
              d="M14.0742 9.50662L18.2255 9.50662C18.6081 9.50662 18.9268 9.18783 18.9268 8.80528C18.9268 8.42274 18.6081 8.10395 18.2255 8.10395L15.7673 8.09687L20.3012 3.56299C20.5775 3.2867 20.5775 2.84748 20.3012 2.5712C20.0249 2.29492 19.5857 2.29492 19.3094 2.5712L14.7755 7.10508L14.7755 4.65395C14.7755 4.2714 14.4567 3.95262 14.0742 3.95262C13.8758 3.95262 13.6987 4.03054 13.5712 4.15806C13.4437 4.28557 13.3658 4.46268 13.3658 4.66104L13.3658 8.7982C13.3658 8.98239 13.4366 9.16658 13.5712 9.30118C13.7058 9.43578 13.8829 9.5137 14.0742 9.50662Z"
              fill="black"
            />
          </svg>
        </div>

        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="">
              <div className="full-screen-img">
                <img src={artWork} alt={""} />
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-sm-12">
              <div>
                <span>Listed 1 edition for </span>
                <b>0.024 ETH</b>
              </div>

              <div>
                <span className="color-gray">By </span> <b>Mad Scientist</b>{" "}
                <span className="color-gray"> 1 hour ago</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default FullScreenImage;
