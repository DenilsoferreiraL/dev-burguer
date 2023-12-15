import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Containers/Home'
import Order from './Containers/Order'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={Home} />
                <Route path="/order" element={Order} />
            </Routes>
        </Router>
    );
};

export default App;
