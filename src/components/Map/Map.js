import React from "react";
import '../Map/map.css';
import {useTranslation} from 'react-i18next';

function Map(){
    const[t] = useTranslation("global");
    return(
        <section id="busquedas">
            <h1>{t("maps.title")}</h1>
            <p>{t("maps.text")}</p>
            <p>{t("maps.text-2")}</p>

            <div className="btnflex">
                <p>{t("maps.location")}</p>
                <button id="btn-ubi">{t("maps.btn")}</button>
            </div>
            <div className="form_flex">
            <img src="/icons/search.svg" className="img-form"></img>
            <iframe
                className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.286063425987!2d-58.56704192392865!3d-34.64747785981122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc7d8b71f7b89%3A0x6f64f45b95abbf26!2sOSDE!5e0!3m2!1ses!2sar!4v1691028568820!5m2!1ses!2sar"
                style={{ border: '0' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mi Mapa de Google"
            ></iframe>
            </div>
            </section>

    )
}

export default Map;