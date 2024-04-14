import React from 'react'
import reactLogo from '../../assets/images/reactlogo.png'

const ReactFactsHeader = ({ darkMode, toggle }) => {
  const darkModeBg = darkMode ? 'bg-[#21222A]' : 'bg-white'

  return (
    <header className={`shadow-2xl flex items-center gap-1 p-8 ${darkModeBg}`}>
      <img src={reactLogo} width="158px" alt="react logo" className="mr-auto" />
      <div className="flex gap-3 items-center">
        <span className="text-[10px] font-semibold text-[#918E9B]">Light</span>
        <div
          className={`${
            darkMode ? 'justify-end bg-white' : 'justify-start bg-[#21222A]'
          } w-6  p-[1px] rounded-full hover:cursor-pointer flex`}
          onClick={toggle}>
          <div className={`w-3 h-3 rounded-full ${darkModeBg}`}></div>
        </div>
        <span
          className={`text-[10px] font-semibold ${darkMode && 'text-white'}`}>
          Dark
        </span>
      </div>
    </header>
  )
}

export default ReactFactsHeader
