import React  from "react";
// import { Link } from "react-router-dom";

export default function ActivityNumberCard({
  pixelpunks,
  eth,
  seenstatus,
  activitynumbercardimg,
  FillLabel,
}) {
  return (
    <div className="ActivityNumberCard">
      <div className="ActivityNumberCard-img">
        <span className="lable-icon">
          <img src={FillLabel} alt={''}/>
        </span>
        <img src={activitynumbercardimg} alt={''}/>
      </div>
      <div className="ActivityNumberCard-info">
        <p>
          Listed by
          <span>{pixelpunks}</span>
          for
          <span>{eth}</span>
        </p>
        <span className="seenstatus">{seenstatus}</span>
      </div>
    </div>
  );
}
