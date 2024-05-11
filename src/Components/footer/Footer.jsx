import React from "react";

// css
import "./Footer.css";

// assets
import fb from "../../Assets/facebook.png";
import twitter from "../../Assets/twitter.png";
import LinkedIn from "../../Assets/linkedin.png";
import inst from "../../Assets/instagram.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb-footer-section-padding">
        <div className="sb-footer-links">
          <div className="sb-footer-links-div">
            <h4>For Business</h4>
            <a href="/employer">
              <p>Employer</p>
            </a>
            <a href="/healthplans">
              <p>Health Plans</p>
            </a>
            <a href="/individuals">
              <p>Individuals</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
