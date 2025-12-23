import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: { allowedHosts: ['vargastomas.com'] },
  build: {
    // Minificación agresiva con terser (más efectivo que esbuild)
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Eliminar console.log en producción
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'], // Eliminar logs específicos
        passes: 2, // Múltiples pasadas de compresión
      },
      mangle: {
        safari10: true, // Compatibilidad Safari 10+
      },
      format: {
        comments: false, // Eliminar comentarios
      },
    },
    // Code splitting manual para mejor caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Separar vendor libraries en chunks
          'react-vendor': ['react', 'react-dom'],
          'router': ['wouter'],
        },
      },
    },
    // Optimizaciones adicionales
    cssMinify: true,
    cssCodeSplit: true,
    reportCompressedSize: true,
    chunkSizeWarningLimit: 1000,
  },
})
