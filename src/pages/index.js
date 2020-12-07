import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
// import SEO from "../components/seo"
import Events from "../components/events";
import { parsePath } from 'gatsby-link';

const Index = ({ data }) => {
  const {
    allStrapiEvent: { nodes: events },
  } = data;
  console.log(events); //destructuring out the data and rename 'nodes' to 'events' just to make it clearer

  return (
    <Layout>
      <div className="container container-center">
        <h1>SWA Web Design Project</h1>
        <Events events={events} title="Higlights" />
        <p>this was updated from macbook</p>
      </div>
      
      
    </Layout>
  );
};

export default Index;

export const query = graphql`
  {
    allStrapiEvent(
      filter: { featured: { eq: true } }
      limit: 3
      sort: { fields: updated_at, order: DESC }
    ) {
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

