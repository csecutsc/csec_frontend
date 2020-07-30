import React from 'react';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import { Container } from '@components';
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
    placeholderImage: file(relativePath: { eq: "Discover.jpg" }) {
        childImageSharp {
            fluid(maxHeight:700) {
                ...GatsbyImageSharpFluid
                presentationWidth
            }
        }
    }
}
`;

const PositionsPage = () => {
    const { placeholderImage } = useStaticQuery(query);
    return (
        <Container tag='main' block='alg'>
            <h1>CSEC 2020 Elections and Open Positions</h1>
            <div className='about__row'>
                <div className='about__content'>
                    <p className='about__text'>
                    Elections are over! We still have some open spots for the 2020 - 2021 school year below.
                    </p>
                    <p className='about__text'>
                        If you've enjoyed any of our events (World of Work, Mock Interviews, networking events, etc.) please join us in our annual elections! You can decide what the future of the CS community on campus looks like!
                    </p>

                </div>
                <Img className='alg__image' fluid={placeholderImage.childImageSharp.fluid} imgStyle={{ height: 'auto' }} />
            </div>
            <h2 className='about__title'>Currently Open 2020 - 2021 positions</h2>
            <div>
                <a href='https://docs.google.com/forms/d/1WwbdzGCXigH23A9hBp5YdJ1mIGQ60jOsamkvyEpXhUU/' target='_blank' rel='noopener noreferrer'>CSEC 2020 Last Chance Applications</a> Form -- Due Aug 12th 11:59PM
                <h4>Director of Internal Affairs</h4>
                <h4>Events Director</h4>
                <h4>Lecturer/Guest lecturer</h4>
            </div>
            <h2 className='about__title'>2020 General Election Results</h2>
            <div>
                <h4>President (Requires 1 year as a CSEC Exec)</h4>
                <p>
                    The President is the official spokesperson of the organization and provides direction for all components of the organization in
                    a manner consistent with the organization’s constitution and policies.<br></br>
                    Current: Kevin S. <br></br>
                    Elected: <b>Tabeeb Y.</b>
                </p>
                <h4>Director of Internal Affairs</h4>
                <p>
                    The Director of Internal Affairs act as the public relations of the club within the student community. Their task is to direct events, handle the creation and distribution of promotional club material, and listen to the memberbase for suggestions and improvements towards the club.<br></br>
                    Current: Tabeeb Y. <br></br>
                    Elected: <b>None</b>
                </p>
                <h4>Director of External Affairs</h4>
                <p>
                    The Director of External Affairs act as the public relations of the club with our external sponsors. Their task is to handle potential sponsors <br></br>
                    Current: Tabeeb Y. <br></br>
                    Elected: <b>Alexander C.</b>
                </p>
                <h4>Events Director</h4>
                <p>
                    Current: None <br></br>
                    Elected: <b>None</b>
                </p>
                <h4>Marketing Director</h4>
                <p>
                    The Marketing Director creates meaningful visuals and come up with creative ways to advertise the CSEC brand across multiple social media channels<br></br>
                    Current: Charmaine Y. and Paolo V. <br></br>
                    Elected: <b>Charmaine Y.</b>
                </p>
                <h4>Director of Software Development / System Administration</h4>
                <p>
                    The Director of Software Development acts as a liaison amongst members in the organization. They will primarily deal with website administration and other technical aspects. It is also the responsibility of the director to record a summary of each lecture
                session and general meeting and post it on the relevant media for access to all general members. They will be responsible for the website and other technical projects in the working (CMSClubs ... etc). <br></br>
                Current: Samiul H. and Frederic P. <br></br>
                Elected: <b>Keshavaa S.</b>
                </p>
            </div>
            <h2 className='about__title'>Upcoming 2020-2021 Positions</h2>
            <div>
                <p>
                    These positions will be opening in the following 2020-2021 School Year. Applications will start around Aug - Sept 2020.
                </p>
                <h4>UTSC ICPC Assistant Coach</h4>
                <h4>Software Developer</h4>
                <h4>Game Division Leader (Requires one year as a Game Divison Exec)</h4>
                <h4>Game Division Executive</h4>
                <h4>Social Media Gurus</h4>
            </div>
        </Container>
    );
};

PositionsPage.meta = {
    seo: {
        title: 'CSEC Elections',
        description: 'General Elections for the Computer Science Enrichment Club are coming up!',
    }
}

export default PositionsPage;