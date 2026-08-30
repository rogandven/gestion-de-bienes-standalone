import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  base: '/node/dist/',
  build: {
    manifest: true,
    rollupOptions: {
      input: path.resolve("src", "main.tsx"),
    }
  }
})
