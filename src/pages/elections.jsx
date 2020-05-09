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
            <h1>CSEC 2020 Elections</h1>
            <div className='about__row'>
                <div className='about__content'>
                    <p className='about__text'>
                    Friday May 29th 6pm - 7pm on Twitch or Zoom (Details to come at a later date). Be sure to join our <a href='https://discord.gg/4tWwRM4' target='_blank' rel='noopener noreferrer'>Discord</a> for updates on our #announcements channel!
                    </p>
                    <p className='about__text'>
                        General Elections for the Computer Science Enrichment Club are coming up! If you've enjoyed any of our events (World of Work, Mock Interviews, networking events, etc.) please join us in our annual elections! You can decide what the future of the CS community on campus looks like!
                    </p>
                    <p className='about__text'>
                    Want to join the executive team? We'd be thrilled to have you! Simply fill out the form here and show up to our elections! You'll be expected to do a little introduction about yourself and your ideas. <b>For information about the positions, scroll down to see the descriptions.</b> Please fill this out by Friday March 20 at 1pm.
                    <a className='alg__link' href='https://forms.gle/F9BaRpuxDkW3wack6' target='_blank' rel='noopener noreferrer'>
                                Link to Application
                        <FaExternalLinkAlt className='alg__link-icon' />
                    </a>
                    </p>

                </div>
                <Img className='alg__image' fluid={placeholderImage.childImageSharp.fluid} imgStyle={{ height: 'auto' }} />
            </div>
            <h2 className='about__title'>Available Positions for the 2020 Elections</h2>
            <div>
                <h4>President (Requires 1 year as a CSEC Exec)</h4>
                <p>
                The President is the official spokesperson of the organization and provides direction for all components of the organization in
                    a manner consistent with the organization’s constitution and policies.<br></br>
                    Current: <b>Kevin S.</b>
                </p>
                <h4>Director of Internal Affairs</h4>
                <p>
                    The Director of Internal Affairs act as the public relations of the club. Their task is to direct events, handle the creation and distribution of promotional club material, and listen to the memberbase for suggestions and improvements towards the club.<br></br>
                    Current: <b>Tabeeb Y.</b>
                </p>
                <h4>Events Director</h4>
                <p>
                    Current: None
                </p>
                <h4>Marketing Director</h4>
                <p>
                    The Marketing Director creates meaningful visuals and come up with creative ways to advertise the CSEC brand across multiple social media channels<br></br>
                    Current: <b>Charmaine Y. and Paolo V.</b>
                </p>
                <h4>Director of Software Development / System Administration</h4>
                <p>
                The Director of Software Development acts as a liaison amongst members in the organization. They will primarily deal with website administration and other technical aspects. It is also the responsibility of the director to record a summary of each lecture
                session and general meeting and post it on the relevant media for access to all general members. They will be responsible for the website and other technical projects in the working (CMSClubs ... etc). <br></br>
                Current: <b>Samiul H. and Frederic P.</b>
                </p>

            </div>
            <h2 className='about__title'>2020-2021 Positions</h2>
            <div>
                <p>
                    These positions will be opening in the following 2020-2021 School Year. Applications will start around Aug - Sept 2020.
                </p>
                <h4>UTSC ICPC Assistant Coach</h4>
                <h4>Software Developer</h4>
                <h4>Game Division Leader (Requires one year as a Game Divison Exec)</h4>
                <h4>Game Division Executive</h4>
                <h4>Social Media Gurus</h4>
                <h4>Guest Lecturer and Lecturers</h4>
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