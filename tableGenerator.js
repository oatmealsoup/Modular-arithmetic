  export function generateTable(limit) {
  const tableContainer = document.getElementById('tableContainer');
  tableContainer.textContent = '';
  tableContainer.width = '720px';
  tableContainer.height = '720px';
  const fragment = document.createDocumentFragment();
  const table = document.createElement('table');
  table.classList.add('fixed-width-table');

  
  //Shading function
  const colorMap = [];
  for (let i = 0; i <= limit; i++) {
    const normalized = i / limit;
    const colorValue = Math.round(normalized * 255);
    colorMap[i] = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
  }
    
  //Table construction
  for (let i = -limit; i <= limit; i++) {
    const row = document.createElement('tr');

    for (let j = -limit; j <= limit; j++) {
      const cell = document.createElement('td');

      //Bold indices
      if (i === -limit || j === -limit) {
        cell.classList.add('bold-text');
      }
      //Cell with "mod"
      if (i === -limit && j === -limit) {
        cell.textContent= "mod"
      }
      //Index column
      if (i === -limit) {
        cell.textContent = j;
      }
      //Index row
       if (j === -limit) {
        cell.textContent = i;
       }
      //Modular calculations
       if(i > -limit && j > -limit) {
        cell.textContent = ((i % j) + Math.abs(j)) % Math.abs(j);
        let maxCellWidth = 0;
        maxCellWidth = Math.max(maxCellWidth, cell.offsetWidth);
      
         //Apply colors to background
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
      console.log(maxCellWidth);
      row.appendChild(cell);
    }
    fragment.appendChild(row);
  }
  table.appendChild(fragment);
  tableContainer.appendChild(table);
    
  // Calculate the scale factor that fits within the container's width
  const widthScale = tableContainer.width / table.offsetWidth;
  const heightScale = tablecontainer.height / table.offsetHeight;
  const scaleFactor = Math.min(widthScale, heightScale);
  table.style.transform = `scale(${scaleFactor})`;
}
