import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Container } from '@components';
import { FaExternalLinkAlt } from 'react-icons/fa';
import '@styles/pages/Algorithms.scss';

const GamersPage = () => {
    return (
        <Container tag='main' block='alg'>
            <h1>UTSC Game Development Club</h1>
            <div className='about__row'>
                <div className='about__content'>
                    <p className='about__text'>
                        The UTSC Game Development Club is a great place for budding game developers to meet, learn, and share game-related ideas. It is the environment for aspiring game devs at UTSC - <b>no prior experience needed to join!</b>
                    </p>
                    <p className='about__text'>
                        Scroll down and join our Discord to see our upcoming events!
                    </p>
                    <p className='about__text'>
                        Find like minded people to discuss and collaborate with and share games, projects, ideas, and feedback!
                    </p>
                    <p className='about__text about__text--secondary'>
                        Learn and use a variety of development engines (Unity, Godot, Unreal, etc.)
                    </p>
                    <span  style={{"marginRight":"20px"}}>
                    <a className='alg__link' href='https://www.facebook.com/UTSC-Game-Development-Club-2122684914729074/' target='_blank' rel='noopener noreferrer'>
                                Facebook Page
                        <FaExternalLinkAlt className='alg__link-icon' />
                    </a>
                    </span>
                    <span>
                    <a className='alg__link' href='https://discord.gg/bCy92at' target='_blank' rel='noopener noreferrer'>
                                Discord
                        <FaExternalLinkAlt className='alg__link-icon' />
                    </a>
                    </span>
                </div>
                <StaticImage className='alg__image' src="../images/GameDev.png" imgStyle={{ height: 'auto' }} />
            </div>
            <hr></hr>
            <h1 id="gamerevents">Past Events</h1>

            <h2>Game Jam!</h2>
            <div className='about__row'>
                <div className='about__content'>
                    <p className='about__text'>
                    What: A weeklong event where groups of 1-4 come together to create a game based around a given theme! We also have some prizes to win!
                    </p>
                    <p className='about__text'>
                    Where: Anywhere! The game jam is an off-site event, so you can work wherever you’d like. There will be a Kickoff event held at UTSC.
                    </p>
                    <p className='about__text'>
                    Who: UofT students from any campus
                    </p>
                    <p className='about__text'>
                    Why: To grow your game development skills, meet like-minded people, and most importantly, finish a game. No experience required.
                    </p>
                    <p className='about__text'>
                    How: Come to our Kickoff event for more details and rules! <b>Friday February 14th @ 3-4PM</b> in IC208 for the Theme Reveal, Contest Rules, Team Formation, and More! <b>Food Included!</b> <br></br> 
                    The slides from the kickoff event, and everything else related to the game jam, will be posted to our Discord. Alternatively, if you miss the kickoff, you can join through our Discord as well.
                    <a className='alg__link' href='https://discord.gg/ZsBNGJ' target='_blank' rel='noopener noreferrer'>
                                Discord
                        <FaExternalLinkAlt className='alg__link-icon' />
                    </a>
                    </p>

                </div>
                <StaticImage className='alg__image' src="../images/gamejam.png" imgStyle={{ height: 'auto' }} />
            </div>
            <div>
            </div>
        </Container>
    );
};

GamersPage.meta = {
    seo: {
        title: 'UTSC Game Development Club',
        description: 'The UTSC Game Development Club is a great place for budding game developers to meet, learn, and share game-related ideas.',
    }
}

export default GamersPage;