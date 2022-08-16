import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "reactstrap";
import { auth } from "../context/UserAuthContext";
import { NavLink } from "react-router-dom";
import logo from './rightnft.png';


export default function Signup() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const isPasswordConfirmed = (registerPassword, registerConfirmPassword) => {
    if (registerPassword && registerConfirmPassword && registerPassword === registerConfirmPassword) return true;
    return false;
  };

  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();

    if(!isPasswordConfirmed(registerPassword,registerConfirmPassword)){
      // password is not matching, you can show error to your user
      setError("Invalid Credentials: Check details");
      return;
  }
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      navigate("/login");
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }
  };

  return (
    <>
      <class className="full-container2">
        {/* <Link></Link> */}
        <section className="d-flex justify-content-between">
          <class className="left_data" style={{ width: "100%" }}>
            <form
              className="column g-3 needs-validation"
              oninput='up2.setCustomValidity(up2.value != up.value ? "Passwords do not match." : "")'
            >
              <class className="heading">
                <h1>Sign Up</h1>
              </class>
              <div className="alertBox2">
                {error && <Alert color="danger">{error}</Alert>}
              </div>
              <div className="mb-4">
                <label htmlFor="validationCustom01" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom01"
                  required
                />
                <div class="valid-feedback">Looks good!</div>
              </div>
              <div className="mb-4">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  onChange={(event) => {
                    setRegisterEmail(event.target.value);
                  }}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="exampleInputEmail1"  className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name = 'password'
                  id="exampleInputPassword1"
                  onChange={(event) => {
                    setRegisterPassword(event.target.value);
                  }}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name = 'confimPassword'
                  id="exampleInputPassword2"
                  onChange={(event) => {
                    setRegisterConfirmPassword(event.target.value);
                  }}
                  required
                />
              </div>
              <class className="createAcc">
                <div className="registe-button">
                  <button
                    type="submit"
                    className="btn btn-primary my-4"
                    onClick={register}
                  >
                    Create Account
                  </button>
                </div>
                <div id="emailHelp" className="form-text3">
                  Already have an account?
                  <NavLink
                    style={{
                      textDecoration: "none",
                      color: "rgba(110, 90, 193, 1)",
                      fontWeight: "bold",
                    }}
                    to="/login"
                  >
                    Log In
                  </NavLink>
                </div>
              </class>
            </form>
          </class>
          <class className="right_data">
            <img className="nftArt" src={logo} alt="NFT Art" />
          </class>
        </section>
      </class>
    </>
  );
}
