import React from "react";
import {
  CarTwoTone,
  UserOutlined,
  CameraTwoTone,
  CloudOutlined,
} from "@ant-design/icons";
import { Col, Row } from "antd";
import "./index.css";
import { useTranslation } from "react-i18next";

const TransferAboutUs = () => {
  const { t } = useTranslation();

  return (
    <div className="transfer-info">
      <Row className="transfer-info-row" align="middle">
        <Col className="transfer-info-col">
          <UserOutlined style={{ fontSize: "24px", color: "#08c" }} />
          <p className="ParagrafDriver">{t("Professional Drivers")}</p>
        </Col>
        <Col className="transfer-info-col">
          <CarTwoTone style={{ fontSize: "24px", color: "#08c" }} />
          <p className="ParagrafInsurance">{t("Insurance in Transport")}</p>
        </Col>
        <Col className="transfer-info-col">
          <CameraTwoTone style={{ fontSize: "24px", color: "#08c" }} />
          <p className="ParagrafFoto">{t("Photo Stops")}</p>
        </Col>
        <Col className="transfer-info-col">
          <CloudOutlined style={{ fontSize: "24px", color: "#08c" }} />
          <p className="ParagrafСonditioner">
            {t("Cars with Air Conditioning")}
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default TransferAboutUs;
