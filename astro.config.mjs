// @ts-check
import { defineConfig } from "astro/config";
import tailwindPostcss from "@tailwindcss/postcss";

// https://astro.build/config
export default defineConfig({
  integrations: [],
  vite: {
    css: {
      postcss: {
        plugins: [tailwindPostcss]
      }
    }
  }
});
