import React from 'react';
import { useBem } from '@util/Hooks';
import '@styles/components/Card.scss';

export const Card = ({ block, className, modifiers, as, children }) => {
    const Component = as || 'div';
    const cname = useBem(block, modifiers);
    return (
        <Component className={`card ${ cname }${ className ? ` ${ className }` : '' }`}>
            { children }
        </Component>
    )
}