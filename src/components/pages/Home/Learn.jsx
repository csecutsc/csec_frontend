import React from 'react';
import Img from 'gatsby-image';
import { Container, Card } from '@components';
import { graphql, useStaticQuery } from 'gatsby';
import '@styles/components/pages/Home/Learn.scss';

const Cards = {
    discover: {
        text: 'Interests you never knew you had through our engaging and exciting monthly seminars on everything from Machine Learning to PC Building'
    },
    create: {
        text: 'Amazing projects and lasting friendships through our Hackathons, Contests, and more!'
    },
    meet: {
        text: 'Future Leaders, Innovators, and Entrepreneurs and develop key connections at our various social events and networking nights!'
    }
}

const query = graphql`
fragment fluidImage on File {
    childImageSharp {
        fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
        }
    }
}

{
    discover: file(relativePath: { eq: "Discover.jpg" }) {
        ...fluidImage
    }
    create: file(relativePath: { eq: "Create.jpg" }) {
        ...fluidImage
    }
    meet: file(relativePath: { eq: "Meet.jpg" }) {
        ...fluidImage
    }
}
`;

export const Learn = () => {
    const images = useStaticQuery(query);

    return (
        <Container tag='section' block='learn' className='home__section'>
            <h2 className='learn__title'>What we do.</h2>
            <div className='learn__cards'>
                {
                    Object.entries(Cards).map(([ key, { text } ]) => (
                        <Card key={ key } block='learn__card'>
                            <Img fluid={ images[key].childImageSharp.fluid }/>
                            <h3 className='learn__card-title'>
                                { key.charAt(0).toUpperCase() + key.slice(1) }
                            </h3>
                            <p className='learn__card-text'>{ text }</p>
                        </Card>
                    ))
                }
            </div>
        </Container>
    )
}