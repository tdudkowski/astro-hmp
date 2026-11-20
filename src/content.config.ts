import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Shared schema for standard articles
const standardArticleSchema = z.object({
  title: z.string(),
  comment: z.string(),
  section: z.string(),
  subsection: z.string(),
});

// Helper for standard markdown/mdx folders
const createArticleCollection = (folderName: string) =>
  defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: `./src/content/${folderName}` }),
    schema: standardArticleSchema,
  });

// STANDARD COLLECTIONS
const brandenburgCollection = createArticleCollection('brandenburgia');
const sachsenCollection = createArticleCollection('saksonia');
const dolny_slaskCollection = createArticleCollection('dolny_slask');
const deutschCollection = createArticleCollection('deutsch');
const francaisCollection = createArticleCollection('francais');
const kryptologiaCollection = createArticleCollection('kryptologia');
const jsCollection = createArticleCollection('js');
const cssCollection = createArticleCollection('css');
const cmsCollection = createArticleCollection('cms');
const historiaitCollection = createArticleCollection('historia_it');
const internetCollection = createArticleCollection('internet');

// BLOG
const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    section: z.string(),
    tags: z.string(),
    subsection: z.string(),
  }),
});

// FESTUNG BRESLAU POST
const festung_breslau_blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/festung_breslau_blog' }),
  schema: z.object({
    date1945: z.string(),
    title: z.string(),
    date: z.date(),
    img: z.string(),
    description: z.string(),
    tags: z.string(),
  }),
});

// FESTUNG BRESLAU ARTICLE
const festung_breslau_articleCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/festung_breslau_article' }),
  schema: z.object({
    title: z.string(),
    tags: z.string(),
    date: z.date(),
  }),
});

// MARIA LANGNER
const maria_langner_chapterCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/maria_langner' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string().optional(),
  }),
});

// JSON DATA
const jsonCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/json' }),
  schema: z.record(z.any()),
});

export const collections = {
  brandenburgia: brandenburgCollection,
  saksonia: sachsenCollection,
  dolny_slask: dolny_slaskCollection,
  deutsch: deutschCollection,
  francais: francaisCollection,
  kryptologia: kryptologiaCollection,
  js: jsCollection,
  css: cssCollection,
  cms: cmsCollection,
  historia_it: historiaitCollection,
  internet: internetCollection,
  blog: blogCollection,
  json: jsonCollection,
  festung_breslau_blog: festung_breslau_blogCollection,
  festung_breslau_article: festung_breslau_articleCollection,
  maria_langner: maria_langner_chapterCollection,
};
