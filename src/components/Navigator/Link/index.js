import React from "react";
import { Link as RouterLink } from "react-router-dom";
import "./style.scss";

const Link = ({ href, en, locale }) => (
  <RouterLink className="link" to={`${href}`}>
    <div className="link--zhText">{locale}</div>
    <div className="link--enText">{en}</div>
  </RouterLink>
);

export default Link;
