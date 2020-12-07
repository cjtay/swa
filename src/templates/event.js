import React from "react";
import Layout from "../components/layout";
import Image from "gatsby-image";

const EventPage = ({ data }) => {
  const { strapiEvent: event } = data;
  console.log(event);
  return (
    <Layout>
      <h1>{event.title}</h1>
      <p>{event.description}</p>
      <p>{event.published_at}</p>
      {event.mainPhoto && (
        <Image
          fluid={event.mainPhoto.childImageSharp.fluid}
          alt={event.title}
        />
      )}
    </Layout>
  );
};

export default EventPage;

export const query = graphql`
  query SingleEvent($slug: String) {
    strapiEvent(slug: { eq: $slug }) {
      id
      description
      slug
      title
      published_at(formatString: "MMM Do YYYY")
      mainPhoto {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;
