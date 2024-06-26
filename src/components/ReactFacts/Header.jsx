import React from 'react';
import reactLogo from '../../assets/images/reactlogo.png';

const ReactFactsHeader = ({ darkMode, toggle }) => {
    const darkModeBg = darkMode ? 'bg-[#21222A]' : 'bg-white';

    return (
        <header
            className={`flex items-center gap-1 p-8 rounded-t-lg ${darkModeBg} border-b`}
        >
            <img src={reactLogo} width='28px' alt='react logo' />
            <h2 className='mr-auto font-bold text-2xl text-[#00ABCA]'>
                ReactFacts
            </h2>
            <div className='flex gap-3 items-center'>
                <span
                    className={`text-[10px] font-semibold ${
                        darkMode ? 'text-[#918E9B]' : 'text-[#2B283A]'
                    }`}
                >
                    Light
                </span>
                <div
                    className={`${
                        darkMode
                            ? 'justify-end bg-white'
                            : 'justify-start bg-[#21222A]'
                    } w-6  p-[1px] rounded-full hover:cursor-pointer flex`}
                    onClick={toggle}
                >
                    <div className={`w-3 h-3 rounded-full ${darkModeBg}`}></div>
                </div>
                <span
                    className={`text-[10px] font-semibold ${
                        darkMode ? 'text-white' : 'text-[#D5D4D8]'
                    }`}
                >
                    Dark
                </span>
            </div>
        </header>
    );
};

export default ReactFactsHeader;
