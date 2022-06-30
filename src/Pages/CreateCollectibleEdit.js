import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CheckFillClrIcon from "../assets/img/icons/custom/Group_1454.svg";
import axios from "axios";
import { Config } from '../utils/config';
import {toast, ToastContainer} from "react-toastify";

const CreateCollectibleEdit = () => {
  const apiToken = sessionStorage.getItem("apiToken");
  const [udata, setUdata] = useState({});
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  var form = {
    dname: "",
    bio: "",
    cUrl: "",
    twitterUname: "",
    site: "",
    email: "",
    profile: {},
    cover: {},
  };
  useEffect(() => {
    if (apiToken) {
      axios
        .get(`${Config.baseURL}v1/user/getUser`, {
          headers: {
            Authorization: `Bearer ${apiToken}`,
          },
        })
        .then((res) => {
          setUdata(res.data.data);
          // console.log(res.data.data);
        });
    }
  }, []);

  var upProfile = async () => {
    console.log(form);
    if (apiToken) {
      var formData = new FormData();
      formData.append("display_name", udata.display_name !== undefined ? udata.display_name : null);
      formData.append("bio", udata.bio !== undefined ? udata.bio : null);
      formData.append("custom_url", udata.custom_url !== undefined ? udata.custom_url : null);
      formData.append("twitter_username", udata.twitter_username !== undefined ? udata.twitter_username : null);
      formData.append("personal_site", udata.personal_site !== undefined ? udata.personal_site : null);
      formData.append("email", udata.email !== undefined ? udata.email : null);
      formData.append("profile_img_url", udata.profile_img_url !== undefined ? udata.profile_img_url : null);
      formData.append("cover_img_url", udata.cover_img_url !== undefined ? udata.cover_img_url : null);
      await axios
        .put(`${Config.baseURL}v1/user/update`, formData, {
          headers: {
            Authorization: `Bearer ${apiToken}`,
          },
        })
        .then((res) => {
          console.log(res);
          sessionStorage.setItem("userdata", JSON.stringify(res.data.data));
        });
    }
  };

  const sendOtp = async (email) => {
        if (apiToken) {
            axios
                .post(`${Config.baseURL}v1/user/email/send`, {
                    headers: {
                        Authorization: `Bearer ${apiToken}`,
                    },
                })
            .then((res) => {
                // setUdata(res.data.data);
                console.log(res);
            });
        }
    }

    var verificationRequest = async () => {
        if (apiToken) {
          var formData = new FormData();
          formData.append("isVerificationRequested",true);
          await axios
            .put(`${Config.baseURL}v1/user/updateVerify/${udata._id}`, formData, {
              headers: {
                Authorization: `Bearer ${apiToken}`,
              },
            })
            .then((res) => {
              console.log(res);
              if(res.data.response_code === 'API_SUCCESS'){
                    toast("Verification Request successful!");
                    console.log(res)
              }
            });
        }
      };

  return (
    <>
        <ToastContainer />
      <motion.section
        initial="hidden"
        animate="visible"
        variants={variants}
        className="create-single-section-container"
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <Link className="d-flex align-items-center" to="/Profile">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14 7.33341H4.55333L8.28 3.60675L7.33333 2.66675L2 8.00008L7.33333 13.3334L8.27333 12.3934L4.55333 8.66675H14V7.33341Z"
                    fill="#141414"
                  />
                </svg>
                <h6 className="ml-3 mb-0">Back</h6>
              </Link>
            </div>

            <div className="col-sm-12 mt-5">
              <h2 className="edit_title">Edit Profile</h2>
            </div>

            <div className="col-sm-12 col-md-7 mobile-sm-order-right CreateCollectibleEdit-left">
              <div className="mt-5">
                <h5 className="m-0">
                  <b>Display Name</b>
                </h5>

                <div className="prize-single-collectible">
                  <input
                    name="dname"
                    required={true}
                    onChange={(e) => {
                      setUdata({ ...udata, display_name: e.target.value });
                    }}
                    value={udata == null ? "" : udata.display_name}
                    type="text"
                    placeholder="PixelDrops"
                  />
                  <span className="color-gray ">
                    <img src={CheckFillClrIcon} alt={""} />
                  </span>
                </div>
              </div>

              <div className="mt-5">
                <h5 className="m-0">
                  <b>Bio</b>
                </h5>
                <div className="prize-single-collectible">
                  <input
                    type="text"
                    required
                    name="bio"
                    onChange={(e) => {
                      setUdata({ ...udata, bio: e.target.value });
                    }}
                    value={udata == null ? "" : udata.bio}
                    placeholder="Tell us about yourself"
                  />
                </div>
              </div>

              <div className="mt-5">
                <h5 className="m-0">
                  <b>Custom URL</b>
                </h5>

                <div className="prize-single-collectible">
                  starlight.ooo/
                  <input
                    type="text"
                    name="cUrl"
                    required
                    onChange={(e) => {
                      setUdata({ ...udata, custom_url: e.target.value });
                    }}
                    value={udata === undefined ? "" : udata.custom_url}
                    className="ml-3"
                    placeholder="Enter your custom URL"
                  />
                </div>
              </div>

              <div className="mt-5">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="m-0">
                    <b>Twitter Username</b>
                  </h5>
                  {/* <div
                    className="color-gray text-right"
                    style={{ fontSize: "10px" }}
                  >
                    Link your Twitter account to gain more trust on the marketplace
                  </div> */}
                </div>
                <div className="prize-single-collectible">
                  <input
                    name="twitterUname"
                    type="text"
                    required
                    onChange={(e) => {
                      setUdata({ ...udata, twitter_username: e.target.value });
                    }}
                    value={udata === undefined ? "" : udata.twitter_username}
                    placeholder="@PixelDrops"
                  />
                  {/* <span className="color-gray ">
                    <button className="btn-primary-outline">Link</button>
                  </span> */}
                </div>
              </div>

              <div className="mt-5">
                <h5 className="m-0">
                  <b>Personal Site or Portfolio</b>
                </h5>

                <div className="prize-single-collectible">
                  <input
                    type="text"
                    name="site"
                    required
                    onChange={(e) => {
                      setUdata({ ...udata, personal_site: e.target.value });
                    }}
                    value={udata === undefined ? "" : udata.personal_site}
                    placeholder="https://"
                  />
                </div>
              </div>

              <div className="mt-5">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="m-0">
                    <b>Email</b>
                  </h5>
                  <div
                    className="color-gray text-right"
                    style={{ fontSize: "10px" }}
                  >
                    Your email for marketplace notifications.
                  </div>
                </div>

                <div className="prize-single-collectible">
                  <input
                    type="email"
                    name="email"
                    required
                    value={udata === undefined ? "" : udata.email}
                    onChange={(e) => {
                      setUdata({ ...udata, email: e.target.value });
                    }}
                    placeholder="PixelDrops@gmail.com"
                  />
                  {/* <span className="color-gray ">
                    <button  onClick={() => sendOtp(udata.email)} className="btn-primary-outline">Confirm</button>
                  </span> */}
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-5 mobile-sm-order-left CreateCollectibleEdit-right">
              <div className="w-100">
                <h5>
                  <b> Upload Profile Picture</b>
                </h5>
              </div>
              <div
                className="upload-file-container border-radius color-gray d-flex text-center justify-content-center flex-column align-items-center"
                style={{
                  // backgroundImage: 'url("' + udata.profile_img_url + '")',
                  backgroundRepeat: 'round',
                }}
              >
                {/*<div className="color-gray">PNG, GIF, WEBP. Max 10mb</div>*/}
                <div className="mt-3" style={{ cursor: 'pointer'}}>
                  <input
                    style={{ cursor: 'pointer'}}
                    type="file"
                    accept="image/*"
                    name="profile"
                    onChange={(e) => {
                      setUdata({
                        ...udata,
                        profile_img_url: e.target.files[0],
                      });
                    }}
                    id="profileImg"
                    className="img-btn w-100 ml-0 "
                  />
                  <label htmlFor="profileImg" style={{ cursor: 'pointer'}}>
                    {" "}
                    <img
                      src="/static/media/bg_img.156953d5.png"
                      alt={""}
                      style={{ cursor: 'pointer'}}
                    />
                  </label>
                  <br />
                  {udata == null
                    ? ""
                    : typeof udata.profile_img_url == "object"
                    ? udata.profile_img_url.name.split("/")[5]
                    : udata.profile_img_url ? udata.profile_img_url.split("/")[5] : udata.profile_img_url }
                </div>
              </div>

              <div className="w-100 mt-5">
                <h5>
                  <b> Upload Cover Image</b>
                </h5>
              </div>
              <div
                  className="upload-file-container border-radius color-gray d-flex text-center justify-content-center flex-column align-items-center"
                  style={{
                    // backgroundImage: 'url("' + udata.cover_img_url + '")',
                    backgroundRepeat: 'round',
                  }}
              >
                {/*<div className="color-gray">PNG, GIF, WEBP. Max 10mb</div>*/}
                <div className="mt-3" style={{ cursor: 'pointer'}}>
                  <input
                    style={{ cursor: 'pointer'}}
                    type="file"
                    accept="image/*"
                    name="cover"
                    onChange={(e) => {
                      setUdata({ ...udata, cover_img_url: e.target.files[0] });
                    }}
                    id="coverImg"
                    className="img-btn w-100 ml-0"
                  />
                  <label htmlFor="coverImg" style={{ cursor: 'pointer'}}>
                    <img
                      src="/static/media/bg_img.156953d5.png"
                      alt={""}
                      style={{ cursor: 'pointer'}}
                    />
                  </label>
                  <br />
                  {udata == null
                    ? ""
                    : typeof udata.cover_img_url == "object"
                    ? udata.cover_img_url.name.split("/")[5]
                    : udata.cover_img_url ? udata.cover_img_url.split("/")[5] : udata.cover_img_url}
                </div>
              </div>
            </div>

            <div
              className="col-sm-12  mobile-sm-order-right profile-edit-verified-container p-4 mt-5"
              style={{ borderRadius: "25px" }}
            >
              <div className="row">
                <div className="col-sm-12 col-lg-2 ">
                  <h5 className=" m-0">
                    <b>Verfication</b>
                  </h5>
                </div>

                <div className="col-sm-12 col-lg-6 ">
                {
                    udata.isVerificationRequested === false ?
                  <span className="color-gray ">
                    Proceed with verification process to get <br />
                    more visibility and gain trust on Starlight <br /> Marketplace.
                  </span>
                  :
                  <span className="color-gray ">
                    Your verification request is under review
                  </span>
                }
                </div>
                    {
                    udata.isVerificationRequested === false ?
                        <div className="col-sm-12 col-lg-4 text-right ">
                        <button onClick={() => verificationRequest()} className=" btn-primary-outline profile-edit-verified-btn w-50">
                            Get Verified
                        </button>
                        </div>
                     : ''
                    }
              </div>
            </div>

            <div
              className="col-md-12 mt-5 mobile-sm-order-right"
              style={{ paddingLeft: "0px", paddingRight: "0px" }}
            >
              <button
                id="updateProfile"
                onClick={() => upProfile()}
                className="btn-primary profile-edit-verified-btn w-100 "
              >
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default CreateCollectibleEdit;
