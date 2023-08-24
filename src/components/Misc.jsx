import React from 'react'
import Logo from '../assets/logo.png'
import {BsMouse} from 'react-icons/bs'

const Misc = () => {
  return (
    <>
    <div className="cursor"></div>
    <a href="/" className="logo">
        <img src={Logo} alt="logo" />
    </a>
    <a href="/franchise" className="franchiseBtn">
        Get A FRANCHISE
    </a>

    <BsMouse className="scrollBtn"/>
    </>
  )
}

export default Misc