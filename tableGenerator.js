  export function generateTable(limit) {
  const tableContainer = document.getElementById('tableContainer');
  tableContainer.textContent = '';

  // Make table
  const table = document.createElement('table');

  // Shading function
  const colorMap = [];
  for (let i = 0; i <= limit; i++) {
    const normalized = i / limit;
    const colorValue = Math.round(normalized * 255);
    colorMap[i] = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
  }
    
  // Table construction
  for (let i = -limit - 1; i <= limit; i++) {
    const row = document.createElement('tr');

    for (let j = -limit - 1; j <= limit; j++) {
      const cell = document.createElement('td');

      // Bold indices
      if (i === -limit - 1 || j === -limit - 1) {
        cell.classList.add('bold-text');
      }
      
      // Cell with "mod"
      if (i === -limit - 1 && j === -limit - 1) {
        cell.textContent= "mod";
      }
      
      // Index column
      if (i === -limit - 1) {
        cell.textContent = j;
      }
      
      // Index row
       if (j === -limit - 1) {
        cell.textContent = i;
         
       }
      // Modular calculations
       if(i > -limit - 1 && j > -limit - 1) {
        cell.textContent = ((i % j) + Math.abs(j)) % Math.abs(j);
      
         // Apply colors to background
        if (j !== 0) {
          cell.style.backgroundColor = colorMap[cell.textContent];
    
           //Apply colors to text
          if (cell.textContent > limit / 2) {
            cell.classList.add('dark-blue');
          } else {
            cell.classList.add('light-blue');
          }
      }
    }
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  tableContainer.appendChild(table);

    // Scaling
    const scaleFactor = table.offsetWidth / tableContainer.clientWidth;
    tableContainer.style.transform = `scale(${scaleFactor})`;
}
