import React from "react";

const ProfileLinks = () => {
  return (
    <div>
      <div className="nft-share-icons">
        <h3>Share link to this page</h3>
        <ul>
          <li>
            {/*<a href={"https://twitter.com/intent/tweet?text=Hello, See my profile here...&url=" + window.location.href} rel="noopener" target="_blank">*/}
            <a href={"https://twitter.com/intent/tweet?text=Hello, See my profile here...&url=http://starlight.webcase.me:3000/user/"} rel="noopener" target="_blank">
              <span>
                <i className="fab fa-twitter"/>
              </span>
              Twitter
            </a>
          </li>
          <li>
            <a href="#0">
              <span>
                <i className="fab fa-facebook-f"/>
              </span>
              Facebook
            </a>
          </li>
          <li>
            <a href="#0">
              <span>
                <i className="fab fa-telegram-plane"/>
              </span>
              Telegram
            </a>
          </li>
          <li>
            <a href="#0">
              <span>
                <i className="fas fa-envelope"/>
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
