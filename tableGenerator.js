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
  for (let i = limit; i >= -limit; i--) {
    const row = document.createElement('tr');

    // Create the index cell
    const indexCell = document.createElement('td');
    indexCell.textContent = i;
    row.appendChild(indexCell);

    // Fill rows with cells containing the result of i mod j, with color styling
    for (let j = limit; j >= -limit; j--) {
      const cell = document.createElement('td');
      cell.textContent = (i % j).toString();
      const integer = parseInt(cell.textContent);
      const natural = Math.abs(integer);
      const colorValue = Math.max(0, Math.min(limit, natural));
      cell.style.backgroundColor = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
      if (natural > limit / 2) {
        cell.classList.add('light-blue');
     } else {
        cell.classList.add('dark-blue');
    }
        row.appendChild(cell);
    }
    table.appendChild(row);
  }
  tableContainer.appendChild(table);
  tableContainer.style.height = `${table.offsetHeight}px`;
  document.body.style.height = `${table.offsetHeight + 100}px`;
}
