import React from 'react'
import airbnbLogo from '../../assets/images/airbnb-logo.png'

const AirbnbHeader = () => {
  return (
    <header className="shadow-md h-[70px] flex items-center">
      <img src={airbnbLogo} alt="airbnb logo" width={82} className="ml-8" />
    </header>
  )
}

export default AirbnbHeader
