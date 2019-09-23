import React from 'react';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import { Container, Card } from '@components';
import { FaExternalLinkAlt } from 'react-icons/fa';
import '@styles/pages/Algorithms.scss';

const query = graphql`
{
    algresources: allStrapiResource {
        nodes {
            title
            items {
                text
                link
                aside
                title
                items {
                    text
                    link
                }
            }
        }
    },
    placeholderImage: file(relativePath: { eq: "ICPCLogo.png" }) {
        childImageSharp {
            fluid(maxHeight:700) {
                ...GatsbyImageSharpFluid
                presentationWidth
            }
        }
    }
}
`;

const buildList = ({ text, link, aside, title, items }, key, level = 4) => {
    const Tag = 'h' + level;
    return !items ? (
        <li className='alg__item' key={key}>
            <a className='alg__link' href={link} target='_blank' rel='noopener noreferrer'>
                {text}
                <FaExternalLinkAlt className='alg__link-icon' />
            </a>
            <p className='alg__aside'>{aside}</p>
        </li>
    ) : (
            <li className='alg__item' key={key}>
                <Tag>{title}</Tag>
                <ul className={`alg__list${items[0].items ? ' alg__list--list' : ''}`}>
                    {items.map((item, k) => buildList(item, k, ++level))}
                </ul>
            </li>
        )
};

const AlgorithmsPage = () => {
    const { algresources, placeholderImage } = useStaticQuery(query);
    return (
        <Container tag='main' block='alg'>
            <h1>UTSC ACM-ICPC</h1>
            <div className='about__row'>
                <div className='about__content'>
                    <p className='about__text'>
                        ICPC is an algorithmic programming challenge that universities around the world participate in. Join fellow competitive programming enthusiasts who are seeking to take up challenging algorithmic coding competitions and represent UTSC.
                    </p>
                    <p className='about__text'>
                        Our qualification round is going to be on Saturday, October 5th 2:00 PM - 7:00 PM, Room TBD. <a className='alg__link' href='https://l.facebook.com/l.php?u=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLSc8n6Mm2QEbd9Hau7ipdhrj0N9O8Wgf0pDO54xQK71rFtisDg%2Fviewform%3Ffbclid%3DIwAR1UZiHHco4nKI5ouC1qP8VVN2rVgVkFUeQiIKBY4WoacVz9P_hAtkhFxmc&h=AT3OL3wmp9Q76gutavZ-fpDhDFjwfWbzSSQQqnXYZCTBpzJaJbIpvDgYNvyXaZ3oyajl5i6zl80jUme9qsIAy11DWZhjmzbOgQAdSfWipu2_sYt6sUuJvRIw5My6C29e0t9fV5imMZm7AsfbqalmVFIFboxDa4Ojjm1yjlyX7YMAaYzcT_i_I_LfyiwhIHIsCzyzf7wVyyG7Qq319oozapyEWBDAl4fITnEuJaitY7kfbbX002GXNGXSnxtUHgznLF5bkdMiUyr81_bWczZFR321NfUk5O-KQndWkGm4YPC9MOSsF6MFBzA9cpyVmhkYz6JHYsFc5TaewcFsjCjE493HqOoakUvlfXP_UBDffgBAqZSBITquRjZaW1KQJBlKC5PaKsCxnGd_VQ-d0r21DUfhULYLjxp14PmxAxzQN6U3nBy1Nq4usbNdM0ax-arDqFEwS_9o4QzcTFGc6QeQsy3Q-q0lDZLDE9Mtc55ebq8sH9uVzVbbgcmIoxYttcyzS-ouhavyng8Eea2NsUEDN-2U6Uf_5TNdmiFAnTnKOJnhp8b0ygO26qukepqht7f9VhlDpN-Cm2psqda7xb0tAS0eMqQwJwafuGVDt8Gn2uI5EbMHnamwXhO0R_veYPW_BSofnIBxkuXfQIqHwpHV6A' target='_blank' rel='noopener noreferrer'>
                            Click here to signup!
                    <FaExternalLinkAlt className='alg__link-icon' /></a>
                    </p>
                    <p className='about__text about__text--secondary'>
                        About ACM ICPC: <a className='alg__link' href='https://icpc.baylor.edu/' target='_blank' rel='noopener noreferrer'>
                            https://icpc.baylor.edu/
                <FaExternalLinkAlt className='alg__link-icon' />
                        </a>
                    </p>
                    <h4>Organizer</h4>
                    <p>
                        Prof. Brian Harrington, email: bharrington [at] utsc [dot] utoronto [dot] ca <br></br>
                    </p>
                    <h4>Coach</h4>
                    <p>
                        Prof. Albert Lai, email: trebla [at] cs [dot] toronto [dot] edu
                    </p>
                    <h4>Assistant Coach</h4>
                    <p>
                        Anh Le, email: ioanh [dot] le @mail [dot] utoronto [dot] ca
                    </p>
                </div>
                <Img className='alg__image' fluid={placeholderImage.childImageSharp.fluid} imgStyle={{ height: 'auto' }} />
            </div>

            <h2 className='about__title'>Previous ECNA Rounds</h2>

            <div>
                <h4>2016 Team <a className='alg__link' href='https://ecna16.kattis.com/standings' target='_blank' rel='noopener noreferrer'>
                    Results
                <FaExternalLinkAlt className='alg__link-icon' />
                </a></h4>
                <p>
                    Rhys, Tudor, Jason, Omar, Ousmane, Vishwa
                </p>
                <h4>2017 Team <a className='alg__link' href='https://ecna17.kattis.com/standings' target='_blank' rel='noopener noreferrer'>
                    Results
                <FaExternalLinkAlt className='alg__link-icon' />
                </a></h4>
                <p>
                    William, Akshay, Rhys, Omar, Jerry, Jon
                </p>
                <h4>2018 Team <a className='alg__link' href='https://ecna18.kattis.com/standings' target='_blank' rel='noopener noreferrer'>
                    Results
                <FaExternalLinkAlt className='alg__link-icon' />
                </a></h4>
                <p>
                    Jerry, Omar, Keegan, Jon, Alon, Jason
                </p>
            </div>
        </Container>
    );
};

AlgorithmsPage.meta = {
    seo: {
        title: 'ACM-ICPC'
    }
}

export default AlgorithmsPage;