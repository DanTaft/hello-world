function validatePhoneNumber(number) {
  // Allow spaces, dashes, and dots as separators
  const phoneRegex = /^(?:1[\s.-]?|1)?(?:\(\d{3}\)[\s.-]?|\d{3}[\s.-]?)\d{3}[\s.-]?\d{4}$/;
  return phoneRegex.test(number);
}

document.getElementById("user-input").value = "";

document.getElementById("phoneForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from reloading the page

  let userInput = document.getElementById("user-input").value;
  let results = document.getElementById("results");

  if (userInput) {
    let paragraph = document.createElement("p");
    paragraph.className = "results-div";
    let text = validatePhoneNumber(userInput) ? "Valid" : "Invalid";
    paragraph.textContent = `${text} US number:\n${userInput}`;
    results.prepend(paragraph);

    setTimeout(() => {
      document.getElementById("user-input").value = "";
    }, 1000); // Clear the input field after submission
  } else {
    alert("Please enter a phone number.");
  }
});