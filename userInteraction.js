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
}
