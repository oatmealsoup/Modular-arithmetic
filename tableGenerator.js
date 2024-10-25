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

  // Create data rows
  for (let i = limit; i >= -limit; i--) {
    const row = document.createElement('tr');
    table.appendChild(row);

    // Create index cell
    const indexCell = document.createElement('td');
    indexCell.classList.add('cell');
    indexCell.classList.add('index-row');
    indexCell.textContent = i;
    row.appendChild(indexCell);

    // Create modular cells with shading
    for (let j = limit; j >= -limit; j--) {
      const cell = document.createElement('td');
      cell.classList.add('cell');
      cell.textContent = (i % j).toString();

      // Apply grayscale color and text color
      const int = parseInt(cell.textContent)
      const value = Math.abs(int);

      if (isNaN(value)) {
        cell.style.backgroundColor = '#ff0000';
      } else if (value === 0) {
        cell.style.backgroundColor = '#000000';
        cell.style.color = '#ffffff';
      } else {
        const hexValue = value.toString(16).padStart(2, '0');
        const invertedHexValue = (255 - value).toString(16).padStart(2, '0');
        cell.style.backgroundColor = `#${hexValue}${hexValue}${hexValue}`;
        cell.style.color = `#${invertedHexValue}${invertedHexValue}${invertedHexValue}`;
      }

      row.appendChild(cell);
    }
  }
}
