// import React from "react";
// import "./Nav.css";

// const End = () => {
//   return (
//     <div className="animated-container">
//       <svg viewBox="0 0 1200 200" preserveAspectRatio="xMidYMid meet">
       
// <text
//   x="50%"
//   y="25%"   
//   textAnchor="middle"
//   className="subtitle"
// >
//   Designed & Developed by
// </text>

// <symbol id="s-text">
//   <text textAnchor="middle" x="50%" y="50%" dy=".35em">
//     Subasri Selvam
//   </text>
// </symbol>


        
//         <use className="text" xlinkHref="#s-text" />
//         <use className="text" xlinkHref="#s-text" />
//         <use className="text" xlinkHref="#s-text" />
//         <use className="text" xlinkHref="#s-text" />
//         <use className="text" xlinkHref="#s-text" />
//       </svg>
//     </div>
//   );
// };

// export default End;


import React from "react";
import "./Credits.css";
import Wave from "../Experience/Wave/Wave";
// import Wave from "./Wave"; // import your Wave component

const End = () => {
 return (
    <div className="end-section">
      {/* Wave background */}
      <Wave />

      {/* Animated text */}
      <div className="end-text">
        <svg viewBox="0 0 1200 400" preserveAspectRatio="xMidYMid meet">
          {/* Subtitle */}
          <text x="50%" y="15%" textAnchor="middle" className="subtitle">
            Designed & Developed by
          </text>

          {/* Main text */}
          <symbol id="s-text">
            <text className="name-text" textAnchor="middle" x="50%" y="30%" dy=".35em">
              Subasri Selvam
            </text>
          </symbol>

          {/* Duplicate for stroke animation */}
          <use className="text" xlinkHref="#s-text" />
          <use className="text" xlinkHref="#s-text" />
          <use className="text" xlinkHref="#s-text" />
          <use className="text" xlinkHref="#s-text" />
          <use className="text" xlinkHref="#s-text" />
        </svg>
      </div>
    </div>
  );
};

export default End;