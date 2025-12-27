# Interactive Hover Boxes 🎨🖱️

This project is a small JavaScript experiment that adds interactive hover effects
to multiple divs on a webpage.

Each box reacts when the mouse enters by:
- Changing to a random background color (with limited repetition)
- Showing a custom cursor
- Sliding an image upward inside the box*
- Displaying text that pops up along with the image

When the mouse leaves, everything resets instantly.

---

## Features

- Multiple hoverable boxes
- Random RGB color generator with repeat control
- Image slides up inside its own div*
- Text pops up
- Different cursor icons per box
- Pure JavaScript (no CSS animation files)

---

## Folder Structure

root/
│
├── index.html
├── style.css
├── script.js
├── luffy.png
├── goku.png
├── naruto.png
├── mega.png

---

## How It Works

- All divs with the class `.box` listen for mouseenter and mouseleave events
- On mouse enter:
  - A random background color is applied
  - An image element is created dynamically*
  - The image slides up inside the hovered div*
  - A text element appears with a pop-up animation
  - The cursor changes depending on the box
- On mouse leave:
  - Image and text are removed instantly
  - Background color resets
  - Cursor returns to default

---

## Technologies Used

- HTML
- CSS
- Vanilla JavaScript (DOM manipulation and events)

---

## Notes

- Animations are handled directly using JavaScript
- The code is intentionally written in a simple and experimental style
- No external libraries or frameworks are used
- * Codes are commented and thus are not deployed

---

## Future Improvements

- Different animations for each box
- More advanced easing effects
- Click-based interactions
- Mobile and touch support

---

## Author

Built as a JavaScript hover interaction experiment.
Feel free to fork, modify, or experiment with it.
