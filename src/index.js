import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Containers/Home';
import GlobalStyle from './globalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Home />,
        <GlobalStyle />
    </>
);


