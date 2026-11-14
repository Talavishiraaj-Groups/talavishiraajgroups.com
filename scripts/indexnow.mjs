// Tells Bing, Yandex and other IndexNow engines that pages changed, so new posts are crawled within hours.
// Usage: node scripts/indexnow.mjs /blog/my-post [/blog ...]
const HOST = 'www.talavishiraajgroups.com';
const KEY = '2ccbca140640085416521d9b7327322e';
const paths = process.argv.slice(2);
if (!paths.length) {
  console.log('Usage: node scripts/indexnow.mjs /blog/slug [...]');
  process.exit(1);
}
const urlList = [...new Set([...paths, '/blog', '/sitemap.xml'])].map((p) => `https://${HOST}${p}`);
const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
});
console.log('IndexNow', res.status, urlList.join(' '));
