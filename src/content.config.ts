import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const servicos = defineCollection({
  loader: glob({ base: './src/content/servicos', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    keyword: z.string(),
    icon: z.string().optional(),
    order: z.number().default(0),
  }),
});

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    keyword: z.string(),
    author: z.string().optional(),
    ogImage: z.string().optional(),
    coverImage: z.string().optional(),
  }),
});

export const collections = { servicos, blog };
