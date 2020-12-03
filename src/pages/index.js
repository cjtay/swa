import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
// import SEO from "../components/seo"
import Events from "../components/events";

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
        <Link to="/page-2/">Go to page 2</Link> <br />
      </div>
    </Layout>
  );
};

export default Index;

export const query = graphql`
  {
    allStrapiEvent(filter: { featured: { eq: true } }) {
      nodes {
        description
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
