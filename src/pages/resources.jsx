import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Container, Card } from '@components';
import { FaExternalLinkAlt } from 'react-icons/fa';
import '@styles/pages/Resources.scss';
import { GeneralFaq } from '../components/pages/Resources';

const query = graphql`
{
    resources: allStrapiResource {
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
    }
}
`;

const buildList = ({ text, link, aside, title, items }, key, level = 4) => {
    const Tag = 'h' + level;
    return !items ? (
        <li className='res__item' key={ key }>
            <a className='res__link' href={ link } target='_blank' rel='noopener noreferrer'>
                { text }
                <FaExternalLinkAlt className='res__link-icon'/>
            </a>
            <p className='res__aside'>{ aside }</p>
        </li>
    ) : (
        <li className='res__item' key={ key }>
            <Tag>{ title }</Tag>
            <ul className={`res__list${ items[0].items ? ' res__list--list' : '' }`}>
                { items.map((item, k) => buildList(item, k, ++level)) }
            </ul>
        </li>
    )
};

const ResourcesPage = () => {
    const { resources } = useStaticQuery(query);
    return (
        <Container tag='main' block='res'>
            <h1>Resources</h1>
            <p className='res__subtitle'>
                A currated list of resources to cater to all skill levels.
                Whether you're in Computer Science, Math, Stats or any other major, we got something for everyone!
            </p>
            <p className='res__subtitle'>
                Below we have a list of our resources, suggested resources and a FAQ for projects.  Items marked with a Star (*) are especially recommended.
            </p>
            <h2>Categories</h2>
            <ul className='res__cards'>
                {
                    resources.nodes.map(({ title, items }, i) => (
                        <Card key={ i } block='res__card' as='li'>
                            <h3 className='res__title'>{ title }</h3>
                            <ul className={`res__list${ items[0].items ? ' res__list--list' : '' }`}>
                                { items.map((item, key) => buildList(item, key)) }
                            </ul>
                        </Card>
                    ))
                }
            </ul>
            <h2>General FAQ</h2>
            <GeneralFaq/>
        </Container>
    );
};

ResourcesPage.meta = {
    seo: {
        title: 'Resources'
    }
}

export default ResourcesPage;