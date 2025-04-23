import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/qutotation_web_Rahul/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
