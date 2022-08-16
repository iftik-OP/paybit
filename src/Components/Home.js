import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.setItem("loggedIn", false);
    navigate("/login");
  };

  return (
    <div>
      <div className="home-page">
        <button type="submit" className="btn btn-primary my-3" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}
