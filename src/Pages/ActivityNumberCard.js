import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function ActivityNumberCard ({title,pixelpunks, eth,seenstatus,activitynumbercardimg, FillLabel}) {
    
  return (
      <div className="ActivityNumberCard">
          <div className="ActivityNumberCard-img">
                <span className="lable-icon"><img src={FillLabel} /></span>
                <img src={activitynumbercardimg} />
          </div>
          <div className="ActivityNumberCard-info">
              
                <h4>{title}</h4>
                <p>Listed by
                    <span>
                        {pixelpunks}
                    </span>
                     for 
                    <span>
                        {eth}
                    </span>
                </p>
                <span className="seenstatus">{seenstatus}</span>
          </div>
      </div>
  );
}


