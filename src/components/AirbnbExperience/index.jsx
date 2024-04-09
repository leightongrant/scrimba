import React from 'react'
import AirbnbHeader from './Header'
import AirbnbHero from './Hero'
import AirbnbMain from './Main'
import Experiences from './Experiences'

const AirbnbExperience = () => {
  return (
    <div className="mx-auto w-[550px] bg-white rounded-md">
      <AirbnbHeader />
      <AirbnbHero />
      <AirbnbMain />
      <Experiences />
    </div>
  )
}

export default AirbnbExperience
