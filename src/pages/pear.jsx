import React from 'react';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import { Container } from '@components';
import { FaExternalLinkAlt } from 'react-icons/fa';
import '@styles/pages/Algorithms.scss';

const query = graphql`
{
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

const AlgorithmsPage = () => {
    const { placeholderImage } = useStaticQuery(query);
    return (
        <Container tag='main' block='alg'>
            <h1>CSEC - PEAR Impact Project</h1>
            <div className='about__row'>
                <div className='about__content'>
                    <p className='about__text'>
                        In a partnership with PEAR, first-year and second-year students will have the opportuinity in helping build an impactful project called the <b>Success Stories of New Canadians</b>, a website detailing the experiences of immigrants and refugees who have made Canada their home.
                    </p>
                    <p className='about__text'>
                        Help the world listen to the stories and perspectives of new Canadians, highlighting both their joys and struggles living in Canada for 5+ years.
                    </p>
                    <p className='about__text'>
                        Also, learn about software engineering practices, project management and React so you can add it on your resumes!
                    </p>
                    <p className='about__text about__text--secondary'>
                        <b>On Friday Jan 10 in IC200 from 5 - 7pm, we will announce the winners of the competition. <br></br> Thank you to all the competitors of this project! You have all went above and beyond to create an impact in your community.<br></br> <br></br>Project Details and Requirements: <a className='alg__link' href='https://github.com/csecutsc/csec_files/blob/master/pear/CSEC-PEAR-Project-Requirements.pdf' target='_blank' rel='noopener noreferrer'>
                            Requirements PDF
                <FaExternalLinkAlt className='alg__link-icon' />
                        </a> <a className='alg__link' href='https://csec.club/seminars' target='_blank' rel='noopener noreferrer'>
                                Seminar Slides
                <FaExternalLinkAlt className='alg__link-icon' />
                            </a>

                        </b>
                    </p>
                    <h4>Teams</h4>
                    <p>
                        <b>Team 2.</b> Dubem, Henry, Mitra, Sameer, William <br></br>
                        <b>Team 4.</b> Colin, Daniel, Jesse<br></br>
                        <b>Team 6.</b> Keshavaa<br></br>
                    </p>
                    <h4>Client</h4>
                    <p>
                        <b>Azhar Laher.</b> A father and husband, social entrepreneur, sports nut, teacher and business coach.
                        He is deeply concerned about social justice issues.
                        He has worked in the Human Resources industry for over 25 years and held senior human resources positions in both South Africa and Canada, focusing on strategic planning, total rewards, employee relations and diversity.
                        He is currently Professor of Human Resources in the School of Leadership and Human Resources at Seneca College in Toronto.
                    </p>
                    <h5>Contact: <a className='footer__link' href="mailto:azhar.laher@gmail.com" target='_blank' rel='noopener noreferrer'>
                    azhar.laher@gmail.com
                   
                                        </a></h5>
                    <h4>Partner</h4>
                    <p>
                        <b>PEAR</b> is a platform where nonprofits can post freelance projects for university students to complete.
                        These projects target a specific skill set, such as graphic design, software development (web development, automation), consulting, marketing, ... etc.
                    </p>
                    <h5>Contact: <a className='footer__link' href="mailto:pear.students@gmail.com" target='_blank' rel='noopener noreferrer'>
                    pear.students@gmail.com
                                        </a></h5>
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