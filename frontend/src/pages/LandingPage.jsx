import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";

const LandingPage = () => {
  const router = useNavigate();

  return (
    <div className="landingPageContainer">
      <nav>
        <div className="navHeader">
          <h2>Video Buddy</h2>
        </div>
        <div className="navlist">
          <p
            onClick={() => {
              router("alkwhbsd389");
            }}
          >
            Join as Guest
          </p>
          <p
            onClick={() => {
              router("/auth");
            }}
            role="button">
            Register
          </p>
          <p
            onClick={() => {
              router("/auth");
            }}
            role="button"
          >
            Login
          </p>
        </div>
      </nav>

      <div className="landingMainContainer">
        <div>
          <h1>
            <span style={{ color: "orange" }}>Connect</span> with Your <br />{" "}
            Love Ones..! 😍
          </h1>

          <p>Cover a distance by Video Buddy...</p>

          <div role="button">
            <Link to={"/auth"}>
              <a>Get Started <i class="fa-solid fa-arrow-up"></i></a>
            </Link>
          </div>
        </div>
        <div>
          <img src="/public/1.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
