import { generateTable } from './tableGenerator.js';

function adjustPageSize() {
  const tableHeight = document.getElementById('tableContainer').offsetHeight;
  const tableWidth = document.getElementById('tableContainer').offsetWidth;

  document.body.style.minHeight = `${tableHeight}px`;
  document.body.style.minWidth = `${tableWidth}px`;
}

// Initial call to generate the table and adjust the page size
generateTable(50); // Replace 10 with your desired initial limit
adjustPageSize();
