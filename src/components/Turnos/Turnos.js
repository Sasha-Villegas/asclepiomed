import React from "react";
import '../Turnos/turnos.css';
import Toastify from 'toastify-js';
import {useTranslation} from 'react-i18next';

function Turnos(){
    const[t] = useTranslation("global");
    return(
        <section id="turnos">
        <h1>{t("turnos.title")}</h1>
        <p>{t("turnos.text")}</p>
        <div className="form_flex">
        <article>
            <form action="" id="form_turnos">
                <h2>{t("turnos.formtext")}</h2>
                <div id="divform">

                    <div><label htmlFor="contact_name">{t("turnos.name")}</label>
                        <input id="contact_name" name="contact_name" type="text" maxLength="50"
                            pattern="[A-Z a-z]{3,50}"/>
                    </div>


                    <div><label htmlFor="contact_apellido">{t("turnos.lastname")}</label>
                        <input id="contact_apellido" name="contact_apellido" type="text" maxLength="50"
                            pattern="[A-Z a-z]{3,50}"/>
                    </div>


                    <div>
                        <label htmlFor="dni_cliente">{t("turnos.document")}</label>
                        <input id="dni_cliente" name="dni_cliente" type="tel" pattern="[0-9]{6,20}"/>
                    </div>


                    <div>
                        <label htmlFor="contact_phone">{t("turnos.phone")}</label>
                        <input id="contact_phone" name="contact_phone" type="tel" pattern="[0-9]{6,20}"/>
                    </div>


                    <div>
                        <label htmlFor="especialidad_med">{t("turnos.specialist")}</label>
                        <select id="especialidad_med" name="especialidad">
                            <option value="clinico">Clinico</option>
                            <option value="dermatologia">Dermatología</option>
                            <option value="cardiologia">Cardiología</option>
                            <option value="odontologia">Odontología</option>
                            <option value="oftalmologia">Oftalmología</option>
                        </select>
                    </div>


                    <div>
                        <label htmlFor="fecha_turno">{t("turnos.date")}</label>
                        <input id="fecha_turno" name="fecha" type="date"/>
                    </div>

                    <div>
                        <label htmlFor="obraAfiliada">{t("turnos.chooseObra")}</label>
                        <select id="obraAfiliada" name="especialidad">
                            <option value="Swiss">SWISS</option>
                            <option value="Galeno">GALENO</option>
                            <option value="Uocra">UOCRA</option>
                            <option value="Ioma">IOMA</option>
                            <option value="Osde">OSDE</option>
                        </select>
                    </div>
                </div>
                <button type="button" className="btn" onClick={ClickEnviar}>{t("turnos.btn")}</button>
            </form>
        </article>
        <img src="/icons/medical.svg" className="img-form"></img>
        </div>
    </section>
    )

function ClickEnviar(e) {
    e.preventDefault();
    Toastify({
        text: "Se reservo su turno con exito!",
        duration: 4000,
        className: "bord",
        style: {
        color: "black",
        width: "250px",
        padding: "30px 30px",
        background: "var(--blue-50) ",
        }}).showToast();
    }
    
    
}

export default Turnos;