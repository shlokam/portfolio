import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CenterImg from '../components/CenterImg';

export const Contact = () => {
  return (
    <div>
      <Navbar/>
      <CenterImg heading="CONTACT" text="Let's have a chat" />
      <Footer/>
    </div>
  )
}

export default Contact;
