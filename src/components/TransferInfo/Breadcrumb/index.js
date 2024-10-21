import React from "react";
import { Breadcrumb } from "antd";
import "./Breadcrumb.css";
import { useTranslation } from "react-i18next";

const BreadcrumbComponent = () => {
  const { t } = useTranslation();
  const items = [
    {
      title: (
        <a href="/" style={{ color: "#ffffff" }}>
          {t("home")}
        </a>
      ),
    },
    {
      title: <span style={{ color: "#ffffff" }}>{t("Transfer")}</span>,
    },
  ];

  return <Breadcrumb style={{ margin: "16px 0" }} items={items} />;
};

export default BreadcrumbComponent;
