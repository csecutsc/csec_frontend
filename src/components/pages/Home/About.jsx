import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import { Container } from '@components';
import '@styles/components/pages/Home/About.scss';

export const About = () => {
    return (
        <Container tag='section' block='about' className='home__section'>
            <h2 className='about__title'>Who are we?</h2>
            <div className='about__row'>
                <div className='about__content'>
                    <p className='about__text'>
                        A student-run group at the University of Toronto which focuses on helping
                        students with a passion for Computer Science take the next step.
                    </p>
                    <p className='about__text about__text--secondary'>
                        We do everything from hosting job seminars
                        to helping you create your own website.<b>
                        Just show up to our events and you're a member!
                        Be sure to follow us on any of our social media for announcements!</b>
                    </p>
                </div>
                <StaticImage className='about__image' src="../../../images/Landing.png" />
            </div>
        </Container>
    );
};