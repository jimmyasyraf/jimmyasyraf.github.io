import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // Deliberately a string, not z.coerce.date(). The frontmatter is already
      // in the exact display format, and a Date would reintroduce the
      // timezone hazard the old date-fns call had: new Date('2023-10-16') is
      // UTC midnight, and any local-time formatter renders the day before in
      // UTC-negative zones. The regex makes an unquoted YAML date (which the
      // parser would hand back as a Date object) fail the build loudly.
      date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'date must be a quoted YYYY-MM-DD string'),
      category: z.string(),
      // Currently read by nothing, but kept resolvable so it stays valid if
      // it is ever wired up (e.g. per-post OG images).
      thumbnail: image().optional(),
    }),
});

export const collections = { blog };
