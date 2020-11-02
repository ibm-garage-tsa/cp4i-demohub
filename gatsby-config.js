module.exports = {
  siteMetadata: {
    title: 'DemoHub - Cloud Pak for Integration',
    description: 'DemoHub - Cloud Pak for Integration',
    keywords: 'ibm,mcm,carbon',
  },
  plugins: ['gatsby-theme-carbon',
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'data',
        path: './src/data'
      },
      resolve: 'gatsby-theme-carbon',
      options: {
        iconPath: './src/images/custom-icon-512.png',
        isSearchEnabled: true,
        repository: {
          baseUrl:
            'https://ibm-garage-tsa.github.io/cp4i-demohub',
          subDirectory: '/',
        },
      },
    }
  ],
  pathPrefix: "/cp4i-demohub/",
};
