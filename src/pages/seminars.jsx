import React from 'react';
import { Container } from '@components';
import '@styles/pages/Seminars.scss';

const SeminarPage = () => {
    return (
        <Container tag='main' block='seminar'>
            <h1>Archived Seminars</h1>
        </Container>
    );
};

SeminarPage.meta = {
    seo: {
        title: 'Past Seminars'
    }
}

export default SeminarPage;