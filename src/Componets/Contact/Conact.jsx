import React from 'react'
import Pizza from '../../images/pizza.jpg'
import './Contact.css'

export default function Contact() {
  return (
    <div className='container text-center'>
      <div className='row text-align'>
        <div className='col-lg-6'>
         <img src={Pizza} alt='Pizza'></img>
        </div>

        <div className='col-lg-6 text-start conleft'>
          <h3>Contact Us</h3>
          <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Full Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your name...'/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Email</label>
    <input type="email" className="form-control" id="exampleInputPassword1" placeholder='Enter your mail...'/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
  <label for="exampleInputPassword1" class="form-label">Message</label>
    <textarea name="comment" className='form-control' placeholder="Your message">
    </textarea>
  </div>
  
  <button type="submit" class="btn btn-dark">Send Message</button>
</form>
        </div>
      </div>
    </div>
  )
}
