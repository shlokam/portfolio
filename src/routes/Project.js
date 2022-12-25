import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CenterImg from '../components/CenterImg';
import Work from '../components/Work';

export const Project = () => {
  return (
    <div>
      <Navbar/>
      <CenterImg heading="PROJECTS" text="Some of my recent works"/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Project;