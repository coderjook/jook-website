import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contactform.css";

export default function Contactform() {
  const [warningText, setWarningText] = useState("");
  const [showForm, setShowForm] = useState(true);
  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kpcxxij",
        "template_6gx4g3j",
        refForm.current,
        "6VXBc95jQBk_rmDmw"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowForm(false);
          setWarningText(
            "de email is verzonden, u ontvangt zo snel mogelijk een reactie"
          );
        },
        (error) => {
          console.log(error.text);
          setShowForm(false);
          setWarningText(
            "helaas is er iets mis gegaan met de verzending van de mail. Stuur een email naar coderjook@gmail.com. Alvast dank"
          );
        }
      );
  };

  const resetForm = () => {
    setShowForm(true);
    setWarningText("");
  };

  return (
    <>
      <h2>
        <strong>Say</strong> Hello
      </h2>
      <p>
        Heb je vragen / opmerkingen of wil je contact, vul dan onderstaand
        formulier in, dan laat ik snel iets van me horen.
      </p>
      {showForm ? (
        <form ref={refForm} onSubmit={sendEmail} className="contactform">
          <div className="row">
            <input type="email" placeholder="Emailadres" name="email" />
            <input type="text" placeholder="Onderwerp" name="subject" />
          </div>
          <textarea placeholder="Bericht" name="message"></textarea>
          <input type="submit" value="Verstuur bericht" className="button" />
        </form>
      ) : (
        <>
          {warningText && <div className="warning">{warningText}</div>}
          <div onClick={resetForm} className="button">
            open contactformulier
          </div>
        </>
      )}
    </>
  );
}
