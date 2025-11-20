# Trinity County Animal Shelter Website - Handoff Guide

This guide will help you present and manage the website for Trinity County Animal Shelter.

## Quick Start: Presenting the Website

### What You're Giving Them

A complete, professional website that:
- ✅ Links to their existing Petfinder listings
- ✅ Provides clear contact information and hours
- ✅ Features a comprehensive Lost/Found section (addresses their dog problem)
- ✅ Shows volunteer opportunities
- ✅ Lists donation needs
- ✅ Is mobile-friendly and fast
- ✅ Requires minimal maintenance

### Live Demo

**To show them the website NOW:**

1. Go to: https://github.com/clfarr/animal-shelter
2. Click on the file `index.html`
3. Click "Raw" button
4. Copy the URL
5. Go to: https://htmlpreview.github.io/
6. Paste the URL and view

**OR download and open locally:**

1. Download the repository as ZIP
2. Unzip the folder
3. Double-click `index.html`
4. It opens in your browser

### Getting a Live URL (GitHub Pages)

**You'll need to do this from your GitHub account:**

1. Go to https://github.com/clfarr/animal-shelter
2. Click **Settings** (top right)
3. Click **Pages** in the left sidebar
4. Under "Branch":
   - Select: `claude/animal-shelter-website-012Tnme6z5ejgqqvMXmwrgf3`
   - Folder: `/ (root)`
   - Click **Save**
5. Wait 1-2 minutes
6. Your site will be live at: `https://clfarr.github.io/animal-shelter/`

**Alternative: Create a main branch**
```bash
# From your feature branch:
git checkout -b main
git push origin main

# Then in GitHub Settings > Pages:
# Select "main" branch instead
```

---

## Website Maintenance Guide

### For Trinity County Animal Shelter Staff

This website is designed to require **minimal updates**. Here's what you can easily update:

### 1. Updating Urgent Needs (Donation Tracker)

**Location:** Donate section, "URGENT NEEDS" card

**To update:**

1. Open `index.html` in a text editor (Notepad, TextEdit, VS Code, etc.)
2. Find line ~290-312 (search for "URGENT NEEDS")
3. You'll see three items with percentage widths:

```html
<div class="meter-fill" style="width: 15%; background: #e74c3c;"></div>
```

