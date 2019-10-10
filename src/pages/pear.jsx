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
    placeholderImage: file(relativePath: { eq: "pear1.png" }) {
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
            <h1>CSEC - PEAR Impact Project</h1>
            <div className='about__row'>
                <div className='about__content'>
                    <p className='about__text'>
                        In a partnership with PEAR, first-year and second-year students will have the opportuinity in helping build an impactful project called the <b>Success Stories of New Canadians</b>, a website detailing the experiences of immigrants and refugees who have made Canada their home.
                    </p>
                    <p className='about__text'>
                    Help the world listen to the stories and perspectives of new Canadians, highlighting both their joys and struggles living in Canada for 5+ years
                    </p>
                    <p className='about__text'>
                        Also, learn about software engineering practices, project management and React so you can add it your resumes!
                    </p>
                    <p className='about__text about__text--secondary'>
                        <b>Sign up here!: <a className='alg__link' href='https://forms.gle/sgkqb56q2F9kNvYGA' target='_blank' rel='noopener noreferrer'>
                        https://forms.gle/sgkqb56q2F9kNvYGA
                <FaExternalLinkAlt className='alg__link-icon' />
                        </a></b>
                    </p>
                    <h4>Client</h4>
                    <p>
                        <b>Azhar Laher.</b> A father and husband, social entrepreneur, sports nut, teacher and business coach. 
                        He is deeply concerned about social justice issues. 
                        He has worked in the Human Resources industry for over 25 years and held senior human resources positions in both South Africa and Canada, focusing on strategic planning, total rewards, employee relations and diversity. 
                        He is currently Professor of Human Resources in the School of Leadership and Human Resources at Seneca College in Toronto. 
                    </p>
                    <h4>Partner</h4>
                    <p>
                        <b>PEAR</b> is a platform where nonprofits can post freelance projects for university students to complete.
                        These projects target a specific skill set, such as graphic design, software development (web development, automation), consulting, marketing etc. 
                    </p>
                </div>
                <Img className='alg__image' fluid={placeholderImage.childImageSharp.fluid} imgStyle={{ height: 'auto' }} />
            </div>

            <h2 className='about__title'>More Information coming soon!</h2>
            <div>
            </div>
        </Container>
    );
};

AlgorithmsPage.meta = {
    seo: {
        title: 'CSEC - PEAR Impact Project with PEAR',
        description: 'In a partnership with PEAR, first-year and second-year students will have the opportuinity in helping build an impactful project called the <b>Success Stories of New Canadians</b>, a website detailing the experiences of immigrants and refugees who have made Canada their home.',
    }
}

export default AlgorithmsPage;