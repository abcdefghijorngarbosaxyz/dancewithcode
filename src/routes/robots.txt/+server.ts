import type { RequestHandler } from './$types';

type rules = {
  userAgent?: string | string[];
  allow?: string | string[];
  disallow?: string | string[];
  crawlDelay?: number;
};

type Robots = {
  rules?: rules | Array<rules>;
  sitemap?: string | string[];
};

export const GET = (({ url }) => {
  type Rules = Array<rules>;

  const data: Robots = {
    rules: [
      {
        userAgent: '*'
      }
    ],
    sitemap: `${url.origin}/sitemap.xml`
  };

  const robots =
    (data.rules as Rules)
      .map((rule) => {
        const { userAgent, allow, disallow, crawlDelay } = rule;
        return `
        ${userAgent ? 'User-agent: ' + userAgent : ''}
        ${allow ? 'Allow: ' + allow : ''}
        ${disallow ? 'Disallow: ' + disallow : ''}
        ${crawlDelay ? 'Crawl-delay: ' + crawlDelay : ''}
        `.trim();
      })
      .join('\n\n') + `\n\nSitemap: ${data.sitemap}`;

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain'
    }
  });
}) satisfies RequestHandler;
