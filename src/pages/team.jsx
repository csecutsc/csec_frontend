import React from "react";
import { Container } from "@components";
import { graphql, useStaticQuery } from "gatsby";
import "@styles/pages/Team.scss";
import { Card } from "../components/pages/Team/Card";

const query = graphql`
{
  sections: allTeamJson {
    nodes {
      title
      description
      executives {
        name
        title
        image {
          childImageSharp {
            gatsbyImageData(width: 500)
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
  // const { team, alumni } = useStaticQuery(query);
  // const images = useStaticQuery(query);

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
      {/* <p className="team__text">
        We are <a rel='noopener noreferrer' target='_blank' href='https://docs.google.com/forms/d/e/1FAIpQLSdY4hjj8nPAyp5T9SfCr1bVq6Cpj21LQugH2COq_Ay9rfJwDA/viewform?usp=sf_link'>hiring</a> for the 2024-2025 year!
      </p> */}

      {sections.nodes.map(({ title, description, executives }, i) => (
        <section className="team__section" key={i}>
          <h2 className="team__section-title">{title}</h2>
            <p className="team__section-text">
              {description}
            </p>
          <ul className="team__list">
            {executives.map((props, i) => (
              <Card key={i} {...props} />
            ))}
          </ul>
        </section>
      ))}

      {/* {
        <section className="team__section" key={1}>
          <h2 className="team__section-title">{"Executive Team"}</h2>
          {
            <p className="team__section-text">
              {"The current executive team of 2023-2024."}
            </p>
          }

          <ul className="team__list">
            {buildCards(team.nodes)}
            <Card
              key={1}
              {...{
                name: "Nikhil L.",
                title: "President",
                media: {
                  email: "nikhil.lakhwanii@gmail.com",
                  website: "https://lakhwani.ca/",
                  linkedin: "https://www.linkedin.com/in/nlakhwani/",
                  github: "https://github.com/lakhwani",
                },
                image: images["Nikhil"],
              }}
            ></Card>
            <Card
              key={2}
              {...{
                name: "Vincent Z.",
                title: "Executive Vice President",
                media: {
                  linkedin: "",
                  github: "",
                },
                image: images["Vincent"],
              }}
            ></Card>
          </ul>
        </section>
      } */}
    </Container>
  );
};
// "https://media.licdn.com/dms/image/D5603AQH_zZ9gRf3KBw/profile-displayphoto-shrink_200_200/0/1672823287093?e=1691020800&v=beta&t=IOz7u1JYo-_2p-dV0xubuT6CFH47D2yReu6qOCcd1pM",

TeamPage.meta = {
  seo: {
    title: "Team",
  },
};

export default TeamPage;


