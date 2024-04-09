import React from 'react'
import data from './db.json'
import star from '../../assets/images/star.png'

const ExperienceCard = ({ data }) => {
  return (
    <div className="min-w-[176px] text-[#222222]">
      <div className="relative font-poppins">
        {data?.available && (
          <p className="absolute top-2 left-2 font-poppins font-normal text-[10px] bg-white rounded-sm py-[5px] px-[6px]">
            {data.available.toUpperCase()}
          </p>
        )}
        <img src={data.image} alt="katie" width={176} className="rounded-md" />
      </div>
      <div className="mt-3 flex gap-2 items-center">
        <img src={star} alt="star" width={14} height={'auto'} />
        <p className="text-[#918E9B]">
          <span className="text-black">{`${data.stars}`}</span>
          {` (${data.ratings}) • ${data.country.toUpperCase()}`}
        </p>
      </div>
      <p className="text-[12px] font-light">{data.title}</p>
      <p className="text-[12px]">
        <span className="font-semibold">From ${data.price}</span> / person
      </p>
    </div>
  )
}

const Experiences = () => {
  return (
    <div className="ml-9 mt-12 pb-8 flex gap-[18px] overflow-x-scroll">
      {data.data.map((item) => {
        return <ExperienceCard key={item.title} data={item} />
      })}
    </div>
  )
}

export default Experiences
