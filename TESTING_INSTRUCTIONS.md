# Testing Instructions - Important!

## ⚠️ CRITICAL: Access the Site Through Netlify Dev

When testing locally, you **MUST** access the site through Netlify dev's proxy:

### ✅ Correct URL:
```
http://localhost:8888
```

### ❌ Wrong URLs (will NOT work):
```
http://localhost:5173
http://localhost:5174
http://localhost:5175
http://localhost:5176
```

## Steps to Test:

1. **Start the server:**
   ```bash
   npm run dev:netlify
   ```

2. **Wait for the message:**
   ```
   Local dev server ready: http://localhost:8888
   ```

3. **Open your browser and go to:**
   ```
   http://localhost:8888
   ```

4. **Navigate to the Community page** (e.g., `http://localhost:8888/community`)

5. **Fill out and submit the form**

6. **Check the browser console** (F12) for any errors if it fails

## Why This Matters:

- Netlify dev runs on port **8888** and proxies your Vite dev server
- The relative URL `/.netlify/functions/send-email` only works when accessed through Netlify dev's proxy
- If you access the site directly through Vite's port, the function endpoints won't be available

## Troubleshooting:

### "Failed to submit" error:
1. Check you're using `http://localhost:8888` (not Vite's port)
2. Open browser console (F12) to see detailed error messages
3. Check the terminal running `npm run dev:netlify` for server errors

### Function not found:
- Make sure you ran `npm run dev:netlify` (not `npm run dev`)
- Check that `netlify/functions/send-email.js` exists

### Still not working?
- Open browser console and check the Network tab when submitting
- Look for the POST request to `/.netlify/functions/send-email`
- Check the response status and error message

