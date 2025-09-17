// // HeroSection.js
// import React, { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "./Demo.css"; // styles moved to CSS
// import img from "../../Assets/downloaded-image.png"
// // gsap.registerPlugin(ScrollTrigger);

// export default function Demo() {
//    useEffect(() => {
//     gsap.timeline()
//       .to(".image-container img", {
//         scale: 2,
//         z: 350,
//         transformOrigin: "center center",
//         ease: "power1.inOut",
//         duration: 3, // controls speed
//       })
//       .to(
//         ".section.hero",
//         {
//           scale: 1.1,
//           transformOrigin: "center center",
//           ease: "power1.inOut",
//           duration: 3,
//         },
//         "<"
//       );
//   }, []);

//   return (
//     <div className="wrapper">
//       <div className="content">
//         <section className="section hero"></section>
//       </div>
//       <div className="image-container">
//         <img
//         src={img}
//           // src="https://assets-global.website-files.com/63ec206c5542613e2e5aa784/643312a6bc4ac122fc4e3afa_main%20home.webp"
//           alt="main"
//         />
//       </div>
//     </div>
//   );
// }

// HeroSection.js (Demo.js)
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Demo.css";
import img from "../../Assets/pics.png";
import About from "../About/About";  // ✅ import About component

export default function Demo() {
  useEffect(() => {
    gsap.timeline()
      .to(".image-container img", {
        scale: 2,
        z: 350,
        transformOrigin: "center center",
        ease: "power1.inOut",
        duration: 3,
      })
      .to(
        ".section.hero",
        {
          scale: 1.1,
          transformOrigin: "center center",
          ease: "power1.inOut",
          duration: 3,
        },
        "<"
      );
  }, []);

  return (
    <div className="wrapper">
      <div className="content">
        {/* ✅ Instead of background-image, place your About component */}
        <section className="section hero">
          <About />
        </section>
      </div>

      <div className="image-container">
        <img src={img} alt="main" />
      </div>
    </div>
  );
}
