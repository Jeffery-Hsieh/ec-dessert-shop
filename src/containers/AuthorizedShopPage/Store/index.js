import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'


const store = ({shopName, address, phone, facebookLink, instagramLink}) => {
    return (
        <div className="col-md-6">
            <div className="store">
                <img 
                    className="store__img" 
                    src={require(`../../../Assets/stores/store_${Math.floor(Math.random()*4) + 1}.jpg`)} 
                    alt={shopName}
                />
                <div className="d-flex flex-column space-content-around store__info">
                    <div className="store__info--title">{shopName}</div>
                    <div className="store__info--text">{address}</div>
                    <div className="store__info--text">{phone}</div>
                    <div className="d-flex">
                        <div className="col text-center">
                            {facebookLink &&
                                <a href={facebookLink} className="store__info--link">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                            }
                        </div>
                        <div className="col text-center">
                            {instagramLink &&
                                <a href={instagramLink} className="store__info--link">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default store