// 和心村ガイド — Astro 設定
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://guide.washinmura.jp',
  output: 'static',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'ja',
        locales: {
          ja: 'ja',
          en: 'en',
          'zh-tw': 'zh-Hant',
        },
      },
      // JSON 端點不進 sitemap
      filter: (page) => !page.includes('/api/'),
    }),
  ],
  build: {
    // /rooms/kominka/ 而非 /rooms/kominka.html
    format: 'directory',
  },
});
