import React from 'react'
import "./style.scss"

export default () => (
    <div className="container-fluid">
        <div className="row footer">
            <div className="col-lg-5">
                <div className="footer__title">
                    BEIGO
                </div>
                <div className="footer__description">
                Proin egestas porta turpis, at euismod diam vestibulum in. 
                Vestibulum ultrices tincidunt neque at commodo. 
                Quisque urna purus, finibus sed ante id, vestibulum interdum risus. 
                Morbi pretium purus sed libero lobortis, nec finibus dui rhoncus.
                </div>
            </div>
            <div className="col">
                <div className="footer__title">
                    General
                </div>
                <ul className="footer__link">
                    <li>
                        <a href="/">Shop All</a>
                    </li>
                    <li>
                        <a href="/">Shop Location</a>
                    </li>
                    <li>
                        <a href="/">Wholesale</a>
                    </li>
                    <li>
                        <a href="/">Wholesale</a>
                    </li>

                </ul>
            </div>
            <div className="col">
                <div className="footer__title">
                    Assistance
                </div>
                <ul className="footer__link">
                    <li>
                        <a href="/">link1</a>
                    </li>
                    <li>
                        <a href="/">link2</a>
                    </li>
                    <li>
                        <a href="/">link3</a>
                    </li>
                </ul>
            </div>
            <div className="col">
                <div className="footer__title">
                    News delivery
                </div>
                <div className="footer__description">
                    Aenean tellus diam, pellentesque sed mi auctor, pharetra mollis velit. 
                    Maecenas ac lectus purus. Suspendisse potenti. Vivamus consequat, 
                    nulla vitae pulvinar finibus,
                </div>
                
                <input className="footer__email" type="email" placeholder="email@example.com"/>
                <button className="btn btn-dark footer__btn">Subscribe</button>
            </div>
        </div>
    </div>
)
