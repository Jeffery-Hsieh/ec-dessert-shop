import React from "react";
import LinkWithIcon from "./LinkWithIcon";
import Link from "./Link";
import "./style.scss";

const Navigator = () => {
  const links = [
    { en: "Gallery", locale: "商品集", href: "/gallery" },
    { en: "Online Shop", locale: "線上商店", href: "/onlineShop" },
    { en: "Authorized Store", locale: "合作商家", href: "authorizedStore" },
    { en: "Contact us", locale: "聯絡我們", href: "/contact" },
  ];

  const navigatorLinks = links.map((link) => (
    <Link className="navigator__link" {...link} />
  ));

  return (
    <div className="navigator">
      <img
        src={require("../../Assets/logo.png")}
        className="navigator__logo"
        alt="Beigo"
      />
      <div className="d-flex flex-column justify-content-around navigator__link">
        {navigatorLinks}
        <LinkWithIcon />
      </div>
    </div>
  );
};

export default Navigator;
