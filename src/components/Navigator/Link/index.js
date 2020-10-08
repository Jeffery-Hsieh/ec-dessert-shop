import React from "react";
import { Link as RouterLink } from "react-router-dom";
import "./style.scss";

const Link = ({ href, en, locale, disabled }) => {
  let linkClassName = "link";
  if (disabled) {
    linkClassName += " disabled-link";
  }

  return (
    <RouterLink className={linkClassName} to={`${href}`}>
      <div className="link--zhText">{locale}</div>
      <div className="link--enText">{en}</div>
    </RouterLink>
  );
};

export default Link;
