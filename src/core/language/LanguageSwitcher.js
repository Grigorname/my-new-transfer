import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css";
import enFlag from "../../core/img/enFlag.png";
import ruFlag from "../../core/img/ruFlag.png";
import hyFlag from "../../core/img/hyFlag.jpg";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState("ru");
  const [showOptions, setShowOptions] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLang(lng);
    setShowOptions(false);
  };

  const getFlagAndLabel = (lang) => {
    switch (lang) {
      case "en":
        return { flag: enFlag, label: "English" };
      case "ru":
        return { flag: ruFlag, label: "Русский" };
      case "hy":
        return { flag: hyFlag, label: "Հայերեն" };
      default:
        return { flag: enFlag, label: "English" };
    }
  };

  const current = getFlagAndLabel(currentLang);

  return (
    <div className="language-switcher">
      <button onClick={() => setShowOptions(!showOptions)}>
        <img src={current.flag} alt={current.label} className="flag" />{" "}
        {current.label}
      </button>

      {showOptions && (
        <div className="language-options">
          {currentLang !== "en" && (
            <button onClick={() => changeLanguage("en")}>
              <img src={enFlag} alt="English" className="flag" /> English
            </button>
          )}
          {currentLang !== "ru" && (
            <button onClick={() => changeLanguage("ru")}>
              <img src={ruFlag} alt="Русский" className="flag" /> Русский
            </button>
          )}
          {currentLang !== "hy" && (
            <button onClick={() => changeLanguage("hy")}>
              <img src={hyFlag} alt="Հայերեն" className="flag" /> Հայերեն
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
