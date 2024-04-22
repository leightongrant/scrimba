import MainHeader from './components/MainHeader';
import Router from 'react-easy-router';
import MainNav from './components/MainNav';
import AirbnbExperience from './components/AirbnbExperience';
import DigitalBusinessCard from './components/DigitalBusinessCard';
import TravelJournalMain from './components/TravelJournal';
import MemeGenerator from './components/MemeGenerator';
import ReactFacts from './components/ReactFacts';
import ReactMDE from './components/ReactMde';
import Supabase from './components/Supabase';
function App() {
    function Home() {
        return (
            <section className='flex items-center justify-center h-[80vh]'>
                <h1 className='font-bold text-slate-600 text-8xl'>
                    My Scrimba Projects
                </h1>
            </section>
        );
    }
    const routes = [
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/react-facts',
            element: <ReactFacts />,
        },
        {
            path: '/business-card',
            element: <DigitalBusinessCard />,
        },
        {
            path: '/airbnb',
            element: <AirbnbExperience />,
        },
        {
            path: '/meme-generator',
            element: <MemeGenerator />,
        },
        {
            path: '/travel-journal',
            element: <TravelJournalMain />,
        },
        {
            path: '/markdown-editor',
            element: <ReactMDE />,
        },
        {
            path: '/supabase',
            element: <Supabase />,
        },
    ];

    return (
        <div className='bg-slate-500 pb-20 min-h-screen'>
            {/* <MainHeader /> */}
            <MainNav />
            <Router routes={routes} />
        </div>
    );
}

export default App;
