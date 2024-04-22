import React from 'react';
import ReactFactsHeader from './Header';
import ReactFactsMain from './Main';

const ReactFacts = () => {
    const [darkMode, setDarkMode] = React.useState(false);
    function toggle() {
        setDarkMode((pre) => !pre);
    }
    return (
        <div className='mx-auto w-[550px]'>
            <ReactFactsHeader darkMode={darkMode} toggle={toggle} />
            <ReactFactsMain darkMode={darkMode} />
        </div>
    );
};

export default ReactFacts;
