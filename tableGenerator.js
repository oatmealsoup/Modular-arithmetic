export function generateTable(limit) {
  const tableContainer = document.getElementById('tableContainer');
  tableContainer.innerHTML = '';

  // Create the header row
  const headerRow = document.createElement('tr');
  headerRow.classList.add('row');
  headerRow.innerHTML = '<th class="index-cell"></th>';
  for (let j = limit; j >= -limit; j--) {
    if (j !== 0) {
      const cell = document.createElement('th');
      cell.classList.add('cell');
      cell.classList.add('index-column');
      cell.textContent = j;
      headerRow.appendChild(cell);
    }
  }
  tableContainer.appendChild(headerRow);

  // Create the data rows
  for (let i = limit; i >= -limit; i--) {
    if (i !== 0) {
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
        if (j !== 0) {
          const cell = document.createElement('td');
          cell.classList.add('cell');
          cell.textContent = (i % j).toString();

          // Get grayscale color
          const absValue = Math.abs(i % j);
          const color = `#${absValue.toString(16).padStart(2, '0')}${absValue.toString(16).padStart(2, '0')}${absValue.toString(16).padStart(2, '0')}`;
          cell.style.backgroundColor = color;

          // Set text color to orange
          cell.style.color = '#0000ff';

          row.appendChild(cell);
        }
      }
      tableContainer.appendChild(row);
    }
  }
}
