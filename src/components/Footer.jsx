import React, { memo } from 'react';
import { Container } from '.';
import '@styles/components/Footer.scss';
import { Link } from 'gatsby';

export const Footer = memo(({ items }) => {
    const [ first, others ] = items.reduce((acc, curr) => {
        acc[curr.menu ? 1: 0].push(curr);
        return acc;
    }, [[], []]);

    return (
        <Container tag='footer' block='footer'>
            <div className='footer__row'>
                <div className='footer__content'>
                    <h2 className='footer__title'>Computer Science Enrichment Club</h2>
                    <p className='footer__text'>
                        <span>1265 Military Trail</span> 
                        <span>Toronto, ON</span>
                        <span>M1C 1A4</span>
                    </p>
                </div>
                <div className='footer__menu'>
                    <h2 className='footer__menu-title'>Pages</h2>
                    <ul className='footer__menu-list'>
                    {
                        first.map(({ name, path }, i) => (
                            <li key={ i } className='footer__menu-item'>
                                <Link className='footer__link' to={ path }>{ name }</Link>
                            </li>
                        ))
                    }
                    </ul>
                </div>
                {
                    others.map(({ name, menu }, i) => (
                        <div key={ i } className='footer__menu'>
                            <p className='footer__menu-title'>{ name }</p>
                            <ul className='footer__menu-list'>
                                {
                                    menu.map((item, j) => (
                                        <li key={ j } className='footer__menu-item'>
                                            <Link className='footer__link' to={ item.path }>
                                                { item.name }
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
            </div>
            <div className='footer__row'>
                <p className='footer__aside footer__aside--push'>© CSEC 2019. All Rights Reserved</p>
                <p className='footer__aside'>
                    Made by Frederic Pun <span role='img' aria-label='Shiba Inu Emoji'>🐕</span>
                </p>
            </div>
        </Container>
    );
});