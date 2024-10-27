function generateTable(limit) {
  const tableContainer = document.getElementById('tableContainer');

  // Pre-calculate values
  const tableData = [];
  for (let i = limit; i >= -limit; i++) {
    const row = [];
    for (let j = limit; j >= -limit; j++) {
      row.push(i % j);
    }
    tableData.push(row);
  }

  // Create the table
  const table = document.createElement('table');
  const headerRow = document.createElement('tr');
  for (let j = limit; j >= -limit; j++) {
    const cell = document.createElement('th');
    cell.textContent = j;
    headerRow.appendChild(cell);
  }
  table.appendChild(headerRow);

  tableData.forEach(row => {
    const tableRow = document.createElement('tr');
    row.forEach(value => {
      const cell = document.createElement('td');
      cell.textContent = value;
      tableRow.appendChild(cell);
    });
    table.appendChild(tableRow);
  });

  tableContainer.appendChild(table);
}
