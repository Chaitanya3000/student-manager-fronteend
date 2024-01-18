import React from "react";
import "./main.css";
import Spline from "@splinetool/react-spline";
import { Link } from "react-router-dom";

function Main() {
  return (
    <>
      <div className="main">
        <div className="greet">
          <h1>Welcome to Student Manager</h1>
          {/* <p>
            Welcome to our student management portal, where academic excellence
            meets seamless organization. Our user-friendly interface empowers
            faculty to effortlessly navigate through the vast realm of academic
            data. Stay informed about your academic progress, track performance
            trends, and access personalized feedback, all in one centralized
            hub.
          </p> */}
          <Link to="/login" className="btn">
            Login
          </Link>
        </div>
        <div className="animation">
          <Spline scene="https://prod.spline.design/Ev5uq7jEw1Ue7tK8/scene.splinecode" />
        </div>
      </div>
    </>
  );
}

export default Main;
