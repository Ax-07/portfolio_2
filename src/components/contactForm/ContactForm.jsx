import { useState } from "react";
import { sendContact } from "../../api/contactApi";
import faEnvelope from "../../assets/icons/faEnvelope.svg";
import faMessage from "../../assets/icons/faMessage.svg";
import faUser from "../../assets/icons/faUser.svg";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null
  const [errors, setErrors] = useState({});

  const validateField = (field, value) => {
    const newErrors = { ...errors };
    
    switch (field) {
      case 'name':
        if (!value.trim()) {
          newErrors.name = 'Le nom est requis';
        } else if (value.trim().length < 2) {
          newErrors.name = 'Le nom doit contenir au moins 2 caractères';
        } else {
          delete newErrors.name;
        }
        break;
      case 'email': {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) {
          newErrors.email = 'L&apos;email est requis';
        } else if (!emailRegex.test(value)) {
          newErrors.email = 'Format d&apos;email invalide';
        } else {
          delete newErrors.email;
        }
        break;
      }
      case 'message':
        if (!value.trim()) {
          newErrors.message = 'Le message est requis';
        } else if (value.trim().length < 10) {
          newErrors.message = 'Le message doit contenir au moins 10 caractères';
        } else {
          delete newErrors.message;
        }
        break;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isFormValid = () => {
    return name.trim() && 
           email.trim() && 
           message.trim().length >= 10 && 
           Object.keys(errors).length === 0;
  };

  function autoResize(textarea) {
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    
    // Validation finale
    if (!isFormValid()) {
      validateField('name', name);
      validateField('email', email);
      validateField('message', message);
      return;
    }

    setIsLoading(true);
    setSubmitStatus(null);

    try {
      const formData = {
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
      };
      
      await sendContact(formData);
      
      setSubmitStatus('success');
      // Réinitialiser le formulaire
      setName("");
      setEmail("");
      setMessage("");
      setErrors({});
      
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      {/* Messages de feedback */}
      {submitStatus === 'success' && (
        <div className="contact-form__message contact-form__message--success">
          ✅ Message envoyé avec succès ! Nous vous répondrons bientôt.
        </div>
      )}
      {submitStatus === 'error' && (
        <div className="contact-form__message contact-form__message--error">
          ❌ Erreur lors de l&apos;envoi. Veuillez réessayer.
        </div>
      )}

      <div className="contact-form__wrapper">
        <label htmlFor="name" className="contact-form__label">
          <img src={faUser} alt="contact form icon user" />
          <span hidden>user</span>
        </label>
        <input
          type="text"
          id="name"
          placeholder="Nom*"
          className={`contact-form__input ${errors.name ? 'contact-form__input--error' : ''}`}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            validateField('name', e.target.value);
          }}
          onBlur={(e) => validateField('name', e.target.value)}
          required
          disabled={isLoading}
        />
        {errors.name && <span className="contact-form__error">{errors.name}</span>}
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
          className={`contact-form__input ${errors.email ? 'contact-form__input--error' : ''}`}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            validateField('email', e.target.value);
          }}
          onBlur={(e) => validateField('email', e.target.value)}
          required
          disabled={isLoading}
        />
        {errors.email && <span className="contact-form__error">{errors.email}</span>}
      </div>

      <div className="contact-form__wrapper">
        <label htmlFor="message" className="contact-form__label">
          <img src={faMessage} alt="contact form icon message" />
          <span hidden>message</span>
        </label>
        <textarea
          className={`contact-form__input ${errors.message ? 'contact-form__input--error' : ''}`}
          name="message"
          id="message"
          cols="30"
          rows="1"
          placeholder="Message*"
          value={message}
          onInput={(e) => autoResize(e.target)}
          onChange={(e) => {
            setMessage(e.target.value);
            validateField('message', e.target.value);
          }}
          onBlur={(e) => validateField('message', e.target.value)}
          required
          disabled={isLoading}
        />
        {errors.message && <span className="contact-form__error">{errors.message}</span>}
      </div>

      <button
        type="submit"
        className={`contact-form__btn btn ${isLoading ? 'loading' : ''}`}
        role="button"
        disabled={!isFormValid() || isLoading}
      >
        {isLoading ? 'Envoi en cours...' : 'Envoyer'}
      </button>
    </form>
  );
};
