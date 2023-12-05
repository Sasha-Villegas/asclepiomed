import React from "react";
import '../ObrasSociales/obs.css';
import { mockObs } from "../mockObs";
import {useTranslation} from 'react-i18next';

function ObraSocial({obra}) {
    return (
        <a className={obra.obra} title={`Página de ${obra.obra}`} href={obra.pag} target="_blank" rel="noopener noreferrer">{' '}</a>
    );
}

function Obs() {
    const[t] = useTranslation("global");
    return (
    <section id="obras_sociales">
        <h1>{t("ObrasSociales.title")}</h1>
        <p>{t("ObrasSociales.text")}</p>
        <div className="obs_flex">
        <img src="/icons/doctor1.svg" className="img-obs"></img>
        <div className="obrasSociales">
            {mockObs.map((obra, index) => (
            <ObraSocial key={index} obra={obra} />
        ))}
        </div>
        <img src="/icons/doctor2.svg" className="img-obs"></img>
        </div>
        
    </section>
    );
}
export default Obs;
