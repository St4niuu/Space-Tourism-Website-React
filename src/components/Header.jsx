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
  @media (min-width: 620px) and (max-width: 1023px) {
    height: 15%;
    min-height: 7rem;
    max-height: 8rem;
    padding: 0 0 0 2rem;
  }
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
      line-height: 2rem;
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
    width: 65%;
    min-width: 27rem;
    max-width: 30rem;
    height: 100%;
    background-color: rgba(255,255,255, 0.04);
    backdrop-filter: blur(25px);
    justify-content: space-evenly;
    @media (min-width: 620px) and (max-width: 1023px) {
      display: flex;
    }
    > a {
      height: 100%;
      display: grid;
      place-items: center;
      font-family: 'Barlow Condensed', sans-serif;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      font-size: 105%;
      position: relative;
      &.active {
        &::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          height: 3px;
          width: 100%;
          background-color: white;
        }
      }
    }
  }
  > .desktop-nav {
    display: none;
  }

`

// Header component

function Header() {

  const [isNavOpen, setIsNavOpen] = useState(false)

  const navElements = ['home', 'destination', 'crew', 'technology']

  return (
    <>
      <StyledHeader>
        <NavLink to='/'><img src='/logo.svg' alt='site-logo' onClick={() => setIsNavOpen(false)} /></NavLink>
        <img src='/icon-hamburger.svg' alt='open-menu' onClick={() => setIsNavOpen(true)} />

        {/* Navbar's here */}
        
        <motion.div 
          className='mobile-nav'
          initial={{ x: "100%" }}
          animate={{ x: isNavOpen ? '0%' : '100%' }}
          transition={{ duration: 0.5, type: 'tween' }}
        >
          <img src='/icon-close.svg' alt='close-menu' onClick={() => setIsNavOpen(false)} />
          {navElements.map((element, index) => {
            switch (index) {
              case 0: 
                return <NavLink end={true} to='/' onClick={() => setIsNavOpen(false)}>
                  <span>0{index}</span>
                  <span>{element}</span>
                </NavLink>

              default: 
                return <NavLink to={'/'.concat(element)} onClick={() => setIsNavOpen(false)}>
                  <span>0{index}</span>
                  <span>{element}</span>
                </NavLink>   
            }
          })}
        </motion.div>

        <div className='tablet-nav'>
          {navElements.map((element, index) => {
            switch (index) {
              case 0:
                return <NavLink index={true} to='/'>
                  {element}
                </NavLink>
              default:
                return <NavLink to={'/'.concat(element)}>
                  {element}
                </NavLink>
            }
          })}
        </div>

        <div className='desktop-nav'>
          
        </div>
      </StyledHeader>
      <Outlet />
    </>
  )
}

export default Header