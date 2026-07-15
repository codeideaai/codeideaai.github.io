// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'CodeIdea AI';
export const SITE_DESCRIPTION = '把想法变成代码，记录软件开发、Go、Kotlin 与 AI 实践。';

export const BLOG_REPOSITORIES = [
	{
		name: 'C',
		tagline: 'Systems & Fundamentals',
		description: 'C 语言学习笔记、底层原理与工程实践。',
		href: 'https://codeideaai.github.io/c/',
		accent: 'c',
	},
	{
		name: 'iOS',
		tagline: 'Apple Platforms',
		description: 'iOS、Swift 与 Apple 平台开发记录。',
		href: 'https://codeideaai.github.io/ios/',
		accent: 'ios',
	},
] as const;
