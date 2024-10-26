export function generateTable(limit) {
  const tableContainer = document.getElementById('tableContainer');
  tableContainer.innerHTML = '';
  
  const table = document.createElement('table');
  
  // Create the header row
  const headerRow = document.createElement('tr');
  headerRow.classList.add('row');

  // Create the "mod" cell
  const modCell = document.createElement('th');
  modCell.classList.add('cell');
  modCell.classList.add('bold-header');
  modCell.textContent = "mod";
  headerRow.appendChild(modCell);

  // Create header cells
  for (let j = limit; j >= -limit; j--) {
    if (j !== 0) {
      const cell = document.createElement('th');
      cell.classList.add('cell');
      cell.classList.add('bold-header');
      cell.textContent = j;
      headerRow.appendChild(cell);
    }
  }
  
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

      if (j === 0) {
        // This is the "mod" cell, which is already created in the header row
        continue;
      }

      cell.textContent = i % j;
      const absValue = Math.abs(i % j);
      const color = `#${absValue.toString(16).padStart(2, '0')}${absValue.toString(16).padStart(2, '0')}${absValue.toString(16).padStart(2, '0')}`;
      cell.style.backgroundColor = color;
      cell.style.color = '#0000ff';

      row.appendChild(cell);
    }
    table.appendChild(row);
    }
  tableContainer.appendChild(table);
}

