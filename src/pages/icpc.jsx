import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Container } from '@components';
import { FaExternalLinkAlt } from 'react-icons/fa';
import '@styles/pages/Algorithms.scss';

const AlgorithmsPage = () => {
    return (
        <Container tag='main' block='alg'>
            <h1>UTSC ICPC</h1>
            <div className='about__row'>
                <div className='about__content'>
                    <p className='about__text'>
                        ICPC is an algorithmic programming challenge that universities around the world participate in. Join fellow competitive programming enthusiasts who are seeking to take up challenging algorithmic coding competitions and represent UTSC.
                    </p>
                    <p className='about__text about__text--secondary'>
                        About ICPC: <a className='alg__link' href='https://icpc.baylor.edu/' target='_blank' rel='noopener noreferrer'>
                            https://icpc.baylor.edu/
                <FaExternalLinkAlt className='alg__link-icon' />
                        </a>
                    </p>
                    <p className='about__text about__text--secondary'>
                        <b>Results to 2021 NA Divison Championships:</b>
                        {" "}
                        <a className='alg__link' href='https://nadc21.kattis.com/standings?filter=3555' target='_blank' rel='noopener noreferrer'>
                            Results
                            <FaExternalLinkAlt className='alg__link-icon' />
                        </a>
                        <br/>
                        Congradulations to UTSC A for passing NADC and making it into the ICPC North America Championships!
                    </p>
                    <p>
                        UTSC-A: Koichi Namekata, Benjamin Chisslett, Noor Nasri.
                        <br/>
                        UTSC-B: Malha Pandya, Sam Prokopchuk, Sasha Voitovych
                    </p>
                    <p className='about__text about__text--secondary'>
                        <b>Results to 2020 East Central NA Regional Contest:</b>
                        {" "}
                        <a className='alg__link' href='https://ecna20.kattis.com/standings' target='_blank' rel='noopener noreferrer'>
                            Results
                            <FaExternalLinkAlt className='alg__link-icon' />
                        </a>
                    </p>
                    <p>
                        UTSC-A: Koichi Namekata, Benjamin Chisslett, Noor Nasri.
                        <br/>
                        UTSC-B: Malha Pandya, Sam Prokopchuk, Sasha Voitovych
                    </p>
                    <p className='about__text about__text--secondary'>
                        Our ICPC friends at UofT St. George (Check out their individual practice resources!): <a className='alg__link' href='https://www.teach.cs.toronto.edu//~acm/#' target='_blank' rel='noopener noreferrer'>
                        https://www.teach.cs.toronto.edu//~acm/#
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
                        Anh Le, email: ioanh [dot] le [at] mail [dot] utoronto [dot] ca
                    </p>
                </div>
                <StaticImage className='alg__image' src="../images/ICPCLogo.png" imgStyle={{ height: 'auto' }} />
            </div>

            <h2 className='about__title'>Previous ECNA Rounds</h2>
            <div>
                <h4>2019 Team <a className='alg__link' href='https://ecna19.kattis.com/standings' target='_blank' rel='noopener noreferrer'>
                    Results
                <FaExternalLinkAlt className='alg__link-icon' />
                </a></h4>
                <p>
                    UTSC-A: Omar, Jerry. UTSC-B: Jason, Alon, Ziheng
                </p>
                <h4>2018 Team <a className='alg__link' href='https://ecna18.kattis.com/standings' target='_blank' rel='noopener noreferrer'>
                    Results
                <FaExternalLinkAlt className='alg__link-icon' />
                </a></h4>
                <p>
                    Jerry, Omar, Keegan, Jon, Alon, Jason
                </p>
                <h4>2017 Team <a className='alg__link' href='https://ecna17.kattis.com/standings' target='_blank' rel='noopener noreferrer'>
                    Results
                <FaExternalLinkAlt className='alg__link-icon' />
                </a></h4>
                <p>
                    William, Akshay, Rhys, Omar, Jerry, Jon
                </p>
                <h4>2016 Team <a className='alg__link' href='https://ecna16.kattis.com/standings' target='_blank' rel='noopener noreferrer'>
                    Results
                <FaExternalLinkAlt className='alg__link-icon' />
                </a></h4>
                <p>
                    Rhys, Tudor, Jason, Omar, Ousmane, Vishwa
                </p>

            </div>
            <h2 className='about__title'>Resources</h2>
            <div>
                <h4> <a className='alg__link' href='https://csecutsc.github.io/csec_site/a/' target='_blank' rel='noopener noreferrer'>
                    Legacy CSEC Algorithms ICPC Resources
                <FaExternalLinkAlt className='alg__link-icon' />
                </a></h4>
            </div>
        </Container>
    );
};

AlgorithmsPage.meta = {
    seo: {
        title: 'UTSC ACM-ICPC',
        description: 'Join fellow UTSC competitive programming enthusiasts who are seeking to take up challenging algorithmic coding competitions and represent our campus. ICPC is an algorithmic programming challenge that universities around the world participate in.',
    }
}

export default AlgorithmsPage;
