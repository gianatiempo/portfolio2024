import type { Site } from '../types'

export const SITE: Site = {
	TITLE: 'Ariel Gianatiempo',
	DESCRIPTION: 'Ariel Gianatiempo Portfolio',
	EMAIL: 'gianatiempo@gmail.com',
	URL: 'https://gianatiempo.netlify.app',
	IMAGE: '/og.png',
	TYPE: 'website',
	NUM_POSTS_ON_HOMEPAGE: 6
}

export const timeline = [
	{
		date: 'Today',
		label: 'Today',
		description:
			"Our encounter today could be the start of something exciting, whether you are a friend, a collaborator, or a potential employer. Let's connect and explore where our shared interests and skills can lead us. 🤝"
	},
	{
		date: 'Apr 2023',
		label: 'Joined V3 Cybersecurity',
		description:
			'The meeting provided an opportunity to oversee all stages of the delivery process. The perfect opportunity to apply all my previous experiences while still being open to new ideas and pushing boundaries to create the best possible user experience. 🚀'
	},
	{
		date: 'Nov 2019',
		label: 'Joined J.P. Morgan & Chase',
		description:
			'Went for an interview, fixed a bug, and stayed for years. It felt like home. It has never been easier to grow professionally, as all efforts come with a reward. I managed a team, served as a Tech Lead, mentored interns and new employees, and collaborated with HR. Never a boring day doing multiple things that helped me discover where I want to lead my career in the future. 🔭'
	},
	{
		date: 'Sep 2018',
		label: 'Joined Globant',
		description:
			'A step up in my career. Learning React feels like a breath of fresh air. Making awesome interfaces is easier than ever. I want to challenge myself by starting to share my knowledge and help others. 🪜'
	},
	{
		date: 'Mar 2015',
		label: 'Joined Redbee',
		description:
			'AngularJS is becoming increasingly popular. I have always believed that for an application to be successful, it must be visually appealing and user-friendly. I am delving deeper into JavaScript and transitioning into a front-end-focused developer. Here is where the fun begins. 🎢'
	},
	{
		date: 'May 2007',
		label: 'Journey started',
		description: 'Completed Java 6 training and commenced my career as a web developer. Learned about Agile, improved my English, met Jira, and the rest is history. 🤓'
	}
]

export const testimonialData = [
	{
		image: '/src/assets/testimonial/t6.jpeg',
		name: 'Dante Moore',
		url: 'https://github.com/DanteCypress',
		position: 'Tech Leader',
		message:
			'Working alongside Ariel has been an absolute delight. His dedication to crafting high-quality front-end solutions is unparalleled. Not only does he possess a deep understanding of the technologies he works with, but he consistently goes above and beyond to ensure that every component he touches is executed excellently.'
	},
	{
		image: '/src/assets/testimonial/t2.jpeg',
		name: 'Emilia Goicoechea',
		url: 'https://www.linkedin.com/in/emilia-goicoechea-a00ab3183/',
		position: 'Analyst',
		message:
			'From the first moment I joined the company, Ariel taught me how to develop UI and how to work as a team. He always motivated us Jr developers to improve and gave us tools to do so. He is an exceptional coworker and an excellent person.'
	},
	{
		image: '/src/assets/testimonial/t1.jpeg',
		name: 'Carla Benedetto',
		url: 'https://www.linkedin.com/in/carlabenedetto',
		position: 'Analyst',
		message:
			'I had the chance to work with Ariel this past year in J.P.Morgan. He is a great leader and an amazing coworker. He is always eager to help and contribute with the team with his remarkable coding skills!'
	},
	{
		image: '/src/assets/testimonial/t3.jpeg',
		name: 'Bárbara Lyschenko',
		url: 'https://www.linkedin.com/in/barbaralyschenko/',
		position: 'Designer',
		message: 'I worked with him for a while and he was an excellent professional with a lot of knowledge of his role.'
	},
	{
		image: '/src/assets/testimonial/t4.jpeg',
		name: 'Beatriz Martínez',
		url: 'https://www.linkedin.com/in/martinez-beatriz/',
		position: 'Sr  Developer',
		message:
			'Ariel is a professional who seeks to always be at the forefront with the latest technologies, he likes to contribute ideas and research and contribute new knowledge, he is a very good colleague and likes to maintain a good work environment.'
	},
	{
		image: '/src/assets/testimonial/t5.jpeg',
		name: 'Esther Sack',
		url: 'https://www.linkedin.com/in/esther-sack/',
		position: 'Scrum Master',
		message: 'Ariel is an excellent developer, with great technical-functional analysis skills and has extensive experience working in agile teams.'
	}
]

export const companies = ['/job/jpmorgan.svg', '/job/v3cybersecurity.png', '/job/globant.svg']

export const stack = [
	'/src/assets/stack/antd.svg',
	'/src/assets/stack/css3.svg',
	'/src/assets/stack/git.svg',
	'/src/assets/stack/github.svg',
	'/src/assets/stack/graphql.svg',
	'/src/assets/stack/html5.svg',
	'/src/assets/stack/jest.svg',
	'/src/assets/stack/js.svg',
	'/src/assets/stack/msw.svg',
	'/src/assets/stack/mui.svg',
	'/src/assets/stack/react-query.svg',
	'/src/assets/stack/react.svg',
	'/src/assets/stack/redux.svg',
	'/src/assets/stack/RTL.png',
	'/src/assets/stack/storybook.svg',
	'/src/assets/stack/tailwind.svg',
	'/src/assets/stack/ts.svg',
	'/src/assets/stack/vite.svg',
	'/src/assets/stack/vscode.svg'
]

export const links = [
	{ to: '/#about', label: 'About' },
	{ to: '/#stack', label: 'Stack' },
	{ to: '/#testimonials', label: 'Testimonials' },
	{ to: '/#blog', label: 'Blog' },
	{ to: '/project', label: 'Projects' },
	{ to: '/#contact', label: 'Contact' },
	{ to: '/Ariel-Gianatiempo-Resume.pdf', label: 'CV' }
]
