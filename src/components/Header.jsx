// Importing

import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'

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
  @media (min-width: 1024px) {
    height: 17.5%;
    min-height: 8rem;
    max-height: 9rem;
    padding: 2rem 0 0 2.5rem;
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
  > div > a {
    font-size: 105%;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-family: 'Barlow Condensed', sans-serif;
  }
  > .mobile-nav {
    position: fixed;
    z-index: 1;
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
      line-height: 2rem;
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
    width: 60%;
    height: 100%;
    padding: 0 3rem;
    background-color: rgba(255,255,255, 0.04);
    backdrop-filter: blur(25px);
    position: relative;
    justify-content: space-around;
    @media (min-width: 1024px) {
      display: flex;
    }
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 5%;
      transform: translateX(-100%);
      height: 1px;
      width: 60%;
      background-color: #979797;
    }
    > a {
      height: 100%;
      display: flex;
      align-items: center;
      gap: 1rem;
      position: relative;
      &::before {
        position: absolute;
        z-index: 1;
        content: '';
        left: 0;
        top: 100%;
        height: 3px;
        width: 100%;
        background-color: white;
        transform: scaleX(0);
        transition: 0.2s;
        transform-origin: 200%;
      }
      &:hover {
        &::before {
          transform: scaleX(1);
        }
      }
      &.active {
        &::after {
          position: absolute;
          content: '';
          left: 0;
          top: 100%;
          height: 3px;
          width: 100%;
          background-color: #979797;
        }
      }
      > span:nth-of-type(1) {
        font-weight: bold;
      }
    }
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
                return <NavLink key={index} end={true} to='/' onClick={() => setIsNavOpen(false)}>
                  <span>0{index}</span>
                  <span>{element}</span>
                </NavLink>

              default:
                return <NavLink key={index} to={'/'.concat(element)} onClick={() => setIsNavOpen(false)}>
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
                return <NavLink key={index} end={true} to='/'>
                  {element}
                </NavLink>

              default:
                return <NavLink key={index} to={'/'.concat(element)}>
                  {element}
                </NavLink>
            }
          })}
        </div>

        <div className='desktop-nav'>
          {navElements.map((element, index) => {
            switch (index) {
              case 0:
                return <NavLink key={index} end={true} to='/'>
                  <span>0{index}</span>
                  <span>{element}</span>
                </NavLink>
                
              default:
                return <NavLink key={index} to={'/'.concat(element)}>
                  <span>0{index}</span>
                  <span>{element}</span>
                </NavLink>
            }
          })}
        </div>
      </StyledHeader>
      <Outlet />
    </>
  )
}

export default Header