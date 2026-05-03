// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import react from '@astrojs/react';
import remarkBreaks from 'remark-breaks';
import remarkPreserveIndent from './src/lib/remark-preserve-indent.mjs';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  markdown: {
    remarkPlugins: [remarkBreaks, remarkPreserveIndent],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});