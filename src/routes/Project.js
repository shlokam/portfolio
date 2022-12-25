import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CenterImg from '../components/CenterImg';

export const Project = () => {
  return (
    <div>
      <Navbar/>
      <CenterImg heading="PROJECTS" text="Some of my recent works"/>
      <Footer/>
    </div>
  )
}

export default Project;