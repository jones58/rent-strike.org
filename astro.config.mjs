import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "RENT STRIKE",
      customCss: ["./src/styles.css"],
      tableOfContents: false,
      sidebar: [
        {
          label: "Rent Strike",
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