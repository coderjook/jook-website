import React, { useState, useEffect } from "react";
import ImageSlider from "../imageslider/ImageSlider";
import Bubbles from "../bubbles/Bubbles";
import "./interesse.css";

export default function Interesse() {
  const [currentInteresse, setCurrentInteresse] = useState("");

  useEffect(() => {
    scroll();
  }, [currentInteresse]);

  const showInteresse = (int) => {
    setCurrentInteresse(int);
    scroll();
    console.log(int);
  };

  const scroll = () => {
    const selProject = document.getElementById(currentInteresse);
    selProject &&
      selProject.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  return (
    <>
      <div id="interesse">
        <div className="div__text">
          <h2>
            Mijn <strong>Interesses</strong>
          </h2>
          <p>
            Zowel in mijn werk als in mijn vrije tijd ga ik op zoek naar
            <strong> verbinding</strong>. Of ik nu systemen aan elkaar koppel
            voor gegevensuitwisseling, een kindertekening gebruik als basis voor
            een game in Scratch, of op zoek ga naar de verbinding tussen geest
            en lichaam....alles staat in relatie tot elkaar.{" "}
            <strong>"Connecting the dots"</strong>, het is fascinerend om
            verbanden te ontdekken tussen dingen, mensen en gebeurtenissen die
            in eerste instantie niets met elkaar te maken lijken te hebben.
          </p>
        </div>
        <div className="div__text">
          <h3>Junior Developer React </h3>
          <p>
            Er is niets mooier dan een concept of een ingewikkeld bedrijfsproces
            uit te werken tot een werkende applicatie. Programmeren zie ik als
            een creatief proces waarbij je kunt ontwerpen, structureren,
            knutselen en creeren..{" "}
            <span
              onClick={() => showInteresse("caroussel")}
              className="leesmeer"
            >
              bekijk mijn projecten{" "}
            </span>
          </p>
          <h3>Trainer Digitale vaardigheden - Coderjook</h3>
          <p>
            In mijn vrije tijd help ik kinderen hun digitale vaardigheden op een
            creatieve manier in te zetten. Ik wil kinderen de enorme wereld van
            digitale mogelijkheden laten zien en deze verbinden aan hun tastbare
            wereld. Door ze te laten werken met hun hoofd, handen en hart worden
            ze creatiever, leren ze verbanden leggen en kritisch nadenken.
            Hierdoor zie ik kinderen tot bloei komen en hun talenten
            ontwikkelen. Kids get Future Proof.
            <span onClick={() => showInteresse("kids")} className="leesmeer">
              lees meer{" "}
            </span>
          </p>
          <p>
            <h3>Bewustzijnsontwikkeling</h3>
            We leven in een individualistische samenleving, maar hoe goed kennen
            we onszelf nu eigenlijk? Met onze telefoon staan we de hele dag in
            verbinding met elkaar. Maar de verbinding met onszelf zijn we kwijt.
            Door aandacht te besteden aan bewustzijnsontwikkeling sta je
            steviger in je schoenen in deze gedigitaliseerde samenleving. Krijg
            grip op je wereld.
            <span onClick={() => showInteresse("mission")} className="leesmeer">
              lees meer{" "}
            </span>
          </p>
        </div>
      </div>

      {currentInteresse === "kids" && (
        <div id="kids">
          <div className="div__text">
            <h2>
              Kids get <strong>Future Proof</strong>
            </h2>
            <p>
              Ik vind het geweldig om kinderen de beginselen van het
              programmeren te leren. Ik merk dat programmeren de creativiteit
              van kinderen aanwakkert. Ze leggen sneller verbanden en kunnen
              ieder op hun manier hun eigen talent erin kwijt. De een door het
              grafisch ontwerp van een spel, de ander door de techniek erachter.
              De basis is het gratis visueel programmeerprogramma Scratch.
              Hierin leer ik de kinderen basisbeginselen van het programmeren
              door het maken van een eigen spel. En de kinderen…die zijn vooral
              enorm enthousiast en trots op hun prestaties.
            </p>
          </div>
          <div className="div__img">
            <ImageSlider />
          </div>
        </div>
      )}

      {currentInteresse === "mission" && (
        <div id="mission">
          <Bubbles />
          <div className="div__img">
            <img src="images/world.png" alt="world" classname="img-world" />
            <div className="dot"></div>
          </div>
          <div className="div__text">
            <h2>
              Krijg grip<strong> op je wereld</strong>
            </h2>
            <p>
              Mijn hartewens is een applicatie te ontwikkelen waarmee je contact
              maakt met jezelf. Een app waarmee je ontdekt welke patronen en
              overtuigingen jou gevormd hebben.{" "}
            </p>
            <p>
              {" "}
              <strong>
                {" "}
                "We zien de dingen niet zoals ze zijn, maar zoals wij zijn."
                Anais Nin{" "}
              </strong>{" "}
            </p>
            <p>
              Als je weet waarmee je je identificeert en wie je in werkelijkheid
              bent, beweeg je je makkelijker en ben je minder kwetsbaar in deze
              wereld. Dan haal je jezelf uit de bubble, sta je meer open voor
              anderen en krijg je weer keuze om jouw pad te volgen.
            </p>
          </div>
        </div>
      )}
      {currentInteresse === "develop" && (
        <div id="develop">
          <div className="div__img">
            <img src="images/world.png" alt="world" classname="img-world" />
            <div className="dot"></div>
          </div>
          <div className="div__text">
            <h2>
              <strong> develope</strong>
            </h2>
            <p>
              Maar daarbij hoort ook het stukbijten op raadselachtige problemen.
              Het internet afstruinen op zoek naar een oplossing. Een periode
              van trial-and-error,.. error,..error maar dan de euforie als je
              iets werkend krijgt en het klopt!
            </p>
          </div>
        </div>
      )}
    </>
  );
}
