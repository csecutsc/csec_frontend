import React from 'react';
import { Card } from '../../Card';

export const LazyImage = ({
    url
}) => {
    if (url.includes("cloudinary")) {
        const urlList = url.split("/");
        const linkEnd = urlList.pop()
        const linkFolder = urlList.pop()
        console.log(">>>>>>>>>>>>>>");
        console.log(linkFolder);
        console.log(linkEnd);
        url = `https://res.cloudinary.com/dwopjv0lk/image/upload/w_600,c_scale/${linkFolder}/${linkEnd}`
    }
    return (
    <Card block='gallery__image-item' as='li'>
        <img
            className='gallery__image'
            width='600'
            height='400'
            src={url}
            alt='gallery'
        />
    </Card>
)};