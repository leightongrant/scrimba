import React from 'react'
import twitterIcon from '../../assets/images/twitter-icon.png'
import facebookIcon from '../../assets/images/facebook-icon.png'
import instagramIcon from '../../assets/images/instagram-icon.png'
import githubIcon from '../../assets/images/github-icon.png'

const Footer = () => {
  return (
    <footer className="h-[64px] bg-[#161619] flex items-center justify-center gap-6 rounded-b-lg">
      <a href="#">
        <img src={twitterIcon} width={25} alt="twitter icon" />
      </a>
      <a href="#">
        <img src={facebookIcon} width={25} alt="facebook icon" />
      </a>
      <a href="#">
        <img src={instagramIcon} width={25} alt="instagram icon" />
      </a>
      <a href="#">
        <img src={githubIcon} width={25} alt="github icon" />
      </a>
    </footer>
  )
}

export default Footer
