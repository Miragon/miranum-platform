import {defineConfig} from 'vite'

export default defineConfig({
    plugins: [],
    build: {
        lib: {
            entry: 'src/index.ts',
            name: 'digiwf-form-builder-settings',
        },
        rollupOptions: {},
        minify: 'esbuild'
    }
})
