import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PageLinks from "../contants/links";
import { FaAlignRight } from "react-icons/fa";
import Image from "gatsby-image";

const Navbar = ({ toggleSidebar }) => {
  const data = useStaticQuery(getNavData);
  console.log("file: ", data.file.childImageSharp.fluid);

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <div className="logo-img">
            <Image fluid={data.file.childImageSharp.fluid} alt="swa logo" />
          </div>

          <button type="button" className="toggle-btn">
            <FaAlignRight />
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  );
};

export default Navbar;

export const getNavData = graphql`
  {
    file(
      sourceInstanceName: { eq: "images" }
      publicURL: {}
      relativePath: { eq: "logo.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
