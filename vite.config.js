import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // github pages puts the site under /animal-fun-facts/, so assets need this prefix
  base: "/animal-fun-facts/",
});
