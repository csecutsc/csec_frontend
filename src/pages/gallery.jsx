import React from 'react';
import { LazyImage } from '@components/pages/Gallery';
import { Container, Card } from '@components';
import { graphql, useStaticQuery } from 'gatsby';
import '@styles/pages/Gallery.scss';

const query = graphql`
{
    sections: allStrapiAlbum(
        sort: {
            fields: id, 
            order: DESC
        }
    ) {
        nodes {
          title
          description
          photos {
            url
          }
        }
    }
}
`;

const GalleryPage = () => {
    const { sections } = useStaticQuery(query);

    return (
        <Container tag='main' block='gallery'>
            <h1 className='gallery__title'>Photo Gallery</h1>
            <p className='gallery__text'>The photos from our events throughout the year.</p>
            {
                sections.nodes.map(({ title, description, photos }, i) => (
                    <section className='gallery__section' key={i}>
                        <h2 className='gallery__section-title'>{title}</h2>
                        {description && <p className='gallery__section-text'>{description}</p>}
                        <ul className='gallery__images'>
                            {
                                photos.map((props, i) => (
                                    <LazyImage key={i} {...props} />
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