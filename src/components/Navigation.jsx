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
            external
            menu {
                name
                path
            }
        }
    }
}
`;

const renderLink = ({
    external,
    path,
    name
}, setMobile) => {
    if (external) {
        return (
            <a
                onClick={ () => setMobile(false) }
                rel='noopener noreferrer'
                className='nav__link'
                target='_blank'
                href={path}
            >
                {name}
            </a>
        );
    }

    if (!path) {
        return <span className='nav__link'>{ name }</span>;
    }
    
    return (
        <Link
            to={ path } className='nav__link'
            activeClassName='nav__link--active'
            onClick={ () => setMobile(false) }
        >
            { name }
        </Link>
    );
}

export const Navigation = memo(({ light, isHomepage }) => {
    const { nav } = useStaticQuery(query);
    const [ mobile, setMobile ] = useState(false);
    const [ scrolled, setScrolled ] = useState(false);
    const containerClass = isHomepage ? 'homepage' : '';
    const iconClass = isHomepage ? 'nav__icon homepage' : 'nav__icon';
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
        } tag='nav' className={containerClass}>
            <Link to='/' className='nav__logo'>
                <Logo className={iconClass}/>
            </Link>
            <button onClick={ () => setMobile(!mobile) } className='nav__bars'>
                <div className='nav__bar nav__bar--top'/>
                <div className='nav__bar nav__bar--mid'/>
                <div className='nav__bar nav__bar--bot'/>
            </button>
            <ul className='nav__items'>
                {
                    nav.nodes.map(({ menu, ...args }, i) => (
                        <li key={ i } className='nav__item'>
                            { renderLink(args, setMobile) }
                            { menu && (
                                <ul className='nav__menu'>
                                    {
                                        menu.map((item, j, external) => (
                                            <li key={ j } className='nav__menu-item'>
                                            {external ? (
                                            <a 
                                                className='nav__menu-link' 
                                                activeClassName='nav__menu-link--active' 
                                                href={ item.path } rel='noopener noreferrer'
                                            >
                                                { item.name }
                                            </a>
                                            ) : <Link
                                                    to={ item.path } className='nav__menu-link'
                                                    activeClassName='nav__menu-link--active'
                                                    onClick={ () => setMobile(false) }
                                                >
                                                    { item.name }
                                                </Link>}
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