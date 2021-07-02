import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Routes from "./Routes";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect fixed="top" expand="lg">
        <Navbar.Brand className="font-weight-bold text-muted">
          Todo
        </Navbar.Brand>
        {/* <Navbar.Toggle /> */}
        <Navbar.Collapse className="justify-content-end">
          <Nav activeKey={window.location.pathname}>
            {/* <LinkContainer to="/signup">
              <Nav.Link>Signup</Nav.Link>
            </LinkContainer> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="routes px-1">
          <Routes />
      </div>
    </div>
  );
}

export default App;
