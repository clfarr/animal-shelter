# 📸 How to Add Real Animal Photos

Great! You're ready to add real photos of your animals to the website. Here's exactly what you need to do:

## Quick Start

1. Take photos of your animals (phone camera works great!)
2. Name the files exactly as shown below
3. Place them in the correct folder
4. That's it! The website will automatically display them

## Required Photos

### 🐕 Dogs (3 photos needed)
Place these in the **`images/dogs/`** folder:

- `buddy.jpg` - Photo of Buddy (Lab mix)
- `daisy.jpg` - Photo of Daisy (Beagle)
- `max.jpg` - Photo of Max (Terrier mix)

### 🐱 Cats (3 photos needed)
Place these in the **`images/cats/`** folder:

- `whiskers.jpg` - Photo of Whiskers (Tabby)
- `shadow.jpg` - Photo of Shadow (Black cat)
- `mittens.jpg` - Photo of Mittens (Calico)

### 🐰 Small Animals (3 photos needed)
Place these in the **`images/small-animals/`** folder:

- `thumper.jpg` - Photo of Thumper (Rabbit)
- `peanut-butter.jpg` - Photo of Peanut & Butter (Guinea pigs)
- `nibbles.jpg` - Photo of Nibbles (Hamster)

## Photo Tips for Best Results

### 📷 Taking Good Photos

1. **Natural light is best** - Take photos near a window or outside
2. **Get close** - Fill the frame with the animal's face/body
3. **Eye level** - Get down to the animal's level for better shots
4. **Plain backgrounds** - Simple backgrounds make animals stand out
5. **Show personality** - Capture their unique character!

### 📐 Image Specifications

- **Format**: JPG or JPEG (PNG also works)
- **Size**: At least 600x600 pixels (square works best)
- **Orientation**: Square or slightly rectangular is ideal
- **File size**: Keep under 2MB for fast loading

The website will automatically crop photos to fit the polaroid frames, so square photos work best!

## What Happens If Photos Are Missing?

If a photo file is missing, the browser will show:
- A gray placeholder background
- Or a "broken image" icon

**Don't worry!** Just add the photo file with the correct name and refresh the page.

## Changing Animal Names or Adding New Animals

Want to change an animal's name or add more? Here's how:

### To Change a Name:

1. Open `index.html`
2. Find the animal's polaroid card
3. Update the name in the `<h3>` tag
4. Update the image `src` to match the new filename
5. Rename your photo file to match

**Example:**
```html
<!-- Change Buddy to Rocky -->
<img src="images/dogs/rocky.jpg" alt="Rocky - 3 year old Lab mix" class="animal-photo">
<h3>Rocky</h3>
```

### To Add a New Animal:

1. Open `index.html`
2. Copy an existing polaroid div (lines 54-64 for dogs, 91-101 for cats, etc.)
3. Paste it where you want the new animal
4. Update:
   - `data-animal` attribute (dog/cat/small)
   - Image `src` and `alt` text
   - Animal name, age, and bio
5. Add the photo to the correct images folder

## File Structure

Your images folder should look like this:

```
images/
├── dogs/
│   ├── buddy.jpg
│   ├── daisy.jpg
│   └── max.jpg
├── cats/
│   ├── whiskers.jpg
│   ├── shadow.jpg
│   └── mittens.jpg
└── small-animals/
    ├── thumper.jpg
    ├── peanut-butter.jpg
    └── nibbles.jpg
```

## Testing Your Photos

1. Add your photos to the correct folders
2. Open `index.html` in your browser (or refresh if already open)
3. Check that all photos display correctly
4. Hover over polaroids to see the zoom effect
5. Try the filter buttons (Dogs, Cats, Small Pets)

## Common Issues

### Photo won't display
- ✅ Check the filename matches exactly (including .jpg extension)
- ✅ Make sure it's in the right folder
- ✅ Try refreshing the browser (Ctrl+F5 or Cmd+Shift+R)

### Photo looks stretched or squished
- ✅ Use a square photo (1:1 aspect ratio)
- ✅ Or crop your photo to be roughly square

### Photo file is too big
- ✅ Resize to 800x800 pixels max
- ✅ Use online tools like TinyJPG.com to compress

## Need Different Animals?

This is YOUR shelter website! Feel free to:
- Change animal names
- Add more animals
- Remove animals that get adopted (yay!)
- Update photos regularly

Just follow the patterns in the HTML and you'll be fine!

## Quick Checklist

- [ ] Created/confirmed images folders exist (dogs, cats, small-animals)
- [ ] Took photos of all 9 animals
- [ ] Renamed photos to match required filenames
- [ ] Placed photos in correct folders
- [ ] Tested website in browser
- [ ] All photos display correctly
- [ ] Filter buttons work properly

---

**Questions?** The structure is simple - just match the filenames and put them in the right folders. You've got this! 🐾

**Pro Tip:** Keep backup copies of your original photos in case you need to edit or replace them later!
