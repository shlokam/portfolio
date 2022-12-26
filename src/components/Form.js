import './FormStyles.css';
import emailjs from '@emailjs/browser';
import React,{useState} from 'react'

  const Form = () => {
    const [status,setStatus] = useState("Submit");
    const handleSubmit = (e) =>{
      e.preventDefault();
      setStatus("Submitted");
      emailjs.sendForm('service_lhuijej','template_c35gqkr',e.target,'_RUSNN4j-laU785sN');
    }
  return (
        <form onSubmit={handleSubmit} className='form'>
          
          <label htmlFor="name">Name</label>
            <input type="input" name ="name_from" id="name_from" placeholder="Enter Your Name" required></input>

            <label htmlFor="email">Email</label>
            <input type="input" id="email_from" name="email_from" placeholder="Enter Your Email" required></input>
    
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="6" placeholder="Enter Your Message" required/>

            <button className="btn">{status}</button>

            
        </form>
        
  )
}

export default Form;
