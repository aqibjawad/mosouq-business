import React, { useState, useEffect } from "react";
import { Row, Col, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { POST, GET } from "../../apicontrollers/apiController";
import { jwtDecode } from "jwt-decode";
import "./index.css";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

import "./index.css"

const ProfileUpdate = () => {
  const token = localStorage.getItem("token");
  const data = jwtDecode(token);

  const [categoryOptions, setCategoryOptions] = useState([]);
  const [subCategoryOptions, setSubCategoryOptions] = useState([]);
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

  const navigation = useNavigate();

  const handleSubmit = async () => {
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

      // Submit profile data
      const profileResponse = await POST(
        "business-profile/add-business-profile",
        profileFormData
      );

      if (profileResponse.success) {
        const filesFormData = new FormData();

        formData.files.forEach((file) => {
          filesFormData.append("files", file);
        });

        filesFormData.append("businessId", data._id.split(":")[0]);

        // Submit business pictures
        const filesResponse = await POST(
          "business-profile/upload-multiple-files",
          filesFormData
        );

        if (filesResponse.success) {
          Swal.fire({
            icon: "success",
            title: "Profile updated successfully!",
            text: "Your profile and images were successfully submitted.",
            showConfirmButton: false,
            timer: 2000,
          });
          navigation("/business-home");
        } else {
          throw new Error("File upload failed");
        }
      } else {
        throw new Error("Profile submission failed");
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

            <Col md={12} className="mt-4">
              <Form.Group>
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

          <Row className="mt-4">
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

          <Row className="mt-4">
            <Col lg={12}>
              <Form.Group>
                <Form.Label>Business Name</Form.Label>
                <input
                  type="text"
                  name="businessName"
                  placeholder="Enter Business Name"
                  className="input-field"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
            </Col>

            <Col lg={12} className="mt-4">
              <Form.Group>
                <Form.Label>Business Website</Form.Label>
                <input
                  type="text"
                  name="website"
                  placeholder="Enter Business Website"
                  className="input-field"
                  value={formData.website}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>

            <Col md={6} className="mt-4">
              <Form.Group>
                <Form.Label>Business Email</Form.Label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  className="input-field"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
            </Col>

            <Col md={6} className="mt-4">
              <Form.Group>
                <Form.Label>Business Phone</Form.Label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter Phone"
                  className="input-field"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col md={6}>
              <Form.Group>
                <Form.Label>City</Form.Label>
                <input
                  type="text"
                  name="city"
                  placeholder="Enter City"
                  className="input-field"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Label>Zip Code</Form.Label>
                <input
                  type="text"
                  name="zip"
                  placeholder="Enter Zip Code"
                  className="input-field"
                  value={formData.zip}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
            </Col>

            <Col md={12} className="mt-4">
              <Form.Group>
                <Form.Label>Address</Form.Label>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter Address"
                  className="input-field"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
            </Col>

            <Col md={12} className="mt-4">
              <Form.Group>
                <Form.Label>Country</Form.Label>
                <input
                  type="text"
                  name="country"
                  placeholder="Enter Country"
                  className="input-field"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col md={12}>
              <Form.Group>
                <Form.Label>Business Description</Form.Label>
                <textarea
                  name="description"
                  placeholder="Describe Your Business"
                  className="text-field"
                  rows={5}
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col md={12}>
              <Form.Group>
                <Form.Label>Business Pictures</Form.Label>
                <input
                  type="file"
                  multiple
                  className="file-input"
                  onChange={handleBusinessPicturesChange}
                />
              </Form.Group>
            </Col>
          </Row>

          {!formData.isOpen24_7 && (
            <Row className="mt-4">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Opening Time</Form.Label>
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
                  <Form.Label>Closing Time</Form.Label>
                  <Form.Control
                    type="time"
                    name="toTime"
                    value={formData.toTime}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
            </Row>
          )}

          <Row className="mt-5">
            <Col md={12}>
              <div className="continue-btn" onClick={handleSubmit}>
                Submit Profile
              </div>
            </Col>
          </Row>
        </Row>
      </form>
    </div>
  );
};

export default ProfileUpdate;
