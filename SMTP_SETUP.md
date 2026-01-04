# SMTP Email Setup

The community form is now configured to send emails directly to `info@talavishiraajgroups.com` using Zoho Mail SMTP.

## Configuration

The SMTP settings are configured in the Netlify function at `netlify/functions/send-email.js`.

### Environment Variables (Recommended)

For security, set these environment variables in your Netlify dashboard:

1. Go to **Netlify Dashboard** → Your Site → **Site settings** → **Environment variables**
2. Add the following variables:

```
SMTP_HOST=smtp.zoho.in
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=info@talavishiraajgroups.com
SMTP_PASSWORD=bbydqdzT7yY1
```

**Note:** For Zoho Mail:
- **India Region**: `smtp.zoho.in:587` (TLS) or `smtp.zoho.in:465` (SSL)
- **Global**: `smtp.zoho.com:587` (TLS) or `smtp.zoho.com:465` (SSL)
- Use port 587 with `SMTP_SECURE=false` for TLS
- Use port 465 with `SMTP_SECURE=true` for SSL

### Default Configuration

If environment variables are not set, the function will use these defaults:
- Host: `smtp.zoho.in` (India region)
- Port: `587` (TLS)
- User: `info@talavishiraajgroups.com`
- Password: `bbydqdzT7yY1`

## Testing

After deploying to Netlify:
1. Fill out the community form on your website
2. Submit the form
3. Check `info@talavishiraajgroups.com` inbox for the email

## Troubleshooting

- **Emails not sending**: Check Netlify function logs in the dashboard
- **Authentication errors**: Verify the app password is correct
- **Connection errors**: Ensure SMTP_HOST and SMTP_PORT are correct for your email provider

