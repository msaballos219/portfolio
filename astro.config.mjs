// @ts-check
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

export default defineConfig({
  site: "https://melvinsaballos.com",
  output: "static",
  integrations: [mdx(), sitemap(), tailwind(), icon()],
  adapter: cloudflare(), // Removed mode and functionPerRoute options
});
