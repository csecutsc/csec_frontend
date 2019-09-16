import React from 'react';
import { Card } from '../../Card';

export const LazyImage = ({
    url
}) => (
    <Card block='gallery__image-item' as='li'>
        <img
            className='gallery__image'
            width='600'
            height='400'
            src={url}
        />
    </Card>
);