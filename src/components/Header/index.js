import React, { useState, useEffect } from "react";
import { Menu, Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "./Header.css";
import logo from "../../core/img/LogoTransfer.webp";
import TransferInfo from "../TransferInfo";
import LanguageSwitcher from "../../core/language/LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [showTransferInfo, setShowTransferInfo] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);

  const { t } = useTranslation();

  const handleTransferClick = () => {
    setShowTransferInfo(true);
    closeDrawer();
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  const menuItems = [
    {
      label: (
        <a href="#transfer" onClick={handleTransferClick}>
          {t("Transfer")}
        </a>
      ),
      key: "transfer",
    },
    {
      label: (
        <a href="#tours" onClick={closeDrawer}>
          {t("Tours")}
        </a>
      ),
      key: "tours",
    },
    {
      label: (
        <a href="#contact" onClick={closeDrawer}>
          {t("RetCars")}
        </a>
      ),
      key: "contact",
    },
  ];

  return (
    <div>
      <header className="header">
        <div className="header-logo">
          <img src={logo} alt="My Transfer Logo" className="logo-img" />
        </div>
        {!isMobile && (
          <>
            <Menu mode="horizontal" items={menuItems} className="menu" />
            <LanguageSwitcher />{" "}
            <Button type="primary" href="#contact" className="header-button">
              {t("Contact")}
            </Button>
          </>
        )}
        {isMobile && (
          <>
            <Button icon={<MenuOutlined />} onClick={showDrawer} />
            <Drawer
              title="Меню"
              placement="right"
              onClose={closeDrawer}
              open={drawerVisible}
            >
              <Menu mode="vertical" items={menuItems} />
              <LanguageSwitcher />{" "}
            </Drawer>
          </>
        )}
      </header>

      {showTransferInfo && <TransferInfo />}
    </div>
  );
};

export default Header;
