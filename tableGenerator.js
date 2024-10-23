export function generateTable (limit) {
  const tableContainer = document.getElementById('tableContainer');
  tableContainer.innerHTML = '';

  // Create the header row
  const headerRow = document.createElement('div');
  headerRow.classList.add('row');
  headerRow.classList.add('index-row');
  headerRow.innerHTML = '<div class="cell">i</div>';
  for (let j = -limit; j <= limit; j++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.classList.add('index-column');
    cell.textContent = j;
    headerRow.appendChild(cell);
  }
  tableContainer.appendChild(headerRow);

  // Create the data rows
  for (let i = -limit; i <= limit; i++) {
    const row = document.createElement('div');
    row.classList.add('row');

    // Create the index cell
    const indexCell = document.createElement('div');
    indexCell.classList.add('cell');
    indexCell.classList.add('index-row');
    indexCell.textContent = i;
    row.appendChild(indexCell);

    // Create the other cells
    for (let j = -limit; j <= limit; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.textContent = (i % j).toString();
      row.appendChild(cell);
    }

    tableContainer.appendChild(row);
  }
}
