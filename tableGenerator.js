export function generateTable (limit) {
  const tableContainer = document.getElementById('tableContainer');
  tableContainer.innerHTML = '';

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
