import './AboutContentStyles.css';
import React from 'react'
import { Link } from 'react-router-dom';
import img1 from '../assets/backend.png';
import img2 from '../assets/frontend.png';
 import {SiSpringboot,SiPostman,SiIntellijidea} from "react-icons/si";
import {DiJava,DiPostgresql,DiMysql,DiGit} from "react-icons/di";
import {FaReact} from 'react-icons/fa';
const AboutContent = () => {
  return (
    <div className='about'>
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I'm a react developer. 
            I create responsive secure websites for my clients.
            </p>
            <Link to="/contact">
                <button className='btn'> Contact</button>
            </Link>
        </div>
        <div className="right">
            {/* <div className="img-container">
                <div className="img-stack top">
                    <img src={img1} className="img" alt="img" />
                </div>
                <div className="img-stack bottom">
                    <img src={img2} className="img" alt="img" />
                </div>
            </div> */}
            <div className='icons'>
            <DiJava
            size={100}
            style={{ color: "#fff", marginRight: "2rem" }}/>

            <SiSpringboot
             size={100}
             style={{ color: "#fff", marginRight: "2rem" }}/>

             <FaReact
             size={100}
             style={{ color: "#fff", marginRight: "2rem" }}/>

            <SiPostman
            size={100}
            style={{ color: "#fff", marginRight: "2rem" }}/>

            <DiPostgresql
            size={100}
            style={{ color: "#fff", marginRight: "2rem" }}/>

            <DiMysql
            size={100}
            style={{ color: "#fff", marginRight: "2rem" }}/>

            <SiIntellijidea
             size={100}
             style={{ color: "#fff", marginRight: "2rem" }}/>

             <DiGit
             size={100}
             style={{ color: "#fff", marginRight: "2rem" }}/>

        </div>
        </div>

    </div>
  )
}

export default AboutContent