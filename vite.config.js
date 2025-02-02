import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // ✅ Ensure the base path is correct
  build: {
    outDir: 'dist',
  },
  server: {
    historyApiFallback: true, // ✅ This ensures client-side routing works
  },
});
