import React, { useState, useCallback } from 'react';
import { useBem } from '../util';
import '@styles/components/Button.scss';

export const Button = ({
    onClick = () => {},
    className,
    noLoading,
    ...buttonProps
}) => {
    const [ loading, setLoading ] = useState(false);
    const name = useBem('button', [ loading && 'loading' ]);
    const click = useCallback(async () => {
        if (noLoading) return onClick();
        else {
            setLoading(true);
            await onClick();
            setLoading(false);
        }
    }, [ onClick, noLoading ]);

    return (
        <button
            className={`${ name }${ className ? ` ${ className }` : '' }`}
            onClick={ click } { ...buttonProps }
        />
    )
}