import { generateTable } from './tableGenerator.js';

function handleZoom(event) {
  // Implement zooming logic here
}

function handlePan(event) {
  // Implement panning logic here
}

document.getElementById('limit').addEventListener('change', () => {
  const limit = parseInt(document.getElementById('limit').value);
  generateTable(limit);
});
