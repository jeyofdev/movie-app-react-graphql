import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@pages': `${path.resolve(__dirname, 'src/pages')}`,
			'@components': `${path.resolve(__dirname, 'src/components')}`,
			'@hooks': `${path.resolve(__dirname, 'src/hooks')}`,
			'@router': `${path.resolve(__dirname, 'src/router')}`,
			'@images': `${path.resolve(__dirname, 'src/assets/images')}`,
			'@utils': `${path.resolve(__dirname, 'src/utils')}`,
			'@context': `${path.resolve(__dirname, 'src/context')}`,
			'@config': `${path.resolve(__dirname, 'src/config')}`,
			'@graphql': `${path.resolve(__dirname, 'src/graphql')}`,
		},
	},
});
