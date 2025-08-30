import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Container, Card } from '@components';
import '@styles/components/pages/Home/Learn.scss';

export const Learn = () => {
    return (
        <Container tag='section' block='learn' className='home__section'>
            <h2 className='learn__title'>What we do.</h2>
            <div className='learn__cards'>
                <Card block='learn__card'>
                    <StaticImage src="../../../images/Discover.jpg" width={500} />
                    <h3 className='learn__card-title'>Discover</h3>
                    <p className='learn__card-text'>Interests you never knew you had through our engaging and exciting seminars on everything from Machine Learning to PC Building</p>
                </Card>
                <Card block='learn__card'>
                    <StaticImage src="../../../images/Create.jpg" width={500} />
                    <h3 className='learn__card-title'>Create</h3>
                    <p className='learn__card-text'>Amazing projects and lasting friendships through our Hackathons, Contests, and more!</p>
                </Card>
                <Card block='learn__card'>
                    <StaticImage src="../../../images/Meet.jpg" width={500} />
                    <h3 className='learn__card-title'>Meet</h3>
                    <p className='learn__card-text'>Future Leaders, Innovators, and Entrepreneurs and develop key connections at our various social events and networking nights!</p>
                </Card>
            </div>
        </Container>
    )
}