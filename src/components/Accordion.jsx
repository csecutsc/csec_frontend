import React, { useReducer, useCallback } from 'react';
import { useBem } from '@utils/Hooks';
import '@styles/components/Accordion.scss';

const reducer = (state, { index, multiple }) => {
    if (!multiple) {
        state.
    }
    state.data[index].active = !state.data[index].active;
    return { ...state };
}

export const Accordion = ({ className, block, modifiers, multiple, data = [] }) => {
    const bem = useBem(block, modifiers);
    const [ content, dispatch ] = useReducer(reducer, { data });
    const cname = `accordion${ bem }${ className ? ` ${ className }` : '' }`;
    const select = useCallback(({ target }) => {
        dispatch({ index: target.getAttribute('data-index'), multiple });
    }, [ multiple ]);

    return (
        <ul className={ cname }>
            {
                data.map(({ title, render }, i) => {
                    const isActive = content.data[i] ? ' accordion__content--active' : '';
                    return (
                        <li className='accordion__item'>
                            <p onClick={ select } className='accordion__title'>{ title }</p>
                            <div data-index={ i } className={`accordion__content${ isActive }`}>
                                { render }
                            </div>
                        </li>
                    );
                })
            }
        </ul>
    );
}