export function generateTable(limit) {
  const tableContainer = document.getElementById('tableContainer');
  tableContainer.innerHTML = '';
  
  // Create the table structure
  const table = document.createElement('table');
  tableContainer.appendChild(table);

  // Create the header row
  const headerRow = document.createElement('tr');
  table.appendChild(headerRow);

  // Create header index
  for (let j = limit; j >= -limit; j--) {
    const cell = document.createElement('th');
    cell.classList.add('cell');
    cell.classList.add('index-column');
    cell.textContent = j;
    headerRow.appendChild(cell);

  // Create the data rows
  for (let i = limit; i >= -limit; i--) {
    const row = document.createElement('tr');
    table.appendChild(row);
    
    // Create the index cell
    const indexCell = document.createElement('td');
    indexCell.classList.add('cell');
    indexCell.classList.add('index-row');
    indexCell.textContent = i;
    row.appendChild(indexCell);

    // Create the modular cells
    for (let j = limit; j >= -limit; j--) {
      const cell = document.createElement('td');
      cell.classList.add('cell');
      cell.textContent = (i % j).toString();

      // Apply grayscale color and inversed text color
  const value = Math.abs(parseInt(cell.textContent));
  if (isNaN(value)) {
  else {
        const hexValue = value.toString(16).padStart(2, '0');
        const invertedHexValue = (255 - value).toString(16).padStart(2, '0');
        cell.style.backgroundColor = `#${hexValue}${hexValue}${hexValue}`;
        cell.style.color = `#${invertedHexValue}${invertedHexValue}${invertedHexValue}`;
  }
  }
    //Removes invisible text around 128 due to hexValue being visually similar to inverseHexValue
   if (174 >= value >= 80){
      cell.style.color = white;
   }
   }
      row.appendChild(cell);
    }
  }
}
