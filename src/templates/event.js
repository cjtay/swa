import React from "react";
import ReactMarkdown from "react-markdown";
import Layout from "../components/layout";
import Image from "gatsby-image";

const EventPage = ({ data }) => {
  const { strapiEvent: event } = data;
  console.log(event);
  return (
    <Layout>
      <div className="container container-center">
        <h1>{event.title}</h1>
        {event.mainPhoto && (
          <Image
            fluid={event.mainPhoto.childImageSharp.fluid}
            alt={event.title}
            className="main-photo"
          />
        )}
        <div className="event-description">
          <ReactMarkdown source={event.description} />
        </div>
      </div>
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
