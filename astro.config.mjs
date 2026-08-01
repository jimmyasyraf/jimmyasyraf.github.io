// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://hazimiasyraf.com',

  // Next's static export emitted out/blog/<slug>.html, and GitHub Pages serves
  // /blog/<slug> from it. 'file' reproduces that exactly; the default
  // 'directory' would emit <slug>/index.html and redirect /blog/foo -> /blog/foo/.
  build: { format: 'file' },

  markdown: {
    // markdown-to-jsx applied neither of these, and the bar for this port is
    // "renders identically". smartypants would curl 19 apostrophes and the
    // prose double quotes; Shiki would override the prose <pre> background
    // (every fence in the corpus is untagged, so it buys no token colours).
    smartypants: false,
    syntaxHighlight: false,
  },

  image: {
    // Responsive srcset for markdown images. Astro derives `sizes` from the
    // source width -- `(min-width: Npx) Npx, 100vw` -- with no way to override
    // it for markdown, so the source width is the lever: the prose column is
    // capped at 624 CSS px (max-w-2xl less px-6), and the sources are 1248px,
    // which is exactly 2x that. A 3x phone needs at most ~1026px (390px
    // viewport - 48px padding, tripled), so 1248 is the real ceiling and no
    // browser is offered a variant larger than it can use.
    layout: 'constrained',
    breakpoints: [400, 624, 828, 1248],
  },

  // Self-hosted at build time, same as next/font/google did: no runtime request
  // to fonts.googleapis.com, and metric-adjusted fallbacks to limit CLS.
  // Variable ranges match what next/font loaded (it defaults to the variable
  // font when no weight is given). The prose styles need more weights than the
  // page markup does: strong 600, h1 800, h2/h4 700, and code 600 in mono.
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-sans',
      weights: ['100 900'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
      optimizedFallbacks: true,
    },
    {
      provider: fontProviders.google(),
      name: 'JetBrains Mono',
      cssVariable: '--font-mono',
      weights: ['100 800'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['ui-monospace', 'monospace'],
      optimizedFallbacks: true,
    },
  ],

  vite: { plugins: [tailwindcss()] },
});
