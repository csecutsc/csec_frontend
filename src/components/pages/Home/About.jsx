import React from 'react';
import Img from 'gatsby-image';
import { Container } from '@components';
import { graphql, useStaticQuery } from 'gatsby';
import '@styles/components/pages/Home/About.scss';

const query = graphql`
{
    placeholderImage: file(relativePath: { eq: "Landing.png" }) {
        childImageSharp {
            fluid(maxWidth: 1500) {
                ...GatsbyImageSharpFluid
            }
        }
    }
}
`;

export const About = () => {
    const { placeholderImage } = useStaticQuery(query);
    return (
        <Container tag='section' block='about' className='home__section'>
            <h2 className='about__title'>Who are we?</h2>
            <div className='about__row'>
                <div className='about__content'>
                    <p className='about__text'>
                        A student-run group at the University of Toronto Scarborough which focuses on helping
                        students with a passion for Computer Science take the next step.
                    </p>
                    <p className='about__text about__text--secondary'>
                        We do everything from hosting monthly job seminars
                        to helping you create your own website. Students of all displines are welcomed free of charge.
                        <b> So be sure to follow us on any social media to learn more!</b>
                    </p>
                </div>
                <Img className='about__image' fluid={ placeholderImage.childImageSharp.fluid }/>
            </div>
        </Container>
    );
};