import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import { FiPlus } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

function AccordionComponent() {
  const [activeKey, setActiveKey] = useState("0");

  const handleToggle = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <Accordion activeKey={activeKey}>
      <Accordion.Item eventKey="0">
        <Accordion.Header
          onClick={() => handleToggle("0")}
          style={{
            backgroundColor: activeKey === "0" ? "#094FB7" : "",
            color: activeKey === "0" ? "white" : "",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span className="" style={{ color: activeKey === "0" ? "white" : "" }}>
            Morbi fringilla metus ac lacus dapibus.
          </span>
          {activeKey === "0" ? (
            <IoClose size={25} color="white" />
          ) : (
            <FiPlus size={25} color="#B4BBC5" />
          )}
        </Accordion.Header>
        <Accordion.Body
          style={{
            backgroundColor: activeKey === "0" ? "#094FB7" : "",
            color: activeKey === "0" ? "white" : "",
          }}
        >
          Nam sit amet neque auctor, dignissim augue eu, condimentum justo.
          Fusce fermentum tempus sapien, a sagittis tellus mattis id. Cras et
          enim ex. Suspendisse potenti. Vivamus convallis malesuada eros vel
          semper.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header
          onClick={() => handleToggle("1")}
          style={{
            backgroundColor: activeKey === "1" ? "#094FB7" : "",
            color: activeKey === "1" ? "white" : "",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ color: activeKey === "1" ? "white" : "" }}>
          What we like to do & what we don’t like to do
          </span>
          {activeKey === "1" ? (
            <IoClose size={25} color="white" />
          ) : (
            <FiPlus size={25} color="#B4BBC5" />
          )}
        </Accordion.Header>
        <Accordion.Body
          style={{
            backgroundColor: activeKey === "1" ? "#094FB7" : "",
            color: activeKey === "1" ? "white" : "",
          }}
        >
          This is the content for the second accordion item. You can add more
          items as needed.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header
          onClick={() => handleToggle("2")}
          style={{
            backgroundColor: activeKey === "2" ? "#094FB7" : "",
            color: activeKey === "2" ? "white" : "",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ color: activeKey === "2" ? "white" : "" }}>
          Aliquam fermentum odio nec gravida varius. 
          </span>
          {activeKey === "2" ? (
            <IoClose size={25} color="white" />
          ) : (
            <FiPlus size={25} color="#B4BBC5" />
          )}
        </Accordion.Header>
        <Accordion.Body
          style={{
            backgroundColor: activeKey === "2" ? "#094FB7" : "",
            color: activeKey === "2" ? "white" : "",
          }}
        >
          This is the content for the third accordion item.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header
          onClick={() => handleToggle("3")}
          style={{
            backgroundColor: activeKey === "3" ? "#094FB7" : "",
            color: activeKey === "3" ? "white" : "",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ color: activeKey === "3" ? "white" : "" }}>
          Aliquam fermentum odio nec gravida varius. 
          </span>
          {activeKey === "3" ? (
            <IoClose size={25} color="white" />
          ) : (
            <FiPlus size={25} color="#B4BBC5" />
          )}
        </Accordion.Header>
        <Accordion.Body
          style={{
            backgroundColor: activeKey === "3" ? "#094FB7" : "",
            color: activeKey === "3" ? "white" : "",  
          }}
        >
          This is the content for the third accordion item.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionComponent;
