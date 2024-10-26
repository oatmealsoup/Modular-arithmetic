export function generateTable(limit) {
  const tableContainer = document.getElementById('tableContainer');
  tableContainer.innerHTML = '';

  // Create the header row
  const headerRow = document.createElement('tr');
  headerRow.classList.add('row');
  headerRow.innerHTML = '<th class="index-cell"></th>';
  for (let j = limit; j >= -limit; j--) {
    const cell = document.createElement('th');
    cell.classList.add('cell');
    cell.classList.add('index-column');
    cell.textContent = j;
    headerRow.appendChild(cell);
  }
  tableContainer.appendChild(headerRow);

  // Create the data rows
  for (let i = limit; i >= -limit; i--) {
    const row = document.createElement('tr');
    row.classList.add('row');

    // Create the index cell
    const indexCell = document.createElement('td');
    indexCell.classList.add('cell');
    indexCell.classList.add('index-row');
    indexCell.textContent = i;
    row.appendChild(indexCell);

    // Create the other cells
    for (let j = limit; j >= -limit; j--) {
      const cell = document.createElement('td');
      cell.classList.add('cell');
      cell.textContent = (i % j).toString();
	  
    // Shading function
  function getBackgroundColor(value) {
    const absValue = Math.abs(value);
    if (isNaN(absValue)) {
      return '#ff0000'; // NaN is red
    } else if (absValue === 0) {
      return '#000000'; // 0 is black
    } else {
      const hexValue = absValue.toString(16).padStart(2, '0');
      return `#${hexValue}${hexValue}${hexValue}`;
    }
  }


      // Apply grayscale color and text color
      const value = parseInt(cell.textContent);
      const color = mapValueToGrayScale(value);
      cell.style.backgroundColor = color;

      // Set text color to orange
      cell.style.color = 'orange';

      row.appendChild(cell);
  }
	tableContainer.appendChild(row);
  }
}
