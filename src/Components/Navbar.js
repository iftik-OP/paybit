import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  let user = localStorage.getItem('loggedIn');
  return (
    <>
      <class className="navbar fixed-top">
        <NavLink
          to="/login"
          style={{
            textDecoration: "none",
          }}
          className="logo-container"
        >
          <class className="logo">PAYBIT</class>
        </NavLink>
      </class>
    </>
  );
}
