import React from "react";
import Link from "./Link";
import { Link as RouterLink } from "react-router-dom";
import LinkWithIcon from "./LinkWithIcon";
import "./style.scss";

const Navigator = () => {
  const links = [
    { en: "Gallery", locale: "商品集", href: "/gallery", disabled: true },
    {
      en: "Online Shop",
      locale: "線上商店",
      href: "/onlineShop",
      disabled: false,
    },
    {
      en: "Authorized Store",
      locale: "合作商家",
      href: "authorizedStore",
      disabled: false,
    },
    { en: "Contact us", locale: "聯絡我們", href: "/contact", disabled: true },
  ];

  const navigatorLinks = links.map((link) => <Link {...link} />);

  return (
    <div className="navigator">
      <RouterLink to="/">
        <img
          src={require("../../Assets/logo.png")}
          className="navigator__logo"
          alt="Beigo"
        />
      </RouterLink>
      <div className="d-flex flex-column justify-content-around navigator__link">
        {navigatorLinks}
        <LinkWithIcon />
      </div>
    </div>
  );
};

export default Navigator;
