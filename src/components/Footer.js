import "./FooterStyles.css";
import React from "react";
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";
import {SiLeetcode} from "react-icons/si";
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
              <a href="https://leetcode.com/shlokam/">
              <SiLeetcode
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              </a>
            
            <a href="https://www.linkedin.com/in/shloka-mahesheka-36402117b/">
            <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
              <a href= "https://github.com/shlokam">
              <FaGithub 
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
              </a>
              
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
