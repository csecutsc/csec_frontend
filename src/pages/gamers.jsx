import React from 'react';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import { Container, Card } from '@components';
import { FaExternalLinkAlt } from 'react-icons/fa';
import '@styles/pages/Algorithms.scss';

const query = graphql`
{
    algresources: allStrapiResource {
        nodes {
            title
            items {
                text
                link
                aside
                title
                items {
                    text
                    link
                }
            }
        }
    },
    placeholderImage: file(relativePath: { eq: "GameDev.png" }) {
        childImageSharp {
            fluid(maxHeight:700) {
                ...GatsbyImageSharpFluid
                presentationWidth
            }
        }
    },
    eventImage: file(relativePath: { eq: "gamejam.png" }) {
        childImageSharp {
            fluid(maxHeight:700) {
                ...GatsbyImageSharpFluid
                presentationWidth
            }
        }
    }
}
`;

const buildList = ({ text, link, aside, title, items }, key, level = 4) => {
    const Tag = 'h' + level;
    return !items ? (
        <li className='alg__item' key={key}>
            <a className='alg__link' href={link} target='_blank' rel='noopener noreferrer'>
                {text}
                <FaExternalLinkAlt className='alg__link-icon' />
            </a>
            <p className='alg__aside'>{aside}</p>
        </li>
    ) : (
            <li className='alg__item' key={key}>
                <Tag>{title}</Tag>
                <ul className={`alg__list${items[0].items ? ' alg__list--list' : ''}`}>
                    {items.map((item, k) => buildList(item, k, ++level))}
                </ul>
            </li>
        )
};

const GamersPage = () => {
    const { algresources, placeholderImage, eventImage } = useStaticQuery(query);
    return (
        <Container tag='main' block='alg'>
            <h1>UTSC Game Development Club</h1>
            <div className='about__row'>
                <div className='about__content'>
                    <p className='about__text'>
                        The UTSC Game Development Club is a great place for budding game developers to meet, learn, and share game-related ideas. It is the environment for aspiring game devs at UTSC - <b>no prior experience needed to join!</b>
                    </p>
                    <p className='about__text'>
                        <b>Our meetings will be held bi-weekly starting Monday Jan 27, 5 - 7pm in IC208. Check the CSEC home page under events for the rooms and updates!</b> Also, scroll down to see our upcoming events!
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
                    <a className='alg__link' href='https://discord.gg/ZsBNGJ' target='_blank' rel='noopener noreferrer'>
                                Discord
                        <FaExternalLinkAlt className='alg__link-icon' />
                    </a>
                    </span>
                </div>
                <Img className='alg__image' fluid={placeholderImage.childImageSharp.fluid} imgStyle={{ height: 'auto' }} />
            </div>
            <hr></hr>
            <h1 id="gamerevents">Events</h1>

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
                    Why: To grow your game development skills, meet like-minded people, and most importantly, finish a game.
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
                <Img className='alg__image' fluid={eventImage.childImageSharp.fluid} imgStyle={{ height: 'auto' }} />
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