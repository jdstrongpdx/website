const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');
const path = require('path');
const { createWriteStream } = require('fs');

const sitemap = new SitemapStream({ hostname: 'https://fragrancefreeresources.com' });

// Define the URLs to add to the sitemap
const urls = [
    { url: '/', changefreq: 'monthly', priority: 0.7 },
    { url: '/portfolio', changefreq: 'monthly', priority: 0.7 },
    { url: '/resume', changefreq: 'monthly', priority: 0.7 },
    { url: '/contact', changefreq: 'yearly', priority: 0.5 },
    { url: '/idealConditions', changefreq: 'yearly', priority: 0.3 },
    { url: '/gallery', changefreq: 'monthly', priority: 0.3 }
];

// Write the sitemap to the file
const outputPath = path.join(__dirname, '../public/sitemap.xml');
const writeStream = createWriteStream(outputPath);

// Pipe the sitemap into the writeStream
sitemap.pipe(writeStream);

// Add URLs to the sitemap
urls.forEach((url) => {
    sitemap.write(url);
});

// End the sitemap stream
sitemap.end();

writeStream.on('finish', () => {
    console.log('Sitemap written successfully');
});

writeStream.on('error', (err) => {
    console.error('Error while writing sitemap:', err);
});