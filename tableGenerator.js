function generateTable(limit) {
  const tableData = [];

  for (let i = limit; i >= -limit; i--) {
    tableData.push([]);
    for (let j = limit; j >= -limit; j--) {
      if (j !== 0 ) {
        tableData[limit - i][limit - j] = i % j;
      } else {
        tableData[limit - i][limit - j] = 0; // Handle division by zero
      }
    }
  }

  const tableContainer = document.getElementById('tableContainer');
  tableContainer.innerHTML = '';
  const table = document.createElement('table');   


  // Create the data rows
  for (let i = 0; i < tableData.length; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < tableData[i].length; j++) {
      const cell = document.createElement('td');
      if (j === 0 && j === 0) {
        cell.textContent = "mod";
        
      } else if (i === 0) {
        cell.textContent = limit - j;
        cell.style.fontWeight = 'bold';
       } else if (j === 0) {
        cell.textContent = limit - i;
        cell.style.fontWeight = 'bold';
      } else {
        cell.textContent = tableData[i][j];
        cell.style.backgroundColor = `rgb(${Math.abs(tableData[i][j])}, ${Math.abs(tableData[i][j])}, ${Math.abs(tableData[i][j])})`;
  }
      row.appendChild(cell);
  }
    table.appendChild(row);
  }

  tableContainer.appendChild(table);
}
