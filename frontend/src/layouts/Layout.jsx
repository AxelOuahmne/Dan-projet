import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../components/com/NavBar';
import Footer from '../components/com/Footer';

const Layout = () => {
    const location = useLocation();
    const hideFooterPaths = ['/login', '/register'];

    const shouldHideFooter = hideFooterPaths.includes(location.pathname);

    return (
        <div>
            <NavBar />
            <main>
                <Outlet />
            </main>
            {!shouldHideFooter && <Footer />}
        </div>
    );
};

export default Layout;
