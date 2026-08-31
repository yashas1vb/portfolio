import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import viteImagemin from 'vite-plugin-imagemin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 75 },
      pngquant: { quality: [0.7, 0.85], speed: 4 },
      svgo: {
        plugins: [
          { name: 'removeViewBox', active: false },
          { name: 'removeEmptyAttrs', active: false },
        ],
      },
      webp: { quality: 80 },
    }),
  ],
  build: {
    // Warn if any chunk/asset exceeds 500 KB
    chunkSizeWarningLimit: 500,
  },
  server: {
    // Workaround: avoid Vite's atomic rename crashing on OneDrive
    fs: {
      strict: false,
    },
  },
})
