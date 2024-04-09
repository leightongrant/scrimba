import React from 'react'
import earthIcon from '../../assets/images/earth-icon.png'

const TravelJournalHeader = () => {
  return (
    <header className="bg-[#F55A5A] p-4 flex gap-2 items-center justify-center">
      <img src={earthIcon} alt="earth icon" width={24} />
      <h2 className="text-sm text-white">my travel journal</h2>
    </header>
  )
}

export default TravelJournalHeader
