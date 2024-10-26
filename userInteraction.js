import { generateTable } from './tableGenerator.js';

document.getElementById('limit').addEventListener('change', () => {
  const limit = parseInt(document.getElementById('limit').value);
  generateTable(limit);
});


