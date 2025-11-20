# Trinity County Animal Shelter Website - Quick Start Guide

**For Shelter Staff: Simple Instructions**

---

## Your Website is Live! 🎉

Your new website is at: **[Insert URL after deployment]**

This guide shows you the **3 things** you'll need to update regularly.

---

## 1. Updating Donation Needs (Most Common Update)

**When:** Weekly or when supplies change

**Time:** 2 minutes

### Steps:

1. Open `index.html` in Notepad (Windows) or TextEdit (Mac)
   - Right-click file → Open With → Notepad

2. Press `Ctrl+F` (Windows) or `Cmd+F` (Mac) to search

3. Search for: `URGENT NEEDS`

4. You'll see three items that look like this:
   ```html
   <div class="meter-fill" style="width: 15%; background: #e74c3c;"></div>
   ```

5. Change the percentage (15% in example above):
   - **0-25%** = CRITICAL (red)
   - **25-50%** = LOW (orange)
   - **50-75%** = OK (yellow)
   - **75-100%** = GOOD (green)

6. Change the color code to match:
   - Red: `#e74c3c`
   - Orange: `#e67e22`
   - Yellow: `#f39c12`
   - Green: `#51cf66`

7. Change the status text:
   - `CRITICAL`, `LOW`, `OK`, or `GOOD`

8. Save the file

9. Upload to your website (see "How to Upload Changes" below)

### Example:

**Dog food went from critical to good:**

BEFORE:
```html
<div class="meter-fill" style="width: 15%; background: #e74c3c;"></div>
<span class="need-status">CRITICAL</span>
```

AFTER:
```html
<div class="meter-fill" style="width: 85%; background: #51cf66;"></div>
<span class="need-status">GOOD</span>
```

---

## 2. Changing Hours

**When:** When your schedule changes

**Time:** 1 minute

### Steps:

1. Open `index.html`

2. Search for: `OPEN:`

3. You'll see:
   ```html
   <p>🐾 <strong>OPEN:</strong> Thursday-Saturday & Tuesday, 12-4 PM...</p>
   ```

4. Change to your new hours

5. Also search for two more places:
   - Search: `Thursday-Saturday:`
   - Search: `Open: Thursday`

6. Update all three places to match

7. Save and upload

---

## 3. Changing Phone Number

**When:** If your phone number changes

**Time:** 30 seconds

### Steps:

1. Open `index.html`

2. Search for: `(530) 623-1370`

3. Click "Replace All" if your editor has it

4. Replace with new number

5. Save and upload

---

## How to Upload Changes

**If using GitHub Pages:**

### Option A: Edit Directly on GitHub (Easiest!)

1. Go to: https://github.com/clfarr/animal-shelter

2. Click on `index.html`

3. Click the pencil icon (✏️) to edit

4. Make your changes

5. Scroll to bottom

6. Type a note like "Updated dog food to 85%"

7. Click "Commit changes"

8. Wait 2 minutes - your changes are live!

### Option B: Upload File

1. Make changes on your computer

2. Go to repository on GitHub

3. Click "Upload files"

4. Drag `index.html` file

5. Click "Commit changes"

6. Wait 2 minutes - live!

**If using Netlify:**

1. Log into netlify.com

2. Find your site

3. Click "Deploys"

4. Drag your entire folder into the upload area

5. Done!

---

## Common Updates Cheat Sheet

### Update Amazon Wishlist Link

**Find:** Line ~358
**Look for:** `<a href="#">`
**Change to:** `<a href="YOUR-AMAZON-WISHLIST-URL">`

### Add Supply Item to List

**Find:** Around line 330 (search for "Always Needed")
**Add a line like:**
```html
<li>Your new item here</li>
```

### Change Urgent Banner Message

**Find:** Line ~29 (search for "OPEN:")
**Change the text inside the `<p>` tags**

---

## When to Call for Help

✅ **You can do these yourself:**
- Updating donation percentages
- Changing hours
- Changing phone/address
- Adding items to supply lists

❌ **Call [your contact] for help with:**
- Website not loading
- Adding new sections
- Design changes
- Technical errors
- Petfinder not showing right animals

---

## Quick Reference

### File to Edit:
- 95% of updates: `index.html`
- Rarely: `styles.css` (design)
- Never: `script.js` (interactive features)

### Important Line Numbers:
- Urgent banner: Line 29
- Donation meters: Lines 290-312
- Hours (main): Line 72-74
- Phone numbers: Search for `(530) 623-1370`
- Petfinder link: Lines 56 and 335

### Color Codes:
- Red (critical): `#e74c3c`
- Orange (low): `#e67e22`
- Yellow (ok): `#f39c12`
- Green (good): `#51cf66`

---

## Safety Tips

✅ **Before editing:**
- Make a copy of the file first (backup!)
- Only edit one thing at a time

✅ **While editing:**
- Don't delete any `<` or `>` characters
- Keep all quotation marks `" "`
- Don't change anything inside `style=` unless following this guide

✅ **After editing:**
- Look at the live website
- Make sure it still works
- If broken, use your backup copy

---

## Testing Checklist

After making changes, check:

- [ ] Website loads
- [ ] All 5 navigation buttons work
- [ ] Petfinder link works
- [ ] Phone number is clickable
- [ ] Hours show correctly
- [ ] Donation meters look right
- [ ] Check on phone too!

---

## Resources

- **This guide:** Read when you need to update something
- **HANDOFF-GUIDE.md:** More detailed technical info
- **HOW-TO-ADD-PHOTOS.md:** If you want to add animal photos

---

## Your Contact Person

**Questions? Changes needed?**

Contact: **[Insert your name and contact info here]**

I'm hosting this for you for **1 year** and happy to help with updates!

---

## Monthly Update Routine

**Set a reminder for every Monday:**

1. Check donation supplies
2. Update the meters in index.html (2 minutes)
3. Upload changes
4. Done!

This keeps the website fresh and shows donors that you actively need support.

---

**Remember:** You can't break it! If something goes wrong, we can always restore from backup. Don't be afraid to try updating it yourself.

The website is designed to be simple and forgiving. 🐾

---

## Quick Video Tutorial Ideas

If you want to create quick videos for your volunteers:

1. **"How to Update Donation Needs" (2 min video)**
   - Screen record the process
   - Shows opening file, finding section, changing percentage, saving

2. **"How to Edit on GitHub" (3 min video)**
   - Shows logging into GitHub
   - Clicking edit button
   - Making change
   - Saving

These videos can be passed to new volunteers and make training super easy!

---

**Welcome to your new website! It's going to help so many animals find homes.** 🏡❤️
