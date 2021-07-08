import React from 'react'
import './main/Contact.css'


const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-page">


        <div className="info">
          <h1>Get a Quote</h1>
          <h3>
            Fill up the form and our Tean will get back to you within 24 hours
          </h3>



        </div>


        <div className="input">
          <label htmlFor="name">Your Name</label>
          <input type="text" />

          <label htmlFor="email">Email</label>
          <input type="text" />

          <label htmlFor="message">Message</label>
          <textarea name="" id="" cols="50" rows="10"></textarea>

          <button type="button">Submit</button>
        </div>

      </div>
    </div>
  )
}

export default Contact
