import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import sectionize from '@hbsnow/rehype-sectionize';

export default defineConfig({
  svg: true,
  site: 'https://dygresje.info/',
  integrations: [mdx(), sitemap()],
  markdown: {
    syntaxHighlight: 'prism',
    processor: unified({
      rehypePlugins: [sectionize],
    }),
  },
});