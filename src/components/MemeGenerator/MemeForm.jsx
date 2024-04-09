import React from 'react'
const bgGrad = 'bg-gradient-to-r from-[#672280] to-[#A626D3]'
const MemeForm = ({ memeText, setMemeText, setToggle, toggle }) => {
  function handleChange(e) {
    if (e.target.name === 'topText') {
      setMemeText((pre) => {
        return { ...pre, top: e.target.value }
      })
    } else {
      setMemeText((pre) => {
        return { ...pre, bottom: e.target.value }
      })
    }
  }
  function handleClick(e) {
    e.preventDefault()
    setToggle(!toggle)
  }
  return (
    <div className="p-9">
      <form className="text-[12px] font-karla">
        <div className="flex gap-4">
          <input
            type="text"
            name="topText"
            placeholder="Top Text"
            value={memeText.top}
            onChange={handleChange}
            className="p-[10px] grow border-[1px] border-[#D5D4D8] rounded-md"
          />
          <input
            type="text"
            name="bottomText"
            placeholder="Bottom Text"
            value={memeText.bottom}
            onChange={handleChange}
            className="p-[10px] grow border-[1px] border-[#D5D4D8] rounded-md"
          />
        </div>
        <button
          type="submit"
          onClick={handleClick}
          className={`p-2.5 w-[100%] ${bgGrad} rounded-md mt-4 text-white font-bold`}>
          Get a new meme image
        </button>
      </form>
    </div>
  )
}

export default MemeForm
