import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://rent-strike.org",
  integrations: [
    [sitemap()],
    starlight({
      title: "RENT STRIKE",
      customCss: ["./src/styles.css"],
      favicon: "./logo.png",
      tableOfContents: false,
      sidebar: [
        {
          label: "Start Here",
          autogenerate: { directory: "all" },
        },
      ],
      head: [
        {
          tag: "script",
          attrs: {
            src: "https://umami.jackkershaw.pp.ua/script.js",
            "data-website-id": "50b65072-e17d-480e-9acd-29269b26690e",
            defer: true,
          },
        },
      ],
    }),
  ],

  output: "server",
  adapter: vercel(),
});
