import { useState, useEffect } from 'react';

export const useBem = (block = '', modifiers = []) => {
    const [ className, setClassName ] = useState('');
    useEffect(() => {
        setClassName(`${ block }${modifiers.reduce((acc, curr) => (
            typeof(curr) === 'string' ? acc += ` ${block}--${curr}` : acc
        ), '')}`);
    }, [ block, ...modifiers ]);
    return className;
}

export const useEventSubscription = (events, { effect, dep = [] }) => {
    useEffect(() => {
        events.forEach(event => window.addEventListener(...event));
        const cleanup = effect();
        return () => {
            events.forEach(event => window.removeEventListener(...event));
            cleanup();
        }
    }, [ ...dep ]);
}