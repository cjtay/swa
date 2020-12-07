const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query getEvents {
      allStrapiEvent {
        nodes {
          slug
        }
      }
    }
  `);
  //   console.log("events: ", JSON.stringify(result));
  result.data.allStrapiEvent.nodes.forEach(event => {
    createPage({
      path: `/event-blogs/${event.slug}`,
      component: path.resolve(`src/templates/event.js`),
      context: { slug: event.slug },
    });
  });
};
