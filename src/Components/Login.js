import React from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { auth } from "../context/UserAuthContext";
import { Alert } from "reactstrap";
import logo from './rightnft.png';



export default function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [error, setError] = useState("");


  

  const navigate = useNavigate();

  

  const login = async (e) => {
    try {
      e.preventDefault();
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      localStorage.setItem('loggedIn', true);
      navigate("/home");
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }
  };

  return (
    <>
      <class className="full-container">
        <section className="d-flex justify-content-between">
          <class className="left_data" style={{ width: "100%" }}>
            <div className="form-container">
              <div className="heading-cont">
                <class className="login">LogIn</class>
              </div>
              <div className="alertBox">
                {error && <Alert color="danger">{error}</Alert>}
              </div>

              <form className="form-login">
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={(event) => {
                      setLoginEmail(event.target.value);
                    }}
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    onChange={(event) => {
                      setLoginPassword(event.target.value);
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary my-5"
                  onClick={login}
                >
                  Submit
                </button>
                
                <div id="emailHelp" className="form-text2">
                  Don't have an account?
                  <NavLink
                    style={{
                      textDecoration: "none",
                      color: "rgba(110, 90, 193, 1)",
                      fontWeight: "bold",
                    }}
                    to="/signup"
                  >
                    Sign Up
                  </NavLink>
                </div>
              </form>
            </div>
          </class>
          <class className="right_data">
            <img className="nftArt" src={logo} alt="NFT Art" />
          </class>
        </section>
      </class>
    </>
  );
}


