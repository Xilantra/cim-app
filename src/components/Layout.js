import React from 'react';
// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/index.css';
import 'animate.css';

const Layout = ({ children }) => (
    <div className="container pt-5 pb-5">
        {children}
    </div>
);

export default Layout;
