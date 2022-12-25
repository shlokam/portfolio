import './FormStyles.css';

import React from 'react'

const Form = () => {
  return (
    <div className='form'>
        <form>
            <label>Name</label>
            <input type="input" placeholder="Enter Your Name"></input>
            <label>Email</label>
            <input type="input" placeholder="Enter Your Email"></input>
            <label>Subject</label>
            <input type="input" placeholder="Enter Subject"></input>
            <label>Message</label>
            <textarea rows="6" placeholder="Enter Your Message"/>
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form