import React from  'react';
import logo from '../assets/logo.png';
import {Link} from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='leftSide'>
      <img src={logo} width='25px'/>
      <Link to='/' className='flowrSpot'>FlowrSpot</Link>
      </div>
      <div className='rightSide'> 
      <Link to = '/flowers' className='link'>Flowers</Link>
      <Link to = '/latestSightings' className='link'>Latest Sightings</Link>
      <Link to = '/favorites' className='link'>Favorites</Link>
      <Link to = '/login' id="login">Login</Link>
      <Link to = '/newAccount'><button id="button">New Account</button></Link>
      </div>
    </div>
  );
}
export default Navbar;