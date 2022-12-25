import "./FooterStyles.css";
import React from "react";
import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitch, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Bangur Avenue</p>
              <p>Kolkata, West Bengal, India</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              (+91)9051803000
            </h4>
          </div>
          <div className="mail">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              shloka.mahesheka012@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
            <h4>
                About The company
            </h4>
            <p>
                This is me Shloka Mahesheka. CEO & Founder of Tech2etc. 
                I enjoy discussing new peojects and design challenges
            </p>
            <div className="social">
              <a href="https://inmotionhosting.com">
              <FaFacebook
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              </a>
            
              <FaTwitter
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              <FaGithub
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
