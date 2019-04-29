import React from 'react';
import { Container } from '@components';
import '@styles/pages/404.scss';

const NotFoundPage = () => (
    <Container tag='main' block='nf'>
        <h1>REEE</h1>
    </Container>
);

NotFoundPage.meta = {
    seo: {
        title: 'Not Found'
    }
}

export default NotFoundPage;
