import React from "react";
import "./projects.css";

export default function Projects({ selectedProject, setSelectedProject }) {
  return (
    <>
      {selectedProject === "jook" && (
        <div id="featured">
          <div className="div__text">
            <h2>JOOK.nl</h2>
            <h3>Inhoud</h3>
            <p>
              Met de inhoud van deze website laat ik zien wie ik ben en waar
              mijn interesses liggen. Ik heb deze website gemaakt om me te
              verdiepen in css, positionering, responsive layout en css
              animaties en transitions.
            </p>
            <h3 id="jook">Technieken</h3>
            <p>
              Framework: React <br />
              Opmaak: html / css - transition, animation <br />
              Componenten: slider, caroussel <br />
              React component: EmailJs
            </p>
            <div className="buttons">
              <button onClick="#">Ga naar website</button>
              <button onClick="#">Github</button>
            </div>
          </div>
          <div className="div__img">
            <img src="./images/jook-pc.png" alt="jook.nl" />
          </div>
        </div>
      )}

      {selectedProject === "romal" && (
        <div id="featured">
          <div className="div__text">
            <h2>Romal - kabelconfigurator</h2>
            <h3>Inhoud</h3>
            <p>
              Naast de verkoop van producten, maakt Romal sinds 2009 klant
              specifieke kabel assemblies. Dit zijn coax, data, glasvezel of
              combinatiekabel-assemblies en worden in het kabelatelier
              vervaardigd en getest. De kabelconfigurator is een offerte systeem
              waarbij de vertegenwoordigers via een webapplicatie zelf een
              assemblie kunnen samenstellen en een offerte kunnen aanmaken. Alle
              gegevens die nodig zijn voor de kabelconfigurator worden via API
              uit het ERP systeem opgehaald.
            </p>
            <h3 id="romal">Technieken</h3>
            <p>
              Framework: React <br />
              Opmaak: html / bootstrap <br />
              connectie: API connectie axios <br />
              React: useContext, React Router,
            </p>
            {/* <div className="buttons">
          <button onClick="#">Ga naar website</button>
          <button onClick="#">Github</button>
          </div> */}
          </div>
          <div className="div__img">
            <img src="./images/romal-pc.png" alt="jook.nl" />
          </div>
        </div>
      )}

      {selectedProject === "coderjook" && (
        <div id="featured">
          <div className="div__text">
            <h2>Coderjook scratch website</h2>
            <h3>Inhoud</h3>
            <p>
              Als trainer in digitale geletterheid heb ik veel lesmateriaal
              gemaakt voor Scratch. Deze handleidingen en scripts heb ik
              gebundeld op een website en worden gebruikt in de Coderdojo
              Utrecht en in de bibliotheek Utrecht.{" "}
            </p>
            <p>
              Deze website heb ik gemaakt om met te verdiepen in CRUD operations
              in een database. Hiervoor heb ik firebase gebruikt. Daarnaast heb
              ik login en beheer gedeelte gemaakt en de basisbeginselen geleerd
              van Typescript.
            </p>
            <h3 id="coderjook">Technieken website</h3>
            <p>
              Framework: React / Typescript. <br />
              Opslag: Firebase storage en realtime database <br />
              React: useContext, React Router,
            </p>
            <div className="buttons">
              <button onClick="#">Ga naar website</button>
              <button onClick="#">Github</button>
            </div>
          </div>
          <div className="div__img">
            <img src="./images/coderjook-pc.png" alt="jook.nl" />
          </div>
        </div>
      )}
    </>
  );
}
