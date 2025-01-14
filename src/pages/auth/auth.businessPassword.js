import React, { useState, useEffect } from "react";
import "./auth.business.css";
import { Row, Col } from "react-bootstrap";
import { POST } from "../../apicontrollers/apiController";
import { useNavigate, useLocation } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { Eye, EyeOff, Loader } from "lucide-react";
import "./signin.css";

const BusinessPassword = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");
  const navigation = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    }
  }, [token]);

  const data = jwtDecode(token);
  const email = data._id.split(":")[1];

  const [formData, setFormData] = useState({
    email: email,
    password: "",
  });

  const [requirements, setRequirements] = useState({
    length: false,
    lowercase: false,
    uppercase: false,
    number: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    const length = value.length >= 8;
    const lowercase = /[a-z]/.test(value);
    const uppercase = /[A-Z]/.test(value);
    const number = /\d/.test(value);

    setRequirements({
      length,
      lowercase,
      uppercase,
      number,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await POST("business/addPassword-business", formData);
      navigation("/business-profile");
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const labelStyle = {
    color: "#666666",
    fontFamily: "Figtree",
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "19.2px",
    textAlign: "left",
  };

  return (
    <div className="form-container">
      <h2 className="text-center mt-5">Set up Password.</h2>
      <p className="text-center mt-4">Complete your account setup</p>

      <form onSubmit={handleSubmit}>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <label htmlFor="password" style={labelStyle}>
              Password
            </label>
            <div className="relative w-full">
              <input
                id="password"
                style={{ width: "100%" }}
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="mt-3"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-transparent border-none cursor-pointer"
                style={{ marginTop: "6px" }}
              >
                {showPassword ? (
                  <EyeOff size={20} color="#666666" />
                ) : (
                  <Eye size={20} color="#666666" />
                )}
              </button>
            </div>
          </Col>
        </Row>

        <ul className="mt-3">
          <li style={{ color: requirements.length ? "green" : "red" }}>
            <input type="checkbox" checked={requirements.length} readOnly />
            At least 8 characters long
          </li>
          <li style={{ color: requirements.lowercase ? "green" : "red" }}>
            <input type="checkbox" checked={requirements.lowercase} readOnly />
            One lowercase character
          </li>
          <li style={{ color: requirements.uppercase ? "green" : "red" }}>
            <input type="checkbox" checked={requirements.uppercase} readOnly />
            One uppercase character
          </li>
          <li style={{ color: requirements.number ? "green" : "red" }}>
            <input type="checkbox" checked={requirements.number} readOnly />
            One number
          </li>
        </ul>

        <button
          type="submit"
          className="signin-button mt-3 flex items-center justify-center gap-2"
          disabled={
            isLoading ||
            !(
              requirements.length &&
              requirements.lowercase &&
              requirements.uppercase &&
              requirements.number
            )
          }
        >
          {isLoading ? (
            <>
              <Loader className="animate-spin" size={20} />
              Loading...
            </>
          ) : (
            "Complete Setup"
          )}
        </button>
      </form>
    </div>
  );
};

export default BusinessPassword;
