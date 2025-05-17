function validatePhoneNumber(number){
      const phoneRegex = /^(?:1\s|1)?(?:\(\d{3}\)\s?|\d{3}(?:\s|-)?)\d{3}(?:-|\s)?\d{4}$/;
      return phoneRegex.test(number);
    }
    document.getElementById("user-input").value ="";
    let paragraph = document.createElement("p");
    paragraph.className = "results-div";
    
    let text = validatePhoneNumber(userInput) ? "Valid" : "Invalid";
    paragraph.textContent = `${text} US number:\n${userInput}`;
    results.prepend(paragraph);
      
    });