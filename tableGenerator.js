export function generateTable(limit) {
  const tableContainer = document.getElementById('tableContainer');
  tableContainer.innerHTML = '';
  const table = document.createElement('table');   
  
  // Create the header row
  const headerRow = document.createElement('tr');
  headerRow.classList.add('row');

  // Modify header cells
  for (let j = limit; j >= -limit; j--) {
    const cell = document.createElement('th');
    cell.classList.add('cell');
    cell.classList.add('bold-header');
    cell.textContent = j;
    headerRow.appendChild(cell);
  }

  // Create the data rows
  for (let i = limit; i >= -limit; i--) {
    const row = document.createElement('tr');
    row.classList.add('row');

    // Fill the index cells
    const indexCell = document.createElement('td');
    indexCell.classList.add('cell');
    indexCell.classList.add('bold-header');
    indexCell.textContent = i;
    row.appendChild(indexCell);

    // Fill the data cells
    for (let j = limit; j >= -limit; j--) {
      const cell = document.createElement('td');
      cell.classList.add('cell');
      const value = i % j;
      cell.textContent = (value).toString();
      const absValue = Math.abs(value);
      const color = `#${absValue.toString(16).padStart(2, '0')}${absValue.toString(16).padStart(2, '0')}${absValue.toString(16).padStart(2, '0')}`;
      cell.style.backgroundColor = color;
      cell.style.color = '#0000ff';
      row.appendChild(cell);
  }
  }
  tableContainer.appendChild(table);
}
