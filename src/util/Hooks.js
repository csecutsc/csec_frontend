import { useState, useEffect, useReducer } from 'react';

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

const fetchReducer = (state, data) => ({ ...state, ...data });

export const useFetch = (url, config = {}) => {

    const [store, dispatch] = useReducer(fetchReducer, {
        data: config.initState,
        loading: true,
        error: false,
    });

    useEffect(() => {
        let mounted = true;
        (async () => {
            try {
                const data = await (
                    await fetch(url, config.requestInit)
                ).json();

                if (mounted) {
                    dispatch({
                        loading: false,
                        data,
                    });
                }
            } catch (error) {
                console.error(error);
                if (mounted) {
                    dispatch({
                        error,
                    });
                }
            }
        })();
        return () => {
            mounted = false;
        }
    }, [ url, config.requestInit ]);

    return { ...store };
}