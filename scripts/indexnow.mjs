// Tells Bing, Yandex and other IndexNow engines that pages changed, so they are recrawled within hours.
// Usage:
//   node scripts/indexnow.mjs /blog/my-post [/other-path ...]   submit specific pages (after a new or edited post)
//   node scripts/indexnow.mjs --sitemap                          submit every page in the live sitemap (after a site-wide change)
// Run it only after the change is live on www.talavishiraajgroups.com.
const HOST = 'www.talavishiraajgroups.com';
const KEY = '2ccbca140640085416521d9b7327322e';
const args = process.argv.slice(2);
if (!args.length) {
  console.log('Usage: node scripts/indexnow.mjs /path [...]  |  node scripts/indexnow.mjs --sitemap');
  process.exit(1);
}

let urlList;
if (args.includes('--sitemap')) {
  const xml = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
  urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  if (!urlList.length) {
    console.log('Could not read any URLs from the live sitemap.');
    process.exit(1);
  }
} else {
  urlList = [...new Set([...args, '/blog', '/sitemap.xml'])].map((p) => `https://${HOST}${p}`);
}

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
});
console.log(`IndexNow ${res.status} (${res.status === 200 || res.status === 202 ? 'accepted' : 'not accepted'}): ${urlList.length} URL(s)`);
if (urlList.length <= 5) console.log(urlList.join('\n'));
process.exit(res.status === 200 || res.status === 202 ? 0 : 1);
