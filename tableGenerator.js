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

    // Create modular cells with color
    for (let j = limit; j >= -limit; j--) {
      const cell = document.createElement('td');
      cell.classList.add('cell');
      cell.textContent = (i % j).toString();

      // Apply color based on the value
      cell.style.backgroundColor = getColor(i % j);

      row.appendChild(cell);
    }
  }
}
