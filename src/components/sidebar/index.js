import React, { useEffect, useState } from "react";

import { jwtDecode } from "jwt-decode";

import { GET } from "../../apicontrollers/apiController";

import { Link } from "react-router-dom";

import "./index.css";

import { AiFillDashboard } from "react-icons/ai";

import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const data = jwtDecode(token);

  const dataId = data._id.split(":")[0];

  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    if (dataId !== undefined) {
      GET(`business-profile/profile/${dataId}`).then((result) => {
        setProfileData(result);
      });
    }
  }, [dataId]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="sidebar col-2">
      <div className="sidebar-top-sec">
        <div className="business-Profile-name">{profileData?.businessName}</div>
        <div className="business-border"></div>
      </div>
      <div className="">
        <ul
          className="list-unstyled user-menubar"
          style={{ paddingLeft: "1.5rem", paddingTop: "2rem" }}
        >
          <li>
            <Link to="/business-home-dashboard" className="menu-item">
              <span className="d-flex">
                <AiFillDashboard
                  style={{
                    color: "white",
                    fontSize: "20px",
                    marginLeft: "-1rem",
                  }}
                />
                <p style={{ fontSize: "18px" }}> Home </p>
              </span>
            </Link>
          </li>

          <li>
            <Link to="/business-Home-reviews" className="menu-item">
              <span className="d-flex">
                <AiFillDashboard
                  style={{
                    color: "white",
                    fontSize: "20px",
                    marginLeft: "-1rem",
                  }}
                />
                <p style={{ fontSize: "18px" }}> Manage Reviews </p>
              </span>
            </Link>
          </li>

          <li>
            <Link to="/share_promote" className="menu-item">
              <span className="d-flex">
                <AiFillDashboard
                  style={{
                    color: "white",
                    fontSize: "20px",
                    marginLeft: "-1rem",
                  }}
                />
                <p style={{ fontSize: "18px" }}> Get Reviews </p>
              </span>
            </Link>
          </li>

          <li>
            <Link to="/share_promote" className="menu-item">
              <span className="d-flex">
                <AiFillDashboard
                  style={{
                    color: "white",
                    fontSize: "20px",
                    marginLeft: "-1rem",
                  }}
                />
                <p style={{ fontSize: "18px" }}> Share and Promote </p>
              </span>
            </Link>
          </li>

          <li>
            <Link to="/dashboard" className="menu-item">
              <span className="d-flex">
                <AiFillDashboard
                  style={{
                    color: "white",
                    fontSize: "20px",
                    marginLeft: "-1rem",
                  }}
                />
                <p style={{ fontSize: "18px" }}> Analytics </p>
              </span>
            </Link>
          </li>

          <li>
            <Link to="/dashboard" className="menu-item">
              <span className="d-flex">
                <AiFillDashboard
                  style={{
                    color: "white",
                    fontSize: "20px",
                    marginLeft: "-1rem",
                  }}
                />
                <p style={{ fontSize: "18px" }}> Integration </p>
              </span>
            </Link>
          </li>

          <li>
            <Link to="/business-settings" className="menu-item">
              <span className="d-flex">
                <AiFillDashboard
                  style={{
                    color: "white",
                    fontSize: "20px",
                    marginLeft: "-1rem",
                  }}
                />
                <p style={{ fontSize: "18px" }}> Settings </p>
              </span>
            </Link>
          </li>

          <li>
            <div to="/dashboard" className="menu-item" onClick={handleLogout}>
              <span className="d-flex">
                <AiFillDashboard
                  style={{
                    color: "white",
                    fontSize: "20px",
                    marginLeft: "-1rem",
                  }}
                />
                <p style={{ fontSize: "18px" }}> Logout </p>
              </span>
            </div>
          </li>

          <li>
            <div
              style={{
                color: "white",
                textAlign: "center",
                marginTop: "2rem",
                marginBottom: "2rem",
              }}
            >
              Your Plan: Free
            </div>
            <Link to="/pricing">
              <div className="upgrade-button">Upgrade Now</div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
