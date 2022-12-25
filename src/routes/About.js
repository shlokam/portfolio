import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CenterImg from '../components/CenterImg';

export const About = () => {
  return (
    <div>
      <Navbar/>
      <CenterImg heading="ABOUT" text="I'm a friendly Full-Stack-Developer"/>
      <Footer/>
    </div>
    
  )
}

export default About;