import React, { useState } from "react";
import '../Navbar/navbar.css';
import '../Navbar/language.css';
import '../Navbar/modal.css';
import {useTranslation} from 'react-i18next';


function AuthPopupModal() {
    const[t] = useTranslation("global");
    const [showModal, setShowModal] = useState(false);
    const [isRegistering, setIsRegistering] = useState(false);  
    const openModal = () => {
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
    };


    return (
    <div className="modal">
        <button className="btn-login" onClick={openModal}></button>
        {showModal && (
            <div className="custom-modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2>{isRegistering ? `${t("modal.signup")}` : `${t("modal.login")}`}</h2>
                        <button className="close-button" onClick={closeModal}></button>
                    </div>
                <div className="modal-body">
                    {isRegistering ? (
                <form>
                    <div className="form-group">
                        <label>{t("modal.signup-user")}</label>
                        <input type="text" name="username"/>
                    </div>
                    <div className="form-group">
                        <label>{t("modal.signup-mail")}</label> 
                        <input type="email" name="email"/>
                    </div>
                    <div className="form-group">
                        <label>{t("modal.signup-password")}</label>
                        <input type="password" name="password"/>
                    </div>
                </form>
                ) : (
                <form>
                    <div className="form-group">
                        <label>{t("modal.login-user")}</label>
                        <input type="text" name="username"/>
                    </div>
                    <div className="form-group">
                        <label>{t("modal.login-password")}</label>
                        <input type="password" name="password"/>
                    </div>
                </form>
                )}
                </div>
                    <div className="modal-footer">
                <p onClick={() => setIsRegistering(!isRegistering)} style={{ cursor: 'pointer' }}>
                    {isRegistering
                    ? `${t("modal.signup-account")}`
                    : `${t("modal.login-account")}`}
                </p>
                <button className="sumbit-button" onClick={closeModal}>
                    {t("modal.btn-sumbit")}
                </button>
                </div>
            </div>
        </div>
        )}
    </div>
    );
}

function Navbar(){
    const[t, i18n] = useTranslation("global");
    const [isMenuActive, setMenuActive] = useState(false);
    const [isBtnToggleActive, setBtnToggleActive] = useState(false);

    const toggleMenu = () => {
    setMenuActive(!isMenuActive);
    setBtnToggleActive(!isBtnToggleActive);
    };

    return(
    <div className="navbar" id="navbar">
        <h2>ASCLEPIO<span className="spantitle">MED</span></h2>
        <button className={`btn-toggle btn-responsive${isBtnToggleActive ? ' btn-close' : ''}`}
        onClick={toggleMenu}></button>
        <nav id="navegation">
            <ul className={`menu${isMenuActive ? ' active' : ''}`}>
                <li><a href="#obras_sociales">{t("navbar.hospitals")}</a></li>
                <li><a href="#busquedas">{t("navbar.searches")}</a></li>
                <li><a href="#turnos">{t("navbar.shifts")}</a></li>
                {/* <li><a href="#quienes_somos">{t("navbar.about-us")}</a></li> */}
                <li><a href="#contactos">{t("navbar.contact")}</a></li>
            </ul>
        </nav>
        <div className="buttons-nav">
            <div className="lang-menu">
                <div className="selected-lang"></div>
                <ul>
                    <li>
                        <button className="button-prueba btn-es es" onClick={() => i18n.changeLanguage("es")}>Español</button>
                    </li>
                    <li>
                        <button className="button-prueba btn-en en" onClick={() => i18n.changeLanguage("en")}>English</button>
                    </li>
                </ul>
            </div>
            <AuthPopupModal/>
        </div>  
    </div>)}

export default Navbar;