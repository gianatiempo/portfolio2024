import rss from '@astrojs/rss'
import { SITE } from '@lib/consts'
import { getCollection } from 'astro:content'

export async function GET(context) {
	const blog = (await getCollection('post')).filter((post) => !post.data.draft)

	const items = blog.sort((a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf())

	return rss({
		title: SITE.TITLE,
		description: SITE.DESCRIPTION,
		site: context.site,
		items: items.map((item) => ({
			title: item.data.title,
			description: item.data.description,
			pubDate: item.data.date,
			link: `/${item.collection}/${item.slug}/`
		}))
	})
}
