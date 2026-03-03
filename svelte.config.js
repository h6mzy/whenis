import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { fileURLToPath } from 'url'

const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    alias: {
      $stores: fileURLToPath(new URL('./src/stores', import.meta.url)),
      $components: fileURLToPath(new URL('./src/components', import.meta.url)),
      $utils: fileURLToPath(new URL('./src/utils', import.meta.url)),
    }
  }
}

export default config