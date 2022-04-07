import React, { useState, useEffect } from "react";
import "./caroussel.css";

const images = [
  {
    img: "/images/romal-pc.png",
    alt: "romal kabelconfigurator",
    keyword: "romal",
    class: "slide active"
  },
  {
    img: "/images/coderjook-pc.png",
    alt: "scratch website",
    keyword: "coderjook",
    class: "slide"
  },
  {
    img: "/images/jook-pc.png",
    alt: "jook.nl",
    keyword: "jook",
    class: "slide last"
  }
];
export default function Caroussel({ selectedProject, setSelectedProject }) {
  const [classNameSlide, setClassNameSlide] = useState([
    "slide",
    "slide active",
    "slide last"
  ]);

  useEffect(() => {
    const selProject = document.getElementById("featured");
    selProject &&
      selProject.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [selectedProject]);

  const slide = (direction) => {
    if (direction === "next") {
      const swapArray = [
        classNameSlide[1],
        classNameSlide[2],
        classNameSlide[0]
      ];

      setClassNameSlide(swapArray);
    } else if (direction === "previous") {
      const swapArray = [
        classNameSlide[2],
        classNameSlide[0],
        classNameSlide[1]
      ];
      setClassNameSlide(swapArray);
    }
  };

  const chooseProject = (project) => {
    setSelectedProject(project);
  };

  return (
    <div id="caroussel">
      <h2>
        Mijn <strong>Projecten</strong>
      </h2>

      <div className="buttons">
        <button onClick={() => slide("previous")}>Vorige</button>
        <button onClick={() => slide("next")}>Volgende</button>
      </div>
      <div className="slider">
        {images.map((image, index) => {
          return (
            <>
              <div className={classNameSlide[index]} id={index}>
                <div
                  className="projectname"
                  onClick={() => chooseProject(image.keyword)}
                >
                  <center>{image.alt}</center>
                </div>
                <img
                  src={image.img}
                  alt={image.alt}
                  onClick={() => chooseProject(image.keyword)}
                />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
