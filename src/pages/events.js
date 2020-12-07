import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Events from "../components/events";

const EventsPage = ({ data }) => {
  const {
    allStrapiEvent: { nodes: events },
  } = data;
  //'nodes: events' - destructuring out the data and rename 'nodes' to 'events' just to make it clearer
  // console.log("events page", events);

  return (
    <Layout>
      <div>
        <Events events={events} title="All Events" />
      </div>
    </Layout>
  );
};

export default EventsPage;

export const query = graphql`
  {
    allStrapiEvent(sort: { fields: published_at, order: DESC }) {
      nodes {
        featured
        id
        intro
        slug
        title
        mainPhoto {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
