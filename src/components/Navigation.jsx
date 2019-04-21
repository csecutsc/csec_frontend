import React, { memo, useEffect, useState } from 'react';
import '@styles/components/Navigation.scss';
import { Container } from './Container';
import Img from 'gatsby-image';
import { Link, useStaticQuery } from 'gatsby';

const query = graphql`
    {
        placeholderImage: file(relativePath: { eq: "Logo.png" }) {
            childImageSharp {
                fixed(width: 30, height: 30) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`;

export const Navigation = memo(({ items }) => {
    const { placeholderImage } = useStaticQuery(query);
    const [ scrolled, setScrolled ] = useState(false);
    useEffect(() => {
        if (scrolled) {
            const handler = () => !window.scrollY && setScrolled(false);
            window.addEventListener('scroll', handler, { passive: true });
            return () => {
                window.removeEventListener('scroll', handler, { passive: true });
            }
        } else {
            const handler = () => window.scrollY && setScrolled(true);
            window.addEventListener('scroll', handler, { passive: true });
            return () => {
                window.removeEventListener('scroll', handler, { passive: true });
            }
        }
    }, [ scrolled ]);
    return (
        <Container block='nav' modifiers={[ scrolled && 'scrolled' ]} tag='nav'>
            <Link to='/' className='nav__logo'>
                <Img fixed={ placeholderImage.childImageSharp.fixed }/>
            </Link>
            <ul className='nav__items'>
                {
                    items.map(({ name, path, menu }, i) => (
                        <li key={ i } className='nav__item'>
                            {
                                path ? (
                                    <Link
                                        to={ path } className='nav__link'
                                        activeClassName='nav__link--active'
                                    >
                                        { name }
                                    </Link>
                                ) : <span className='nav__link'>{ name }</span>
                            }
                            { menu && (
                                <ul className='nav__menu'>
                                    {
                                        menu.map((item, j) => (
                                            <li key={ j } className='nav__menu-item'>
                                                <Link
                                                    to={ item.path } className='nav__menu-link'
                                                    activeClassName='nav__menu-link--active'
                                                >
                                                    { item.name }
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            ) }
                        </li>
                    ))
                }
            </ul>
        </Container>
    );
});