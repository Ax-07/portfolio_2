import { ContactForm } from "../../components/contactForm/ContactForm";
import { ContactInfo } from "../../components/contactInfo/ContactInfo";
import { Section } from "../../components/Section/Section";
import { SocialsLinks } from "../../components/socialsLinks/SocialsLinks";

export const Contact = () => {

      
  return (
    <Section id="contact" title="Contactez" subTitle="moi" tag={true}>
      <div className="contact__col">
        <div className="contact__col-left">
          <ContactInfo />
          <SocialsLinks />
        </div>
        <div className="contact__col-right">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
};
