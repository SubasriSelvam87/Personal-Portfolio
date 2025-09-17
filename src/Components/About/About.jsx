// // About.js
// import React from "react";
// import "./About.css";
// import img1 from "../../About-Assets/IMG20221226174230.jpg";
// import img2 from "../../About-Assets/IMG20230924192547.jpg";
// import img3 from "../../About-Assets/IMG20241012201141.jpg";
// import img4 from "../../About-Assets/IMG20241022162349.jpg";
// import img5 from "../../About-Assets/IMG_20220221_204418.jpg";

// const sketches = [
//   {
//     image: [img1, img2, img3, img4, img5],
//   },
// ];
// const About = () => {
//   return (
//     <div className="about-card container p-5" aria-labelledby="about-heading">
//       <div className="about-inner">
//         {/* <div className="about-avatar" aria-hidden></div> */}

//         <div className="about-content">
//           <h2 id="about-heading" className="about-title text-center">
//             Who I Am (Beyond the Code)
//           </h2>
//           <p className="about-lead text-center" style={{}}>
//             I may be a front‑end developer today, but I don’t stop at the
//             screen.
//           </p>

//           <p className="about-text text-center">
//             Without writing a single line of code, I’m still someone who loves
//             untangling challenges and bringing ideas to life. <br />I enjoy
//             exploring, experimenting, and finding creative ways to express
//             myself. I am a designer of ideas, a curious learner, and a person
//             who finds joy in creating.
//             <br /> Whether it is sketching, painting, sewing, or just exploring
//             new ways to think, I thrive on experimenting, learning, and making
//             things that leave a lasting impact.
//             <br />I believe that creativity in any form feeds innovation in my
//             work.
//           </p>

//           <div className="about-cta text-center">
//             <span className="about-cta-text ">
//               Always moving forward, always creating
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default About;

// About.js

import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.css";

import Gallery from "../Image/Image";
import { FaArrowLeft } from "react-icons/fa";

// Example: import your logo image
import logo from "../../About-Assets/girly.jpg";

const About = () => {
  const navigate = useNavigate();

  const goToPortfolio = () => {
    navigate("/");
  };

  return (
    <div
      className="about-card container p-4 m-3 mx-auto d-block"
      aria-labelledby="about-heading"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 0.5s ease-in-out",
        position: "relative", // needed for absolute children
      }}
    >
      {/* Back Button (Top Left) */}
      <button className="btn-back-top-left" onClick={goToPortfolio}>
        <FaArrowLeft className="icon" />
        <span className="text">Back to Portfolio</span>
      </button>

      {/* Logo Circle (Top Right) */}
      <div className="logo-circle">
        <img src={logo} alt="Logo" />
      </div>

      <div className="about-inner">
        <div className="about-content">
          <h3 id="about-heading" className="about-title text-center">
            <b> Who I Am (Beyond the Code)</b>
          </h3>

          <p className="about-lead text-center">
            I may be a front-end developer today, but I don’t stop at the
            screen.
          </p>

          <p className="about-text text-center">
            Fresh in my twenties, fueled by curiosity and creativity. Even
            without writing a single line of code. <br />
            I love exploring, experimenting, and finding new ways to express
            ideas. I see myself as a designer of concepts, a curious learner,
            and someone who finds joy in the art of creating. <br />
            Whether it’s sketching, painting, sewing, or simply reimagining
            perspectives, I thrive on experimentation and the pursuit of
            meaningful impact. <br />
            To me, creativity in any form is the spark that fuels innovation and
            brings every project to life.
          </p>
        </div>

        <div className="about-cta text-center">
          <span className="about-cta-text">
            I’ve shared a few of my sketches.
          </span>
        </div>

        {/* Gallery Section */}
        <div className="p-4">
          <Gallery />
        </div>

        <div className="about-cta text-center">
          <span className="about-cta-text">
            Always moving forward, always creating
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;

