# Rent-strike.org

## Process

Rebuilding this site from an [Internet Archive Copy](https://web.archive.org/web/20211101134325/https://www.rent-strike.org/). It was previously hosted on Squarespace, but with hosting fees being high and the content no longer being edited, it makes sense to host this a static site using Astro. I initially wanted to rebuild the complicated header structure, but in the end realised it made sense to use Starlight as a template to structure the whole site. Since the site is mostly text based, this approach makes sense and will allow fast implementation. I grabbed md files for every page from internet archive copy using [this tool](https://web2md.answer.ai/).

## TODO

- proper links, like on brief history page
- add more photos
- add welcome page or welcome/how to use this site bits to the why we strike doc (edit index.mdx), about this site page
- better alt text throughout, like on action! page
- seo, google search console etc.

## 🚀 Project Structure

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

Inside of your Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   │   └── config.ts
│   └── env.d.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).
