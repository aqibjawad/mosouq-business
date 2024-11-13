import React, { useState, useEffect } from 'react';

import LoggedOutHeader from "../components/header/logoutheader";
import Footer from '../components/footer/footer.desktop';

import "./index.css"

const AuthorizeLayout = ({ children }) => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 480);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 480);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <React.Fragment>

            <LoggedOutHeader />

            <div className="main-body">
                {children}
            </div>

            <Footer />
        </React.Fragment>
    );
}

export default AuthorizeLayout;
