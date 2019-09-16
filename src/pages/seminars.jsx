import React from 'react';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import { Container, Card } from '@components';
import '@styles/pages/Seminars.scss';

const query = graphql`
{
    seminars: allStrapiSeminar(
        filter: {
            archived: {
                eq: false
            }
        }
    ) {
        nodes {
          title
          description
          image {
            childImageSharp {
                fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                }
            }
          }
          slideUrl
          sourceLink
        }
    },
    archived: allStrapiSeminar(
        filter: {
            archived: {
                eq: true
            }
        }
    ) {
        nodes {
          title
          description
          image {
            childImageSharp {
                fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                }
            }
          }
          slideUrl
          sourceLink
        }
    }
}
`;

const buildCards = seminars => (
    <ul className='seminar__cards'>
        {
            seminars.map(({ title, description, image, slideUrl, sourceLink }, i) => (
                <Card block='seminar__card'>
                    <Img fluid={ image.childImageSharp.fluid }/>
                    <h3 className='seminar__card-title'>{title}</h3>
                    <p>{description}</p>
                    <div className='seminar__links'>
                        {slideUrl && (
                            <a
                                className='seminar__link'
                                href={slideUrl} target='_blank'
                                rel='noopener noreferrer'
                            >
                                Slides
                            </a>
                        )}
                        {slideUrl && (
                            <a
                                className='seminar__link'
                                href={sourceLink} target='_blank'
                                rel='noopener noreferrer'
                            >
                                Source Code
                            </a>
                        )}
                    </div>
                </Card>
            ))
        }
    </ul>
)

const SeminarPage = () => {
    const { seminars, archived } = useStaticQuery(query);
    console.log(seminars, archived);

    return (
        <Container tag='main' block='seminar'>
            <h1>Seminars</h1>
            <h2>2019 - 2020 Seminars</h2>
            {
                seminars.nodes.length ? (
                    buildCards(seminars.nodes)
                ) : (
                    <p className='seminar__soon'>Coming soon</p>
                )
            }

            <h2>Archived Seminars</h2>
            {buildCards(archived.nodes)}
        </Container>
    );
};

SeminarPage.meta = {
    seo: {
        title: 'Seminars'
    }
}

export default SeminarPage;