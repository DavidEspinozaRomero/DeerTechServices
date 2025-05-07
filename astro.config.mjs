// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

const homepage = 'https://deertechservice.top/';
const Omitpages = [`${homepage}test/`, `${homepage}system-design/`];
// https://astro.build/config
export default defineConfig({
  site: "https://deertechservice.top/",
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap({
    filter: (page) => !Omitpages.includes(page),
    changefreq: 'weekly',
      // priority: 0.7,
      lastmod: new Date(),
  })],
});