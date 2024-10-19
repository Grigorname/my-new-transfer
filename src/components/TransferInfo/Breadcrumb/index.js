import React from "react";
import { Breadcrumb } from "antd";
import "./Breadcrumb.css";

const items = [
  {
    title: (
      <a href="/" style={{ color: "#ffffff" }}>
        Главная
      </a>
    ),
  },
  {
    title: <span style={{ color: "#ffffff" }}>Трансферы</span>,
  },
];

const BreadcrumbComponent = () => {
  return <Breadcrumb style={{ margin: "16px 0" }} items={items} />;
};

export default BreadcrumbComponent;
