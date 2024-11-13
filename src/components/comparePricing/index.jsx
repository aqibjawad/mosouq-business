import React from "react";
import { Container, Button, Table, Row, Col } from "react-bootstrap";
import { PiSealCheckFill } from "react-icons/pi";
import { FaCheck } from "react-icons/fa";

export default function ComparePricing() {
  return (
    <Container
      fluid
      style={{ backgroundColor: "#FBFBFF" }}
      className="my-5 px-3 px-md-5 text-center"
    >
      <Row>
        <Col></Col>
      </Row>
      <Table responsive bordered className="mt-4">
        <thead>
          <tr>
            <th scope="col" className="main_th_whitespace">
              <h3 className="">Compare plans</h3>
              <p>
                Choose your workspace plan <br /> according to your
                organisational plan
              </p>
            </th>
            <th scope="col" className=" main_th_whitespace">
              <div>
                <strong className="">$99</strong>
                <span>/monthly</span>
              </div>
              <div className="pt-3">
                <Button
                  style={{ backgroundColor: "#404EED" }}
                  className="w-100 py-3"
                >
                  Basic (for individuals)
                </Button>
              </div>
            </th>
            <th scope="col" className="main_th_whitespace">
              <div>
                <strong className="">$199</strong>
                <span>/monthly</span>
              </div>
              <div className="pt-3">
                <Button
                  style={{ backgroundColor: "#404EED" }}
                  className="w-100 py-3"
                >
                  Premium (for small teams)
                </Button>
              </div>
            </th>
            <th scope="col" className="main_th_whitespace">
              <div>
                <strong className="">$399</strong>
                <span>/monthly</span>
              </div>
              <div className="pt-3">
                <Button
                  style={{ backgroundColor: "#404EED" }}
                  className="w-100 py-3"
                >
                  Enterprise (for large teams)
                </Button>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" className="first_th">
              Website reviews widgets
            </th>
            <td>
              Full widget library to display reviews, your rating, and reviews
              count
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row" className="first_th">
              Custom website widgets
            </th>
            <td>
              <PiSealCheckFill size={20} color="black" />
            </td>
            <td>
              <PiSealCheckFill size={20} color="black" />
            </td>
            <td>
              <PiSealCheckFill size={20} color="black" />
            </td>
          </tr>
          <tr>
            <th scope="row" className="first_th">
              Email reviews widgets
            </th>
            <td>
              <PiSealCheckFill size={20} color="black" />
            </td>
            <td>
              <PiSealCheckFill size={20} color="black" />
            </td>
            <td>
              <PiSealCheckFill size={20} color="black" />
            </td>
          </tr>
          <tr>
            <th scope="row" className="first_th">
              Targeted reviews showcasing
            </th>
            <td>
              <PiSealCheckFill size={20} color="black" />
            </td>
            <td>
              <PiSealCheckFill size={20} color="black" />
            </td>
            <td>
              <PiSealCheckFill size={20} color="black" />
            </td>
          </tr>
          <tr>
            <th scope="row" className="first_th">
              Profile page promotion
            </th>
            <td></td>
            <td></td>
            <td>
              <PiSealCheckFill size={20} color="black" />
            </td>
          </tr>
          <tr>
            <th scope="row" className="first_th">
              Ad-free profile on Mosouq
            </th>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row " className="first_th">
              Customized profile page
            </th>
            <td className="fw-bold"></td>
            <td className="fw-bold"></td>
            <td className="fw-bold"></td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
