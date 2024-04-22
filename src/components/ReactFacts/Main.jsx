import React from 'react';
import reactjsIcon from '../../assets/images/reactjs-icon.png';
import reactjsIconLm from '../../assets/images/reactjs-icon-lm.png';

const ReactFactsMain = ({ darkMode }) => {
    return (
        <main
            className={`${
                darkMode ? 'text-white bg-[#282D35]' : 'bg-white text-[#282D35]'
            } overflow-auto relative rounded-b-lg`}
        >
            <img
                src={darkMode ? reactjsIcon : reactjsIconLm}
                width={131}
                className='absolute right-0 top-28'
            />
            <h2 className='ms-7 mt-12 font-bold text-4xl'>
                Fun facts about React
            </h2>
            <ul className='ms-[74px] mt-10 mb-12 w-[390px] space-y-4 list-disc marker:text-2xl marker:text-sky-400'>
                <li>Was resleased in 2013</li>
                <li>Was originally created by Jardon Walke</li>
                <li>Has well over 100K stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>
                    Powers thousands of enterprise apps, including mobile apps
                </li>
            </ul>
        </main>
    );
};

export default ReactFactsMain;
