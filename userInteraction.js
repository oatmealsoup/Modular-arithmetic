import { generateTable } from './tableGenerator.js';

document.getElementById('limit').addEventListener('change', () => {
  const limit = parseInt(document.getElementById('limit').value);
  generateTable(limit);
  const tableHeight = document.getElementById('tableContainer').offsetHeight;
  const tableWidth = document.getElementById('tableContainer').offsetWidth;
  document.body.style.minHeight = `${tableHeight}px`;
  document.body.style.minWidth = `${tableWidth}px`;
});


