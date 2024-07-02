import { defineCollection, z } from 'astro:content'

const postsCollection = defineCollection({
	schema: ({ image }) =>
		z.object({
			id: z.string().optional(),
			title: z.string(),
			meta_title: z.string().optional(),
			description: z.string().optional(),
			date: z.date(),
			cover: image().refine((img) => img.width >= 1080, { message: 'Cover image must be at least 1080 pixels wide!' }),
			coverAlt: z.string().default('Post Image'),
			coverCredit: z.string().default(''),
			author: z.string().default('Ariel Gianatiempo'),
			categories: z.array(z.string()).default(['others']),
			tags: z.array(z.string()).default(['others']),
			draft: z.boolean().optional()
		})
})

const projectsCollection = defineCollection({
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			date: z.date(),
			cover: image().refine((img) => img.width >= 1080, { message: 'Cover image must be at least 1080 pixels wide!' }),
			coverAlt: z.string().default('Project Image'),
			author: z.string().default('Ariel Gianatiempo'),
			demoURL: z.string().optional(),
			repoURL: z.string().optional(),
			draft: z.boolean().optional()
		})
})

export const collections = { post: postsCollection, project: projectsCollection }
