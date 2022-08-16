import React from "react";

export default function Home() {
  const logout = () => {
    localStorage.setItem("loggedIn", false);
  };

  return (
    <div>
      <button type="submit" className="btn btn-primary my-5" onClick={logout}>
        Logout
      </button>
    </div>
  );
}
