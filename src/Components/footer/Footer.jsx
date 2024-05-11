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
          <div className="sb-footer-links-div">
            <h4>Resources</h4>
            <a href="/resourcecenter">
              <p>Resource Center</p>
            </a>
            <a href="/testimonials">
              <p>Testimonials</p>
            </a>
            <a href="/stv">
              <p>STV</p>
            </a>
          </div>
          <div className="sb-footer-links-div">
            <h4>Partners</h4>
            <a href="/partner">
              <p>G3RGES</p>
            </a>
          </div>
          <div className="sb-footer-links-div">
            <h4>Company</h4>
            <a href="/about">
              <p>About</p>
            </a>
            <a href="/press">
              <p>Press</p>
            </a>
            <a href="/career">
              <p>career</p>
            </a>
            <a href="/contact">
              <p>Contact</p>
            </a>
          </div>
          <div className="sb-footer-links-div">
            <h4>Coming soon on</h4>
            <div className="socialmedia">
              <p>
                <img src={fb} alt="" />
              </p>
              <p>
                <img src={twitter} alt="" />
              </p>
              <p>
                <img src={LinkedIn} alt="" />
              </p>
              <p>
                <img src={inst} alt="" />
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="sb-footer-below">
          <div className="sb-footer-copyright">
            <p>@{new Date().getFullYear()} G3RGES All right reserved</p>
          </div>
          <div className="sb-footer-below-links">
            <a href="/term">
              <div>
                <p>Term & Conditions</p>
              </div>
            </a>
            <a href="/privacy">
              <div>
                <p>Privacy</p>
              </div>
            </a>
            <a href="/security">
              <div>
                <p>Security</p>
              </div>
            </a>
            <a href="/cookie">
              <div>
                <p>Cookie Declaration</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
