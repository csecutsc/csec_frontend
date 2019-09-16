import React from 'react';
import { Container } from '@components';
import LesserDog from '@images/LesserDog.png';
import '@styles/pages/404.scss';

const NotFoundPage = () => (
    <Container tag='main' block='nf'>
        <h1 className='nf__title'>404</h1>
        <p className='nf__subtitle'>Page Not Found</p>
        <p className='nf__text'>
            "You have gone where no student has gone before"
        </p>
        <img className='nf__dog' src={LesserDog}/>
    </Container>
);

NotFoundPage.meta = {
    seo: {
        title: 'Not Found'
    }
}

export default NotFoundPage;
