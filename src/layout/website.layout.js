import React, { useState, useEffect } from 'react';

import LoggedInHeader from "../components/header/loginInheader";
import Footer from '../components/footer/footer.desktop';

import "./index.css"

const WebsiteLayout = ({ children }) => {
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

            <LoggedInHeader />

            <div className="main-body">
                {children}
            </div>

            <Footer />
        </React.Fragment>
    );
}

export default WebsiteLayout;
