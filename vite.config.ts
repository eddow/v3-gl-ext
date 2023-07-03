import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
	],
	build: {
		cssCodeSplit: true,
		lib: {
			// Could also be a dictionary or array of multiple entry points
			entry: "src/components/main.ts",
			name: 'myLibraryVueTs',
			formats: ["es", "cjs", "umd"],
			fileName: format => `my-library-vue-ts.${format}.js`
		},
		rollupOptions: {
			// make sure to externalize deps that should not be bundled
			// into your library
			input: {
				main: resolve(__dirname, "src/components/main.ts")
			},
			external: ['vue', 'golden-layout']
		},
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	}
})
