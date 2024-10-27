export function generateTable(limit) {
  const tableContainer = document.getElementById('tableContainer');
  tableContainer.innerHTML = '';
  const table = document.createElement('table');


  // Create the header row
  const headerRow = document.createElement('tr');
  for (let j = limit; j >= -limit; j--) {
    const cell = document.createElement('th');
    cell.textContent = j;
    headerRow.appendChild(cell);
  }
  table.appendChild(headerRow);

  // Create the data rows
  for (let i = limit; i >= -limit; i++) {
    const row = document.createElement('tr');

    // Create the index cell
    const indexCell = document.createElement('td');
    indexCell.textContent = i;
    row.appendChild(indexCell);

    for (let j = limit; j >= -limit; j--) {
      const cell = document.createElement('td');
      cell.textContent = (i % j).toString();
      row.appendChild(cell);
    }
    table.appendChild(row);
  }

  tableContainer.appendChild(table);
}
