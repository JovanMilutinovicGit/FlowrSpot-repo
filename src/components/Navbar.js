import React from  'react';
import logo from '../assets/logo.png';
import {Link} from 'react-router-dom';
import "./Navbar.css"

const Navbar = ({openModal, openLogin}) => {

  const setOpenModal = () => {
    openModal(true);
  }

  const setOpenLogin = () => {
    openLogin(true);
  }
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
      <Link to = '/' id="login" onClick={setOpenLogin}>Login</Link>
      <button id="button" onClick={setOpenModal}>New Account</button>
      </div>
      <i className="fa fa-bars"></i>
    </div>
  );
}
export default Navbar;