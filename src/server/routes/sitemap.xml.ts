export default defineEventHandler((event) => {
    let sitemap = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
    sitemap += '<url><loc>https://examples.com</loc></url>'
    sitemap += '</urlset>'
    event.res.writeHead(200, { 'Content-Type': 'application/text' })
    event.res.write(sitemap)
    event.res.end()
  })
