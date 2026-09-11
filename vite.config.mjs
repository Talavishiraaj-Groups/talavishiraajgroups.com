import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite does not reliably report isSsrBuild for a plain `vite build --ssr`
// invocation, so the SSR pass is detected from the CLI arguments directly.
const isSsrBuild = process.argv.includes('--ssr');

/**
 * `vite preview` applies a blanket SPA fallback, serving dist/index.html for
 * every path. Production does the opposite: static files win, and the SPA
 * shell is only the fallback for paths that were not prerendered. This makes
 * preview behave the same way, so the prerendered output is actually what gets
 * tested locally.
 */
function servePrerenderedRoutes() {
  return {
    name: 'serve-prerendered-routes',
    configurePreviewServer(server) {
      server.middlewares.use((req, res, next) => {
        const [path] = req.url.split('?');
        if (path === '/' || path.includes('.')) return next();

        const candidate = join(process.cwd(), 'dist', path, 'index.html');
        if (existsSync(candidate)) {
          req.url = `${path.replace(/\/$/, '')}/index.html`;
          return next();
        }

        // Unmatched path: serve the 404 page with a real 404 status, the same
        // as the static host does, instead of falling back to the homepage.
        // The status has to be forced through writeHead because the static
        // file middleware downstream would otherwise answer 200.
        const notFound = join(process.cwd(), 'dist', '404.html');
        if (existsSync(notFound)) {
          req.url = '/404.html';
          const writeHead = res.writeHead.bind(res);
          res.writeHead = (_status, ...rest) => writeHead(404, ...rest);
        }
        return next();
      });
    },
  };
}

export default defineConfig(() => ({
  plugins: [react(), servePrerenderedRoutes()],
  server: {
    open: true,
  },
  build: isSsrBuild
    ? {
        // Server bundle consumed by scripts/prerender.mjs. Emitted as .mjs so
        // Node loads it as ESM without the package needing "type": "module".
        outDir: 'dist-ssr',
        ssr: 'src/entry-server.jsx',
        rollupOptions: {
          output: { format: 'esm', entryFileNames: 'entry-server.mjs' },
        },
      }
    : {
        outDir: 'dist',
        // Every route ships the same bundle, so a separate CSS file that can be
        // cached independently is worth more than inlining it per page.
        cssCodeSplit: false,
        sourcemap: false,
      },
}));
