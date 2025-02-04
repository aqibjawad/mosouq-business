import React, { useState, useEffect } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { POST, GET } from "../../apicontrollers/apiController";
import { jwtDecode } from "jwt-decode";
import "./index.css";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

import { Editor } from "@tinymce/tinymce-react";

import AddressPicker from "./addressPicker";

import BusinessHoursSelector from "./businessHours";

import { Loader2 } from 'lucide-react';

const ProfileForm = () => {
  const token = localStorage.getItem("token");
  const data = jwtDecode(token);

  const [is24Hours, setIs24Hours] = useState(false);

  const [error, setError] = useState("");
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
    country: "dubai",
    businessId: data._id.split(":")[0],
    logo: null,
    description: "",
    businesshours: [],
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

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));

      // Create a FormData object for the logo
      const logoFormData = new FormData();
      logoFormData.append("file", file);
      logoFormData.append("businessId", formData.businessId);

      try {
        // Send the logo to the backend
        const logoResponse = await POST(
          "utils/upload-single-file",
          logoFormData
        );

        // Check if the response contains the file URL
        if (logoResponse && logoResponse?.data?.image) {
          // Update the form data with the received logo URL
          setFormData((prevData) => ({
            ...prevData,
            logo: logoResponse?.data?.image,
          }));

          Swal.fire({
            icon: "success",
            title: "Logo uploaded successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          throw new Error("Logo URL not received from the server");
        }
      } catch (error) {
        console.error("Error uploading logo:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to upload logo. Please try again.",
        });
      }
    }
  };

  const handleBusinessPicturesChange = (e) => {
    const newFiles = Array.from(e.target.files);

    // Calculate total files after adding new ones
    const totalFiles = formData.files.length + newFiles.length;

    if (totalFiles === 0) {
      setError("Please select at least 1 picture");
      return;
    }

    if (totalFiles > 2) {
      setError("You can only upload maximum 2 pictures");
      return;
    }

    setError("");
    setFormData((prevState) => ({
      ...prevState,
      files: [...prevState.files, ...newFiles],
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

  const handleContinue = () => setCurrentSection(3);
  const handleBack = () => setCurrentSection(1);

  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigate();

  const handleContinueSubmit = async () => {
    try {
      setIsLoading(true);

      // Create an object to hold the form data
      const formEncodedData = {
        ...formData,
        // Stringify businesshours to ensure it's properly encoded
        businesshours: JSON.stringify(formData.businesshours),
        isOpen24_7: formData.isOpen24_7.toString(),
      };

      // Remove file fields as they can't be directly form-encoded
      delete formEncodedData.files;

      // Only include fromTime and toTime if not open 24/7
      if (!formEncodedData.isOpen24_7) {
        formEncodedData.fromTime = formData.fromTime || "";
        formEncodedData.toTime = formData.toTime || "";
      } else {
        delete formEncodedData.fromTime;
        delete formEncodedData.toTime;
      }

      // Remove any undefined values
      Object.keys(formEncodedData).forEach(
        (key) =>
          formEncodedData[key] === undefined && delete formEncodedData[key]
      );

      // Convert the object to a URL-encoded string
      const encodedData = Object.keys(formEncodedData)
        .map(
          (key) =>
            encodeURIComponent(key) +
            "=" +
            encodeURIComponent(formEncodedData[key])
        )
        .join("&");

      const profileResponse = await POST(
        "business-profile/add-business-profile",
        encodedData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      // console.log(profileResponse);

      setCurrentSection(2);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFinalSubmit = async () => {
    if (isLoading) return; // Prevent multiple submissions

    setIsLoading(true);
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

      if (filesResponse?.data.length >= 1) {
        const uploadedLinks = filesResponse.data;

        const newApiResponse = await POST(
          "business-profile/updateBusinessImages",
          {
            businessId: formData.businessId,
            images: uploadedLinks,
          }
        );

        if (newApiResponse.message) {
          Swal.fire({
            icon: "success",
            title: "Profile Submitted",
            text: "Your profile has been successfully submitted!",
          });

          navigation("/profile");
        } else {
          throw new Error("Failed to update business images");
        }
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
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditorChange = (content) => {
    handleInputChange({
      target: {
        name: "description",
        value: content,
      },
    });
  };

  const handlePlaceSelected = (place) => {
    if (place) {
      // Set the formatted address in the input field
      const formattedAddress = place.formatted_address || place.name || "";

      // Update form data with address, latitude, and longitude
      setFormData((prevData) => ({
        ...prevData,
        address: formattedAddress,
        lat: place.geometry?.location
          ? place.geometry.location.lat().toString()
          : "",
        lang: place.geometry?.location
          ? place.geometry.location.lng().toString()
          : "",
      }));

      // Optional: Log for debugging
      console.log("Selected Place:", {
        address: formattedAddress,
        lat: place.geometry?.location?.lat(),
        lng: place.geometry?.location?.lng(),
      });
    }
  };

  const [selectedDays, setSelectedDays] = useState({
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false,
  });

  const [timeSlots, setTimeSlots] = useState({
    monday: { from: "", to: "" },
    tuesday: { from: "", to: "" },
    wednesday: { from: "", to: "" },
    thursday: { from: "", to: "" },
    friday: { from: "", to: "" },
    saturday: { from: "", to: "" },
    sunday: { from: "", to: "" },
  });

  const days = [
    { key: "monday", label: "Monday" },
    { key: "tuesday", label: "Tuesday" },
    { key: "wednesday", label: "Wednesday" },
    { key: "thursday", label: "Thursday" },
    { key: "friday", label: "Friday" },
    { key: "saturday", label: "Saturday" },
    { key: "sunday", label: "Sunday" },
  ];

  useEffect(() => {
    const businesshours = Object.keys(selectedDays)
      .filter(
        (day) => selectedDays[day] && timeSlots[day].from && timeSlots[day].to
      )
      .map((day) => ({
        day,
        fromTime: timeSlots[day].from,
        toTime: timeSlots[day].to,
      }));

    setFormData((prev) => ({
      ...prev,
      businesshours,
    }));
  }, [selectedDays, timeSlots]);

  return (
    <div className="main-profile-head mt-5">
      <form>
        {currentSection === 1 && (
          <>
            <Row className="mt-5">
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

            <Row className="mt-5 justify-content-center">
              <Row>
                <Col md={6}>
                  <Form.Group className="mt-5">
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

                <Col md={6}>
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

            <div>
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
                      search address
                    </label>
                    <AddressPicker onPlaceSelected={handlePlaceSelected} />
                  </div>
                </Col>
              </Row>

              <Row className="mt-2">
                <Col lg={4}>
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
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
                      required
                    />
                  </div>
                </Col>
                <Col lg={4}>
                  <div>
                    <label htmlFor="country" className="label">
                      Latitude
                    </label>
                    <input
                      type="text"
                      name="latitude"
                      id="latitude"
                      placeholder="Latitude"
                      className="input-field"
                      value={formData.lat}
                      onChange={(e) =>
                        setFormData({ ...formData, lat: e.target.value })
                      }
                      required
                    />
                  </div>
                </Col>
                <Col lg={4}>
                  <div>
                    <label htmlFor="country" className="label">
                      Longitude
                    </label>
                    <input
                      type="text"
                      name="longitude"
                      id="longitude"
                      placeholder="Longitude"
                      className="input-field"
                      value={formData.lang}
                      onChange={(e) =>
                        setFormData({ ...formData, lang: e.target.value })
                      }
                      required
                    />
                  </div>
                </Col>
              </Row>

              <Row className="mt-5">
                <Col lg={12} className="mt-3">
                  <div>
                    <label htmlFor="description" className="label">
                      Description
                    </label>
                    <Editor
                      apiKey="q52q0lhptx8f862ep5ichss9wa4yfqjys86yeo2ltmbgwafj"
                      value={formData.description}
                      init={{
                        height: 500,
                        menubar: true,
                        plugins: [
                          "advlist autolink lists link image charmap print preview anchor",
                          "searchreplace visualblocks code fullscreen",
                          "insertdatetime media table paste code help wordcount",
                          "lists", // Added lists plugin explicitly
                        ],
                        toolbar: [
                          "undo redo | formatselect | bold italic backcolor",
                          "alignleft aligncenter alignright alignjustify",
                          "bullist numlist outdent indent | removeformat | help",
                        ].join(" | "),
                        // List formatting options
                        advlist_bullet_styles: "square circle disc",
                        advlist_number_styles:
                          "lower-alpha lower-roman decimal upper-alpha upper-roman",
                        lists_indent_on_tab: true,
                        // Additional list-related configurations
                        content_style: `
                      ul { list-style-type: disc; margin-left: 20px; }
                      ol { list-style-type: decimal; margin-left: 20px; }
                      ul ul { list-style-type: circle; }
                      ol ol { list-style-type: lower-alpha; }
                    `,
                      }}
                      onEditorChange={handleEditorChange}
                    />
                  </div>
                </Col>

                <Col lg={6} className="mt-3">
                  <div>
                    <label htmlFor="location" className="label">
                      Contact Option For your business
                    </label>
                    <select
                      name="location"
                      id="location"
                      className="input-field"
                      required
                    >
                      <option value="">Select Contact</option>
                      <option value="chat"> Chat With Us </option>
                      <option value="consultations">
                        {" "}
                        Request For consultation{" "}
                      </option>
                      <option value="reservations"> Rservations </option>
                      <option value="reservations"> Call Us </option>
                    </select>
                  </div>
                </Col>
              </Row>

              <div className="business-prof-setup-head">
                {" "}
                Select Your Hours{" "}
              </div>

              <div className="w-full max-w-2xl mx-auto p-6 space-y-6">
                {/* <div className="flex gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isSelectiveHours}
                      onChange={() => {
                        setIsSelectiveHours(!isSelectiveHours);
                        if (is24Hours) setIs24Hours(false);
                      }}
                      className="w-4 h-4 rounded border-gray-300"
                    />
                    <span>Selective Hours</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.isOpen24_7}
                      onChange={() => {
                        setFormData((prevData) => ({
                          ...prevData,
                          isOpen24_7: !prevData.isOpen24_7,
                          // Clear time fields if now 24/7
                          ...(prevData.isOpen24_7
                            ? { fromTime: "", toTime: "" }
                            : {}),
                        }));
                      }}
                      className="w-4 h-4 rounded border-gray-300"
                    />
                    <span>24 Hours</span>
                  </label>
                </div> */}

                <Row className="mb-3 mt-5">
                  <Col lg={6} xs={12}>
                    <div className="d-flex">
                      <Form.Check
                        type="radio"
                        id="selective-hours"
                        name="hours-type"
                        label="Selective Hours"
                        checked={isSelectiveHours}
                        onChange={() => {
                          setIsSelectiveHours(true);
                          setFormData((prevData) => ({
                            ...prevData,
                            isOpen24_7: false,
                            // Clear time fields if switching from 24/7
                            ...(prevData.isOpen24_7
                              ? { fromTime: "", toTime: "" }
                              : {}),
                          }));
                        }}
                        className="me-4"
                      />
                    </div>
                  </Col>

                  <Col lg={6} xs={12}>
                    <div className="d-flex">
                      <Form.Check
                        type="radio"
                        id="24-hours"
                        name="hours-type"
                        label="24 Hours"
                        checked={formData.isOpen24_7}
                        onChange={() => {
                          setIsSelectiveHours(false);
                          setFormData((prevData) => ({
                            ...prevData,
                            isOpen24_7: true,
                            // Clear time fields if now 24/7
                            fromTime: "",
                            toTime: "",
                          }));
                        }}
                      />
                    </div>
                  </Col>
                </Row>
                {isSelectiveHours && (
                  <BusinessHoursSelector
                    selectedDays={selectedDays}
                    setSelectedDays={setSelectedDays}
                    timeSlots={timeSlots}
                    setTimeSlots={setTimeSlots}
                    days={days}
                    onChange={(businesshours) => {
                      setFormData((prev) => ({
                        ...prev,
                        businesshours,
                      }));
                    }}
                  />
                )}
              </div>
            </div>

            <Row>
              <Col className="mt-5" lg={12} md={12} sm={12}>
                <div className="continue-btn" onClick={handleContinueSubmit}>
                  Continue
                </div>
              </Col>
            </Row>
          </>
        )}

        {currentSection === 2 && (
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
                  accept="image/*"
                  onChange={handleBusinessPicturesChange}
                />
                <p>Drop files here or click to upload</p>
                <p className="mt-1 text-sm">
                  Upload minimum 1 and maximum 2 pictures
                </p>
              </div>
              {error && <div className="text-red-500 mt-2">{error}</div>}
              {formData?.files?.length > 0 && (
                <p className="mt-2">
                  Selected files:{" "}
                  {formData.files.map((file) => file.name).join(", ")}
                </p>
              )}
            </Col>

            <Row className="mt-5">
              <Col>
                <div onClick={handleBack} className="back-btn">
                  Back
                </div>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <div
                  className={`continue-btn ${
                    formData.files.length < 1 ||
                    formData.files.length > 2 ||
                    isLoading
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  onClick={handleFinalSubmit}
                  style={{
                    pointerEvents:
                      formData.files.length < 1 ||
                      formData.files.length > 2 ||
                      isLoading
                        ? "none"
                        : "auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                  }}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    "Submit Your Profile"
                  )}
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
