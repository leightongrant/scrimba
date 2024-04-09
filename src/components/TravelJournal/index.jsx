import React from 'react'
import TravelJournalHeader from './Header'
import TravelJournalMain from './Main'
const TravelJournal = () => {
  return (
    <section className="w-[550px] mx-auto bg-[#E5E5E5]">
      <TravelJournalHeader />
      <TravelJournalMain />
    </section>
  )
}

export default TravelJournal
