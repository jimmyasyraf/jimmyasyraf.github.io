# hazimiasyraf.com

Personal site — [hazimiasyraf.com](https://hazimiasyraf.com). Static, built with
[Astro](https://astro.build), deployed to GitHub Pages by
`.github/workflows/deploy.yml` on every push to `master`.

No framework JavaScript ships to the browser. The three interactive pieces (the
ASCII portrait's decode animation and cursor ripple, the scroll reveals, and the
theme toggle) are a few hundred bytes of vanilla JS inlined per page.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
npm run preview  # serve dist/
npm run check    # astro check
```

Requires Node >= 22.12.

## Layout

```
src/
  pages/            routes: index, blog/index, blog/[id], 404
  layouts/          BaseLayout: <head>, metadata, fonts, GA, header, footer
  components/       .astro components; portrait.txt holds the ASCII art
  content/blog/     the posts (markdown) + content.config.ts schema
  assets/posts/     post images, optimized at build time by astro:assets
  data/             projects / experience / clients / contributions JSON
  styles/global.css Tailwind entry, custom CSS, reveal states
public/             copied verbatim: CNAME, favicon, og-image, animated webp
```

## Adding a post

Drop a markdown file in `src/content/blog/`. The filename becomes the URL slug.

```markdown
---
title: 'Post Title'
date: '2026-05-10'
category: Tech
thumbnail: "../../assets/posts/image.jpg"
---
```

`date` must be a **quoted** `YYYY-MM-DD` string — it is rendered as-is, with no
date parsing, so the output does not depend on the build machine's timezone. An
unquoted date is parsed as a YAML timestamp and fails the schema at build time.

Reference images relatively so Astro can optimize them:

```markdown
![Alt text](../../assets/posts/image.jpg)
```

Absolute `/assets/...` paths are served untouched from `public/` — that is
deliberate for `ownsticker.webp`, whose animation sharp would strip.

## Notes

- Tailwind 4. The theme lives in `tailwind.config.mjs`, loaded via `@config`
  from `global.css`; dark mode is the `@custom-variant dark` rule there.
- `markdown.smartypants` and `markdown.syntaxHighlight` are off in
  `astro.config.mjs` to preserve the previous rendering. Turning either on is a
  deliberate visual change.
- Image sources are capped at 1248px wide — twice the 624px prose column. Astro
  derives the `sizes` attribute from the source width, so a larger source would
  make browsers fetch more than they can display.
