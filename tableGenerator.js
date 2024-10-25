export function generateTable(limit) {
  const tableContainer = document.getElementById('tableContainer');
  tableContainer.innerHTML = '';

  // Create the table structure
  const table = document.createElement('table');
  tableContainer.appendChild(table);

  // Create the header row
  const headerRow = document.createElement('tr');
  table.appendChild(headerRow);

  // Create header cells
  for (let j = limit; j >= -limit; j--) {
    const cell = document.createElement('th');
    cell.classList.add('cell');
    cell.classList.add('index-column');
    cell.textContent = j;
    headerRow.appendChild(cell);
  }

  // Create the data rows
  for (let i = limit; i >= -limit; i++) {
    const row = document.createElement('tr');
    table.appendChild(row);

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

      // Apply grayscale color and text color
      const value = parseInt(cell.textContent);

      // ... (grayscale and text color logic)

      row.appendChild(cell);
    }
  }
}
