import React from 'react';
import { Container } from '@components';
import { graphql, useStaticQuery } from 'gatsby';
import '@styles/pages/Team.scss';
import { Card } from '../components/pages/Team/Card';

const query = graphql`
{
    sections: allStrapiDivision {
        nodes {
          title
          description
          executives {
            name
            title
            image {
                childImageSharp {
                    fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            media {
                email
                website
                linkedin
                github
            }
          }
        }
    }
}
`;

const GalleryPage = () => {
    const { sections } = useStaticQuery(query);
    
    return (
        <Container tag='main' block='team'>
            <h1 className='team__title'>Our Team</h1>
            <p className='team__text'>Our exceptional team of volunteer student leaders and lecturers are listed here.</p>
            <p className='team__text'>Contact them individually, or leave a message through the contact form.</p>
            {
                sections.nodes.map(({ title, description, executives }, i) => (
                    <section className='team__section' key={i}>
                        <h2 className='team__section-title'>{title}</h2>
                        {description && <p className='team__section-text'>{description}</p>}
                        <ul className='team__list'>
                            {
                                executives.map((props, i) => (
                                    <Card key={i} {...props} />
                                ))
                            }
                        </ul>
                    </section>
                ))
            }
        </Container>
    );
};

GalleryPage.meta = {
    seo: {
        title: 'Gallery'
    }
}

export default GalleryPage;