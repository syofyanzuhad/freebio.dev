import { getPathsObject, formatDate } from "../../utils/api";

export default function handler(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/xml");

  // Instructing the Vercel edge to cache the file
  res.setHeader("Cache-control", "stale-while-revalidate, s-maxage=3600");

  const pathsObj = getPathsObject();
  // console.log(pathsObj);

  // generate sitemap here
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
    ${Object.keys(pathsObj)
      .map(
        (path) => `
      <url>
        <loc>${`https://freebio.dev/${pathsObj[path].username}`}</loc>
        <lastmod>${formatDate(pathsObj[path].lastMod)}</lastmod>
      </url>
    `
      )
      .join(" ")}
    </urlset>`;

  res.end(xml);
}
