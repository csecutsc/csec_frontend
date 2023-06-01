import React from "react";
import { Container } from "@components";
import { graphql, useStaticQuery } from "gatsby";
import "@styles/pages/Team.scss";
import { Card } from "../components/pages/Team/Card";

const query = graphql`
  {
    sections: allStrapiDivision(sort: { fields: [order], order: ASC }) {
      nodes {
        title
        description
        executives {
          name
          title
          image {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          media {
            email
            website
            linkedin
            github
          }
        }
      }
    }
  }
`;

const TeamPage = () => {
  const { sections } = useStaticQuery(query);

  return (
    <Container tag="main" block="team">
      <h1 className="team__title">Our Team</h1>
      <p className="team__text">
        Our exceptional team of volunteer student leaders and lecturers are
        listed here.
      </p>
      <p className="team__text">
        Contact them individually, or leave a message through the contact form.
      </p>
      {sections.nodes.map(({ title, description, executives }, i) => (
        <section className="team__section" key={i}>
          <h2 className="team__section-title">{"Executive Team"}</h2>
          {description && (
            <p className="team__section-text">
              {"The current executive team of 2022-2023."}
            </p>
          )}
          <ul className="team__list">
            {executives.map((props, i) => (
              <Card key={i} {...props} />
            ))}
            <Card
              key={300}
              {...{
                name: "Nikhil L.",
                title: "President",
                media: {
                  email: "nikhil.lakhwanii@gmail.com",
                  website: "https://lakhwani.ca/",
                  linkedin: "https://www.linkedin.com/in/nlakhwani/",
                  github: "https://github.com/lakhwani",
                },
                image:
                  "https://media.licdn.com/dms/image/D5603AQH_zZ9gRf3KBw/profile-displayphoto-shrink_200_200/0/1672823287093?e=1691020800&v=beta&t=IOz7u1JYo-_2p-dV0xubuT6CFH47D2yReu6qOCcd1pM",
              }}
            ></Card>
          </ul>
        </section>
      ))}
    </Container>
  );
};

TeamPage.meta = {
  seo: {
    title: "Team",
  },
};

export default TeamPage;
