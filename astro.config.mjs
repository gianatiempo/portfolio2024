import tailwind from '@astrojs/tailwind'
import { defineConfig, squooshImageService } from 'astro/config'

import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
	site: 'https://gianatiempo.netlify.app',
	integrations: [tailwind(), sitemap(), mdx()],
	image: {
		service: squooshImageService()
	},
	markdown: {
		shikiConfig: {
			theme: 'css-variables'
		}
	}
})
