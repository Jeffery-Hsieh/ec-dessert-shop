import React, { Component } from 'react'
import Store from "./Store"

import stores from "../../examples/authorizedStore.json"

import "./style.scss"

class AuthorizedStorePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            stores: stores
        }
    }
    
    render() {
        return(
            <div className="row mt-2">
                { stores.map((store, id) => <Store key={id} {...store} />)}
            </div>
        )
    }
}

export default AuthorizedStorePage