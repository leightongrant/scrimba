import React, { useMemo } from 'react'
const MemeImage = ({ data, memeText, toggle }) => {
  if (data.length < 1) {
    return <h2 className="text-center">Loading...</h2>
  }

  const memeImage = useMemo(
    () => data[Math.floor(Math.random() * data.length)].url,
    [toggle]
  )

  return (
    <div className="w-[477px] mx-auto relative font-impact text-white text-[32px] font-bold">
      <div className="absolute top-4 flex justify-center w-[100%]">
        <h2 className="meme-text">{memeText.top.toUpperCase()}</h2>
      </div>

      <div className="absolute bottom-4 flex justify-center w-[100%]">
        <h2 className="meme-text">{memeText.bottom.toUpperCase()}</h2>
      </div>

      <img
        src={memeImage}
        width="100%"
        alt="meme image"
        className="object-fill"
      />
    </div>
  )
}

export default MemeImage
