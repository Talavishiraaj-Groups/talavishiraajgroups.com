# Booking setup (Cal.com)

Turns on the **Book a call** buttons and routes every booking into the same inbox
as the contact form.

Two variables are needed. They behave differently and that difference matters:

| Variable | Where it runs | Secret? | Takes effect |
| --- | --- | --- | --- |
| `VITE_CAL_LINK` | Browser, baked into the JS bundle at build time | **No, it is public** | Only after a **redeploy** |
| `CAL_WEBHOOK_SECRET` | Server only, `api/cal-webhook.js` | **Yes, keep private** | Immediately on save |

Anything prefixed `VITE_` is compiled into the public bundle. That is correct for a
booking link, which is a public URL anyway. **Never give a secret a `VITE_` prefix.**

---

## Step 1: Create the Cal.com event

1. Sign up at [cal.com](https://cal.com) with `info@talavishiraajgroups.com`.
   The free plan is enough: it sends a confirmation and calendar invite to both
   sides and a reminder before the call.
2. Connect the calendar you actually live in, under **Settings → Calendars**.
   Without this, Cal.com cannot see your real availability and will offer times
   you are not free.
3. Create an event type: **Event Types → New**.
   - Title: `Intro call`
   - Duration: 25 or 30 minutes
   - URL slug: `intro`
4. Under that event type, open **Advanced** and add one booking question:
   *"What are you working on?"*, long text, required. This is what makes the call
   useful rather than a cold start, and it arrives in the webhook email.
5. Note your booking link. It looks like `cal.com/your-username/intro`.
   **The value you need is the part after `cal.com/`**, so: `your-username/intro`.

## Step 2: Set `VITE_CAL_LINK`

**On Vercel** (Project → Settings → Environment Variables):

| Name | Value | Environments |
| --- | --- | --- |
| `VITE_CAL_LINK` | `your-username/intro` | Production, Preview, Development |

Then **redeploy**. This is the step people miss. Because `VITE_` variables are
baked in at build time, saving the variable changes nothing on its own: the
currently deployed bundle was built without it. Go to **Deployments → ⋯ →
Redeploy** on the latest deployment.

**Locally**, create a `.env` file in the project root (it is already gitignored):

```
VITE_CAL_LINK=your-username/intro
```

Restart `npm run dev` afterwards. Vite only reads `.env` at startup.

## Step 3: Set `CAL_WEBHOOK_SECRET`

This exists so nobody who finds the webhook URL can post fake bookings into your
inbox. The endpoint verifies an HMAC signature and **fails closed**: if the
secret is missing, it rejects everything rather than accepting anything.

1. Generate a random secret. Any of these work:

```bash
openssl rand -hex 32
```

2. Add it on Vercel:

| Name | Value | Environments |
| --- | --- | --- |
| `CAL_WEBHOOK_SECRET` | the random string from above | Production, Preview, Development |

3. Optionally add `BOOKING_NOTIFY_TO` if bookings should go somewhere other than
   `info@talavishiraajgroups.com`.

## Step 4: Point Cal.com at the webhook

In Cal.com: **Settings → Developer → Webhooks → New**.

| Field | Value |
| --- | --- |
| Subscriber URL | `https://www.talavishiraajgroups.com/api/cal-webhook` |
| Event triggers | Booking Created, Booking Rescheduled, Booking Cancelled |
| Secret | the **same** string you put in `CAL_WEBHOOK_SECRET` |
| Enabled | Yes |

The secret must match exactly on both sides. If it does not, the endpoint returns
401 and no email is sent.

## Step 5: Test it

1. Open `https://www.talavishiraajgroups.com/book` in a private window. The
   calendar should load. If you still see "Online booking is not live yet", the
   redeploy in Step 2 has not happened.
2. Book a slot using a personal email address.
3. Check all three:
   - The **attendee** gets a confirmation and a calendar invite, from Cal.com.
   - **You** get Cal.com's own notification.
   - **`info@talavishiraajgroups.com`** gets a separate "New call booked" email
     through Zoho, from `api/cal-webhook.js`, containing what they typed.
4. Cancel the test booking. You should get a "Call cancelled" email too.

If the third one does not arrive, open **Vercel → your project → Logs**, filter
to `/api/cal-webhook`, and look at the status:

| Status | Meaning |
| --- | --- |
| 401 | The secrets do not match between Cal.com and Vercel |
| 500 with `CAL_WEBHOOK_SECRET is not configured` | The variable is not set, or you did not redeploy after adding it |
| 500 with an SMTP error | Same Zoho credentials issue as the contact form, see `SMTP_SETUP.md` |
| No entry at all | Cal.com is not pointed at the right URL, or the trigger is not enabled |

Cal.com retries on a 500, so a transient SMTP failure does not lose the booking
record.

---

## Why both emails exist

Cal.com sends its own confirmations from its own infrastructure, so without the
webhook a booking only ever appears in whatever inbox the Cal account uses, and
never touches the Zoho pipeline the rest of the site runs on. That splits the
record of who is coming in across two systems.

The webhook does not replace Cal.com's emails. The attendee still gets the
confirmation, invite and reminder they expect. It adds the internal copy, so
bookings and form submissions land in one place.

## If you would rather not use Cal.com

The buttons do not break without it. `/book` explains the call and routes to the
contact form, so nothing is a dead end.

Self-hosting was considered and is not recommended here:

- **cal.diy**, the MIT-licensed community fork, has **Workflows removed**, which
  is exactly the reminder feature you want, and its own README marks it
  "strictly recommended for personal, non-production use".
- **Self-hosted Cal.com** (AGPLv3) does support reminders with no plan limits,
  but AGPLv3 is network copyleft and it is a server to run, patch and keep
  deliverable. That is founder hours spent on something the free hosted tier
  already does.

---

## The Cal.com logo on the booking page

It appears inside the embedded calendar and **cannot be removed from our side.**
The embed is an iframe served by cal.com, which is a different origin, so our CSS
and JavaScript cannot reach inside it. That is a browser security boundary, not a
styling problem to solve.

Cal.com's own pricing page lists **"Remove Cal.com branding"** as a **Teams plan**
feature, at $12 per user per month billed yearly. It is not available on the Free
plan. Once on Teams, the toggle is at **Settings -> Appearance**.

So there are four options, honestly stated:

| Option | Cost | Result |
| --- | --- | --- |
| Leave it | Free | Small Cal.com mark on the booking widget |
| Upgrade to Teams | $12/user/month | Toggle at Settings -> Appearance removes it |
| Link out to cal.com instead of embedding | Free | Logo still shows, but on their page rather than ours |
| Self-host Cal.com | Server + maintenance | Possible, but see the self-hosting note above |

**Recommendation: leave it for now.** It is a booking widget, the mark is small and
widely recognised, and $144 a year to remove a logo is not the best use of money on
a site that has no inbound traffic yet. Revisit when there is traffic to protect.
