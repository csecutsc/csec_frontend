import React from 'react';
import '@styles/pages/Home.scss';
import { Landing } from '../components/pages/Home/Landing';
import { About } from '../components/pages/Home/About';
import { Events } from '../components/pages/Home/Events';
import { Learn } from '../components/pages/Home/Learn';
// import * as Sections from '@sections/Home';

const IndexPage = () => (
    <main className='home'>
        <Landing />
        <About />
        <Events />
        <Learn />
        {/* { Object.values(Sections).map((Section, i) => <Section key={ i }/>) } */}
    </main>
);

IndexPage.meta = {
    seo: {
        title: 'Home'
    },
    light: true
}

export default IndexPage;
