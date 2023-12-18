import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Containers/Home'
import Order from './Containers/Order'

function myRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={Home} />
                <Route path="/order" element={Order} />
            </Routes>
        </Router>
    );
};

export default myRoutes;

