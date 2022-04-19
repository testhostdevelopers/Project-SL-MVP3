import React from "react";

const ProfileLinks = () => {
  return (
    <div>
      <div className="nft-share-icons">
        <h3>Share link to this page</h3>
        <ul>
          <li>
            <a href="#0">
              <span>
                <i className="fab fa-twitter"></i>
              </span>
              Twitter
            </a>
          </li>
          <li>
            <a href="#0">
              <span>
                <i className="fab fa-facebook-f"></i>
              </span>
              Facebook
            </a>
          </li>
          <li>
            <a href="#0">
              <span>
                <i className="fab fa-telegram-plane"></i>
              </span>
              Telegram
            </a>
          </li>
          <li>
            <a href="#0">
              <span>
                <i className="fas fa-envelope"></i>
              </span>
              Email
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileLinks;
