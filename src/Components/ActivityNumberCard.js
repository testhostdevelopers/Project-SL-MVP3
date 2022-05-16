import React from "react";

export default function ActivityNumberCard({
  title,
  filter,
  pixelpunks,
  eth,
  seenstatus,
  activitynumbercardimg,
  FillLabel,
  info,
  not_match,
}) {
  return (
    <>
      <div className="ActivityNumberCard">
        <div className="ActivityNumberCard-img">
          <span className="lable-icon">
            <img src={FillLabel} alt={""} />
          </span>
          <img src={activitynumbercardimg} alt={""} />
        </div>
        <div className="ActivityNumberCard-info">
          <h4>{title}</h4>
          <p>
            {filter}
            {/*<span>🎉</span>*/}
            {/*<span>{pixelpunks}</span>*/}
            {/*for*/}
            {/*<span>{eth}</span>*/}
            <span>{info}</span>
          </p>
          <span className="seenstatus">{seenstatus}</span>
        </div>
      </div>
    </>
  );
}
