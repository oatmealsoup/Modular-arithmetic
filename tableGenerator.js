export function generateTable(limit) {
  const tableContainer = document.getElementById('tableContainer');
  tableContainer.innerHTML = ''; // Clear existing content

  // Create the table structure
  const table = document.createElement('table');
  tableContainer.appendChild(table);

  // Function to generate color based on value within the limit
  function getColor(value) {
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

  // Create data rows (avoid unnecessary re-creation)
  let fragment = document.createDocumentFragment();
  for (let i = limit; i >= -limit; i--) {
    const row = document.createElement('tr');

    // Create index cell
    const indexCell = document.createElement('td');
    indexCell.classList.add('cell');
    indexCell.classList.add('index-row');
    indexCell.textContent = i;
    row.appendChild(indexCell);

    // Create modular cells with shading
    for (let j = limit; j >= -limit; j--) {
      const cell = document.createElement('td');
      cell.classList.add('cell');
      cell.textContent = (i % j).toString();

      // Apply color directly using getColor function
      cell.style.backgroundColor = getColor(parseInt(cell.textContent));

      row.appendChild(cell);
    }

    fragment.appendChild(row);
  }

  // Append all rows at once for performance improvement
  table.appendChild(fragment);
}
