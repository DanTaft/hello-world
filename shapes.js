function createGeometricShape(shape, size, char = '*') {
      if (size <= 0) {
        return "Size must be greater than 0.";
      }
    
      let output = "";
    
      switch (shape.toLowerCase()) {
        case "square":
          for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
              output += char;
            }
            output += "\n";
          }
          break;
    
        case "triangle": // Right-angled triangle
          for (let i = 1; i <= size; i++) {
            for (let j = 0; j < i; j++) {
              output += char;
            }
            output += "\n";
          }
          break;
    
        case "triangle-inverted": // Inverted Right-angled triangle
          for (let i = size; i >= 1; i--) {
            for (let j = 0; j < i; j++) {
              output += char;
            }
            output += "\n";
          }
          break;
    
        case "diamond":
          for (let i = 1; i <= size; i++) {
            output += " ".repeat(size - i); // Leading spaces
            for (let j = 0; j < 2 * i - 1; j++) {
              output += char;
            }
            output += "\n";
          }
          for (let i = size - 1; i >= 1; i--) { // Bottom half
            output += " ".repeat(size - i);
            for (let j = 0; j < 2 * i - 1; j++) {
              output += char;
            }
            output += "\n";
          }
          break;
    
          case "rectangle":
            const width = arguments[2] || size * 2; // default width to double the size
            for (let i = 0; i < size; i++) {
              for (let j = 0; j < width; j++) {
                output += char;
              }
              output += "\n";
            }
            break;
    
    
        default:
          return "Invalid shape. Choose from 'square', 'triangle', 'triangle-inverted', 'diamond', or 'rectangle'.";
      }
    
      return output;
    }
    
    
    // Examples:
    console.log(createGeometricShape("square", 5));
    console.log(createGeometricShape("triangle", 4, "$"));
    console.log(createGeometricShape("triangle-inverted", 6, "#"));
    console.log(createGeometricShape("diamond", 5, "@"));
    console.log(createGeometricShape("rectangle", 3, "x"));
    console.log(createGeometricShape("rectangle", 3, "x", 10)); // with width