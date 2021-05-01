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
            <h1>CSEC 2021 Elections and Open Positions</h1>
            <div className='about__row'>
                <div className='about__content'>
                    <p className='about__text'>
                        CSEC Elections for 2021 - 2022 school year are now
                        open! <a href="https://forms.gle/GM2i18hLfxvWb1b79" target='_blank' rel='noopener noreferrer'>
                            Apply now!
                        </a>
                    </p>
                    <p className='about__text'>
                        Elections are happening on Friday (May 14th) 6-7PM online (details and links to come soon).
                        If you've enjoyed any of our events (World of Work, Mock Interviews, networking events, etc.)
                        please join us in our annual elections! You can decide what the future of the CS community on campus looks like!
                    </p>

                </div>
                <Img className='alg__image' fluid={placeholderImage.childImageSharp.fluid} imgStyle={{ height: 'auto' }} />
            </div>
            <h2 className='about__title'>Currently Open 2021 - 2022 positions</h2>
            <div>
                <h4>President (Requires 1 year as a CSEC Executive)</h4>
                <h4>Director of Internal Affairs</h4>
                <h4>Director of External Affairs</h4>
                <h4>Events Director</h4>
                <h4>Marketing Director</h4>
                <h4>Director of Software Development / System Administation</h4>
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
