module.exports = {
  siteMetadata: {
    title: `bdgatsby`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "https://live-sayeems-gql-cache-playground.pantheonsite.io/graphql",
      },
    },
  ],
};
