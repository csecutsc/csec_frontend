import React, { Children, useReducer, useCallback } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { useBem } from '@util/Hooks';
import '@styles/components/Accordion.scss';

const reducer = (state, { index, multiple }) => {
    if (!multiple && state.last !== index && state.last !== undefined) {
        state.data[state.last] = false;
    }
    state.data[index] = !state.data[index];
    state.last = index;
    return { ...state };
};

export const Accordion = ({ className, block, modifiers, multiple, children }) => {
    children = Children.toArray(children);
    const [ content, dispatch ] = useReducer(reducer, { data: children.map(() => false) });

    const bem = useBem(block, modifiers);
    const cname = `accordion${ bem }${ className ? ` ${ className }` : '' }`;

    const select = useCallback(({ target }) => {
        console.log('REEE');
        dispatch({ index: target.getAttribute('data-index'), multiple });
    }, [ multiple ]);

    return (
        <ul className={ cname }>
            {
                children.map((item, i) => {
                    const isActive = content.data[i] ? ' accordion__item--active' : '';
                    return (
                        <li key={ i } className={`accordion__item${ isActive }`}>
                            <p data-index={ i } onClick={ select } className='accordion__label'>
                                { item.props.label }
                                <FaAngleDown className='accordion__icon'/>
                            </p>
                            <div className='accordion__content-wrapper'>
                                <div className='accordion__content'>
                                    { item }
                                </div>
                            </div>
                        </li>
                    );
                })
            }
        </ul>
    );
};