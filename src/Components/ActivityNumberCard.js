import React, { useState } from "react";



export default function ActivityNumberCard ({title, filter, pixelpunks, eth,seenstatus,activitynumbercardimg, FillLabel, not_match}) {
    

  return (
      <>
        
      <div className="ActivityNumberCard">    
          <div className="ActivityNumberCard-img">
                <span className="lable-icon"><img src={FillLabel} /></span>
                <img src={activitynumbercardimg} />
          </div>
          <div className="ActivityNumberCard-info">
              
                <h4>{title}</h4>
                <p>{filter}    
                    <span>
                        🎉
                    </span>
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
      </>
  );
}


