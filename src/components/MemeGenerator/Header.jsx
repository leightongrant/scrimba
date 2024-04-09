import React from 'react'
import logo from '../../assets/images/troll-face.png'
const bgGrad = 'bg-gradient-to-r from-[#672280] to-[#A626D3]'

const MemeGeneratorHeader = () => {
  return (
    <header className={`flex p-[20px] text-white ${bgGrad} items-center`}>
      <img src={logo} alt="troll face" width={32} />
      <h2 className="mr-auto ml-1 font-karla text-xl font-bold">
        Meme Generator
      </h2>
      <p className="text-[12px]">React Course - Project 3</p>
    </header>
  )
}

export default MemeGeneratorHeader
