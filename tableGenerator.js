export function generateTable(limit) {
  const tableContainer = document.getElementById('tableContainer');
  tableContainer.innerHTML = ''; // Clear existing content

  // Create the table structure
  const table = document.createElement('table');
  tableContainer.appendChild(table);

  // Function to generate background color based on a value within the limit
  function backgroundColor(value, limit) {
    const absValue = Math.abs(value);
    if (isNaN(absValue)) {
      return '#ff0000'; // NaN is red
    } else if (absValue === 0) {
      return '#000000'; // 0 is black
    }
      const hexValue = (limit - absValue).toString(16).padStart(2, '0');
      return `#${hexValue}${hexValue}${hexValue}`;
    }
  }

  // Function to generate text color based on a value within the limit
  function textColor(value, limit) {
    const absValue = Math.abs(value);
    if (isNaN(absValue)) {
      return '#ffffff'; // NaN text is White
    } else if (absValue === 0) {
      return '#ffffff'; // 0's text is white
      else if (174 > absValue > 80)
      return '#ffffff';
    }
      const hexValue = absValue.toString(16).padStart(2, '0');
      const invertedHexValue = (absValue-255).toString(16).padStart(2, '0');
      return `#${hexValue}${hexValue}${hexValue}`;
    }
  }

  // Create the header row with unique styling
  const headerRow = document.createElement('tr');
  headerRow.classList.add('header-row'); // Add a specific class for styling
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
      cell.classList.add('cell');
      cell.textContent = (i % j).toString();

      // Apply color directly using getColor function
      absValue = Math.abs(cell.textContent)
      cell.style.backgroundColor = getColor(limit - absValue);
      if (174 >absvalue>80 (
      cell.stlye.color = 
      cell.style.color = getColor( limit- absValue);
    }
      row.appendChild(cell);
    }
  }
}
