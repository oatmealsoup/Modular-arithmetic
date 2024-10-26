export function generateTable(limit) {
  const tableContainer = document.getElementById('tableContainer');
  tableContainer.innerHTML = '';

  const table = document.createElement('table');


  // Create the header row
  const headerRow = document.createElement('tr');
  headerRow.classList.add('row');

  // Create header cells
  for (let j = limit; j >= -limit; j--) {
    const cell = document.createElement('th');
    cell.classList.add('cell');
    cell.classList.add('bold-header');
    cell.textContent = j;
    }
  headerRow.appendChild(cell);
  table.appendChild(headerRow);

  // Create the data rows
  for (let i = limit; i >= -limit; i--) {
    const row = document.createElement('tr');
    row.classList.add('row');

    // Create the index cell
    const indexCell = document.createElement('td');
    indexCell.classList.add('cell');
    indexCell.classList.add('bold-header');
    indexCell.textContent = i;
    row.appendChild(indexCell);

    for (let j = limit; j >= -limit; j--) {
      const cell = document.createElement('td');
      cell.classList.add('cell');
      const value = i % j;
      cell.textContent = value;
      cell.style.backgroundColor = `rgb(${Math.abs(value)}, ${Math.abs(value)}, ${Math.abs(value)})`;
      cell.style.color = '#0000ff';
      }
      row.appendChild(cell);
      table.appendChild(row);
}
tableContainer.appendChild(table);
}

