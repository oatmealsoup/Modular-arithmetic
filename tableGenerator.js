export function generateTable (limit) {
  const tableContainer = document.getElementById('tableContainer');
  tableContainer.innerHTML = '';

  // Pre-calculate values up to 1000
  const precalculatedValues = new Map();
  for (let i = -1000; i <= 1000; i++) {
    for (let j = -1000; j <= 1000; j++) {
      precalculatedValues.set(`${i}-${j}`, (i % j).toString());
    }
  }

  // Create the header row
  const headerRow = document.createElement('tr');
  headerRow.classList.add('row');
  headerRow.classList.add('index-row');
  headerRow.innerHTML = '<th class="index-cell"></th>';
  for (let j = -limit; j <= limit; j++) {
    const cell = document.createElement('th');
    cell.classList.add('cell');
    cell.classList.add('index-column');
    cell.textContent = j;
    headerRow.appendChild(cell);
  }
  tableContainer.appendChild(headerRow);

  // Create the data rows
  for (let i = -limit; i <= limit; i++) {
    const row = document.createElement('tr');
    row.classList.add('row');

    // Create the index cell
    const indexCell = document.createElement('td');
    indexCell.classList.add('cell');
    indexCell.classList.add('index-row');
    indexCell.textContent = i;
    row.appendChild(indexCell);

    // Use the pre-calculated values
    for (let i = limit; i>= -limit; i--){
      for (let j = limit; j >= -limit; j--){
      const cell = document.createElement('td');
      cell.classList.add('cell');
      cell.textContent = precalculatedValues.get(`${i}-${j}`);
      row.appendChild(cell);
      }
    }

    tableContainer.appendChild(row);
  }
}
