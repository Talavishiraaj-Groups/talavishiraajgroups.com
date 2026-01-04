# Zoho Mail SMTP Setup Guide

## Important: Zoho Mail Configuration

For Zoho Mail to work with SMTP, you need to:

### 1. Enable SMTP Access in Zoho

1. Log in to your Zoho Mail account
2. Go to **Settings** → **Mail** → **POP/IMAP Access**
3. Enable **IMAP Access** (required for SMTP)
4. Enable **SMTP Access**

### 2. Generate App Password (Recommended)

Zoho may require an app-specific password instead of your regular password:

1. Go to **Zoho Account** → **Security** → **App Passwords**
2. Generate a new app password for "Mail"
3. Use this app password in your `.env` file instead of your regular password

### 3. SMTP Server Settings

**For Global/International accounts:**
- Host: `smtp.zoho.com`
- Port: `587` (TLS) or `465` (SSL)
- Security: TLS (port 587) or SSL (port 465)

**For India region accounts:**
- Host: `smtp.zoho.in`
- Port: `587` (TLS) or `465` (SSL)
- Security: TLS (port 587) or SSL (port 465)

### 4. Update Environment Variables

Make sure your `.env` file has:
```
SMTP_HOST=smtp.zoho.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=info@talavishiraajgroups.com
SMTP_PASSWORD=your_app_password_here
```

### 5. Troubleshooting

**Authentication Failed:**
- Verify you're using an app password, not your regular password
- Check that SMTP access is enabled in Zoho settings
- Try using `smtp.zoho.in` if you're in India region

**Connection Timeout:**
- Check your firewall settings
- Verify the SMTP port (587 or 465) is not blocked

**Still not working?**
- Contact Zoho support to verify SMTP is enabled for your account
- Check Zoho account security settings for any restrictions

