import { generateTable } from './tableGenerator.js';
import { mapCellsToGrayScale } from '.greyScale.js';
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

function applyGrayscale() {
  const cells = document.querySelectorAll('table td');
  cells.forEach((cell) => {
    const value = parseInt(cell.textContent);
    const color = mapValueToGrayScale(value);
    cell.style.backgroundColor = color;
	cell.style.textColor = 'orange';
  });
}
