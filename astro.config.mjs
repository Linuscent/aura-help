// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://starlight.astro.build/reference/configuration/
export default defineConfig({
  site: 'https://linuscent.github.io',
  base: '/aura-help',
  integrations: [
    starlight({
      title: 'Aura Help Center',
      description: 'Help and documentation for Linuscent Aura.',
      logo: { src: './public/logo-linuscent.png', alt: 'Aura Help Center' },
      customCss: ['./src/styles/theme.css', './src/styles/docs.css'],
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
  ],
});
