
    
    
    
    document.getElementById("convert-btn").addEventListener("click", function(){
      const inputNumber = document.getElementById("number").value;
    
      if (inputNumber.trim() === "") {
        output.textContent = "Please enter a valid number";
      } else if (parseInt(inputNumber) === -1){
        output.textContent = "Please enter a number greater than or equal to 1";
      } else if (inputNumber > 3999) {
        output.textContent = "Please enter a number less than or equal to 3999";
      } else {
        output.textContent = "";
    
        const romanNumeral = convertToRoman(inputNumber);
        document.getElementById('output').textContent = romanNumeral;
      }
    });  

function convertToRoman(num) {
  const romanNumerals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  let result = '';

  for (let key in romanNumerals) {
    while (num >= romanNumerals[key]) {
      result += key;
      num -= romanNumerals[key];
    }
  }

  return result;
}




