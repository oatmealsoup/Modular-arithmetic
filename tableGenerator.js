export function generateTable(limit) {
  const tableData = [];

  for (let i = 0; i < 2 * limit + 1; i++) {
    const row = [];
    for (let j = 0; j < 2 * limit + 1; j++) {
      row.push((limit - i) % (limit - j));
    }
    tableData.push(row);
  }

  return tableData;
}

function displayTable(table) {
  const tableElement = document.createElement('table');

  for (let i = 0; i < table.length; i++) {
    const row = table[i];
    const rowElement = document.createElement('tr');

    for (let j = 0; j < row.length; j++) {
      const cell = row[j];
      const cellElement = document.createElement('td');
      cellElement.textContent = cell;
      rowElement.appendChild(cellElement);
    }

    tableElement.appendChild(rowElement);
  }

  document.body.appendChild(tableElement);
}
