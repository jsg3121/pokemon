import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import svgrPlugin from 'vite-plugin-svgr'
import requireTransform from 'vite-plugin-require-transform'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteTsconfigPaths(), svgrPlugin(), requireTransform()],
  server: {
    port: 3000,
    strictPort: true,
  },
  build: {
    sourcemap: false,
    minify: true,
  },
})
