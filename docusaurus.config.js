const remarkImages = require('remark-images');
const rehypeTruncate = require('rehype-truncate');

module.exports = {
  title: "Amido Stacks",
  tagline:
    "Helping projects gain momentum on digital transformation, with opinionated and modular boilerplate solutions",
  url: "https://amido.github.io",
  baseUrl: "/stacks/",
  onBrokenLinks: "warn",
  favicon: "img/thumbnail_stacks.png",
  organizationName: "Amido", // Usually your GitHub org/user name.
  projectName: "Stacks", // Usually your repo name.
  themeConfig: {
    algolia: {
      apiKey: "25626fae796133dc1e734c6bcaaeac3c",
      indexName: "docsearch",

      // Optional: see doc section bellow
      contextualSearch: true,

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },
    navbar: {
      title: "Amido Stacks",
      logo: {
        alt: "Amido Stacks Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "right",
        },
        {
          href: "https://github.com/amido/stacks",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "docs/",
            },
          ],
        },
        {
          title: "About Us",
          items: [
            {
              label: "Amido",
              href: "https://amido.com/",
            },
          ],
        },
        {
          title: "Open Source",
          items: [
            {
              label: "GitHub",
              to: "https://github.com/amido/stacks",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Amido Ltd`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),     
          
          docLayoutComponent: '@theme/DocPage',
          docItemComponent: '@theme/DocItem',
          
          // Please change this to your repo.
          editUrl:
            'https://github.com/amido/stacks',

          remarkPlugins: [remarkImages],
          rehypePlugins: [rehypeTruncate],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ]
};
