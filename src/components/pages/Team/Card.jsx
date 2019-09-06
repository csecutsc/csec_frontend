import React from 'react';
import Img from 'gatsby-image';
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
            <Img fluid={ image.childImageSharp.fluid }/>
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
                            })
                        }
                    </ul>
                )
            }
        </Container>
    )
};