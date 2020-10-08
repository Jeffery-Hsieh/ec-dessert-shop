import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// Fixed
import Navigator from "../components/Navigator"
import FloatCart from "../containers/FloatCart"

// Main content
import Admin from "../containers/AdminPage"
import Home from "../containers/HomePage"
import Shop from "../containers/ShopPage"
// import Gallery from "../containers/GalleryPage"
import AuthorizedStore from "../containers/AuthorizedShopPage"

import { SessionProvider } from '../store/context'
import "./style.css"

const CustomerContainer = () => {
    return (
        <SessionProvider>
            <FloatCart />
            <div className="sideBar">
                <Navigator />
            </div>
            <div className="main">
                <Route exact path="/" component={Home} />
                {/* <Route exact path="/gallery" component={Gallery} /> */}
                <Route exact path="/onlineShop" component={Shop} />
                <Route exact path="/authorizedStore" component={AuthorizedStore} />
            </div>
        </SessionProvider>
    )
}


const routes = (
    <Router>
        <Switch>
            <Route exact path="/admin" component={Admin} />
            <Route component={CustomerContainer} />
        </Switch>
    </Router>
)

export default routes