**Change the width percentage:**
- `15%` = Critical (red, #e74c3c)
- `25-40%` = Low (orange, #e67e22)
- `50-75%` = Medium (yellow, #f39c12)
- `80-100%` = Good (green, #51cf66)

**Change the status:**
- `CRITICAL` = Urgent need
- `LOW` = Running low
- `OK` or `GOOD` = Adequate supply

**Example - Updating dog food from 15% (critical) to 60% (medium):**

Before:
```html
<div class="meter-fill" style="width: 15%; background: #e74c3c;"></div>
<span class="need-status">CRITICAL</span>
```

After:
```html
<div class="meter-fill" style="width: 60%; background: #f39c12;"></div>
<span class="need-status">OK</span>
```

### 2. Updating Hours or Contact Info

**Hours appear in 3 places:**

1. **Top banner** (line ~29):
   ```html
   <p>🐾 <strong>OPEN:</strong> Thursday-Saturday & Tuesday, 12-4 PM...</p>
   ```

2. **Animals section** (line ~72-74):
   ```html
   <p><strong>Thursday-Saturday:</strong> 12-4 PM<br>
   <strong>Tuesday:</strong> 12-4 PM...</p>
   ```

3. **Footer** (line ~437):
   ```html
   <p>Open: Thursday-Saturday & Tuesday, 12-4 PM</p>
   ```

**To update:** Just change the text in all three locations to match your new hours.

### 3. Changing Phone Number or Address

**Find and replace** in the entire file:
- Search for: `(530) 623-1370`
- Replace with: your new phone number

- Search for: `570 Mountain View St`
- Replace with: your new address

### 4. Adding Items to Supply Lists

**Location:** Donate section, "Supply Donations" card (line ~327-353)

**To add an item:**

1. Find the appropriate list (Always Needed or Small Animals)
2. Add a new line:

```html
<li>Your new item here</li>
```

**Example:**
```html
<div class="supply-col">
    <h4>Always Needed:</h4>
    <ul>
        <li>Dog & cat food (any brand)</li>
        <li>Cat litter (clumping)</li>
        <li>Cleaning supplies</li>
        <li>NEW ITEM HERE</li>  <!-- Added -->
    </ul>
</div>
```

### 5. Updating Amazon Wishlist Link

**Location:** Line ~358

Current:
```html
<a href="#" class="wishlist-btn">View Our Wishlist →</a>
```

Replace `#` with your actual Amazon wishlist URL:
```html
<a href="https://www.amazon.com/hz/wishlist/ls/YOUR-LIST-ID" class="wishlist-btn">View Our Wishlist →</a>
```

---

## Advanced: Adding Real Animal Photos

If the shelter wants to showcase specific animals beyond Petfinder, see **HOW-TO-ADD-PHOTOS.md** for detailed instructions.

**Quick summary:**
1. Add photos to `images/dogs/`, `images/cats/`, or `images/small-animals/`
2. Photos should be square (600x600px or larger)
3. Name them with animal names (e.g., `buddy.jpg`)
4. Photos will appear in polaroid-style frames

---

## Hosting Options

### Free Options:

**1. GitHub Pages (Recommended)**
- ✅ Free forever
- ✅ Fast and reliable
- ✅ Easy to update (just push to GitHub)
- ✅ URL: `yourname.github.io/animal-shelter`
- ⚠️ Requires GitHub account

**2. Netlify**
- ✅ Free tier generous
- ✅ Drag-and-drop deployment
- ✅ Custom domain support
- ✅ Automatic HTTPS
- 🌐 netlify.com

**3. Vercel**
- ✅ Similar to Netlify
- ✅ Connect to GitHub repo
- ✅ Auto-deploys on updates
- 🌐 vercel.com

### Paid Options (If shelter wants custom domain):

**Custom Domain** like `www.trinitycountyshelter.org`:
- Register domain: ~$12/year (Namecheap, Google Domains)
- Point domain to GitHub Pages (free) or Netlify (free)
- **Total cost:** ~$12/year

---

## Common Questions from Shelter Staff

### Q: How do we update the Petfinder listings?
**A:** You don't! The website links to your existing Petfinder page. Keep updating Petfinder as usual - the links on the website will always show current animals.

### Q: Can we add news or blog posts?
**A:** Not without development work. This is a static site. If they want a blog, consider adding a Facebook feed widget or linking to their Facebook page.

### Q: How often should we update urgent needs?
**A:** Weekly or when supplies change significantly. It only takes 2 minutes.

### Q: Can we add more volunteer opportunities?
**A:** Yes! Copy one of the existing volunteer cards (lines ~206-238) and modify the text.

### Q: What if something breaks?
**A:** The website is static HTML/CSS/JS - very hard to break. If something goes wrong:
1. Check if you closed all HTML tags properly
2. Restore from GitHub history
3. Contact you (the person who built it) for help

---

## File Structure

```
animal-shelter/
├── index.html              # Main website file (THIS IS THE ONE TO EDIT)
├── styles.css              # All the styling (rarely needs editing)
├── script.js               # Interactive features (rarely needs editing)
├── images/                 # Folder for animal photos
│   ├── dogs/
│   ├── cats/
│   └── small-animals/
├── HOW-TO-ADD-PHOTOS.md   # Guide for adding photos
└── README.md              # Technical documentation
```

**90% of updates happen in `index.html`**

---

## Presentation Talking Points

### When presenting to the shelter:

**1. Pain Points This Solves:**
- ❌ "People can't find our hours"
  - ✅ Hours displayed prominently in 3 places
- ❌ "We get calls about lost dogs constantly"
  - ✅ Dedicated Lost/Found section with clear instructions
- ❌ "People don't know how to donate"
  - ✅ Multiple donation options clearly listed
- ❌ "We need more volunteers"
  - ✅ 6 volunteer opportunities showcased

**2. How It Integrates with Their Current Workflow:**
- They keep using Petfinder for animal listings (no change)
- Website links to Petfinder (always up-to-date)
- Minimal maintenance required
- Can be updated by anyone with basic computer skills

**3. Mobile-Friendly:**
- 70%+ of visitors will be on phones
- Show them on your phone during presentation

**4. Cost:**
- **FREE** to host on GitHub Pages
- **~$12/year** if they want custom domain
- **$0/year** if they stick with GitHub URL

**5. Maintenance:**
- 5-10 minutes per week (updating urgent needs)
- No technical skills required
- Can be done by any volunteer

---

## Your Role (Hosting for 1 Year)

If you're hosting it for them for a year:

**What you'll do:**
1. ✅ Deploy to GitHub Pages or Netlify
2. ✅ Give them the live URL
3. ✅ Provide this guide
4. ✅ Make minor updates if they request (via email/text)
5. ✅ After 1 year: Transfer ownership or help them take over

**Set boundaries:**
- ✅ Simple text updates: Yes
- ✅ Updating percentages/hours: Yes
- ⚠️ Design changes: Case by case
- ❌ Building new features: Extra work

**Monthly check-in:**
- Send them a quick email: "Anything need updating?"
- Takes 5 minutes

---

## Transferring Ownership (After 1 Year)

When you're ready to hand it off completely:

**Option 1: Transfer GitHub Repo**
1. Go to repository Settings
2. Scroll to "Danger Zone"
3. Click "Transfer ownership"
4. Enter their GitHub account

**Option 2: Download & Host Elsewhere**
1. Download all files as ZIP
2. Give them ZIP file
3. They upload to their hosting
4. You're done!

**Option 3: Keep Hosting, Give Edit Access**
1. Add them as collaborator on GitHub
2. Teach them to edit `index.html`
3. They push updates, GitHub auto-deploys

---

## Emergency Contact

**If the website goes down or has issues:**

1. Check GitHub Pages status: status.github.com
2. Check if files are still in repository
3. Redeploy from Settings > Pages
4. Contact me (add your contact info here)

---

## Success Metrics to Track

After launch, ask the shelter to track:

- 📞 "How did you hear about us?" (expect "website" to increase)
- 🐾 Lost/found reunions (should increase with dedicated section)
- 🙋 Volunteer inquiries (should increase with clear opportunities)
- 💰 Donation mentions (people saying they saw needs online)

Share these wins back with them to show the value!

---

## Final Checklist Before Handoff

- [ ] Website deployed and live URL working
- [ ] All contact info verified as correct
- [ ] Hours are accurate
- [ ] Petfinder link working (shows their animals)
- [ ] Mobile version tested
- [ ] Printed this guide for shelter
- [ ] Showed them how to update urgent needs
- [ ] Gave them your contact info for questions
- [ ] Set calendar reminder for 1-month check-in

---

**Good luck with the presentation! They're going to love it.** 🐾

The combination of the Lost/Found section addressing their dog problem + the professional design + zero ongoing cost makes this an easy "yes" for them.
