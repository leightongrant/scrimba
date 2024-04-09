import React from 'react'
import emailIcon from '../../assets/images/email-icon.png'
import linkedinIcon from '../../assets/images/linkedin.png'

const Info = () => {
  return (
    <main className="h-[400px] bg-[#1A1B21]">
      <h1 className="text-2xl font-bold text-white text-center pt-5">
        Laura Smith
      </h1>
      <p className="text-[#F3BF99] text-center text-[13px]">
        Frontend Developer
      </p>
      <p className="text-center text-white mt-1 text-[10px]">
        laurasmith.website
      </p>
      <div className="text-center mt-4 mb-[33px] flex justify-center gap-4 items-center">
        <button className="w-[115px] h-[34px] bg-[#fff] text-[#374151] text-[14px] rounded-md flex items-center gap-2 justify-center">
          <img src={emailIcon} alt="email icon" width={13} />
          Email
        </button>
        <button className="w-[115px] h-[34px] bg-[#5093E2] text-white text-[14px] rounded-md flex items-center gap-2 justify-center">
          <img src={linkedinIcon} alt="linkedin icon" width={13} />
          LinkedIn
        </button>
      </div>
      <div className="text-white w-[247px] mx-auto">
        <h2 className="text-[1em] font-bold">About</h2>
        <p className="text-[10px] font-normal leading-4">
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
        <h2 className="text-[1em] font-bold mt-[27px]">Interests</h2>
        <p className="text-[10px] font-normal leading-4">
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
    </main>
  )
}

export default Info
