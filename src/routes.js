import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Containers/Home'
import Order from './Containers/Order'

function Routes() {
    return (
        <Router>
            <Route exact path="/" component={Home} />
            <Route exactya path="/order" component={Order} />
        </Router>
    );
};

export default Routes;

