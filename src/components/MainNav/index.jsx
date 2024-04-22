import React from 'react';

const MainNav = () => {
    return (
        <nav className='navigation flex flex-wrap justify-center p-2 text-slate-600 gap-4 bg-slate-400 font-bold mb-5'>
            <a
                href='/'
                className={`hover:text-slate-200 ${
                    location.pathname === '/' && 'border-b-4 border-slate-600'
                }`}
            >
                Home
            </a>
            <a
                href='/react-facts'
                className={`hover:text-slate-200 ${
                    location.pathname === '/react-facts' &&
                    'border-b-4 border-slate-600'
                }`}
            >
                React Facts
            </a>
            <a
                href='/business-card'
                className={`hover:text-slate-200 ${
                    location.pathname === '/business-card' &&
                    'border-b-4 border-slate-600'
                }`}
            >
                Business Card
            </a>
            <a
                href='/airbnb'
                className={`hover:text-slate-200 ${
                    location.pathname === '/airbnb' &&
                    'border-b-4 border-slate-600'
                }`}
            >
                Airbnb
            </a>
            <a
                href='/meme-generator'
                className={`hover:text-slate-200 ${
                    location.pathname === '/meme-generator' &&
                    'border-b-4 border-slate-600'
                }`}
            >
                Meme Generator
            </a>
            <a
                href='/travel-journal'
                className={`hover:text-slate-200 ${
                    location.pathname === '/travel-journal' &&
                    'border-b-4 border-slate-600'
                }`}
            >
                Travel Journal
            </a>
            <a
                href='/markdown-editor'
                className={`hover:text-slate-200 ${
                    location.pathname === '/markdown-editor' &&
                    'border-b-4 border-slate-600'
                }`}
            >
                Markdown Editor
            </a>
            <a
                href='/supabase'
                className={`hover:text-slate-200 ${
                    location.pathname === '/supabase' &&
                    'border-b-4 border-slate-600'
                }`}
            >
                Supabase
            </a>
        </nav>
    );
};

export default MainNav;
