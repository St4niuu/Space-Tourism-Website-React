// Importing

import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

// Setting header styles

const StyledHeader = styled.div`

  width: 100%;
  min-width: 17.5rem;
  height: 10%;
  min-height: 5rem;
  max-height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem 0 1.5rem;
  > a {
    display: grid;
    place-items: center;
  }
  > img {
    @media (min-width: 620px) {
      display: none;
    }
  }
  > .mobile-nav {
    position: absolute;
    top: 0;
    right: 0;
    transform: translateX(100%);
    width: 65%;
    min-width: 15rem;
    height: 100%;
    padding: 2.5rem 0 1rem 1.5rem;
    backdrop-filter: blur(25px);
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    @media (min-width: 620px) {
      display: none;
    }
    > img {
      align-self: flex-end;
      margin: 0 2rem 2rem 0;
    }
    > a {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      font-size: 110%;
      font-family: 'Barlow Condensed', sans-serif;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      position: relative;
      &.active {
        &::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 4px;
          height: 100%;
          background-color: white;
        }
      }
      > span:nth-of-type(1) {
        font-weight: bold;
      }
    }
  }
  > .tablet-nav {
    display: none;
  }
  > .desktop-nav {
    display: none;
  }

`

// Header component

function Header() {

  const [isNavOpen, setNavIsOpen] = useState(false)

  return (
    <>
      <StyledHeader>
        <NavLink to='/'><img src='/logo.svg' alt='site-logo' /></NavLink>
        <img src='/icon-hamburger.svg' alt='open-menu' onClick={() => setNavIsOpen(true)} />

        {/* Navbar's here */}
        
        <motion.div 
          className='mobile-nav'
          initial={{ x: "100%" }}
          animate={{ x: isNavOpen ? '0%' : '100%' }}
          transition={{ duration: 0.5, type: 'tween' }}
        >
          <img src='/icon-close.svg' alt='close-menu' onClick={() => setNavIsOpen(false)} />
          <NavLink end={true} to='/'>
            <span>00</span>
            <span>Home</span>
          </NavLink>
          <NavLink to='destination'>
            <span>01</span>
            <span>Destination</span>
          </NavLink>
          <NavLink to='crew'>
            <span>02</span>
            <span>Crew</span></NavLink>
          <NavLink to='technology'>
            <span>03</span>
            <span>Technology</span>
          </NavLink>
        </motion.div>

        <div className='tablet-nav'>
          
        </div>

        <div className='desktop-nav'>
          
        </div>
      </StyledHeader>
      <Outlet />
    </>
  )
}

export default Header