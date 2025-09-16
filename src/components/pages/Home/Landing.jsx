import React, { useEffect, useState } from 'react';
import { Container } from '@components';
import * as icons from '@images/landing';
import '@styles/components/pages/Home/Landing.scss';

const SIZE = 30;
const MAX_WIDTH = 100;
const MAX_LEFT = 2000;
const MAX_TOP = 600;
const KEYS = Object.keys(icons);

const createIcons = () => {
    const res = [];
    for (let i = 0; i < SIZE; i++) {
        const i = Math.random();
        const invert = i > 0.5 ? ' landing__icon-wrapper--invert' : '';
        const key = KEYS[Math.floor(i * KEYS.length)];
        const style = {
            width: `${Math.max(Math.random() * MAX_WIDTH, 40)}px`,
            left: `${(Math.random() * MAX_LEFT) - 40}px`,
            top: `${(Math.random() * MAX_TOP) + 40}px`,
            animationDelay: `${Math.random() * 1000}ms`,
            opacity: Math.random()
        };
        const Icon = icons[key];

        res.push(
            <span key={i} style={style} className={`landing__icon-wrapper${invert}`}>
                <Icon className='landing__icon' />
            </span>
        );
    }
    return res;
};

export const Landing = () => {
    const [icons, setIcons] = useState(null);
    useEffect(() => { setIcons(createIcons()) }, []);

    return (
        <Container tag='section' block='landing' className='home__section'>
            <div className='landing__content'>
                <h1 className='landing__title'>Computer Science Enrichment Club</h1>
                <p className='landing__text'>
                    Helping students with a passion for Computer Science take the next steps in their career.
                </p>
                <p className='landing__text'>
                    We are now currently hiring executives for 2025-2026, join us in shaping the future of computer science at UofT.
                </p>
                <a href="https://linktr.ee/csec.utsc" target="_blank" rel="noopener noreferrer">
                    <button className='landing__link'>Now Hiring!</button>
                </a>
                {/* <p className='landing__text'>
                    Students of all displines are welcomed free of charge and no sign up required.
                    Scroll down to see our upcoming events!
                </p> */}
            </div>
            { icons}
        </Container>
    );
}
