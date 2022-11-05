import React from 'react'
import '../styles/contact.css'

function contact() {

  const handleSubmit = (e) => {
   e.preventDefault()
  }
  return (
    <div className="contact">
      <div className='contact_form'>
        
       
        <form className="form" onSubmit={handleSubmit}>
          <div className='header_text'>
           <h2>ContactMe</h2>
           <p>Hi there, contact me to ask me about anything you have in mind.</p>
          </div>
          <div className="row-fields info">
            <div className="field">
              <label htmlFor='first_name'> First name </label>
              <input
                type="text"
                placeholder="Enter your first name"
                id="first_name"
              />
            </div>
            <div className="field">
              <label htmlFor='last_name'>Last name</label>
              <input
                type="text"
                placeholder="Enter your last name"
                id="last_name"
              />
            </div>
          </div>
          <div className="field">
            <label htmlFor='email'>Email</label>
            <input type="email" placeholder="Yourname@email.com" id="email" />
          </div>
          <div className="field">
            <label htmlFor='message'>Message</label>
            <textarea
              placeholder="Send me a message and I'll reply you as soon as possible..."
              id="message"
            />
          </div>
          <div className="agree">
            <input type="checkbox" />
            <p>
              You agree to providing your data to Samuel who may contact you.
            </p>
          </div>
          <button type="submit" id="btn__submit" className="btn_submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default contact