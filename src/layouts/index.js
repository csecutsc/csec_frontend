import React, { Fragment } from 'react';
import { Seo, Navigation, Footer } from '@components';
import '@styles/index.scss';

const nav = [
    { name: 'About', path: '/about' },
    { name: 'Divisions', menu: [
        { name: 'Algorithms', path: '/a' },
        { name: 'Web Development', path: '/w' }
    ] },
    { name: 'Team', path: '/team' },
    { name: 'Events', path: '/events' },
    { name: 'Contact', path: '/contact' },
    { name: 'Resources', path: '/resources' },
    { name: 'More', menu: [
        { name: 'Archive', path: '/archive' }
    ] }
];

const Layout = ({ children, pageResources = {} }) => {
    return (
        <Fragment>
            <Seo { ...(pageResources.component || {}).seo }/>
            <Navigation items={ nav }/>
            { children }
            <Footer items={ nav }/>
        </Fragment>
    );
};

export default Layout;