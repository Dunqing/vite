import { defineConfig } from 'vite'
import MagicString from 'magic-string'

export default defineConfig({
  plugins: [
    {
      name: 'sourcemap',
      transform(code, id) {
        if (id.includes('foo.js')) {
          const ms = new MagicString(code)
          ms.append('// add comment')
          return {
            code: ms.toString(),
            map: ms.generateMap({ hires: true }),
          }
        }
      },
    },
  ],
  build: {
    sourcemap: true,
  },
})