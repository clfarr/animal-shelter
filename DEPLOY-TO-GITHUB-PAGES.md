# Deploy to GitHub Pages - Step by Step

## Quick Deploy (2 Minutes)

You already have everything in your GitHub repository. Just enable GitHub Pages:

### Step 1: Go to Your Repository
Visit: https://github.com/clfarr/animal-shelter

### Step 2: Open Settings
Click the **Settings** tab at the top of the page

### Step 3: Navigate to Pages
- Look for **Pages** in the left sidebar
- Click it

### Step 4: Configure Source
Under "Build and deployment" → "Branch":

**Option A: Use Your Feature Branch (Easiest Right Now)**
- Branch: Select `claude/animal-shelter-website-012Tnme6z5ejgqqvMXmwrgf3`
- Folder: `/ (root)`
- Click **Save**

**Option B: Create a Main Branch (Recommended for Long-term)**
```bash
# In your terminal:
cd /path/to/animal-shelter
git checkout claude/animal-shelter-website-012Tnme6z5ejgqqvMXmwrgf3
git checkout -b main
git push origin main

# Then in GitHub Settings > Pages:
# Select "main" branch
```

### Step 5: Wait for Deployment
- GitHub will show "Your site is ready to be published"
- Wait 1-2 minutes for first deployment
- Refresh the page

### Step 6: Get Your URL
Your live website will be at:
```
https://clfarr.github.io/animal-shelter/
```

That's it! The website is now live. 🎉

---

## Testing Your Live Site

Once deployed:

1. ✅ Visit the URL
2. ✅ Click through all nav buttons (Meet Our Animals, Lost/Found, Volunteer, Donate, About)
3. ✅ Test the Petfinder link (should show their actual animals)
4. ✅ Check on mobile phone
5. ✅ Click contact phone number (should prompt to call)

---

## Custom Domain (Optional)

If Trinity County wants a custom domain like `www.trinitycountyshelter.org`:

### Step 1: Buy Domain ($12/year)
- Namecheap.com
- Google Domains
- GoDaddy
- etc.

### Step 2: Configure DNS
In your domain registrar, add these DNS records:

**For root domain (trinitycountyshelter.org):**
```
Type: A
Host: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

**For www subdomain:**
```
Type: CNAME
Host: www
Value: clfarr.github.io
```

### Step 3: Add Custom Domain in GitHub
1. Go to Settings > Pages
2. Under "Custom domain"
3. Enter: `www.trinitycountyshelter.org`
4. Click Save
5. Wait 24-48 hours for DNS propagation

### Step 4: Enable HTTPS
- Check "Enforce HTTPS" box
- Wait a few minutes for certificate

Now the site will be available at your custom domain!

---

## Updating the Live Site

Every time you push to your branch, GitHub Pages auto-updates:

### Method 1: Edit on GitHub (Easiest)
1. Go to repository
2. Click file (e.g., `index.html`)
3. Click pencil icon (Edit)
4. Make changes
5. Scroll down, click "Commit changes"
6. Wait 1 minute, site updates automatically

### Method 2: Edit Locally & Push
```bash
# Make changes to files
# Then:
git add .
git commit -m "Update urgent needs"
git push origin [your-branch-name]

# Wait 1-2 minutes, site updates
```

---

## Troubleshooting

### Site shows old version
- Wait 2-3 minutes for cache to clear
- Hard refresh browser: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Clear browser cache

### 404 error
- Check that you selected the right branch in Settings > Pages
- Make sure `index.html` is in the root folder (not in a subdirectory)
- Wait a few more minutes

### Changes not showing up
- Check the "Actions" tab to see if deployment succeeded
- Make sure you pushed to the correct branch
- Wait up to 5 minutes for deployment

### Petfinder link not working
- Verify shelter ID is correct: CA1807
- Check line 56 and 335 in index.html

---

## Alternative: Deploy to Netlify (If GitHub Pages Doesn't Work)

Netlify is another free option that's even easier:

1. Go to netlify.com
2. Sign up (free)
3. Click "Add new site" → "Deploy manually"
4. Drag and drop your `animal-shelter` folder
5. Done! You get a URL like `amazing-panda-123456.netlify.app`
6. Can customize to `trinitycounty-shelter.netlify.app` for free

**Pros of Netlify:**
- Easier to set up
- Faster deployments
- Better custom domain support
- Automatic form handling (if you add contact forms later)

**Pros of GitHub Pages:**
- Free forever guaranteed
- Direct integration with your code
- Familiar if you use GitHub

---

## Monitoring

GitHub Pages includes basic analytics:

1. Go to repository Settings > Pages
2. Scroll to "Build and deployment"
3. Click "View deployments" to see history

For detailed analytics, add Google Analytics:
1. Create Google Analytics account
2. Get tracking code
3. Add to `index.html` before `</head>`

---

## Backup Plan

If something goes wrong:

1. **Old version**: Repository history has all previous versions
2. **Restore**: `git checkout [commit-hash]`
3. **Start fresh**: Re-upload files to a new repository

The files are in your Git repository, so you always have backups!

---

## Cost Summary

**FREE Option (GitHub Pages):**
- Hosting: $0/year
- URL: clfarr.github.io/animal-shelter (free)
- HTTPS: $0 (included)
- **Total: $0/year**

**Custom Domain Option:**
- Hosting: $0/year (still GitHub Pages)
- Domain: ~$12/year
- HTTPS: $0 (included)
- **Total: ~$12/year**

---

## Next Steps

1. ✅ Deploy to GitHub Pages now
2. ✅ Test the live URL
3. ✅ Send URL to Trinity County Animal Shelter
4. ✅ Walk them through how it works
5. ✅ Offer to host for 1 year
6. 📅 Set reminder to check in monthly

**Your live URL will be:**
```
https://clfarr.github.io/animal-shelter/
```

Go enable it now - it takes 30 seconds! 🚀
