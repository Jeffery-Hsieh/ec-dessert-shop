import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './index.scss'
import routes from "./routes"


ReactDOM.render(
    <React.Fragment>
        {routes}
    </React.Fragment>
, document.getElementById('root'));
