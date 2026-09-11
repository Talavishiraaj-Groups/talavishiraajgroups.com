# Email configuration

The contact form (`/api/send-contact-email`) and the keep-in-touch form
(`/api/send-email`) send through Zoho Mail SMTP.

## Required environment variables

Credentials are read from the deployment environment only. There is no fallback
in source: a committed password protects nothing and stays in version control
history forever.

Set these in **Vercel → Project Settings → Environment Variables**, for the
Production, Preview and Development environments:

| Variable | Value | Required |
| --- | --- | --- |
| `SMTP_USER` | `info@talavishiraajgroups.com` | Yes |
| `SMTP_PASSWORD` | The Zoho app password | Yes |
| `SMTP_HOST` | `smtp.zoho.in` (India region) or `smtp.zoho.com` | No, defaults to `smtp.zoho.in` |
| `SMTP_PORT` | `587` for TLS, `465` for SSL | No, defaults to `587` |
| `SMTP_SECURE` | `true` only when using port 465 | No, defaults to `false` |

If `SMTP_USER` or `SMTP_PASSWORD` is missing, the endpoint returns a clear error
naming the missing configuration rather than failing silently.

## Credential rotation

The previous password was committed to this repository and appeared in this
file. **Treat it as compromised.** It is present in git history and cannot be
removed from the source alone.

Required steps, in order:

1. Generate a new app password in Zoho: **Zoho Account → Security → App
   Passwords → Mail**.
2. Add it as `SMTP_PASSWORD` in the Vercel project settings.
3. Revoke the old app password in Zoho.
4. Redeploy and submit the contact form once to confirm delivery.

Until step 2 is done, both forms will return the configuration error.

## Zoho prerequisites

1. Zoho Mail → Settings → Mail → POP/IMAP Access: enable IMAP access.
2. Use an app-specific password rather than the account password.
3. Match the host to the account region: `smtp.zoho.in` for India,
   `smtp.zoho.com` otherwise.

## Local development

Create a `.env` file in the project root (it is already gitignored):

```
SMTP_USER=info@talavishiraajgroups.com
SMTP_PASSWORD=your_app_password_here
SMTP_HOST=smtp.zoho.in
SMTP_PORT=587
SMTP_SECURE=false
```

## Troubleshooting

- **Configuration error returned**: `SMTP_USER` or `SMTP_PASSWORD` is not set in
  the environment the request ran in. Check all three Vercel environments.
- **Authentication failed**: the app password is wrong or has been revoked, or
  IMAP access is disabled in Zoho.
- **Connection timeout**: wrong host for the account region, or the port is
  blocked.
