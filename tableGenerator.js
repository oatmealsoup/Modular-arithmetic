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
  modCell.textContent = "mod";
  headerRow.appendChild(modCell);

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

    // Create cells for the row
    for (let j = limit; j >= -limit; j--) {
      const cell = document.createElement('td');
      cell.classList.add('cell');

      if (i === 0) {
        cell.textContent = j;
        cell.classList.add('bold-header'); // Bold the first cell in each row
      } else {
        cell.textContent = i % j;
        const absValue = Math.abs(i % j);
        const color = `#${absValue.toString(16).padStart(2, '0')}${absValue.toString(16).padStart(2, '0')}${absValue.toString(16).padStart(2, '0')}`;
        cell.style.backgroundColor = color;
        cell.style.color = '#0000ff';
      }

      row.appendChild(cell);
    }

    table.appendChild(row);
  }

  tableContainer.appendChild(table);
}

