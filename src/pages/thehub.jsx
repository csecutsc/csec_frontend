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
    placeholderImage: file(relativePath: { eq: "thehub1.png" }) {
        childImageSharp {
            fluid(maxHeight:700) {
                ...GatsbyImageSharpFluid
                presentationWidth
            }
        }
    }
}
`;

const AlgorithmsPage = () => {
    const { placeholderImage } = useStaticQuery(query);
    return (
        <Container tag='main' block='alg'>
            <h1>The Hub Opportunities</h1>
            <div className='about__row'>
                <div className='about__content'>
                    <p className='about__text'>
                        Software developers are wanted at The Hub, U of T Scarborough’s startup incubator! Come explore entrepreneurship at UTSC and put your skills to the test alongside innovative startups. <b>The participating startups are listed below.</b>
                    </p>
                    <p className='about__text'>
                        <b>Come out to the CSEC - The Hub Social on Friday, October 11th 7:00 PM - 8:00 PM, HL 208 to chat and learn more about these opportunities! Food and refreshments will be provided.</b>
                    </p>
                    <p className='about__text about__text--secondary'>
                        The HUB website: <a className='alg__link' href='https://www.utsc.utoronto.ca/thehub/' target='_blank' rel='noopener noreferrer'>
                        https://www.utsc.utoronto.ca/thehub/
                <FaExternalLinkAlt className='alg__link-icon' />
                        </a>
                    </p>
                    <h4>About The Hub</h4>
                    <p>
                    The Hub is U of T Scarborough’s startup incubator. We help students and recent alumni from all disciplines launch successful business ideas. Located at Highland Hall, we provide our resident entrepreneurs with coaching, workshops, work space, and (where possible) seed capital to get started.
 
 In the past five years, we have helped create more than 130 emerging startups. Of those, roughly half remain active today, a third have incorporated, and five percent have gone on to receive major funding. The combined valuation of these companies exceeds $27 million.
  
 Interested in joining The Hub, just write to us by email <a className='alg__link' href='mailto:thehub@utsc.utoronto.ca' target='_blank' rel='noopener noreferrer'>
                thehub@utsc.utoronto.ca
                <FaExternalLinkAlt className='alg__link-icon' />
                </a> and we would be glad to set up a meeting. <br></br>
                    </p>
                </div>
                <Img className='alg__image' fluid={placeholderImage.childImageSharp.fluid} imgStyle={{ height: 'auto' }} />
            </div>

            <h2 className='about__title'>Start-ups currently needing developers</h2>
            <div>
                <p>
                    This is a great opportunity for upper-year or experienced students to showcase their software architecture and engineering skills! <br>
                    </br>These start-ups are looking for software developers to bring their idea to life! 
                </p>
                <h4>NORM - <a className='alg__link' href='https://www.utsc.utoronto.ca/thehub/natural-organic-matters' target='_blank' rel='noopener noreferrer'>
                    Profile
                <FaExternalLinkAlt className='alg__link-icon' />
                </a></h4>
                <p>
                    Norm is in its launch phase with its first natural organic cosmetic, a body balm.<br></br>
                    Founder: <b>Chevon Riley</b>
                </p>

                <h4>SNAPIN</h4>
                <p>
                    SnapIn is a photography platform for resourcing custom stock photography.<br></br>
                    Founder: <b>Roberts Strenga</b>
                </p>
                <h4>COREFIT</h4>
                <p>
                    Corefit is a health and fitness company that focuses on linking its customers with fitness trainers.<br></br>
                    Founder: <b>Corinne Smith</b>
                </p>
                <h4>QUICLOSET</h4>
                <p>
                    QuiCloset is fashion search engine that helps shoppers find an item in the stores closest to them and allows instant pickups.<br></br>
                    Founder: <b>Athiya Rostogi</b>
                </p>
                <h4>FITBUD</h4>
                <p>
                    FitBud is a platform that would promote fitness by allowing students to connect with each other and overcome various boundaries that may potentially hinder physical fitness.<br></br>
                    Founder: <b>Abdurrahman Abdulhafiz</b><br></br>
                    <a className='alg__link' href='mailto:fitbudutsc@gmail.com' target='_blank' rel='noopener noreferrer'>
                    Email
                    <FaExternalLinkAlt className='alg__link-icon' />
                    </a>
                </p>

            </div>
            <h2 className='about__title'>Tech Established Start-ups </h2>
            <div>
                <p>
                    These startups already have tech in place and are looking for developers to assist in the developing process.
                </p>
                <h4>ROLL - <a className='alg__link' href='https://www.utsc.utoronto.ca/thehub/roll-technologies-inc' target='_blank' rel='noopener noreferrer'>
                    Profile
                <FaExternalLinkAlt className='alg__link-icon' />
                </a></h4>
                <p>
                    Roll is an e-scooter company that has permits to operate in Calgary and Edmonton, Alberta and also Kelowna, BC.<br></br>
                    Founder: <b>Richard Cao</b>
                </p>
                <h4>MANAGEUN - <a className='alg__link' href='https://www.manageun.com/' target='_blank' rel='noopener noreferrer'>
                    Website
                <FaExternalLinkAlt className='alg__link-icon' />
                </a></h4>
                <p>
                    ManageUN is a company that provides software tools for managing model United Nations to high schools.<br></br>
                    Founder: <b>Omar Chehab</b>
                </p>

                <h4>BLISS</h4>
                <p>
                    Bliss is a cannabis tracking platform that provides information on the availability of different varieties of legal cannabis at legal dispensaries.<br></br>
                    Founder: <b>Lahiru Welikala</b>
                </p>

                <h4>Febbit - <a className='alg__link' href='https://febbit.com/' target='_blank' rel='noopener noreferrer'>
                    Website
                <FaExternalLinkAlt className='alg__link-icon' />
                </a></h4>
                <p>
                    Febbit is an online game that mines Bitcoin.<br></br>
                    Founder: <b>Christian and Isabel Cordero</b>
                </p>

                <h4>Gemtoken Games - <a className='alg__link' href='https://gemtokengames.com/' target='_blank' rel='noopener noreferrer'>
                    Website
                <FaExternalLinkAlt className='alg__link-icon' />
                </a></h4>
                <p>
                    Gemtoken Games is an indie studio with the goal of combining different modes of play into new experience<br></br>
                    Founder: <b>Alexander Cavanagh</b><br></br>
                    <a className='alg__link' href='mailto:gemtoken.dev@hotmail.com' target='_blank' rel='noopener noreferrer'>
                    Email
                    <FaExternalLinkAlt className='alg__link-icon' />
                    </a>
                </p>

            </div>
        </Container>
    );
};

AlgorithmsPage.meta = {
    seo: {
        title: 'The Hub Opportunities',
        description: 'Software developers are wanted at The Hub, U of T Scarborough’s startup incubator! Come explore entrepreneurship at UTSC and put your skills to the test alongside innovative startups.',
    }
}

export default AlgorithmsPage;