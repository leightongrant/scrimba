import MemeGeneratorHeader from './Header';
import MemeForm from './MemeForm';
import MemeImage from './MemeImage';
import { useState, useEffect } from 'react';

const MemeGenerator = () => {
    const [data, setData] = useState([]);
    const [memeText, setMemeText] = useState({
        top: 'Top Text',
        bottom: 'Bottom Text',
    });
    const [toggle, setToggle] = useState(true);

    useEffect(() => {
        const getImages = async () => {
            const res = await fetch('https://api.imgflip.com/get_memes');
            const data = await res.json();
            const images = data.data.memes
                .filter((i) => i.height < 600)
                .map((i) => {
                    return { id: i.id, url: i.url };
                });
            setData(images);
        };
        getImages();
    }, [toggle]);
    return (
        <section className='w-[550px] mx-auto bg-white pb-14'>
            <MemeGeneratorHeader />
            <MemeForm
                setData={setData}
                memeText={memeText}
                setMemeText={setMemeText}
                setToggle={setToggle}
                toggle={toggle}
            />
            <MemeImage data={data} memeText={memeText} toggle={toggle} />
        </section>
    );
};

export default MemeGenerator;
