import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";

function Header() {
  const [isOpen, setOpen] = useState<boolean>(false);

  const closeDropdown = () => setOpen(false);
  const openDropdown = () => setOpen(true);

  return (
    <div>
      <Navbar
        variant="light"
        bg="light"
        expand="lg"
        expanded={isOpen}
        fixed="top"
      >
        <Nav.Link
          style={{
            color: "#333",
          }}
          href="/"
        >
          Sean Low
        </Nav.Link>
        <Navbar.Toggle
          onClick={openDropdown}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home" onClick={closeDropdown}>
              Home
            </Nav.Link>
            <Nav.Link href="#experiences" onClick={closeDropdown}>
              Experiences
            </Nav.Link>
            <Nav.Link href="#projects" onClick={closeDropdown}>
              Projects
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
