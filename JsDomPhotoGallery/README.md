# DOM Gallery

This is a JavaScript project to create a dynamic gallery of images. The project uses the Picsum Photos API to get random images and displays them on the webpage. The project also includes an overlay box that displays the full-sized image when an image from the gallery is clicked.

## Features
- Uses the Picsum Photos API to get random images and displays them in the gallery
- Includes an overlay box that displays the full-sized image when an image from the gallery is clicked
- Images can be navigated using the left and right buttons on the overlay box

## Technical Details
- The project uses JavaScript and the Fetch API to get images from the Picsum Photos API
- The images are displayed using Bootstrap for responsive design and styling
- The overlay box uses Font Awesome icons for the close and navigation buttons

## How to run the project
1. Clone or download the repository
2. Open the index.html file in a web browser
3. The gallery should be displayed on the page, with random images loaded from the Picsum Photos API.

## Functions
- `getRandomImage`: Asynchronously gets a random image URL using the Picsum Photos API.
- `initHeader`: Initializes the header of the page with a title.
- `initItems`: Asynchronously initializes the items in the gallery using the images returned by the `getRandomImage` function.
- `generateHTML`: The main function that generates the HTML for the page and adds the functionality to the overlay box.

**Note**: The project is meant to be run in a modern web browser that supports the Fetch API and ES6 features.
