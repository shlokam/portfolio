import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CenterImg from '../components/CenterImg';
import AboutContent from '../components/AboutContent';

export const About = () => {
  return (
    <div>
      <Navbar/>
      <CenterImg heading="ABOUT" text="I'm a friendly Full-Stack-Developer"/>
      <AboutContent/>
      <Footer/>
    </div>
    
  )
}

export default About;