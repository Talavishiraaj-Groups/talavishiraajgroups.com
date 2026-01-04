# Local Testing Guide

## Setup

1. **Environment Variables**: A `.env` file has been created with your SMTP credentials. This file is already in `.gitignore` for security.

2. **Install Dependencies** (if not already done):
   ```bash
   npm install
   ```

## Running Locally

To test the SMTP email functionality locally, use:

```bash
npm run dev:netlify
```

This will:
- Start the Vite dev server (frontend)
- Start the Netlify Functions server (backend)
- Load environment variables from `.env`
- Make the function available at `http://localhost:8888/.netlify/functions/send-email`

The frontend will be available at `http://localhost:8888` (Netlify dev automatically proxies Vite).

## Testing the Form

1. Open `http://localhost:8888` in your browser
2. Navigate to the Community page
3. Fill out the form with test data
4. Submit the form
5. Check `info@talavishiraajgroups.com` inbox for the email

## Troubleshooting

### Function not found
- Make sure you're using `npm run dev:netlify` (not `npm run dev`)
- Check that the function file exists at `netlify/functions/send-email.js`

### Email not sending
- Check the terminal for error messages
- Verify `.env` file exists and has correct SMTP credentials
- Test SMTP connection manually if needed

### Port conflicts
- Netlify dev uses port 8888 by default
- Vite dev server runs on port 5173 (proxied by Netlify)
- If port 8888 is in use, Netlify will prompt to use a different port

## Alternative: Test Function Directly

You can also test the function directly using curl:

```bash
curl -X POST http://localhost:8888/.netlify/functions/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "number": "+1234567890",
    "message": "This is a test message"
  }'
```

