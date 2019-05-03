import React, { memo, useEffect, useState } from 'react';
import '@styles/components/Navigation.scss';
import { Container } from './Container';
import Logo from "@images/Logo.svg";
import { Link, useStaticQuery, graphql } from 'gatsby';

const query = graphql`
{
    nav: allNavigationJson {
        nodes {
            name
            path
            menu {
                name
                path
            }
        }
    }
}
`;

export const Navigation = memo(({ light }) => {
    const { nav } = useStaticQuery(query);
    const [ mobile, setMobile ] = useState(false);
    const [ scrolled, setScrolled ] = useState(false);
    useEffect(() => {
        const handler = () => {
            if (scrolled && !window.scrollY) setScrolled(false);
            else if (!scrolled && window.scrollY) setScrolled(true);
        };
        window.addEventListener('scroll', handler, { passive: true });
        return () => {
            window.removeEventListener('scroll', handler, { passive: true });
        }
    }, [ scrolled ]);

    return (
        <Container block='nav' modifiers={
            [ scrolled && !mobile && 'scrolled', (light || mobile) && 'light', mobile && 'show' ]
        } tag='nav'>
            <Link to='/' className='nav__logo'>
                <Logo className='nav__icon'/>
            </Link>
            <button onClick={ () => setMobile(!mobile) } className='nav__bars'>
                <div className='nav__bar nav__bar--top'/>
                <div className='nav__bar nav__bar--mid'/>
                <div className='nav__bar nav__bar--bot'/>
            </button>
            <ul className='nav__items'>
                {
                    nav.nodes.map(({ name, path, menu }, i) => (
                        <li key={ i } className='nav__item'>
                            {
                                path ? (
                                    <Link
                                        to={ path } className='nav__link'
                                        activeClassName='nav__link--active'
                                        onClick={ () => setMobile(false) }
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
                                                    onClick={ () => setMobile(false) }
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