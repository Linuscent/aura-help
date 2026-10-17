// Reproducible, local-only social artwork using the official logo and brand fonts.
// Install Chromium once with `npx playwright install chromium` before regenerating.
import { mkdir, readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { chromium } from '@playwright/test';

const require = createRequire(import.meta.url);
const root = new URL('../', import.meta.url);
const logo = (await readFile(new URL('public/brand/linuscent-wordmark-dark.png', root))).toString('base64');
const font = (await readFile(require.resolve('@fontsource/space-grotesk/files/space-grotesk-latin-600-normal.woff2'))).toString('base64');
const browser = await chromium.launch({
  headless: true,
  ...(process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH } : {}),
});
try {
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  await page.setContent(`<!doctype html><html lang="en"><head><style>
    @font-face { font-family: Brand; src: url(data:font/woff2;base64,${font}) format('woff2'); font-weight:600; }
    * { box-sizing: border-box; }
    body { margin:0; width:1200px; height:630px; padding:64px 72px; background:#05060a; color:#e5e7eb; font-family:Brand,sans-serif; }
    img { width:230px; height:auto; display:block; }
    h1 { margin:76px 0 20px; font-size:78px; line-height:1.08; letter-spacing:-2px; font-weight:600; }
    p { margin:0; max-width:850px; font-size:30px; line-height:1.5; color:#b7c1ce; }
    footer { margin-top:42px; color:#22d3ee; font-size:24px; }
  </style></head><body>
    <img src="data:image/png;base64,${logo}" alt="Linuscent" />
    <h1>Aura Help Center</h1>
    <p>Understand, manage, and secure your<br>software supply chain with Aura.</p>
    <footer>aura.docs.linuscent.com</footer>
  </body></html>`);
  await page.evaluate(() => document.fonts.ready);
  await page.locator('img').evaluate((img) => img.decode());
  await mkdir(new URL('public/social/', root), { recursive: true });
  await page.screenshot({ path: fileURLToPath(new URL('public/social/aura-docs.png', root)) });
  console.log('Generated public/social/aura-docs.png (1200×630)');
} finally {
  await browser.close();
}
