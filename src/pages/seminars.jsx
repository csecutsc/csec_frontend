import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Card } from '@components';
import '@styles/pages/Seminars.scss';

const query =  graphql`
query Seminars {
    seminars: allSeminarsJson (
        filter: {
            archived: {
                eq: false
            }
        },
    ) {
      nodes {
        title
        description
        image {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              layout: FULL_WIDTH
            )
          }
        }
        slideUrl
        sourceLink
        additionalLinks {
          comingSoon
          lectureUrl
        }
      }
    }
    archived: allSeminarsJson (
        filter: {
            archived: {
                eq: true
            }
        },
    ) {
      nodes {
        title
        description
        image {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              layout: FULL_WIDTH
            )
          }
        }
        slideUrl
        sourceLink
        additionalLinks {
          comingSoon
          lectureUrl
        }
      }
    }
  }
`

const buildCards = seminars => (
    <ul className='seminar__cards'>
        {
            seminars.map(({ title, description, image, slideUrl, sourceLink, additionalLinks }, i) => (
                <Card block='seminar__card'>
                    <GatsbyImage image={getImage(image)} alt={title} />
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
                        {sourceLink && (
                            <a
                                className='seminar__link'
                                href={sourceLink} target='_blank'
                                rel='noopener noreferrer'
                            >
                                Source Code
                            </a>
                        )}
                        {additionalLinks.comingSoon && (
                            <a
                                className='seminar__link'
                                href={"#"}
                            >
                                Lecture Video Coming Soon
                            </a>
                        )}
                        {additionalLinks.lectureUrl && (
                            <a
                                className='seminar__link'
                                href={additionalLinks.lectureUrl} target='_blank'
                                rel='noopener noreferrer'
                            >
                                Link to Lecture Recording
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

    return (
        <Container tag='main' block='seminar'>
            <h1>Seminars</h1>
            {/* <h2>2024 - 2025 Seminars</h2>
            {
                seminars.nodes.length ? (
                    buildCards(seminars.nodes)
                ) : (
                        <p className='seminar__soon'>Coming soon</p>
                    )
            } */}

            {/* <h2>Archived Seminars</h2> */}
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