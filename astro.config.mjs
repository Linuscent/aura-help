// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightMcp from '@stellayazilim/mcp-starlight';

// https://starlight.astro.build/reference/configuration/
export default defineConfig({
  site: 'https://docs.aura.linuscent.com',
  trailingSlash: 'always',
  integrations: [
    starlight({
      title: 'Aura Help Center',
      description: 'Help and documentation for Linuscent Aura.',
      logo: {
        dark: './public/brand/linuscent-wordmark-dark.png',
        light: './public/brand/linuscent-wordmark-light.png',
        alt: 'Linuscent',
      },
      favicon: '/favicon-32.png',
      head: [
        { tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/favicon.png' } },
      ],
      customCss: ['./src/styles/theme.css', './src/styles/docs.css'],
      components: {
        Head: './src/components/Head.astro',
        Hero: './src/components/Hero.astro',
        ThemeProvider: './src/components/ThemeProvider.astro',
      },
      sidebar: [
        {
          label: 'Getting Started',
          items: [{ autogenerate: { directory: 'getting-started' } }],
        },
        {
          label: 'Products and Releases',
          items: [{ autogenerate: { directory: 'products-and-releases' } }],
        },
        {
          label: 'Inventory',
          items: [{ autogenerate: { directory: 'inventory' } }],
        },
        {
          label: 'SBOM',
          items: [{ autogenerate: { directory: 'sbom' } }],
        },
        {
          label: 'Risks',
          items: [{ autogenerate: { directory: 'risks' } }],
        },
        {
          label: 'Evidence',
          items: [{ autogenerate: { directory: 'evidence' } }],
        },
        {
          label: 'Compliance',
          items: [{ autogenerate: { directory: 'compliance' } }],
        },
        {
          label: 'Integrations',
          items: [{ autogenerate: { directory: 'integrations' } }],
        },
        {
          label: 'Licenses and Policies',
          items: [{ autogenerate: { directory: 'licenses-and-policies' } }],
        },
        {
          label: 'Workspace and Account',
          items: [{ autogenerate: { directory: 'workspace-and-account' } }],
        },
        {
          label: 'Troubleshooting',
          items: [{ autogenerate: { directory: 'troubleshooting' } }],
        },
      ],
    }),
    starlightMcp({
      siteLabel: 'Aura Help Center',
      revision: process.env.GITHUB_SHA,
    }),
  ],
});
