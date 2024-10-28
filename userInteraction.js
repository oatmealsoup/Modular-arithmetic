import { generateTable } from './tableGenerator.js';

const generate = document.getElementById("generate");
generate.addEventListener('click', () => {
  const limit = document.getElementById('limit').value;
  generateTable(limit);
});
document.body.style.overflow = 'hidden';

element.addEventListener('wheel', handleWheel);
element.addEventListener('mousedown', handleMouseDown);
element.addEventListener('mousemove', handleMouseMove);
element.addEventListener('mouseup',   handleMouseUp);

let isDragging = false;
let startX, startY;

function handleWheel(event) {
  // Zoom in/out based on wheel delta
  const delta = event.deltaY;
  zoom(delta > 0 ? -0.1 : 0.1);
  event.preventDefault(); // Prevent default browser zoom
}

function handleMouseDown(event) {
  isDragging = true;
  startX = event.clientX;
  startY = event.clientY;
}

function handleMouseMove(event) {
  if (isDragging) {
    const dx = event.clientX - startX;
    const dy = event.clientY - startY;
    pan(dx, dy);
    startX = event.clientX;
    startY = event.clientY;
  }
}

function handleMouseUp() {
  isDragging = false;
}


