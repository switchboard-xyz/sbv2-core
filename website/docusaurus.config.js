// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const TwitterSvg =
  '<svg style="fill: #1DA1F2; vertical-align: middle; margin-left: 3px;" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Switchboard",
  tagline: "Community curated lightspeed data feeds on-chain",
  url:
    process.env.NODE_ENV === "production"
      ? "https://docs.switchboard.xyz"
      : "http://localhost",
  baseUrl: "/",
  // onBrokenLinks: "throw",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "switchboard-xyz", // Usually your GitHub org/user name.
  projectName: "switchboard-v2", // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebar.js"),
          remarkPlugins: [
            [require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }],
            require("remark-math"),
          ],
          rehypePlugins: [
            [
              require("rehype-katex"),
              {
                throwOnError: true,
                globalGroup: true,
              },
            ],
          ],
          // editUrl:
          //   process.env.NODE_ENV === "production"
          //     ? process.env.CI_PROJECT_URL + "/-/edit/main/"
          //     : "/",
        },
        pages: {
          remarkPlugins: [require("@docusaurus/remark-plugin-npm2yarn")],
        },
        theme: {
          customCss: [
            require.resolve("./src/css/custom.css"),
            require.resolve("./src/css/sidebar.css"),
            require.resolve("./src/css/navbar.css"),
          ],
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],
  plugins: ["my-loaders"],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      sidebar: {
        hideable: true,
      },
      algolia: {
        appId: "XO84KDTPTB",
        apiKey: "bc1bca7d93098a0d241c000cd8e900aa",
        indexName: "switchboard",
      },
      // announcementBar: {
      //   id: "announcementBar-2", // Increment on change
      //   content: `?????? If you like Switchboard, give us a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/switchboard-xyz/sbv2-core">GitHub</a> and follow us on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/switchboardxyz">Twitter ${TwitterSvg}</a>`,
      // },
      colorMode: {
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      // Only for code blocks
      prism: {
        theme: require("prism-react-renderer/themes/vsDark"),
        darkTheme: require("prism-react-renderer/themes/vsDark"),
        additionalLanguages: [
          "rust",
          "toml",
          "docker",
          "bash",
          "yaml",
          "asciidoc",
        ],
      },
      navbar: {
        title: "Switchboard",
        hideOnScroll: false,
        logo: {
          alt: "Switchboard Logo",
          src: "img/logo.svg",
          srcDark: "img/logo_white.svg",
          width: 72,
          height: 72,
        },
        items: [
          {
            type: "custom-supportedChainsNavbarItem",
            position: "left",
          },
          {
            label: "Getting Started",
            position: "left",
            to: "/about",
          },
          {
            type: "dropdown",
            label: "Data Feeds",
            position: "left",
            to: "/feeds/about",
            items: [
              {
                label: "?????? What are Data Feeds?",
                to: "/feeds/about",
              },
              {
                label: "??????? Build Custom Feeds",
                to: "/feeds/tasks/",
              },
              {
                label: "??? Best Practices",
                to: "/feeds/best-practices/",
              },
              {
                label: "???? Examples",
                to: "/feeds/examples/exchanges",
              },
              {
                label: "???? Publisher",
                to: "/feeds/publisher/",
              },
              {
                label: "???? Explorer",
                to: "https://switchboard.xyz/explorer",
              },
              {
                type: "html",
                value: '<hr class="dropdown-separator">',
              },
              {
                type: "html",
                className: "dropdown-heading",
                value: "<b>Integrate</b>",
              },
              {
                label: " Aptos",
                to: "/aptos/feeds",
                className: "header-aptos-link",
              },
              {
                label: " Near",
                to: "/near/feeds",
                className: "header-near-link",
              },
              {
                label: " Solana",
                to: "/solana/feeds",
                className: "header-solana-link",
              },
            ],
          },
          {
            type: "dropdown",
            label: "Randomness",
            position: "left",
            to: "/randomness/about",
            items: [
              {
                label: "?????? What is Randomness?",
                to: "/randomness/about",
              },
              {
                type: "html",
                value: '<hr class="dropdown-separator">',
              },
              {
                type: "html",
                className: "dropdown-heading",
                value: "<b>Integrate</b>",
              },
              {
                label: " Solana",
                to: "/solana/randomness",
                className: "header-solana-link",
              },
            ],
          },
          // {
          //   label: "Oracle Operator",
          //   position: "left",
          //   to: "/oracles/",
          // },
          {
            type: "dropdown",
            label: "Operator",
            position: "left",
            to: "operator/about",
            items: [
              {
                label: "?????? Oracle",
                to: "/oracles",
              },
              {
                label: "?????? Crank",
                to: "/crank",
              },
            ],
          },
          {
            type: "doc",
            label: "Develop",
            docId: "dev/overview",
          },
          // {
          //   type: "dropdown",
          //   label: "Develop",
          //   position: "left",
          //   items: [
          //     {
          //       label: " Aptos",
          //       to: "/aptos/feeds",
          //       className: "header-aptos-link",
          //     },
          //     {
          //       label: " Near",
          //       to: "/near/feeds",
          //       className: "header-near-link",
          //     },
          //     {
          //       label: " Solana",
          //       to: "/solana/feeds",
          //       className: "header-solana-link",
          //     },
          //   ],
          // },
          // vertical rule
          // {
          //   label: "Blog",
          //   position: "right",
          //   to: "https://switchboardxyz.medium.com/",
          // },
          // {
          //   type: "localeDropdown",
          //   position: "right",
          // },
          {
            href: "https://github.com/switchboard-xyz",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
          {
            type: "search",
            position: "right",
          },
        ],
      },
      i18n: {
        defaultLocale: "en",
        locales: ["en", "fr", "es"],
      },
      footer: {
        style: "dark",
        links: [
          // {
          //   title: "DOCS",
          //   items: [
          //     {
          //       label: "Developer Resources",
          //       to: "/developers",
          //     },
          //     {
          //       label: "Rust API Docs",
          //       href: "https://docs.rs/switchboard-v2/latest/switchboard_v2/",
          //     },
          //     {
          //       label: "Client API Docs",
          //       href: "https://docs.switchboard.xyz/api/ts",
          //     },
          //   ],
          // },
          // {
          //   title: "COMMUNITY",
          //   items: [
          //     {
          //       label: "Discord",
          //       href: "https://discord.com/invite/sNeGymrabT",
          //     },
          //     {
          //       label: "Twitter",
          //       href: "https://twitter.com/switchboardxyz",
          //     },
          //     {
          //       label: "Telegram",
          //       href: "https://t.me/switchboardxyz",
          //     },
          //     {
          //       label: "LinkedIn",
          //       href: "https://www.linkedin.com/company/switchboardxyz",
          //     },
          //   ],
          // },
          // {
          //   title: "MORE",
          //   items: [
          //     {
          //       label: "Medium",
          //       href: "https://switchboardxyz.medium.com/",
          //     },
          //     {
          //       label: "Jobs",
          //       href: "https://app.trinethire.com/companies/35264-switchboard-technology-labs/jobs",
          //     },
          //     {
          //       label: "GitHub",
          //       href: "https://github.com/switchboard-xyz",
          //     },
          //   ],
          // },
        ],
      },
    }),
};

module.exports = config;
