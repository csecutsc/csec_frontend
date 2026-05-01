import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Container } from '@components';
import { FaExternalLinkAlt, FaInstagram, FaChartBar, FaBullseye, FaShieldAlt } from 'react-icons/fa';
import '@styles/pages/Wealthvision.scss';

const WealthvisionPage = () => {
    return (
        <Container tag='main' block='wv' className='wv'>
            <div className='wv__hero'>
                <div className='wv__content'>
                    <h1>Platinum Sponsor: Wealthvision</h1>
                    <p className='wv__subtitle'>
                        Wealthvision is your complete personal finance dashboard designed to help you track spending, set budgets, and achieve your savings goals. 
                        Take control of your financial future today, available on iOS and Android.
                    </p>
                    <div className='wv__links'>
                        <a className='wv__link' href='https://wealthvision.cc/' target='_blank' rel='noopener noreferrer'>
                            Visit Website
                            <FaExternalLinkAlt className='wv__link-icon' />
                        </a>
                        <a className='wv__link' href='https://instagram.com/wealthvisioncc' target='_blank' rel='noopener noreferrer'>
                            Instagram
                            <FaInstagram className='wv__link-icon' />
                        </a>
                    </div>
                </div>
                <div className='wv__image-wrapper'>
                    <StaticImage src="../images/wealthvision_logo.png" imgStyle={{ height: 'auto', maxWidth: '300px' }} alt='Wealthvision Logo' />
                </div>
            </div>

            <div className='wv__section'>
                <h2>Everything You Need to Manage Money</h2>
                <p>
                    With powerful analytics and bank-level security, Wealthvision gives you complete visibility into your finances and helps you make smarter decisions.
                </p>
                <div className='wv__features'>
                    <div className='wv__feature-card'>
                        <h3><FaChartBar style={{ marginRight: '0.5rem', marginBottom: '-0.1rem' }} /> Smart Analytics</h3>
                        <p>Visualize spending by category with interactive charts and track your monthly trends to identify where your money goes.</p>
                    </div>
                    <div className='wv__feature-card'>
                        <h3><FaBullseye style={{ marginRight: '0.5rem', marginBottom: '-0.1rem' }} /> Goals & Budgets</h3>
                        <p>Set category budgets and track savings goals for vacations, emergencies, or big purchases with clear visual cues.</p>
                    </div>
                    <div className='wv__feature-card'>
                        <h3><FaShieldAlt style={{ marginRight: '0.5rem', marginBottom: '-0.1rem' }} /> Privacy First</h3>
                        <p>No banking credentials required. Your sensitive financial data is AES-256 encrypted and stored locally on your device.</p>
                    </div>
                </div>
            </div>

            <div className='wv__footer'>
                <p>
                    With their generous support, CSEC is able to bring you a better, more engaging experience, whether it's through tournaments, development jams, or our educational initiatives.
                </p>
            </div>
        </Container>
    );
};

WealthvisionPage.meta = {
    seo: {
        title: 'Wealthvision - Platinum Sponsor'
    }
}

export default WealthvisionPage;
