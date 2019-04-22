import React, { Fragment } from 'react';
import { Seo, Navigation, Footer } from '@components';
import '@styles/index.scss';

const Layout = ({ children, pageResources = {} }) => {
    const { meta = {} } = pageResources.component || {};
    return (
        <Fragment>
            <Seo { ...meta.seo }/>
            <Navigation light={ meta.light }/>
            { children }
            <Footer/>
        </Fragment>
    );
};

export default Layout;