import { useState } from "react";
import { sendContact } from "../../services/contact";
import faEnvelope from "../../assets/icons/faEnvelope.svg";
import faMessage from "../../assets/icons/faMessage.svg";
import faUser from "../../assets/icons/faUser.svg";

export const ContactForm = () => {
  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ message, setMessage ] = useState("");

    function autoResize(textarea) {
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
      }
      const onSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            name,
            email,
            message,
        };
        sendContact(formData)
    }
    return (
        <form className="contact-form" onSubmit={onSubmit}>
        <div className="contact-form__wrapper">
          <label htmlFor="name" className="contact-form__label">
            <img src={faUser} alt="" />
          </label>
          <input
            type="text"
            id="name"
            placeholder="Nom*"
            className="contact-form__input"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="contact-form__wrapper">
          <label htmlFor="email">
            <img src={faEnvelope} alt="" />
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email*"
            className="contact-form__input"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="contact-form__wrapper">
          <label htmlFor="message">
            <img src={faMessage} alt="" />
          </label>
          <textarea
            className="contact-form__input"
            name="message"
            id="message"
            cols="30"
            rows="1"
            placeholder="Message*"
            onInput={(e) => autoResize(e.target)}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <input
          type="submit"
          value="Envoyer"
          className="contact-form__btn btn"
        />
      </form>
    );
};