import React, { useState } from 'react';
import styled from 'styled-components';
import Scrollspy from 'react-scrollspy';
import Resume from './Resume';

const HeaderWrapper = styled.header`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  width: 100%;
  transition: 0.4s;
  position: absolute;
`;
const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;

  .navbar__logo {
    font-family: 'Grand Hotel';
    font-size: 36px;
    color: white;
    transition: 0.2s ease;
    text-shadow: 0px 0px 10px black;
    &:hover {
      color: #02d463;
      transition: 0.2s ease;
    }
  }
`;

const Button = styled.a`
  margin-right: 20px;
  transition: 0.2s;
  text-shadow: 0px 0px 10px black;

  &:hover:not(.navbar__resume) {
    color: #02d463;
    transition: 0.2s;
  }
`;

const Header = () => {
  const [condition, setCondition] = useState(false);

  return (
    <HeaderWrapper id='nav'>
      <Scrollspy
        id='sidenav'
        className={condition ? 'sidenav sidenav--open' : 'sidenav'}
        style={{ padding: 0 }}
        items={['home', 'about', 'projects', 'contact']}
        currentClassName='colored'
      >
        <Button
          href='/#home'
          className='navbar__link'
          style={{ display: 'none' }}
        >
          Home
        </Button>
        <Button href='/#about' onClick={() => setCondition(!condition)}>
          About
        </Button>
        <Button href='/#projects' onClick={() => setCondition(!condition)}>
          Projects
        </Button>

        <Button href='/#contact' onClick={() => setCondition(!condition)}>
          Contact
        </Button>
        <Resume />
      </Scrollspy>
      <Navbar id='navbar' className='navbar__container container--secondary'>
        <Button href='/#home' className='navbar__logo'>
          Peter Mbugua
        </Button>
        <div className='hamburger__container'>
          <button
            aria-label='menu'
            className='hamburger'
            onClick={() => setCondition(!condition)}
            onKeyDown={() => setCondition(!condition)}
          >
            <div
              className={
                condition
                  ? 'hamburger__wrapper icon close'
                  : 'hamburger__wrapper icon'
              }
            >
              <span className='hamburger--line top'></span>
              <span className='hamburger--line middle'></span>
              <span className='hamburger--line bottom'></span>
            </div>
          </button>
        </div>
        <Scrollspy
          className='navbar__links'
          items={['home', 'about', 'projects', 'contact']}
          currentClassName='colored'
        >
          <Button href='/#home' className='navbar__link' style={{ display: 'none' }}>
            Home
          </Button>
          <Button href='/#about' className='navbar__link'>
            About
          </Button>
          <Button href='/#projects' className='navbar__link'>
            Projects
          </Button>

          <Button href='/#contact' className='navbar__link'>
            Contact
          </Button>
          <Resume />
        </Scrollspy>
      </Navbar>
    </HeaderWrapper>
  );
};

export default Header;
