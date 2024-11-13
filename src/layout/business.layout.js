import React, {useState, useEffect} from "react";

import SideBar from "../components/sidebar";

const BusinessLayout = ({children}) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 480);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 480);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className="d-flex">
        {window.innerWidth > 480 ? <SideBar /> : ""}

        <div className="container main-body">{children}</div>
      </div>
    </div>
  );
};

export default BusinessLayout;
