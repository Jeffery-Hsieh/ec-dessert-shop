import React, { Component } from 'react'

import "./style.scss"

class HomePage extends Component {
    render() {
        return(
            <div className="container-fluid">
                <div className="row banner">
                    <div className="align-self-center banner__content">
                        <div className="banner__content--title">
                            Beigo
                        </div>
                        <div className="banner__content--text">
                            <p>Sure I eat my feelings, but I save the emotional roller coaster for dessert.</p>
                        </div>
                    </div>
                </div>

                <div className="row follow">
                    <button className="btn btn-dark follow__btn">Follow us</button>
                </div>

                <div className="row about">
                    <div className="">About Beigo Patisserie</div>
                </div>

                <div className="row chef">
                    <div className="">Chef</div>
                </div>

            </div>
        )
    }
}

export default HomePage