import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "RENT STRIKE",
      tableOfContents: false,
      sidebar: [
        {
          label: "Rent Strike",
          autogenerate: { directory: "all" },
        },
      ],
    }),
  ],
});
