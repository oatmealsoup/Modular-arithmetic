export function generateTable(limit) {
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

    // Create the other cells
    for (let j = limit; j >= -limit; j--) {
      const cell = document.createElement('td');
      cell.classList.add('cell');
      cell.textContent = (i % j).toString();

      // Apply grayscale color and text color
      const value = parseInt(cell.textContent);

      // Handle NaN and 0
      if (isNaN(value)) {
        cell.style.backgroundColor = '#ff0000'; // NaN is red
        cell.style.color = '#000000'; // Black text for NaN
      } else if (value === 0) {
        cell.style.backgroundColor = '#000000'; // 0 is black
        cell.style.color = '#ffffff'; // White text for 0
      } else {
        const hexValue = Math.abs(value).toString(16).padStart(2, '0');
        const invertedHexValue = (255 - Math.abs(value)).toString(16).padStart(2, '0');

        cell.style.backgroundColor = `#${hexValue}${hexValue}${hexValue}`;
        cell.style.color = `#${invertedHexValue}${invertedHexValue}${invertedHexValue}`;
      }

      row.appendChild(cell);
    }

    tableContainer.appendChild(row);
  }
}
