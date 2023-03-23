import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodeResolve } from '@rollup/plugin-node-resolve'

const contains = (id: string, pattern: string): boolean => id.indexOf(pattern) !== -1

const modulesChunk: Record<string, string> = {
  'final-form': 'final-form',
  'jotai-devtools': 'jotai-devtools',
  'jotai': 'jotai',
  'react-query': 'react-query',
  'react-router-dom': 'react-router-dom',
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    nodeResolve()
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id: string) => {
          if (contains(id, 'node_modules')) {
            const moduleKey = Object.keys(modulesChunk).find((key: string) => contains(id, key))
            return moduleKey ? modulesChunk[moduleKey] : 'vendor';
            if (moduleKey) {
              return modulesChunk[moduleKey]
            }
            // console.log('**************', id);
            // if (contains(id, 'react')) {
            //   return 'react'
            // }
            return 'vendor'

          }
        }
      }
    }
  }
})
