import React from 'react'
import video from "../assets/MBA Chai Wala.mp4"
import  '../styles/intro.scss'

const IntroVide = () => {
  return (
    <div className='intro'>
      <video src={video} autoPlay muted loop controlsList='nodownload'></video>
      <div></div>
    </div>
  )
}

export default IntroVide