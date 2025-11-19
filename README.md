# 🐾 Hope Haven Animal Shelter Website

A heartfelt, grassroots-style website for a small county animal shelter that runs on love and donations.

## About Hope Haven

Hope Haven Animal Shelter is a small, volunteer-run shelter serving rural Hope County since 1987. This website reflects their authentic, community-focused mission - helping cats, dogs, and small animals find forever homes while relying on public support for food, supplies, and volunteers.

## Design Philosophy

This website breaks away from the typical polished, corporate shelter design. Instead, it embraces:

- **🎨 Bulletin Board Aesthetic**: Cork board backgrounds with pinned elements
- **📸 Polaroid-Style Cards**: Handmade feel for animal profiles
- **✍️ Handwritten Fonts**: Personal, warm typography
- **📝 Sticky Notes**: Important info presented like community notices
- **💝 Grassroots Feel**: Authentic representation of a small, resource-limited shelter

## Features

### 🐕 Meet Our Animals
- Interactive polaroid-style cards for each adoptable animal
- Filter by type: Dogs, Cats, or Small Animals (rabbits, guinea pigs, hamsters)
- Rotating, slightly-angled cards for an authentic bulletin board feel
- Hover effects to highlight individual animals

### 🙋 Volunteer Section
- Six volunteer opportunity categories
- Clear descriptions of what's needed
- Flexible options for different schedules and abilities
- Foster family urgent callout

### 💰 Donate Section
- Visual "urgent needs" meter showing current supply levels
- Multiple donation options (monetary, supplies, Amazon wishlist)
- Impact statistics showing what donations accomplish
- Supply drop-off information

### 📖 About Us
- Authentic shelter story since 1987
- Statistics showcasing their impact
- Meet the volunteer team
- Honest about their challenges and community-focused approach

## Technical Details

- **Pure HTML/CSS/JavaScript** - No frameworks, keeping it simple and lightweight
- **Responsive Design** - Works on mobile, tablet, and desktop
- **Accessibility Features** - Keyboard navigation, semantic HTML
- **Performance** - Fast loading, minimal dependencies
- **Print-Friendly** - Formatted for printing adoption flyers

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
└── README.md           # This file
```

## Interactive Features

1. **Section Navigation**: Smooth transitions between Animals, Volunteer, Donate, and About sections
2. **Animal Filtering**: Click filters to show only dogs, cats, or small animals
3. **Animated Meters**: Donation need meters animate when scrolled into view
4. **Hover Effects**: Cards lift and straighten on hover
5. **Easter Egg**: Click the shelter name 5 times for a surprise!
6. **Parallax Header**: Subtle scroll effect on the header

## Usage

Simply open `index.html` in a web browser. No build process or server required!

## Adding Real Animal Photos 📸

The website is ready for real animal photos! See **[HOW-TO-ADD-PHOTOS.md](HOW-TO-ADD-PHOTOS.md)** for detailed instructions.

**Quick version:**
1. Add your animal photos to these folders:
   - `images/dogs/` (buddy.jpg, daisy.jpg, max.jpg)
   - `images/cats/` (whiskers.jpg, shadow.jpg, mittens.jpg)
   - `images/small-animals/` (thumper.jpg, peanut-butter.jpg, nibbles.jpg)
2. Photos should be square (600x600px or larger)
3. Use JPG format
4. Refresh the browser - done!

The polaroid frames will automatically display your photos with a nice zoom effect on hover.

## Customization Guide

### Adding New Animals
1. Copy a polaroid div in the HTML
2. Update the `data-animal` attribute (dog/cat/small)
3. Add image file to appropriate images folder
4. Update image src, name, age, and bio
5. Add the photo file with matching name

### Updating Urgent Needs
1. Find the `.needs-list` section in HTML
2. Adjust the meter width in the inline style
3. Update the status class (critical/low/ok)

### Changing Colors
Main colors are defined in the CSS:
- Primary Blue: `#457b9d`
- Dark Background: `#2c3e50`
- Cork Board: `#c19a6b`
- Urgent Red: `#e74c3c`

## Why This Design?

Most shelter websites look polished and professional, which is great. But Hope Haven isn't a big organization with a large budget. They're a small, scrappy shelter where volunteers show up every day to care for animals with whatever resources the community can provide.

This design reflects that reality:
- It feels handmade because it IS largely handmade by volunteers
- It's warm and personal because the volunteers know every animal by name
- It's urgent and honest about needs because they really do need help
- It's community-focused because that's what keeps them running

## Browser Support

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

Free to use and modify. If you're a small shelter looking to use this template, please do! That's exactly what it's for.

## Contact

**Hope Haven Animal Shelter**
127 Old Mill Road, Hope County
Phone: (555) HOPE-4-PETS
Email: info@hopehaven.org

Open: Tuesday-Saturday, 10am-4pm

---

*Made with ❤️ for animals who deserve loving homes*
