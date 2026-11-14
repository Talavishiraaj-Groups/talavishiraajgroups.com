# talavishiraajgroups.com

Marketing website for Talavishiraaj Groups (engineering, AI and research firm). Goal: inbound enquiries and booked sales calls from Google, Bing and AI assistants.

- Next.js 15 App Router, React 19, Tailwind, Framer Motion. Light theme only.
- `main` deploys to production on Vercel automatically. The local working branch is `redesign-nextjs`; publish with `git push origin HEAD:main`.
- Local build needs about 3 GB: stop the preview server, then `NODE_OPTIONS=--max-old-space-size=3072 npm run build`.
- Secrets (Zoho SMTP, Cal.com webhook) live only in Vercel. Locally, forms answer "Email is not configured"; that is expected.

## Blog

- Posts are Markdown in `content/blog/*.md`. Rules in `BLOG_WRITING_GUIDE.md`; quality gate `npm run blog:check`; IndexNow ping `npm run blog:ping -- /blog/<slug>`.
- Covers are generated from each post (`src/lib/cover.ts`); in-post `chart`, `stats` and `steps` blocks render as visuals (`src/lib/blog-visuals.ts`).
- A daily cloud routine writes or improves one post at 7:30 PM IST; a weekly routine (Mondays 9:00 AM IST) checks rankings and trends and writes `content/blog/_performance.md`.

## House rules

- Keep every URL that exists. No en or em dashes in copy. No uppercase eyebrow labels. Never invent facts, figures, clients or results.
- Every enquiry email carries the visitor's first page and source (`src/components/Attribution.tsx`, `sourceInfo` in `src/lib/mail.ts`).

## Coming back

When the user says "comeback", "resume", "continue" or "catch me up", use the `comeback` skill in `.claude/skills/comeback/`: check what the routines did, check the live site, fix what is safe, and report only what needs the user.
