import { defineConfig } from 'vite'
import { resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [],
	build: { outDir: resolve(__dirname, './docs') },
	base: './',
	resolve: {
		alias: [{ find: /^@(?=\/)/, replacement: resolve(__dirname, './src') }],
	},
})
