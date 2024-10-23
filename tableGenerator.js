export function generateTable(limit) {
  const tableContainer = document.getElementById('tableContainer');

  for (let i = -limit; i <= limit; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let j = -limit; j <= limit; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.textContent = i % j;
      row.appendChild(cell);
    }
    tableContainer.appendChild(row);
  }
}
