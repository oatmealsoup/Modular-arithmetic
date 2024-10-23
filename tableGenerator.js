export function generateTable (limit) {
  const tableContainer = document.getElementById('tableContainer');
  const table = tableContainer.querySelector('table');

  // Pre-calculate values up to a certain limit (adjust as needed)
  const precalculatedValues = new Map();
  for (let i = 1000; i >= -1000; i--) {
    for (let j = 1000; j >= -1000; j--) {
      precalculatedValues.set(`${i}-${j}`, (i % j).toString());
    }
  }
  
  // If the table exists, update it
  if (table) {
    // Update existing cells
    for (let i = -limit; i <= limit; i++) {
      const row = table.rows[i + limit + 1]; // Adjust index based on header row
      for (let j = -limit; j <= limit; j++) {
        const cell = row.cells[j + limit + 1];
        cell.textContent = precalculatedValues.get(`${i}-${j}`);
  } else {
// Create the header row
  const headerRow = document.createElement('tr');
  headerRow.classList.add('row');
  headerRow.classList.add('index-row');
  headerRow.innerHTML = '<th class="index-cell"></th>';
  for (let j = limit; j >= -limit; j--) {
    const cell = document.createElement('th');
    cell.classList.add('cell');
    cell.classList.add('index-column');
    cell.textContent = j;
    headerRow.appendChild(cell);
  }
  tableContainer.appendChild(headerRow);

  // Create the data rows
  for (let i = limit; i >= -limit; i--) {
    const row = document.createElement('tr');
    row.classList.add('row');

    // Create the index cell
    const indexCell = document.createElement('td');
    indexCell.classList.add('cell');
    indexCell.classList.add('index-row');
    indexCell.textContent = i;
    row.appendChild(indexCell);

    // Create the other cells
    for (let j = limit; j >= -limit; j--) {
      const cell = document.createElement('td');
      cell.classList.add('cell');
      cell.textContent = (i % j).toString();
      row.appendChild(cell);
    }
    tableContainer.appendChild(row);
  }
}
