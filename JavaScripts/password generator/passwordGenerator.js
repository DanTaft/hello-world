document.getElementById("generate").addEventListener("click", function () {
      const length = parseInt(document.getElementById("length").value);
      const includeUppercase = document.getElementById("includeUppercase").checked;
      const includeNumbers = document.getElementById("includeNumbers").checked;
      const includeSymbols = document.getElementById("includeSymbols").checked;

      const password = generatePassword(length, includeUppercase, includeNumbers, includeSymbols);
      document.getElementById("passwordResult").textContent = password;

      
}); 

function generatePassword(length, includeUppercase, includeNumbers, includeSymbols) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    let charSet = lowercaseChars;

    if (includeUppercase) {
        charSet += uppercaseChars;
    }
    if (includeNumbers) {
        charSet += numberChars;
    }
    if (includeSymbols) {
        charSet += symbolChars;
    }

    // Validate character set
    if (charSet === lowercaseChars && !includeUppercase && !includeNumbers && !includeSymbols) {
        return "Please select at least one character type.";
    }

    // Validate length
    if (isNaN(length) || length < 4 || length > 128) {
        return "Please enter a length between 4 and 128.";
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        password += charSet[randomIndex];
    }

    return password;
}
