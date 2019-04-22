import React from 'react';
import { Container } from '@components';
import { graphql, useStaticQuery } from 'gatsby';
import '@styles/pages/Team.scss';
import { Card } from '../components/pages/Team/Card';

const query = graphql`
{
    sections: allTeamJson {
        nodes {
            title
            text
            members {
                name
                title
                image
                media {
                    email
                    website
                    linkedin
                    github
                }
            }
        }
    }
    images: allFile(filter: {
        relativeDirectory: {
            eq: "team"
        },

    }) {
        nodes {
            name
            childImageSharp {
                fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
}
`;

const TeamPage = () => {
    const { sections, images } = useStaticQuery(query);
    const hash = images.nodes.reduce((acc, { name, childImageSharp }) => {
        acc[name] = childImageSharp.fluid;
        return acc;
    }, {});
    
    return (
        <Container tag='main' block='team'>
            <h1 className='team__title'>Our Team</h1>
            <p className='team__text'>Our exceptional team of volunteer student leaders and lecturers are listed here.</p>
            <p className='team__text'>Contact them individually, or leave a message through the contact form.</p>
            {
                sections.nodes.map(({ title, text, members }, i) => (
                    <section className='team__section' key={ i }>
                        <h2 className='team__section-title'>{ title }</h2>
                        { text && <p className='team__section-text'>{ text }</p> }
                        <ul className='team__list'>
                            {
                                members.map((props, i) => (
                                    <Card key={ i } { ...props } image={ hash[props.image] }/>
                                ))
                            }
                        </ul>
                    </section>
                ))
            }
        </Container>
    );
};

TeamPage.meta = {
    seo: {
        title: 'Team'
    }
}

export default TeamPage;