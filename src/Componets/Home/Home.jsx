import React from 'react'
import './Home.css';
import {Link} from "react-router-dom";
import {Button} from 'react-bootstrap';

export default function Home() {
  return (
    <div className='bgh'>
      <div className='containerH'>
        <h1 className='title'>
          Welcome to PJ's Kitchen
        </h1>
        <p className='text'>
          We offer the following
        </p>
        <div className='services-container'>
          <div className='services-wrapper'>
            <div className='services'>Catering Services</div>
            <div className='services'>Event Planning</div>
            <div className='services'>Pickup Services</div>
          </div>
        </div>
        <Link to='/'>
          <Button className='bg-primary'>View Menu</Button>
        </Link>
      </div>
    </div>
  )
}
