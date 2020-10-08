import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';


const LinkWithIcon = () => {
    return (
        <div className="d-flex justify-content-around navigator__fanPageLink">
            <a href="https://www.facebook.com/BeigoPatisserie" className="navigator__fanPageLink--text">
            <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.instagram.com/beigo_patisserie/" className="navigator__fanPageLink--text">
            <FontAwesomeIcon icon={faInstagram} />
            </a>
        </div>
    )
}

export default LinkWithIcon;

