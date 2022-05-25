import React from "react";

export default function Loader() {
   return (
      <div
         style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
         }}
      >
         <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
         </div>
      </div>
   );
}
