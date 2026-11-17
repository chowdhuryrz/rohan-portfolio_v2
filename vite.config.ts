import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Static hosts such as Netlify serve 404.html for unknown paths. Shipping a copy
// of index.html there lets the app render its own 404 page with a 404 status.
const notFoundPage = (): Plugin => ({
  name: "not-found-page",
  apply: "build",
  enforce: "post",
  generateBundle(_options, bundle) {
    const index = bundle["index.html"];
    if (index?.type !== "asset") {
      this.error("index.html was not emitted; cannot create 404.html");
    }
    this.emitFile({ type: "asset", fileName: "404.html", source: index.source });
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    notFoundPage(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: 'esnext',
    minify: 'esbuild',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['lucide-react'],
        },
      },
    },
    sourcemap: mode !== 'production',
    reportCompressedSize: false,
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'lucide-react',
    ],
  },
}));
