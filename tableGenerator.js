export function generateTable(limit) {
  const tableContainer = document.getElementById('tableContainer');
  tableContainer.innerHTML = '';
  const fragment = document.createDocumentFragment();
  const table = document.createElement('table');
  
  //Shading function
  const colorMap = [];
  for (let i = 0; i <= limit; i++) {
    const normalized = i / limit;
    const colorValue = Math.round(normalized * 255);
    colorMap[i] = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
  }
  
  // Create the header row
  const headerRow = document.createElement('tr');
  
    //Include "mod" cell
  const mod = document.createElement('th');
  mod.textContent = "mod";
  headerRow.appendChild(mod);
  
  for (let j = limit; j >= -limit; j--) {
    const cell = document.createElement('th');
    cell.textContent = j;
    headerRow.appendChild(cell);
  }
  table.appendChild(headerRow);

  // Create the data rows
  for (let i = limit; i >= -limit; i--) {
    const row = document.createElement('tr');
    

    // Create the index cells
    const indexCell = document.createElement('td');
    indexCell.textContent = i;
    row.appendChild(indexCell);
    indexCell.classList.add('bold-header');

    // Fill rows with cells containing the result of i mod j, with color styling
for (let j = limit; j >= -limit; j--) {
  const cell = document.createElement('td');
  cell.textContent = (i % j).toString();

  const integer = parseInt(cell.textContent);
  if (!isNaN(integer)) {
    const natural = Math.abs(integer);
    const colorValue = colorMap[natural];
    cell.style.backgroundColor = colorCode;

    if (natural > limit / 2) {
      cell.classList.add('light-blue');
    } else {
      cell.classList.add('dark-blue');
    }
  } else {
    // Handle NaN cases
    cell.style.backgroundColor = "darkblue"; // Use dark blue for NaN values
  }
        row.appendChild(cell);
    }
    table.appendChild(row);
  }
  tableContainer.style.height = `${table.offsetHeight}px`;
  table.appendChild(fragment);
  tableContainer.appendChild(table);
}
