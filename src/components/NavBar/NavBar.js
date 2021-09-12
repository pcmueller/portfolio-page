import React from 'react';
import { push as Menu } from 'react-burger-menu';

const NavBar = () => {

  const showSettings = (event) => {
    event.preventDefault();
  }

  return (
    <nav className='nav-bar'>
      <Menu 
        pageWrapId={'page-wrap'} 
        outerContainerId={'outer-container'}
        width={ '30%' }
      >
        <a id='home' className='menu-item' href='/'>Home</a>
        <a id='about' className='menu-item' href='/about'>About</a>
        <a id='contact' className='menu-item' href='/contact'>Contact</a>
        <a onClick={(e) => showSettings(e)} className='menu-item--small' href='/'>Settings</a>
      </Menu>
    </nav>
  )
}

export default NavBar;
