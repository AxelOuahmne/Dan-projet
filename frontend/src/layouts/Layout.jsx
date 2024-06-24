import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import NavBar from '../components/com/NavBar';
import Footer from '../components/com/Footer';

const Layout = () => {
    return (
        <div>
            <NavBar />
            <main>
            <Outlet />
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;
