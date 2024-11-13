import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

import { POST } from "../../apicontrollers/apiController";

import { toast } from "react-toastify";

import { useNavigate } from "react-router-dom";

import "./business.demo.css";
import WhyChoose from "../../components/whyChoose";

const BusinessDemo = () => {
  const navigation = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    country: "",
    phone: "",
    password: "",
    url: "",
    title: "",
    role: "business",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await POST("user/add-user", formData);
      toast("Your Account Successfully Created");
      navigation("/login");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const countries = [
    { value: "", label: "Select a country" },
    { value: "afghanistan", label: "Afghanistan" },
    { value: "albania", label: "Albania" },
    { value: "algeria", label: "Algeria" },
    { value: "andorra", label: "Andorra" },
    { value: "angola", label: "Angola" },
    { value: "antigua_and_barbuda", label: "Antigua and Barbuda" },
    { value: "argentina", label: "Argentina" },
    { value: "armenia", label: "Armenia" },
    { value: "australia", label: "Australia" },
    { value: "austria", label: "Austria" },
    { value: "azerbaijan", label: "Azerbaijan" },
    { value: "bahamas", label: "Bahamas" },
    { value: "bahrain", label: "Bahrain" },
    { value: "bangladesh", label: "Bangladesh" },
    { value: "barbados", label: "Barbados" },
    { value: "belarus", label: "Belarus" },
    { value: "belgium", label: "Belgium" },
    { value: "belize", label: "Belize" },
    { value: "benin", label: "Benin" },
    { value: "bhutan", label: "Bhutan" },
    { value: "bolivia", label: "Bolivia" },
    { value: "bosnia_and_herzegovina", label: "Bosnia and Herzegovina" },
    { value: "botswana", label: "Botswana" },
    { value: "brazil", label: "Brazil" },
    { value: "brunei", label: "Brunei" },
    { value: "bulgaria", label: "Bulgaria" },
    { value: "burkina_faso", label: "Burkina Faso" },
    { value: "burundi", label: "Burundi" },
    { value: "cabo_verde", label: "Cabo Verde" },
    { value: "cambodia", label: "Cambodia" },
    { value: "cameroon", label: "Cameroon" },
    { value: "canada", label: "Canada" },
    { value: "central_african_republic", label: "Central African Republic" },
    { value: "chad", label: "Chad" },
    { value: "chile", label: "Chile" },
    { value: "china", label: "China" },
    { value: "colombia", label: "Colombia" },
    { value: "comoros", label: "Comoros" },
    { value: "congo", label: "Congo" },
    {
      value: "congo_democratic_republic",
      label: "Congo (Democratic Republic)",
    },
    { value: "costa_rica", label: "Costa Rica" },
    { value: "croatia", label: "Croatia" },
    { value: "cuba", label: "Cuba" },
    { value: "cyprus", label: "Cyprus" },
    { value: "czech_republic", label: "Czech Republic" },
    { value: "denmark", label: "Denmark" },
    { value: "djibouti", label: "Djibouti" },
    { value: "dominica", label: "Dominica" },
    { value: "dominican_republic", label: "Dominican Republic" },
    { value: "east_timor", label: "East Timor" },
    { value: "ecuador", label: "Ecuador" },
    { value: "egypt", label: "Egypt" },
    { value: "el_salvador", label: "El Salvador" },
    { value: "equatorial_guinea", label: "Equatorial Guinea" },
    { value: "eritrea", label: "Eritrea" },
    { value: "estonia", label: "Estonia" },
    { value: "eswatini", label: "Eswatini" },
    { value: "ethiopia", label: "Ethiopia" },
    { value: "fiji", label: "Fiji" },
    { value: "finland", label: "Finland" },
    { value: "france", label: "France" },
    { value: "gabon", label: "Gabon" },
    { value: "gambia", label: "Gambia" },
    { value: "georgia", label: "Georgia" },
    { value: "germany", label: "Germany" },
    { value: "ghana", label: "Ghana" },
    { value: "greece", label: "Greece" },
    { value: "grenada", label: "Grenada" },
    { value: "guatemala", label: "Guatemala" },
    { value: "guinea", label: "Guinea" },
    { value: "guinea_bissau", label: "Guinea-Bissau" },
    { value: "guyana", label: "Guyana" },
    { value: "haiti", label: "Haiti" },
    { value: "honduras", label: "Honduras" },
    { value: "hungary", label: "Hungary" },
    { value: "iceland", label: "Iceland" },
    { value: "india", label: "India" },
    { value: "indonesia", label: "Indonesia" },
    { value: "iran", label: "Iran" },
    { value: "iraq", label: "Iraq" },
    { value: "ireland", label: "Ireland" },
    { value: "israel", label: "Israel" },
    { value: "italy", label: "Italy" },
    { value: "jamaica", label: "Jamaica" },
    { value: "japan", label: "Japan" },
    { value: "jordan", label: "Jordan" },
    { value: "kazakhstan", label: "Kazakhstan" },
    { value: "kenya", label: "Kenya" },
    { value: "kiribati", label: "Kiribati" },
    { value: "korea_north", label: "Korea (North)" },
    { value: "korea_south", label: "Korea (South)" },
    { value: "kosovo", label: "Kosovo" },
    { value: "kuwait", label: "Kuwait" },
    { value: "kyrgyzstan", label: "Kyrgyzstan" },
    { value: "laos", label: "Laos" },
    { value: "latvia", label: "Latvia" },
    { value: "lebanon", label: "Lebanon" },
    { value: "lesotho", label: "Lesotho" },
    { value: "liberia", label: "Liberia" },
    { value: "libya", label: "Libya" },
    { value: "liechtenstein", label: "Liechtenstein" },
    { value: "lithuania", label: "Lithuania" },
    { value: "luxembourg", label: "Luxembourg" },
    { value: "madagascar", label: "Madagascar" },
    { value: "malawi", label: "Malawi" },
    { value: "malaysia", label: "Malaysia" },
    { value: "maldives", label: "Maldives" },
    { value: "mali", label: "Mali" },
    { value: "malta", label: "Malta" },
    { value: "marshall_islands", label: "Marshall Islands" },
    { value: "mauritania", label: "Mauritania" },
    { value: "mauritius", label: "Mauritius" },
    { value: "mexico", label: "Mexico" },
    { value: "micronesia", label: "Micronesia" },
    { value: "moldova", label: "Moldova" },
    { value: "monaco", label: "Monaco" },
    { value: "mongolia", label: "Mongolia" },
    { value: "montenegro", label: "Montenegro" },
    { value: "morocco", label: "Morocco" },
    { value: "mozambique", label: "Mozambique" },
    { value: "myanmar", label: "Myanmar" },
    { value: "namibia", label: "Namibia" },
    { value: "nauru", label: "Nauru" },
    { value: "nepal", label: "Nepal" },
    { value: "netherlands", label: "Netherlands" },
    { value: "new_zealand", label: "New Zealand" },
    { value: "nicaragua", label: "Nicaragua" },
    { value: "niger", label: "Niger" },
    { value: "nigeria", label: "Nigeria" },
    { value: "north_macedonia", label: "North Macedonia" },
    { value: "norway", label: "Norway" },
    { value: "oman", label: "Oman" },
    { value: "pakistan", label: "Pakistan" },
    { value: "palau", label: "Palau" },
    { value: "palestine", label: "Palestine" },
    { value: "panama", label: "Panama" },
    { value: "papua_new_guinea", label: "Papua New Guinea" },
    { value: "paraguay", label: "Paraguay" },
    { value: "peru", label: "Peru" },
    { value: "philippines", label: "Philippines" },
    { value: "poland", label: "Poland" },
    { value: "portugal", label: "Portugal" },
    { value: "qatar", label: "Qatar" },
    { value: "romania", label: "Romania" },
    { value: "russia", label: "Russia" },
    { value: "rwanda", label: "Rwanda" },
    { value: "saint_kitts_and_nevis", label: "Saint Kitts and Nevis" },
    { value: "saint_lucia", label: "Saint Lucia" },
    {
      value: "saint_vincent_and_the_grenadines",
      label: "Saint Vincent and the Grenadines",
    },
    { value: "samoa", label: "Samoa" },
    { value: "san_marino", label: "San Marino" },
    { value: "sao_tome_and_principe", label: "Sao Tome and Principe" },
    { value: "saudi_arabia", label: "Saudi Arabia" },
    { value: "senegal", label: "Senegal" },
    { value: "serbia", label: "Serbia" },
    { value: "seychelles", label: "Seychelles" },
    { value: "sierra_leone", label: "Sierra Leone" },
    { value: "singapore", label: "Singapore" },
    { value: "slovakia", label: "Slovakia" },
    { value: "slovenia", label: "Slovenia" },
    { value: "solomon_islands", label: "Solomon Islands" },
    { value: "somalia", label: "Somalia" },
    { value: "south_africa", label: "South Africa" },
    { value: "south_sudan", label: "South Sudan" },
    { value: "spain", label: "Spain" },
    { value: "sri_lanka", label: "Sri Lanka" },
    { value: "sudan", label: "Sudan" },
    { value: "suriname", label: "Suriname" },
    { value: "sweden", label: "Sweden" },
    { value: "switzerland", label: "Switzerland" },
    { value: "syria", label: "Syria" },
    { value: "taiwan", label: "Taiwan" },
    { value: "tajikistan", label: "Tajikistan" },
    { value: "tanzania", label: "Tanzania" },
    { value: "thailand", label: "Thailand" },
    { value: "togo", label: "Togo" },
    { value: "tonga", label: "Tonga" },
    { value: "trinidad_and_tobago", label: "Trinidad and Tobago" },
    { value: "tunisia", label: "Tunisia" },
    { value: "turkey", label: "Turkey" },
    { value: "turkmenistan", label: "Turkmenistan" },
    { value: "tuvalu", label: "Tuvalu" },
    { value: "uganda", label: "Uganda" },
    { value: "ukraine", label: "Ukraine" },
    { value: "united_arab_emirates", label: "United Arab Emirates" },
    { value: "united_kingdom", label: "United Kingdom" },
    { value: "united_states", label: "United States" },
    { value: "uruguay", label: "Uruguay" },
    { value: "uzbekistan", label: "Uzbekistan" },
    { value: "vanuatu", label: "Vanuatu" },
    { value: "vatican_city", label: "Vatican City" },
    { value: "venezuela", label: "Venezuela" },
    { value: "vietnam", label: "Vietnam" },
    { value: "yemen", label: "Yemen" },
    { value: "zambia", label: "Zambia" },
    { value: "zimbabwe", label: "Zimbabwe" },
  ];

  return (
    <div>
      <Container fluid className=" px-3 px-md-5">
        <Row style={{ marginTop: "5rem" }} className=" g-5">
          <Col className="mt-5" lg={6} md={12} sm={12}>
            <div
              className=" pt-4"
              style={{ fontWeight: "600", fontSize: "52px" }}
            >
              Discover Mosouq incredible suite of tools
            </div>

            <div
              style={{
                color: "#454545",
              }}
              className=" mt-4 fs-5"
            >
              Lorem ipsum dolor sit amet consectetur. Mi ipsum diam dictumst
              mole Lorem ipsum dolor sit amet consectetur. Mi ipsum diam
              dictumst moleLorem ipsum dolor sit amet consectetur. Mi ipsum diam
              dictumst mole
            </div>

            <Row className="mt-5">
              <Col lg={6} md={6} sm={12}>
                <img src="Group.png" />
              </Col>

              <Col lg={6} md={6} sm={12}>
                <img src="request2.png" />
              </Col>
            </Row>
          </Col>

          <Col lg={6} md={12} sm={12}>
            <div className="demo-right-div p-5 rounded-4">
              <div
                style={{
                  fontSize: "40px",
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                Request a Demo
              </div>

              <div style={{ fontSize: "16px", textAlign: "center" }}>
                Fill the form to request a demo
              </div>

              <form onSubmit={handleSubmit}>
                <Row className=" mt-4 g-2">
                  <Col lg={12}>
                    <div className=" d-block">
                      <label className=" mb-2" htmlFor="name">
                        Website URL{" "}
                      </label>
                      <div>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className=" w-100"
                          placeholder=" Website URL "
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </Col>

                  <Col lg={6} md={6} sm={12}>
                    <div>
                      <label className=" mb-2" htmlFor="name">
                        First Name
                      </label>
                      <div>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="First Name"
                          className=" w-100"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </Col>
                  <Col lg={6} md={6} sm={12}>
                    <div>
                      <label className=" mb-2" htmlFor="company">
                        {" "}
                        Last Name{" "}
                      </label>
                      <input
                        type="text"
                        name="Last Name"
                        id="company"
                        placeholder="Company Name"
                        className=" w-100"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                  <Col lg={6} md={6} sm={12}>
                    <label className=" mb-2" htmlFor="name">
                      Country
                    </label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className=" w-100"
                    >
                      <option value="">Select a country</option>
                      {countries.map((country) => (
                        <option key={country.value} value={country.value}>
                          {country.label}
                        </option>
                      ))}
                    </select>
                  </Col>

                  <Col lg={6} md={6} sm={12}>
                    <div>
                      <label className="mb-2" htmlFor="phone">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="Phone Number"
                        className=" w-100"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                  <Col lg={6} md={6} sm={12}>
                    <div>
                      <label className=" mb-2" htmlFor="url">
                        {" "}
                        Company Name{" "}
                      </label>
                      <input
                        type="text"
                        name="url"
                        id="url"
                        placeholder=" Company Name "
                        className=" w-100"
                        value={formData.url}
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                  <Col lg={6} md={6} sm={12}>
                    <div>
                      <label className=" mb-2" htmlFor="title">
                        Numbe of Employees
                      </label>
                      <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Numbe of Employees"
                        style={{ width: "100%" }}
                        value={formData.title}
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                  <Col lg={6} md={6} sm={12}>
                    <div>
                      <label className=" mb-2" htmlFor="url">
                        {" "}
                        Annual Revenue{" "}
                      </label>
                      <input
                        type="text"
                        name="url"
                        id="url"
                        placeholder=" Annual Revenue "
                        style={{ width: "100%" }}
                        value={formData.url}
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                  <Col lg={6} md={6} sm={12}>
                    <div>
                      <label className=" mb-2" htmlFor="title">
                        {" "}
                        Monthly Transactions
                      </label>
                      <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Monthly Transactions"
                        style={{ width: "100%" }}
                        value={formData.title}
                        onChange={handleChange}
                      />
                    </div>
                  </Col>
                </Row>

                <button className="business-demo-btn mx-auto" type="submit">
                  Request a Demo
                </button>

                <p className=" terms pt-3">
                  By creating an account, I agree to our Terms of use and
                  Privacy Policy{" "}
                </p>
              </form>
            </div>
          </Col>
        </Row>

        <WhyChoose />
      </Container>
    </div>
  );
};

export default BusinessDemo;
