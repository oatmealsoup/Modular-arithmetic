export function generateTable(limit) {
  // Get the container element
  const tableContainer = document.getElementById('tableContainer');

  // Clear existing content
  tableContainer.innerHTML = '';

  // Create the table element
  const table = document.createElement('table');
  tableContainer.appendChild(table);

  // Function to generate a color based on a value within the limit
  function getColor(value) {
    // Use a color manipulation library like chroma.js for better control
    const colorScale = chroma.scale(['white', 'black']).domain([-limit, limit]);
    return colorScale(value).hex();
  }

  // Create the header row
  const headerRow = document.createElement('tr');
  table.appendChild(headerRow);

  // Create header cells
  for (let j = limit; j >= -limit; j--) {
    const cell = document.createElement('th');
    cell.classList.add('cell');
    cell.classList.add('index-column');
    cell.textContent = j;
    headerRow.appendChild(cell);
  }

  // Create data rows
  for (let i = limit; i >= -limit; i--) {
    const row = document.createElement('tr');
    table.appendChild(row);

    // Create index cell
    const indexCell = document.createElement('td');
    indexCell.classList.add('cell');
    indexCell.classList.add('index-row');
    indexCell.textContent = i;
    row.appendChild(indexCell);

    // Create modular cells with shading
    for (let j = limit; j >= -limit; j--) {
      const cell = document.createElement('td');
      cell.classList.aadd('cell');
      cell.textContent = (i % j).toString();
      abs = Math.abs( i % j )
       if (isNaN( i % j )) {
    cell.backgroundColor = '#ff0000'; // NaN is red
  }

  var absoluteValue = Math.abs( i % j);

  if (absoluteValue === 0) {
    return '#000000'; // 0 is black
  }

  const hexValue = absoluteValue.toString(16).padStart(2, '0');

  // Invert the scale if the value is negative
  if (value < 0) {
    const invertedHexValue = (255 - absoluteValue).toString(16).padStart(2, '0');
    cell.bakgroundColor = 'invertedHexValue' ;
   } else {
    cell.backgroundColor = 'hexValue';
   }
   )        
      row.appendChild(cell);
   }
  }
}
