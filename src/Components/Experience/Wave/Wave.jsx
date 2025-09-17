// import React, { useId } from "react";
// import "./Wave.css"; 

// export default function Wave({
//  width = 1600,
//   height = 198,
//   startColor = "#66dfeaff",
//   endColor = "#169ccdff",
//   startOpacity = 0.25,
// }) {
//   const gradId = useId();

//   const WaveShape = ({ id }) => (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       width={width}
//       height={height}
//       viewBox="0 0 1600 198"
//       preserveAspectRatio="none"
//     >
//       <defs>
//         <linearGradient id={id} x1="50%" x2="50%" y1="-10.959%" y2="100%">
//           <stop stopColor={startColor} stopOpacity={startOpacity} offset="0%" />
//           <stop stopColor={endColor} offset="100%" />
//         </linearGradient>
//       </defs>
//       <path
//         fill={`url(#${id})`}
//         fillRule="evenodd"
//         d="M.005 121C311 121 409.898-.25 811 0c400 0 500 121 789 121v77H0s.005-48 .005-77z"
//         transform="matrix(-1 0 0 1 1600 0)"
//       />
      
//     </svg>
//   );

//   return (
//     <div className="wave-wrapper">
      
//       <div className="wave-track wave-back">
//         <WaveShape id={gradId + "-bg1"} />
//         <WaveShape id={gradId + "-bg2"} />
//       </div>

   
//       <div className="wave-track wave-front">
//         <WaveShape id={gradId + "-fg1"} />
//         <WaveShape id={gradId + "-fg2"} />
//       </div>
//     </div>
//   );
// }

import React from "react";
import "./Wave.css";

const Wave = () => {
  return (
    <header className="header">
      {/* Inner header */}


      {/* Waves */}
      <div>
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(12, 168, 235, 0.7)" />
            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(24, 221, 228, 0.5)" />
            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(32, 194, 239, 0.3)" />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#44a7edff" />
          </g>
        </svg>
      </div>
    </header>
  );
};

export default Wave;
