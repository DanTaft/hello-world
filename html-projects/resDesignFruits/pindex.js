function showImageAfterDelay(hides, imageUrl, delay) {
      setTimeout(() => {
            const imgElement = document.getElementById(hides);
            if (imgElement) {
                  imgElement.src = imageUrl;
                  imgElement.style.display = 'block';
            } else {
                  console.error(`Element with id "${hides}" not found.`);
            }
      }, delay);
}

// Example usage:
// Add an <img> element with id="myImage" in your HTML file.
// Initially, set its style to "display: none;".
// Call the function like this:
window.addEventListener('load', () => {
      showImageAfterDelay('hides', 'sunset.jpeg', 5000);
});
// This will show the image after 5 seconds when the page loads.