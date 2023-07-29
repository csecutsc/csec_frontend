import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Card as Container } from '@components';
import { FaEnvelope, FaChrome, FaLinkedin, FaGithub } from 'react-icons/fa';
import '@styles/components/pages/Team/Card.scss';

const Icons = {
    email: FaEnvelope,
    website: FaChrome,
    linkedin: FaLinkedin,
    github: FaGithub
};

export const Card = ({ name, title, image, media }) => {
    return (
        <Container block='team__item'>
            <GatsbyImage image={ getImage(image) }/>
            <h3 className='team__item-name'>{ name }</h3>
            <p className='team__item-role'>{ title }</p>
            {
                media && (
                    <ul className='team__item-media'>
                        {
                            Object.entries(media).map(([ key, link ], i) => {
                                if (link) {
                                    const Icon = Icons[key];
                                    return (
                                        <a
                                            className='team__item-link'
                                            key={ i } href={ link }
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            <Icon/>
                                        </a>
                                    )
                                }
                                return
                            })
                        }
                    </ul>
                )
            }
        </Container>
    )
};