import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Header/Header'

const Layout = () => {

    return (
        <>
         <Header></Header>
         <Outlet></Outlet>
        </>
    );
};

export default Layout;