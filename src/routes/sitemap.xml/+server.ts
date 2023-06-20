import type { RequestHandler } from './$types';

type Sitemap = Array<{
  url: string;
  lastMod: string | Date;
}>;

export const GET = (({ url }) => {
  const routes: Sitemap = [''].map((route) => ({
    url: `${url.origin}${route}`,
    lastMod: new Date().toISOString()
  }));

  const sitemap = routes
    .map(
      ({ url, lastMod }) => `
    <url>
      <loc>${url}</loc>
      <lastmod>${lastMod}</lastmod>
    </url>
  `
    )
    .join('');

  return new Response(
    `
  <?xml version="1.0" encoding="UTF-8" ?>
  <urlset
      xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  >
      ${sitemap}
  </urlset>`.trim(),
    {
      headers: { 'Content-Type': 'application/xml' }
    }
  );
}) satisfies RequestHandler;
