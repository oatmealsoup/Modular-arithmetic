export function generateTable (limit) {
  const tableContainer = document.getElementById('tableContainer');
  tableContainer.innerHTML = '';

  // Create the header row
  // ... (same as before)

  // Create the data rows
  for (let i = limit; i >= -limit; i--) {
    const row = document.createElement('tr');
    row.classList.add('row');

    // Create the index cell
    // ... (same as before)

    // Calculate the first cell's value
    const firstCell = document.createElement('td');
    firstCell.classList.add('cell');
    firstCell.textContent = (i % -limit).toString();
    row.appendChild(firstCell);

    // Calculate the remaining cells using modular arithmetic properties
    for (let j = -limit + 1; j <= limit; j++) {
      const previousCell = row.cells[row.cells.length - 1];
      const newCell = document.createElement('td');
      newCell.classList.add('cell');
      newCell.textContent = (parseInt(previousCell.textContent) + j) % limit;
      row.appendChild(newCell);
    }

    tableContainer.appendChild(row);
  }
}
