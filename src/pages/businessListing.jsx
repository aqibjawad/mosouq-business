import React, { useState, useEffect, useRef } from "react";
import Axios from "axios";
import Select from "react-select";
import {
  InputGroup,
  FormControl,
  Form,
  Card,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Editor } from "@tinymce/tinymce-react";

const ListingBasic = () => {
  const [category, setCategory] = useState([]);
  const [subcategory, setSubCategory] = useState([]);
  const [number, setNumber] = useState();
  const [description, setDescription] = useState("");

  const titleRef = useRef();
  const categoryRef = useRef();
  const subcategoryRef = useRef();
  const urlRef = useRef();
  const linkRef = useRef();
  const emailRef = useRef();

  //   useEffect(() => {
  //     // Fetch categories
  //     Axios.get(`${process.env.REACT_APP_API_URL}listingcategory`).then((res) => {
  //       const categoryOptions = res.data.map((item) => ({
  //         label: item.category,
  //         value: item.id,
  //       }));
  //       setCategory(categoryOptions);
  //     });
  //   }, []);

  const handleEditorChange = (content) => {
    setDescription(content);
  };

  return (
    <Form className="mb-4" style={{ marginTop: "10rem" }}>
      <Container>
        <Card className="rounded-0 border-0">
          <Card.Body className="pb-3 pt-0">
            <h3 className="mb-3">Basic Information</h3>
            <Row>
              <Col md={6}>
                <Form.Label>Business Title</Form.Label>
                <InputGroup className="mb-3">
                  <FormControl
                    ref={titleRef}
                    placeholder="e.g. Hungs Continental Foods"
                    required
                  />
                </InputGroup>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>Category</Form.Label>
                  <Select
                    ref={categoryRef}
                    options={category}
                    placeholder="Select Category"
                    onChange={(e) => setSubCategory(e.value)}
                    required
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>SubCategory</Form.Label>
                  <Select
                    ref={subcategoryRef}
                    options={subcategory}
                    placeholder="Select Sub Category"
                    onChange={(e) => setSubCategory(e.value)}
                    required
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Label>Phone Number</Form.Label>
                <InputGroup className="mb-3">
                  <PhoneInput
                    country="PK"
                    placeholder="e.g. 0301-1234567"
                    value={number}
                    onChange={setNumber}
                    required
                  />
                </InputGroup>
              </Col>

              <Col md={6}>
                <Form.Label>Website URL</Form.Label>
                <InputGroup className="mb-3">
                  <FormControl
                    ref={urlRef}
                    type="url"
                    placeholder="https://www.yourdomainname.com"
                  />
                </InputGroup>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>

      <Container>
        <Card className="rounded-0 border-0">
          <Card.Body>
            <h3 className="mb-3">Advance Information</h3>
            <Row>
              <Col md={12}>
                <Form.Label>Description</Form.Label>
                <Editor
                  apiKey="YOUR_TINYMCE_API_KEY"
                  init={{
                    plugins: "link image code",
                    toolbar:
                      "undo redo | bold italic | alignleft aligncenter alignright | code",
                  }}
                  onEditorChange={handleEditorChange}
                />
              </Col>

              <Col md={6} className="pt-4">
                <Form.Label>Video Link</Form.Label>
                <InputGroup>
                  <FormControl
                    ref={linkRef}
                    type="url"
                    placeholder="Video Link"
                  />
                </InputGroup>
              </Col>

              <Col md={6} className="pt-4">
                <Form.Label>Contact Email</Form.Label>
                <InputGroup className="mb-3">
                  <FormControl
                    ref={emailRef}
                    type="email"
                    placeholder="mail@citybook.com"
                  />
                </InputGroup>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>

      <Container className="pt-3">
        <Card className="rounded-0 border-0">
          <Card.Body className="py-5">
            <Row className="bg-white rounded-0 border-0">
              <Col md={12}>
                <Form.Label htmlFor="basic-url">Description</Form.Label>
                <Editor
                  initialValue="<p>This is the initial content of the editor</p>"
                  apiKey="zpa6jhahb7wr51wcc4yrbt91xeuizav1kudmrtpziohibpz4"
                  init={{
                    plugins: "link image code",
                    toolbar:
                      "undo redo | bold italic | alignleft aligncenter alignright | code",
                  }}
                  onChange={handleEditorChange}
                />
              </Col>
              <Col md={6} className="pt-4">
                <Form.Label htmlFor="basic-url">Video Link</Form.Label>
                <InputGroup className="mb-5">
                  <InputGroup.Text
                    className="bg-white"
                    id="basic-addon3"
                  ></InputGroup.Text>
                  <FormControl
                    id="basic-url"
                    aria-describedby="basic-addon3"
                    placeholder="Video Link"
                  />
                </InputGroup>
              </Col>
              <Col md={6} className="pt-4">
                <Form.Label htmlFor="basic-url">Contact Email</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Text
                    className="bg-white"
                    id="basic-addon3"
                  ></InputGroup.Text>
                  <FormControl
                    id="basic-url"
                    aria-describedby="basic-addon3"
                    placeholder="https://www.yourdomainname.com"
                  />
                </InputGroup>
              </Col>
              <Col md={6}>
                <Form.Label htmlFor="basic-url">
                  Business Tags / Keywords
                </Form.Label>
                <InputGroup>
                  <FormControl
                    id="basic-url"
                    aria-describedby="basic-addon3"
                    placeholder="Provide your tags (Comma Seperated)"
                  />
                </InputGroup>
              </Col>
              <Col md={12} className="pt-4">
                <Form.Label htmlFor="basic-url">
                  Business Tags / Keywords
                </Form.Label>
                <div
                  style={{
                    padding: "50px",
                    border: "dotted",
                    textAlign: "center",
                  }}
                >
                  Drop files here or click to upload
                </div>
              </Col>

              <Col md={6} className="pt-4">
                <Form.Label htmlFor="basic-url">Brand Name</Form.Label>
                <InputGroup>
                  <InputGroup.Text
                    className="bg-white"
                    id="basic-addon3"
                  ></InputGroup.Text>
                  <FormControl
                    id="basic-url"
                    aria-describedby="basic-addon3"
                    placeholder="Provide your tags (Comma Seperated)"
                  />
                </InputGroup>
              </Col>

              <Col md={6} className="pt-4">
                <Form.Label htmlFor="basic-url">Brand Logo</Form.Label>
                <InputGroup className="mb-5">
                  <FormControl
                    id="basic-url"
                    type="file"
                    aria-describedby="basic-addon3"
                  />
                </InputGroup>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>

      <Container className="pt-3">
       <Card className="rounded-0 border-0">
          <Card.Body className="py-5">
          <Row>
            <Col md={7}>
               <Row>
                 <Col md={12}>
                   <strong>Select Your Business Hours</strong>
                 </Col>
               </Row>
            </Col>

             <Col md={5}>
               <Row>
                  <Col md={4}>
                     <Form.Check type="checkbox" label="N/A" />
                  </Col>

                  <Col md={3}>
                     <Form.Check type="checkbox" label="24/7" />
                  </Col>

                  <Col md={5}>
                     <Form.Check type="checkbox" label="Selective Hours" />
                  </Col>
               </Row>
             </Col>
          </Row>
          </Card.Body>
       </Card>
    </Container>
    </Form>
  );
};

export default ListingBasic;
