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

    // Create cells containing i mod j with styling
    for (let j = limit; j >= -limit; j--) {
      const cell = document.createElement('td');
      cell.textContent = (i % j).toString();
      const integer = parseInt(cell.textContent);
      const natural = Math.abs(integer);
      const colorValue = Math.max(0, Math.min(255, natural));
      cell.style.backgroundColor = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
      cell.style.color = absCellValue > limit / 2 ? 'lightblue' : 'darkblue';
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  tableContainer.appendChild(table);
}
