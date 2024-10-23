export function generateTable(limit) {
  const tableContainer = document.getElementById('tableContainer');
  tableContainer.innerHTML = '';

  for (let i = limit; i >= -limit; i--) {
    const row = document.createElement('div');
    row.classList.add('row');

    // Add a cell for the row number
    const rowNumberCell = document.createElement('div');
    rowNumberCell.classList.add('row-number');
    rowNumberCell.textContent = i;
    column.appendChild(rowNumberCell);

    for (let j = limit; j >= -limit; j--) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.textContent = i%j;
      row.appendChild(cell);
    }

    tableContainer.appendChild(row);
  }
}

    tableContainer.appendChild(row);
  }
}
