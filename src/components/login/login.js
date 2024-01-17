import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

function Login(props) {
  return (
    <div className="login">
      <form action="/search">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input type="submit" className="btn-sub" />
        <Link to="/" className="link">
          <p className="btn-cancel">
            Cancel
          </p>
        </Link>
      </form>
    </div>
  );
}

export default Login;
