// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'CodeIdea AI';
export const SITE_DESCRIPTION = '把想法变成代码，记录软件开发、Go、Kotlin 与 AI 实践。';

export const BLOG_REPOSITORIES = [
	{
		name: 'C',
		title: 'C 博客',
		tagline: 'Systems & Fundamentals',
		description: 'C 语言学习笔记、底层原理与工程实践。',
		href: 'https://codeideaai.github.io/c/',
		accent: 'c',
	},
	{
		name: 'iOS',
		title: 'iOS 博客',
		tagline: 'Apple Platforms',
		description: 'iOS、Swift 与 Apple 平台开发记录。',
		href: 'https://codeideaai.github.io/ios/',
		accent: 'ios',
	},
	{
		name: 'React',
		title: 'React 博客',
		tagline: 'Web Interfaces',
		description: 'React、前端开发与 Web 工程实践。',
		href: 'https://codeideaai.github.io/react/',
		accent: 'react',
	},
	{
		name: 'Linux',
		title: 'Linux 黑客基础笔记',
		tagline: 'Linux Basics for Hackers',
		description: '《Linux Basics for Hackers》中文课程笔记，涵盖终端、网络、权限管理与脚本实践。',
		href: 'https://github.com/codeideaai/linux-basics-for-hackers-notes',
		accent: 'linux',
	},
] as const;
