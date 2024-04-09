import React from 'react'
import data from './db.json'
import mapPin from '../../assets/images/map-pin.png'

const TravelJournalCard = (props) => {
  return (
    <>
      <div className="flex gap-5 justify-center items-center text-[#2B283A]">
        <div className="w-[125px]">
          <img
            src={props.imageUrl}
            alt={props.title}
            width="100%"
            className="rounded-lg"
          />
        </div>
        <div>
          <div className=" text-[10px] flex items-center">
            <img
              src={mapPin}
              alt="map pin"
              className="inline-block"
              width={7}
            />
            <span className="text-[#2B283A] ml-1 tracking-widest">
              {props.location.toUpperCase()}
            </span>
            <span className="text-[#918E9B] ml-3">
              <a href={props.googleMapsUrl}>View on Google Maps</a>
            </span>
          </div>
          <h2 className="text-[25px] font-bold mb-[14px]">{props.title}</h2>
          <h3 className="text-[10px] font-bold mb-[10px]">
            {props.startDate} - {props.endDate}
          </h3>
          <p className="text-[10px] w-80 line-clamp-5">{props.description}</p>
        </div>
      </div>
      {props.id < data.length && <hr className="border-[#F55A5A]" />}
    </>
  )
}

const TravelJournalMain = () => {
  return (
    <main className="mt-4 grid gap-4 p-8">
      {data.map((i) => (
        <TravelJournalCard key={i.id} {...i} />
      ))}
    </main>
  )
}

export default TravelJournalMain
