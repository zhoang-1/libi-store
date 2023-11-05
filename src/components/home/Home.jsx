import React from 'react';
import Hearder from '../header/Hearder';
import Footer from '../footer/Footer';
import Wrapper from './Wrapper';
import Banner from './Banner';

function Home() {
    return (
        <div>
            <Hearder />
            <Banner />
            <Wrapper />
            <Footer />
        </div>
    );
}

export default Home;
