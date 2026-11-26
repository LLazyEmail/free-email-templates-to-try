// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Free email templates to try',
  tagline: 'A collection of free HTML email templates shared by their authors',
  favicon: 'img/favicon.svg',
  url: 'https://llazyemail.github.io',
  baseUrl: '/free-email-templates-to-try/',
  organizationName: 'LLazyEmail',
  projectName: 'free-email-templates-to-try',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  i18n: {defaultLocale: 'en', locales: ['en']},
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/LLazyEmail/free-email-templates-to-try/tree/main/',
        },
        blog: false,
        theme: {customCss: './src/css/custom.css'},
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Free email templates',
        items: [
          {type: 'docSidebar', sidebarId: 'docs', label: 'Catalog', position: 'left'},
          {
            href: 'https://github.com/LLazyEmail/free-email-templates-to-try',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright:
          'Templates belong to the developers and companies that created and shared them. Built with Docusaurus.',
      },
      prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula},
    }),
};

export default config;
