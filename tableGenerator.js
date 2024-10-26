export function generateTable(limit) {
  const tableContainer = document.getElementById('tableContainer');
  tableContainer.innerHTML = '';

  // Create the header row
  const headerRow = document.createElement('tr');
  headerRow.classList.add('row');
  headerRow.innerHTML = '<th class="index-cell"></th>';
  for (let j = limit; j >= -limit; j--) {
	if ( j!== 0) {
    const cell = document.createElement('th');
    cell.classList.add('cell');
    cell.classList.add('index-column');
    cell.textContent = j;
    headerRow.appendChild(cell);
  }
  tableContainer.appendChild(headerRow);
  }
  // Create the data rows
  for (let i = limit; i >= -limit; i--) {
	  if (i!==0) {
    const row = document.createElement('tr');
    row.classList.add('row');
		  
    // Create the index cell
    const indexCell = document.createElement('td');
    indexCell.classList.add('cell');
    indexCell.classList.add('index-row');
    indexCell.textContent = i;
    row.appendChild(indexCell);

    // Create the other cells
    for (let i = limit; i >= -limit; i--) {
	if (i !== 0) {
      const cell = document.createElement('td');
      cell.classList.add('cell');
      cell.textContent = (j % i).toString();
	}
	  
    // Get shade from value up 255.
  function getColor(value) {
    	const absValue = Math.abs(value);
	const hexValue = absValue.toString(16).padStart(2, '0');
	return `#${hexValue}${hexValue}${hexValue}`;
    }
  }


      // Apply grayscale color to background
      const value = parseInt(cell.textContent);
      const color = getColor(value);
      cell.style.backgroundColor = color;

      // Set text color to orange
      cell.style.color = 'orange';

      row.appendChild(cell);
  }
	tableContainer.appendChild(row);
  }
}
