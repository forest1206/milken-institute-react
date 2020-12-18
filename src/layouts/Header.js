import React from "react";
import { Nav } from "react-bootstrap";

export default function Header() {
  return (
    <div>
      <Nav defaultActiveKey="/" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="contents">Contents</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}
