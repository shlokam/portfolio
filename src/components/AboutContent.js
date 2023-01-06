import './AboutContentStyles.css';
import React from 'react'
import { Link } from 'react-router-dom';
import img1 from '../assets/backend.png';
import img2 from '../assets/frontend.png';
 import {SiSpringboot,SiPostman,SiIntellijidea,SiVisualstudiocode,SiHtml5} from "react-icons/si";
import {DiJava,DiPostgresql,DiMysql,DiGit,DiCss3,DiJavascript1} from "react-icons/di";
import {FaReact} from 'react-icons/fa';
<link rel="stylesheet" href="path/to/font-mfizz/font-mfizz.css"></link>
const AboutContent = () => {
  return (
    
    <div className='about'>
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I am a software developer with Bachelor's degree in Technology (B.TECH) in Computer Science and Engineering(CSE).
            </p>
           <ul>
               <ul>
                <p>Education</p>
                <li className='title'>Netaji Subhas Engineering College</li>
                <li>Computer Science and Engineering, CGPA: 9.02</li>
               </ul>
               <ul>
                <p>Experience</p>
                <li className='title'>Thoughtworks</li>
                <li>Full Stack Developer Intern</li>
               </ul>
           </ul>
            <Link to="/contact">
                <button className='btn'> Contact</button>
            </Link>

            <div className='details'>

            </div>
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
            size={150}
            style={{ color: "#fff", marginRight: "2rem" }}/>

            <SiSpringboot
             size={150}
             style={{ color: "#fff", marginRight: "2rem" }}/>

             <FaReact
             size={150}
             style={{ color: "#fff", marginRight: "2rem" }}/>

            <SiPostman
            size={150}
            style={{ color: "#fff", marginRight: "2rem" }}/>

            <DiPostgresql
            size={150}
            style={{ color: "#fff", marginRight: "2rem" }}/>

            <DiMysql
            size={150}
            style={{ color: "#fff", marginRight: "2rem" }}/>

            <SiIntellijidea
             size={150}
             style={{ color: "#fff", marginRight: "2rem" }}/>

             <DiGit
             size={150}
             style={{ color: "#fff", marginRight: "2rem" }}/>

            <SiVisualstudiocode
             size={150}
             style={{ color: "#fff", marginRight: "2rem" }}/>
             
             <DiCss3
             size={150}
             style={{ color: "#fff", marginRight: "2rem" }}/>

            <SiHtml5
             size={150}
             style={{ color: "#fff", marginRight: "2rem" }}/>

            <DiJavascript1
             size={150}
             style={{ color: "#fff", marginRight: "2rem" }}/>

        </div>
        </div>

    </div>
  )
}

export default AboutContent