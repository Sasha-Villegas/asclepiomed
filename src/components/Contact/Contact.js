import React from "react";
import '../Contact/contact.css';
import {useTranslation} from 'react-i18next';


function ContactCard({ name, linkedinUrl, githubUrl, imgSrc }) {
    return (
      <div className="card">
        <img src={imgSrc} alt="" />
        <h2>{name}</h2>
        <div className="icons">
          <a href={linkedinUrl} target="_blank" rel="noreferrer" className="linkedin">{' '}</a>
          <a href={githubUrl} target="_blank" rel="noreferrer" className="github">{' '}</a>
        </div>
      </div>
    );
  }
  
function Contact() {
    const[t] = useTranslation("global");
    return (
    <section id="contactos">
        <h1>{t("contact.title")}</h1>
        <div className="card-container">
            <ContactCard
            name="Sasha Villegas"
            linkedinUrl="https://www.linkedin.com/in/sashavillegas/"
            githubUrl="https://www.linkedin.com/in/sashavillegas/"
            imgSrc="/imgs/sasha.png"
            />
            <ContactCard
            name="Josue Ferreira"
            linkedinUrl="https://www.linkedin.com/in/josue1995/"
            githubUrl="https://www.linkedin.com/in/josue1995/"
            imgSrc="/imgs/josue.png"
            />
            <ContactCard
            name="Marilyn Diaz"
            linkedinUrl="https://www.linkedin.com/in/marilyn-d-b47934228/"
            githubUrl="https://www.linkedin.com/in/marilyn-d-b47934228/"
            imgSrc="/imgs/mari.png"
            />
            <ContactCard
            name="Nico Galeano"
            linkedinUrl="https://www.linkedin.com/in/nicolas-galeano/"
            githubUrl="https://github.com/ngaleano13"
            imgSrc="/imgs/nico.png"
            />
        </div>
    </section>
    );
}

export default Contact;