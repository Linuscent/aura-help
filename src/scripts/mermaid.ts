/// <reference lib="dom" />
import mermaid from 'mermaid';

const MERMAID_PRE_SELECTOR = 'pre[data-language="mermaid"]';
const RENDERED_FLAG = 'data-mermaid-rendered';

let diagramCount = 0;

function initializeMermaid(): void {
  mermaid.initialize({
    startOnLoad: false,
    securityLevel: 'strict',
    theme: 'base',
    look: 'classic',
    fontFamily: 'var(--aura-font-body)',
    flowchart: {
      useMaxWidth: true,
      curve: 'basis',
    },
    themeCSS: `
      .node rect,
      .node circle,
      .node ellipse,
      .node polygon,
      .node path {
        fill: var(--aura-surface-raised);
        stroke: var(--aura-border-strong);
      }

      .label,
      .nodeLabel,
      .cluster-label span,
      .cluster-label text {
        color: var(--aura-text-body);
        fill: var(--aura-text-body);
      }

      .edgePaths .path,
      .flowchart-link {
        stroke: var(--aura-border-strong);
        fill: none;
      }

      .arrowheadPath,
      .marker {
        fill: var(--aura-text-muted);
        stroke: var(--aura-text-muted);
      }

      .cluster rect {
        fill: var(--aura-surface-nav);
        stroke: var(--aura-border);
      }
    `,
  });
}

function extractSource(pre: HTMLPreElement): string {
  const lines = Array.from(pre.querySelectorAll('.ec-line .code')).map(
    (node) => node.textContent ?? ''
  );
  if (lines.length > 0) {
    return lines.join('\n');
  }
  return pre.querySelector('code')?.textContent ?? '';
}

async function renderOne(pre: HTMLPreElement): Promise<void> {
  const source = extractSource(pre);
  if (source.trim() === '') {
    return;
  }

  const container = document.createElement('div');
  container.className = 'aura-mermaid';

  const id = `aura-mermaid-${++diagramCount}`;
  const { svg } = await mermaid.render(id, source);
  container.innerHTML = svg;

  const block = pre.closest('.expressive-code') ?? pre;
  block.replaceWith(container);
}

async function renderAll(): Promise<void> {
  const blocks = Array.from(
    document.querySelectorAll<HTMLPreElement>(MERMAID_PRE_SELECTOR)
  );
  for (const pre of blocks) {
    if (pre.hasAttribute(RENDERED_FLAG)) {
      continue;
    }
    pre.setAttribute(RENDERED_FLAG, 'true');
    try {
      await renderOne(pre);
    } catch (error) {
      pre.removeAttribute(RENDERED_FLAG);
      console.error('Failed to render Mermaid diagram.', error);
    }
  }
}

declare global {
  interface Window {
    __auraMermaidInitialized?: boolean;
  }
}

if (!window.__auraMermaidInitialized) {
  window.__auraMermaidInitialized = true;
  initializeMermaid();
  void renderAll();
}
