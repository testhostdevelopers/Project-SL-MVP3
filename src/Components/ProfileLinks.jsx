import React from "react";

const ProfileLinks = ({id}) => {
  return (
    <div>
      <div className="nft-share-icons">
        <h3>Share link to this page</h3>
        <ul>
          <li>
            <a onClick={() =>  navigator.clipboard.writeText(window.location.host + "/User/" + id)}
               rel="noopener" target="_blank"
            >
                <span>
                  <i className="fas fa-clipboard"/>
                </span>
              Copy
            </a>
          </li>
          <li>
            <a href={"https://twitter.com/intent/tweet?text=Hello, See my profile here...&url=" + window.location.host + "/User/" + id}
               rel="noopener" target="_blank">
              <span>
                <i className="fab fa-twitter"/>
              </span>
              Twitter
            </a>
          </li>
          <li>
            <a href={"https://www.facebook.com/sharer/sharer.php?u=" + window.location.host + "/User/" + id} rel="noopener" target="_blank">
              <span>
                <i className="fab fa-facebook-f"/>
              </span>
              Facebook
            </a>
          </li>
          <li>
            <a href={"https://telegram.me/share/url?text=Hello, See my profile here...&url=" + window.location.host + "/User/" + id} rel="noopener" target="_blank">
              <span>
                <i className="fab fa-telegram-plane"/>
              </span>
              Telegram
            </a>
          </li>
          <li>
            <a href={"mailto:?subject=Hello&amp;body=Hello See my profile here. " + window.location.host + "/User/" + id}
               title="Share by Email">
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
