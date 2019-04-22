import React from 'react';
import '@styles/pages/Home.scss';
import * as Sections from '@sections/Home';

const IndexPage = () => (
    <main className='home'>
        { Object.values(Sections).map((Section, i) => <Section key={ i }/>) }
    </main>
);

IndexPage.meta = {
    seo: {
        title: 'Home'
    },
    light: true
}

export default IndexPage;
