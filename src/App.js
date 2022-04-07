import React, { useState } from "react";
import "./styles.css";
import jook from "./assets/img/jook-1500.png";
import scratch from "./assets/img/scratch.jpg";
import Caroussel from "./components/caroussel/Caroussel";
import Bubbles from "./components/bubbles/Bubbles";
import Coderjook from "./components/coderjook/Coderjook";
import ImageSlider from "./components/imageslider/ImageSlider";
import Contactform from "./components/contactform/Contactform";
import Projects from "./components/projects/Projects";
import Interesse from "./components/interesse/Interesse";

export default function App() {
  const [selectedProject, setSelectedProject] = useState("");

  return (
    <>
      <div id="hero">
        <div className="hero__text">
          <h1>
            Hey, ik ben <strong>Marianne</strong>
          </h1>
          <p>
            Als developer en trainer digitale vaardigheden ben ik dagelijks
            bezig met programmacodes. Programmeren heeft voor mij iets magisch.
            Ik vind het een fantastisch proces om ideeën te om te zetten in
            werkbare producten.
          </p>
        </div>
        <div className="hero__img">
          <img src={jook} alt="jook" className="img-jook" />
        </div>
      </div>

      <Interesse />

      <div id="street">
        <Coderjook />
      </div>

      <div id="caroussel">
        <Caroussel
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />
      </div>

      <Projects
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
      />

      <div id="contact">
        <Contactform />
      </div>
    </>
  );
}
