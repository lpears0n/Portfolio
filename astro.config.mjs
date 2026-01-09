import { defineConfig } from "astro/config";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";

import solidJs from "@astrojs/solid-js";
import { remarkReadingTime } from "./src/lib/remark-reading-time.mjs";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://lucaspearson.xyz",
  integrations: [
    solidJs(),
    UnoCSS({ injectReset: true }),
    icon(),
    svelte(),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  build: {
    inlineStylesheets: "auto",
  },
  vite: {
    assetsInclude: "**/*.riv",
    server: {
      watch: {
        usePolling: false,
      },
    },
  },
});
