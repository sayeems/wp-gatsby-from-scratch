module.exports = {
  siteMetadata: {
    title: `bdgatsby`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-wordpress',
    options: {
      "url": "dev-ss-gatsby-test.pantheonsite.io/graphql"
    }
  }]
};