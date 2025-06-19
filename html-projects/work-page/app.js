const canvas = document.getElementById('paint-canvas');
const ctx = canvas.getContext('2d');
let painting = false;

// Drawing settings
let currentTool = 'pencil';
let currentColor = '#000000';
let currentSize = 4;
let currentOpacity = 1.0;
let currentBlendMode = 'source-over';

// Tool functionality
function startPosition(e) {
  painting = true;
  draw(e);
}

function endPosition() {
  painting = false;
  ctx.beginPath();
}

function draw(e) {
  if (!painting) return;
  
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  ctx.lineWidth = currentSize;
  ctx.lineCap = 'round';
  
  // Set blend mode
  if (currentTool === 'eraser') {
    ctx.globalCompositeOperation = 'destination-out';
    ctx.globalAlpha = currentOpacity;
  } else if (currentTool === 'blend') {
    ctx.globalCompositeOperation = currentBlendMode;
    ctx.globalAlpha = currentOpacity;
    ctx.strokeStyle = currentColor;
  } else {
    ctx.globalCompositeOperation = 'source-over';
    ctx.strokeStyle = currentColor;
    
    if (currentTool === 'brush') {
      ctx.globalAlpha = 0.7 * currentOpacity;
    } else {
      ctx.globalAlpha = currentOpacity;
    }
  }
  
  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x, y);
}

// Event listeners for canvas
canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', endPosition);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseleave', endPosition);

// Tool selection
document.querySelectorAll('.tool-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    // Remove active class from all buttons
    document.querySelectorAll('.tool-btn').forEach(b => b.classList.remove('active'));
    // Add active class to clicked button
    this.classList.add('active');
    
    // Set current tool
    if (this.id === 'pencil-btn') {
      currentTool = 'pencil';
      canvas.style.cursor = 'crosshair';
    } else if (this.id === 'brush-btn') {
      currentTool = 'brush';
      canvas.style.cursor = 'crosshair';
    } else if (this.id === 'blend-btn') {
      currentTool = 'blend';
      canvas.style.cursor = 'crosshair';
    } else if (this.id === 'eraser-btn') {
      currentTool = 'eraser';
      canvas.style.cursor = 'grab';
    }
  });
});

// Color picker
document.getElementById('color-picker').addEventListener('change', function() {
  currentColor = this.value;
});

// Color presets
document.querySelectorAll('.color-preset').forEach(preset => {
  preset.addEventListener('click', function() {
    currentColor = this.dataset.color;
    document.getElementById('color-picker').value = currentColor;
  });
});

// Brush size
const brushSizeSlider = document.getElementById('brush-size');
const sizeDisplay = document.getElementById('size-display');

brushSizeSlider.addEventListener('input', function() {
  currentSize = this.value;
  sizeDisplay.textContent = this.value + 'px';
});

// Opacity control
const opacitySlider = document.getElementById('opacity-slider');
const opacityDisplay = document.getElementById('opacity-display');

opacitySlider.addEventListener('input', function() {
  currentOpacity = this.value / 100;
  opacityDisplay.textContent = this.value + '%';
});

// Blend mode selector
document.getElementById('blend-mode').addEventListener('change', function() {
  currentBlendMode = this.value;
});

// Clear button
document.getElementById('clear-btn').addEventListener('click', function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
