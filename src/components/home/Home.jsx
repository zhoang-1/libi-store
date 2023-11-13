import React from 'react';
import Hearder from '../header/Hearder';
import Footer from '../footer/Footer';
import Wrapper from './Wrapper';
import Banner from './Banner';
import Jarkeepheat from './Jarkeepheats';

function Home() {
    return (
        <div>
            <Hearder />
            <Banner />
            <Jarkeepheat />
            <Wrapper />
            <Footer />
        </div>
    );
}

export default Home;
