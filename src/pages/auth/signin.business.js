import React, { useRef, useState } from "react";
import { Auth } from "../../context/auth.context";
import { toast } from "react-toastify";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import WhyChoose from "../../components/whyChoose";
import GoogleSignin from "../../components/google/googleSignin";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  let navigation = useNavigate();
  const auth = Auth();

  const submit = async (e) => {
    e.preventDefault();
    let check = 0;

    emailRef?.current?.value?.length === 0 && check++;
    passwordRef?.current?.value?.length === 0 && check++;

    if (check > 0) {
      toast.error("Please fill in all fields.");
      return;
    }

    setIsLoading(true);
    try {
      const formData = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      };
      const result = await axios.post(
        `https://apis.mosouq.ae/api/business/login-business`,
        formData
      );
      if (check === 0) {
        auth.activateToken(localStorage.setItem("token", result.data.token));
        localStorage.setItem("user", JSON.stringify(result.data.user));
        auth.activateAuthentication(true);
        toast.success("Login Successful!");
        navigation("/profile");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-5 mt-4">
      <Container fluid className="px-3 py-5 mt-5 px-md-5">
        <Row className="align-items-center">
          <Col lg={6} md={6} sm={12} className="d-flex mt-5 align-items-center">
            <Row>
              <Col lg={12}>
                <div>
                  <div>
                    <h1 className="">Sign Up for Mosouq</h1>
                    <p className="fs-5">
                      Lorem ipsum dolor sit amet consectetur. Mi ipsum diam{" "}
                    </p>
                  </div>
                  <div className="mt-5 pt-3">
                    <img src="/business.png" className="w-100" alt="blog" />
                  </div>
                </div>
              </Col>
            </Row>
          </Col>

          <Col lg={6} md={6} sm={12}>
            <div
              className="p-4 shadow-sm rounded-3"
              style={{ backgroundColor: "#FAFAFA" }}
            >
              <h1 className="text-center">Sign In for Business</h1>
              <h6 className="text-center fs-6">Connect with businesses</h6>

              <Row className="pt-4">
                <Col lg={12}>
                  <button
                    className="social-button w-100 rounded-2 google"
                    style={{
                      fontWeight: "400",
                      fontSize: "14px",
                      backgroundColor: "white",
                      color: "black",
                      border: "1px solid #CECECE",
                      marginBottom: "1rem",
                    }}
                  >
                    <GoogleSignin />
                  </button>
                </Col>
                <Col lg={12}>
                  <button
                    className="social-button w-100 rounded-2 apple"
                    style={{
                      fontWeight: "400",
                      fontSize: "14px",
                      backgroundColor: "white",
                      color: "black",
                      border: "1px solid #CECECE",
                      marginBottom: "1rem",
                    }}
                  >
                    <img
                      src="/linkedin.webp"
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "0.5rem",
                      }}
                    />
                    Continue with Linkedin
                  </button>
                </Col>
              </Row>

              <Row className="align-items-center my-3">
                <Col xs={5}>
                  <hr />
                </Col>
                <Col xs={2} className="text-center">
                  OR
                </Col>
                <Col xs={5}>
                  <hr />
                </Col>
              </Row>

              <form>
                <Row className="g-2">
                  <Col lg={12}>
                    <div>
                      <label className="mb-1">Email Address</label>
                      <div>
                        <input
                          ref={emailRef}
                          type="email"
                          name="email"
                          className="w-100"
                          placeholder=""
                        />
                      </div>
                    </div>
                  </Col>
                  <Col lg={12}>
                    <label className="mb-1">Password</label>
                    <input
                      ref={passwordRef}
                      type="password"
                      name="password"
                      className="w-100"
                      placeholder=""
                    />
                  </Col>
                  <Col lg={12}>
                    <div className="d-flex gap-2 align-items-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckDefault"
                        name="terms"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                        style={{ fontSize: "0.9rem" }}
                      >
                        Remember me
                      </label>
                    </div>
                  </Col>
                </Row>

                <div className="text-center">
                  <button
                    type="submit"
                    style={{
                      marginTop: "1rem",
                      borderRadius: "40px",
                      color: "white",
                      width: "100%",
                      padding: "0.75rem",
                      backgroundColor: "#404EED",
                      border: "none",
                    }}
                    onClick={submit}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="d-flex justify-content-center align-items-center gap-2">
                        <div
                          className="spinner-border spinner-border-sm"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                        <span>Signing In...</span>
                      </div>
                    ) : (
                      "Sign In"
                    )}
                  </button>
                </div>
                <div className="text-center">
                  <p className="m-0 pt-2">
                    Did you have an Account?{" "}
                    <Link to="/business-signup" className="text-black fs-6">
                      Sign up
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </Col>
        </Row>

        <WhyChoose />
      </Container>
    </div>
  );
};

export default Login;
