import React, { Fragment } from 'react';
import { Seo, Navigation, Footer } from '@components';
import '@styles/index.scss';

const Layout = ({ location, children, pageResources = {} }) => {
    const { meta = {} } = pageResources.component || {};
    const isHome = location.pathname === '/';

    return (
        <Fragment>
            <Seo { ...meta.seo }/>
            <Navigation isHomepage={ isHome } light={ meta.light }/>
            { children }
            <Footer/>
        </Fragment>
    );
};

export default Layout;