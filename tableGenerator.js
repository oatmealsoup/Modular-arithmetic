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
      const row = document.createElement('tr');
      row.classList.add('row');

      // Create an index cell for the row
      const indexCell = document.createElement('td');
      indexCell.classList.add('cell');
      indexCell.classList.add('index-row');
      indexCell.textContent = i;
      row.appendChild(indexCell);

      // Create the other cells
      for (let j = limit; j >= -limit; j--) {
          const cell = document.createElement('td');
          cell.classList.add('cell');
          const value = i % j;
        cell.textContent = value;
        cell.style.backgroundColor = `rgb(${Math.abs(value)}, ${Math.abs(value)}, ${Math.abs(value)})`;
        cell.style.color = '#0000ff';
          
          row.appendChild(cell);
        }
      }
      tableContainer.appendChild(row);
    }
  }
}
