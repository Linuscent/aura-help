// The extension does not yet ship TypeScript declarations.
declare module '@stellayazilim/mcp-starlight' {
  import type { AstroIntegration } from 'astro';

  export default function starlightMcp(options?: {
    siteLabel?: string;
    revision?: string;
    filename?: string;
    versions?: string[];
    exclude?: string[];
  }): AstroIntegration;
}
