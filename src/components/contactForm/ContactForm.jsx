import { useState } from "react";
import { sendContact } from "../../api/contactApi";
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
            <img src={faUser} alt="contact form icon user" />
            <span hidden>user</span>
          </label>
          <input
            type="text"
            id="name"
            placeholder="Nom*"
            className="contact-form__input"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="contact-form__wrapper">
          <label htmlFor="email" className="contact-form__label">
            <img src={faEnvelope} alt="contact form icon envelope" />
            <span hidden>envelope</span>
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email*"
            className="contact-form__input"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="contact-form__wrapper">
          <label htmlFor="message" className="contact-form__label">
            <img src={faMessage} alt="contact form icon message" />
            <span hidden>message</span>
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
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="contact-form__btn btn"
          role="button"
        >Envoyer</button>
      </form>
    );
};