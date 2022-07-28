module.exports = {
  siteMetadata: {
    title: `bdgatsby`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "https://dev-ss-gatsby-test.pantheonsite.io/graphql",
      },
    },
  ],
};
