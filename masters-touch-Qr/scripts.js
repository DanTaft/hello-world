 const qrcode = new QRCode(document.getElementById("qrcode"), {
   text: "https://colorpainting.w3spaces.com",
   width: 128,
   height: 128,
   colorDark: "#000000",
   colorLight: "#ffffff",
   correctLevel: QRCode.CorrectLevel.H,
   // Correct level can be L, M, Q, or H
   // L: 7% error correction
   // M: 15% error correction
   // Q: 25% error correction
   // H: 30% error correction
   useSVG: true, // Use SVG for better quality
   // useSVG: false, // Use PNG for compatibility
   imageSettings: {
     src: "https://colorpainting.w3spaces.com/favicon.ico",
     width: 24,
     height: 24,
     excavate: true, // Excavates the QR code to fit the image
     }
   });