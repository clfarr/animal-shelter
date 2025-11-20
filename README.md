# 🐾 Trinity County Animal Shelter Website

A warm, community-focused website for Trinity County Animal Shelter in Weaverville, California.

## About Trinity County Animal Shelter

**Location:** 570 Mountain View St, Weaverville, CA 96093
**Phone:** (530) 623-1370
**Hours:** Thursday-Saturday & Tuesday, 12-4 PM

Trinity County Animal Shelter serves the beautiful Trinity County region in Northern California, providing care and shelter for homeless and abandoned animals while working to find them loving forever homes.

## Design Philosophy

This website embraces a grassroots, authentic design that reflects the caring, community-focused nature of a small county animal shelter:

- **🎨 Bulletin Board Aesthetic**: Cork board backgrounds with pinned elements
- **✍️ Handwritten Fonts**: Personal, warm typography (Caveat, Patrick Hand, Indie Flower)
- **📝 Sticky Notes**: Important info presented like community notices
- **💝 Grassroots Feel**: Authentic representation of a community-supported shelter

## Features

### 🐕 Meet Our Animals
- Direct link to Petfinder listings
- Adoption process information
- Contact details with hours and location
- Easy-to-find visit information

### 🙋 Volunteer Section
- Six volunteer opportunity categories:
  - Dog Walkers
  - Shelter Help
  - Transport Helpers
  - Social Media
  - Event Help
  - Foster Families (urgent need highlighted)
- Clear descriptions and flexible options

### 💰 Donate Section
- Visual "urgent needs" meter showing current supply levels
- Monetary donation information
- Supply donation lists (general and small animals)
- Amazon wishlist integration option
- Drop-off information with correct hours

### 📖 About Us
- Mission statement
- Information about Trinity County
- Services provided
- Contact and location details

## Technical Details

- **Pure HTML/CSS/JavaScript** - No frameworks, lightweight and fast
- **Responsive Design** - Works on mobile, tablet, and desktop
- **Accessibility Features** - Keyboard navigation, semantic HTML
- **Performance** - Fast loading, minimal dependencies
- **Petfinder Integration** - Links to shelter's Petfinder page (CA1094)

### Google Fonts Used
- Caveat (headings)
- Patrick Hand (body text)
- Indie Flower (notes and captions)

## File Structure

```
animal-shelter/
├── index.html          # Main HTML file
├── styles.css          # All styling with cork board theme
├── script.js           # Interactive features
├── images/             # Folder for photos
│   ├── dogs/
│   ├── cats/
│   └── small-animals/
├── HOW-TO-ADD-PHOTOS.md
└── README.md           # This file
```

## Interactive Features

1. **Section Navigation**: Smooth transitions between Animals, Volunteer, Donate, and About sections
2. **Hover Effects**: Cards lift and interact on hover
3. **Animated Meters**: Donation need meters animate when scrolled into view
4. **Easter Egg**: Click the shelter name 5 times for a surprise!
5. **Parallax Header**: Subtle scroll effect on the header
6. **Responsive**: Works beautifully on all devices

## Customization

### Updating Urgent Needs
1. Find the `.needs-list` section in HTML (around line 187)
2. Adjust the meter width in the inline style (currently 15%, 25%, 30%)
3. Update the status class (critical/low/ok)
4. Change the item names as needed

### Updating Hours
The shelter hours appear in multiple places:
- Urgent banner (line 29)
- Animals section info cards (line 72-74)
- Footer (line 333)

### Changing Contact Info
- Phone number: (530) 623-1370
- Address: 570 Mountain View St, Weaverville, CA 96093
- Update in header sticky note, footer, and About section

### Petfinder Integration
Currently links to: `https://www.petfinder.com/search/?shelter_id=CA1094`

To update:
1. Find "CA1094" in index.html
2. Replace with your shelter's Petfinder ID
3. Located on lines 55 and 335

## Browser Support

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Why This Design?

Trinity County is a beautiful, rural mountain county with a close-knit community. This design reflects that reality:
- It's warm and personal
- It's honest about needs
- It's community-focused
- It makes information easy to find
- It integrates with their existing Petfinder presence

## Deployment

This is a static website that can be hosted anywhere:
- GitHub Pages (free)
- Netlify (free)
- Vercel (free)
- Any web hosting service

Simply upload all files to your hosting provider.

## License

Created with care for Trinity County Animal Shelter. Free to use and modify for animal shelter purposes.

---

*Caring for animals in the heart of Northern California's Trinity Alps* 🐾

**Note:** This website was created as a presentation/proposal for Trinity County Animal Shelter. All information is based on publicly available data and should be verified with the shelter before going live.
