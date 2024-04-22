import AirbnbExperience from './components/AirbnbExperience';
import DigitalBusinessCard from './components/DigitalBusinessCard';
import TravelJournalMain from './components/TravelJournal';
import MemeGenerator from './components/MemeGenerator';
import ReactFacts from './components/ReactFacts';
import ReactMDE from './components/ReactMde';

const routes = [
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
];

export default routes;
