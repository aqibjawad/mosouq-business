import React, { useState, useEffect } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { POST, GET } from "../../apicontrollers/apiController";
import { jwtDecode } from "jwt-decode";
import "./index.css";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

const ProfileForm = () => {
  const token = localStorage.getItem("token");
  const data = jwtDecode(token);

  const [categoryOptions, setCategoryOptions] = useState([]);
  const [subCategoryOptions, setSubCategoryOptions] = useState([]);
  const [currentSection, setCurrentSection] = useState(1);
  const [isSelectiveHours, setIsSelectiveHours] = useState(false);
  const [imagePreview, setImagePreview] = useState(
    "https://via.placeholder.com/150"
  );

  const [formData, setFormData] = useState({
    category: "",
    subcategory: "",
    businessName: "",
    website: "",
    email: "",
    phone: "",
    city: "",
    zip: "",
    address: "",
    country: "",
    businessId: data._id.split(":")[0],
    logo: null,
    description: "",
    files: [],
    isOpen24_7: false,
    fromTime: "",
    toTime: "",
    location: "",
  });

  useEffect(() => {
    GET(`category/get-categories`).then((result) => {
      const formattedOptions = result.map((category) => ({
        value: category._id,
        label: category.name,
      }));
      setCategoryOptions(formattedOptions);
    });

    GET(`subcategory/get-subcategories`).then((result) => {
      const formattedOptions = result.map((subcategory) => ({
        value: subcategory._id,
        label: subcategory.sub_name,
      }));
      setSubCategoryOptions(formattedOptions);
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: checked,
      }));
    } else if (type === "file") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: files[0],
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      setFormData((prevState) => ({
        ...prevState,
        logo: file,
      }));
    }
  };

  const handleBusinessPicturesChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prevState) => ({
      ...prevState,
      files: [...prevState.files, ...files],
    }));
  };

  const handleCategoryChange = (selectedOption) => {
    setFormData((prevState) => ({
      ...prevState,
      category: selectedOption ? selectedOption.value : "",
    }));
  };

  const handleSubCategoryChange = (selectedOption) => {
    setFormData((prevState) => ({
      ...prevState,
      subcategory: selectedOption ? selectedOption.value : "",
    }));
  };

  const handleContinueProfile = () => setCurrentSection(2);
  const handleContinue = () => setCurrentSection(3);
  const handleContinueDescription = () => setCurrentSection(4);
  const handleContinueHours = () => setCurrentSection(5);
  const handleBack1 = () => setCurrentSection(2);
  const handleBack = () => setCurrentSection(1);

  const navigation = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     // Step 1: Upload files
  //     const filesFormData = new FormData();
  //     formData.files.forEach((file) => {
  //       filesFormData.append("files", file);
  //     });

  //     const filesResponse = await POST("business-profile/updateBusinessImages", filesFormData);

  //     // Step 2: Prepare and submit profile data
  //     const profileFormData = new FormData();
  //     for (const key in formData) {
  //       if (key === "files") {
  //         // Add file URLs from the filesResponse
  //         filesResponse.forEach((fileUrl, index) => {
  //           profileFormData.append(`fileUrl${index + 1}`, fileUrl);
  //         });
  //       } else if (key === "logo") {
  //         profileFormData.append("logo", formData[key]);
  //       } else {
  //         profileFormData.append(key, formData[key]);
  //       }
  //     }

  //     const profileResponse = await POST(
  //       "business-profile/add-business-profile",
  //       profileFormData
  //     );

  //     // Handle successful submission
  //     Swal.fire({
  //       icon: "success",
  //       title: "Profile submitted successfully!",
  //       text: "Your files were uploaded and profile was created.",
  //       showConfirmButton: false,
  //       timer: 2000,
  //     });

  //     navigation("/profile");
  //   } catch (error) {
  //     console.error("Error:", error);
  //     Swal.fire({
  //       icon: "error",
  //       title: "Oops...",
  //       text: "Something went wrong! Please try again.",
  //     });
  //   }
  // };

  const handleContinueSubmit = async () => {
    try {
      const profileFormData = new FormData();
      for (const key in formData) {
        if (key !== "files" && key !== "logo") {
          profileFormData.append(key, formData[key]);
        }
      }
      if (formData.logo) {
        profileFormData.append("logo", formData.logo);
      }

      const profileResponse = await POST(
        "business-profile/add-business-profile",
        profileFormData
      );

      Swal.fire({
        icon: "success",
        title: "Profile submitted successfully!",
        text: "Your profile was created.",
        showConfirmButton: false,
        timer: 2000,
      });

      setCurrentSection(5); // Move to the next section
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Please try again.",
      });
    }
  };

  const handleFinalSubmit = async () => {
    try {
      const filesFormData = new FormData();
  
      formData.files.forEach((file) => {
        filesFormData.append("files", file);
      });
  
      filesFormData.append("businessId", data._id.split(":")[0]);
  
      const filesResponse = await POST(
        "business-profile/upload-multiple-files",
        filesFormData
      );

      console.log("kllk",filesResponse);
  
      if (filesResponse.files.length > 1) {
        
        const uploadedLinks = filesResponse.files;
  
        const newApiResponse = await POST("business-profile/updateBusinessImages", {
          businessId: data._id.split(":")[0],
          images: uploadedLinks
        });

        navigation("/business-home")
  
        // if (newApiResponse.files.length >1) {
        //   Swal.fire({
        //     icon: "success",
        //     title: "Images uploaded and processed successfully!",
        //     text: "Your business images were uploaded and processed.",
        //     showConfirmButton: false,
        //     timer: 2000,
        //   });
  
        // } else {
        //   throw new Error("New API call failed");
        // }
      } else {
        throw new Error("File upload failed");
      }

    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Please try again.",
      });
    }
  };

  return (
    <div className="main-profile-head mt-5">
      <form>
        {currentSection === 1 && (
          <>
            <Row className="mt-5 justify-content-center">
              <Row>
                <Col md={12}>
                  <Form.Group>
                    <Form.Label>Category</Form.Label>
                    <Select
                      options={categoryOptions}
                      placeholder="Select Category"
                      required
                      value={
                        categoryOptions.find(
                          (option) => option.value === formData.category
                        ) || null
                      }
                      onChange={handleCategoryChange}
                    />
                  </Form.Group>
                </Col>

                <Col md={12}>
                  <Form.Group className="mt-5">
                    <Form.Label>Sub Category</Form.Label>
                    <Select
                      options={subCategoryOptions}
                      placeholder="Select Sub Category"
                      required
                      value={
                        subCategoryOptions.find(
                          (option) => option.value === formData.subcategory
                        ) || null
                      }
                      onChange={handleSubCategoryChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Row>

            <Row>
              <Col className="mt-5" lg={12} md={12} sm={12}>
                <div className="continue-btn" onClick={handleContinueProfile}>
                  Continue
                </div>
              </Col>
            </Row>
          </>
        )}

        {currentSection === 2 && (
          <>
            <Row className="mt-5 justify-content-center">
              <Row>
                <Col
                  md={6}
                  className="d-flex align-items-center justify-content-center"
                >
                  <img
                    src={imagePreview}
                    alt="Upload"
                    className="img-thumbnail"
                  />
                </Col>
                <Col
                  md={6}
                  className="d-flex align-items-center justify-content-center"
                >
                  <div className="image-upload">
                    <label htmlFor="file-input" className="continue-btn">
                      Choose Logo
                    </label>
                    <input
                      id="file-input"
                      type="file"
                      className="file-input"
                      onChange={handleImageChange}
                    />
                    <div>Maximum File Size 1MB</div>
                  </div>
                </Col>
              </Row>
            </Row>

            <Row className="mt-5">
              <Col lg={12}>
                <div>
                  <label htmlFor="businessName" className="label">
                    Business Name
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    id="businessName"
                    placeholder="Enter Business Name"
                    className="input-field"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </Col>
              <Col className="mt-3 mb-3">
                <div>
                  <label htmlFor="website" className="label">
                    Business Website
                  </label>
                  <input
                    type="text"
                    name="website"
                    id="website"
                    placeholder="Enter Business Website"
                    className="input-field"
                    value={formData.website}
                    onChange={handleInputChange}
                  />
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <div onClick={handleBack} className="back-btn">
                  Back
                </div>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <div className="continue-btn" onClick={handleContinue}>
                  Continue
                </div>
              </Col>
            </Row>
          </>
        )}

        {currentSection === 3 && (
          <>
            <Row className="mt-5">
              <Col lg={6} className="mt-3">
                <div>
                  <label htmlFor="email" className="label">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Email"
                    className="input-field"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </Col>

              <Col lg={6} className="mt-3">
                <div>
                  <label htmlFor="phone" className="label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Enter Phone Number"
                    className="input-field"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </Col>
            </Row>

            <div className="business-prof-setup-head mt-5">
              Business Address
            </div>
            <div className="business-prof-descrp">
              Add your main office address if you have multiple locations
            </div>

            <Row className="mt-5">
              <Col>
                <div>
                  <label htmlFor="city" className="label">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="Enter City"
                    className="input-field"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </Col>
              <Col>
                <div>
                  <label htmlFor="zip" className="label">
                    Zip
                  </label>
                  <input
                    type="text"
                    name="zip"
                    id="zip"
                    placeholder="Enter Zip"
                    className="input-field"
                    value={formData.zip}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </Col>
            </Row>

            <Row className="mt-2">
              <Col lg={6}>
                <div>
                  <label htmlFor="address" className="label">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Enter Address"
                    className="input-field"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </Col>
              <Col lg={6}>
                <div>
                  <label htmlFor="country" className="label">
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    id="country"
                    placeholder="Enter Country"
                    className="input-field"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </Col>
            </Row>

            <Row className="mt-5">
              <Col>
                <div onClick={handleBack1} className="back-btn">
                  Back
                </div>
              </Col>
              <Col className="text-end">
                <div
                  onClick={handleContinueDescription}
                  className="continue-btn"
                >
                  Continue
                </div>
              </Col>
            </Row>
          </>
        )}

        {currentSection === 4 && (
          <>
            <Row className="mt-5">
              <Col lg={12} className="mt-3">
                <div>
                  <label htmlFor="description" className="label">
                    Description
                  </label>
                  <textarea
                    name="description"
                    id="description"
                    placeholder="Enter Description"
                    className="text-field"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={4}
                    required
                  />
                </div>
              </Col>
              <Col lg={12} className="mt-3">
                <div>
                  <label htmlFor="description" className="label">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    id="location"
                    placeholder="Enter Your Business Location"
                    className="input-field"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </Col>
            </Row>
            <div className="business-prof-setup-head"> Select Your Hours </div>

            <Row style={{ marginTop: "2rem" }}>
              <Col md={3}>
                <Form.Check
                  type="checkbox"
                  label="24/7"
                  name="isOpen24_7"
                  checked={formData.isOpen24_7}
                  onChange={handleInputChange}
                />
              </Col>

              <Col md={5}>
                <Form.Check
                  type="checkbox"
                  label="Selective Hours"
                  checked={isSelectiveHours}
                  onChange={() => setIsSelectiveHours(!isSelectiveHours)}
                />
              </Col>

              {isSelectiveHours && (
                <Col md={12} style={{ marginTop: "1rem" }}>
                  <Row>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>From</Form.Label>
                        <Form.Control
                          type="time"
                          name="fromTime"
                          value={formData.fromTime}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>To</Form.Label>
                        <Form.Control
                          type="time"
                          name="toTime"
                          value={formData.toTime}
                          onChange={handleInputChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Col>
              )}
            </Row>

            <Row className="mt-5">
              <Col>
                <div onClick={handleBack1} className="back-btn">
                  Back
                </div>
              </Col>
              <Col className="text-end">
                <div onClick={handleContinueSubmit} className="continue-btn">
                  Continue
                </div>
              </Col>
            </Row>
          </>
        )}

        {currentSection === 5 && (
          <>
            <Col md={12} className="pt-4 mt-5">
              <Form.Label htmlFor="files">
                Add Your Business Pictures
              </Form.Label>
              <div
                style={{
                  padding: "50px",
                  border: "dotted",
                  textAlign: "center",
                }}
              >
                <input
                  type="file"
                  id="files"
                  name="files"
                  multiple
                  onChange={handleBusinessPicturesChange}
                />
                Drop files here or click to upload
              </div>
            </Col>

            <Row className="mt-5">
              <Col>
                <div onClick={handleBack1} className="back-btn">
                  Back
                </div>
              </Col>
              <Col className="text-end">
                <div onClick={handleFinalSubmit} className="continue-btn">
                  Submit your profile
                </div>
              </Col>
            </Row>
          </>
        )}
      </form>
    </div>
  );
};

export default ProfileForm;
