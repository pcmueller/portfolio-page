import React from 'react';
import { push as Menu } from 'react-burger-menu';

const NavMenu = () => {

  return (
    <Menu 
      pageWrapId={'page-wrap'} 
      outerContainerId={'outer-container'}
      className={'burger-menu'}
    >
      <a id='home' className='menu-item' href='/'>Home</a>
      <a id='about' className='menu-item' href='/'>About</a>
      <a id='portfolio' className='menu-item' href='/'>Portfolio</a>
      <a id='contact' className='menu-item' href='/'>Contact</a>
    </Menu>
  )
}

export default NavMenu;
