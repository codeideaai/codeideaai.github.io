import rss from '@astrojs/rss';
import { BLOG_REPOSITORIES, SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: BLOG_REPOSITORIES.map((repository) => ({
			title: repository.title,
			description: repository.description,
			link: repository.href,
		})),
	});
}
