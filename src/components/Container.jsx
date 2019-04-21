import React, { forwardRef } from 'react';
import '@styles/components/Container.scss';
import { useBem } from '../util';

export const Container = forwardRef(({ className, block, modifiers, children, tag = 'div' }, ref) => {
    const container = `${ block }${ block.includes('__') ? '-' : '__' }container`;
    const cname = className ? ` ${ className }` : '';
    const name = useBem(block, modifiers);
    const Component = tag;
    return (
        <Component ref={ ref } className={`container${ name ? ` ${ name }` : '' }${ cname }`}>
            <div className={`container__content ${ container }`}>
                { children }
            </div>
        </Component>
    );
});