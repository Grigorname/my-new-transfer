import React from "react";
import TransferAboutUs from "./TransferAboutUs";
import BreadcrumbComponent from "./Breadcrumb";
import FotoTransfers from "../../core/img/FotoTransfers.jpg";
import "./TransferInfo.css";

const TransferInfo = () => {
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
      </div>
      <div className="transfer-info-content">
        <TransferAboutUs />
      </div>
    </div>
  );
};

export default TransferInfo;
