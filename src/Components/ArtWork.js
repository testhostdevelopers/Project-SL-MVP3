import React from "react";
import { Link } from "react-router-dom";

export default function ArtWork({ id='', title, artworkimg, setOpenImage }) {
  return (
    <div className="position-relative mr-3 artwork-item">
      <img
        src={artworkimg}
        className="cursor-pointer"
        width="230"
        alt=""
        onClick={() => {
          setOpenImage(true);
        }}
      />
      <div className="art-work-description-container">
        <small>
            { id.length ?
                <Link to={'/buy/' + id}>
                    <b>{title}</b>
                </Link> :
                <b>{title}</b>
            }
        </small>
      </div>
    </div>
  );
}
