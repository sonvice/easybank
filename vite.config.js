import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import autoprefixer from "autoprefixer";
import purgeCSSPlugin from "@fullhuman/postcss-purgecss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    // Configuración de PostCSS inline
    postcss: {
      plugins: [
        autoprefixer(),
         purgeCSSPlugin({
           content: ['./src/**/*.html', './src/**/*.jsx'],
         }), // Puedes agregar otros plugins aquí
      ],
    },
  },
});
