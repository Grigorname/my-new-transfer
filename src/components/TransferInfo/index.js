import React from "react";
import TransferAboutUs from "./TransferAboutUs";
import BreadcrumbComponent from "./Breadcrumb";
import FotoTransfers from "../../core/img/FotoTransfers.jpg";
import Calculator from "./Calculator/Calculator.js";
import "./TransferInfo.css";
import { useTranslation } from "react-i18next";

const TransferInfo = () => {
  const { t } = useTranslation();
  return (
    <div className="transfer-info">
      <div className="breadcrumb-container">
        <img
          src={FotoTransfers}
          alt="My Transfer Logo"
          className="transfer-logo-img"
        />
        <div className="breadcrumb-overlay">
          <BreadcrumbComponent />
        </div>
        <div className="transfer-title">{t("WereTransfer")}</div>
      </div>
      <div className="transfer-info-content">
        <TransferAboutUs />
        <Calculator />
      </div>
    </div>
  );
};

export default TransferInfo;
