import React from "react";
import '../Header/header.css';
import {useTranslation} from 'react-i18next';

function Header(){
    const[t] = useTranslation("global");
    return(
    <header id="header">
        <div className="bg-img">
        </div>
        <div className="titulo">
            <h1>{t("header.title")}<span className="spantitle">MED</span></h1>
            <h2>{t("header.subtitle")}<span className="spantitle"> {t("header.span")} </span>{t("header.subtitle-from")}<span className="spantitle"> {t("header.span-2")} </span></h2>
        </div>
    </header>
    )
}

export default Header;