import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@styles': path.resolve(__dirname, './src/styles/index.scss'),
            '@routes': path.resolve(__dirname, './src/routes'),
            '@pages': path.resolve(__dirname, './src/pages'),
            '@components': path.resolve(__dirname, './src/components'),
            '@assets': path.resolve(__dirname, './src/assets'),
            '@utils': path.resolve(__dirname, './src/utils'),
        },
    },
    plugins: [react()],
});
