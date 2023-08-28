import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
{
    site {
        siteMetadata {
            title
            keywords
            description
            author
            themeColor
        }
    }
}
`;

export const Seo = ({ description, lang, meta, title }) => {
    const { site } = useStaticQuery(query);
    const metaDescription = description || site.siteMetadata.description;
    const metaTitle = title || site.siteMetadata.title;
    const metaTitleTemplate = title ? `%s | ${site.siteMetadata.title}` : ''
    return (
        <Helmet
            htmlAttributes={{ lang }}
            title={metaTitle}
            titleTemplate={metaTitleTemplate}
            meta={[
                {
                    name: 'description',
                    content: metaDescription,
                },
                {
                    property: 'og:title',
                    content: metaTitle,
                },
                {
                    property: 'og:description',
                    content: metaDescription,
                },
                {
                    property: 'og:type',
                    content: 'website',
                },
                {
                    name: 'twitter:card',
                    content: 'summary',
                },
                {
                    name: 'twitter:creator',
                    content: site.siteMetadata.author,
                },
                {
                    name: 'twitter:title',
                    content: metaTitle,
                },
                {
                    name: 'twitter:description',
                    content: metaDescription,
                },
                {
                    name: 'keywords',
                    content: site.siteMetadata.keywords.join(', '),
                },
                {
                    name: 'theme-color',
                    content: site.siteMetadata.themeColor
                },
            ].concat(meta)}
        />
    );
};

Seo.defaultProps = {
    lang: 'en',
    meta: [],
    description: '',
};

Seo.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    keywords: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string.isRequired,
    themeColor: PropTypes.string
};
