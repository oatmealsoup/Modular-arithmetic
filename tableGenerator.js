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
        cell.textContent = i % j;
        
        //Absolute value for colors
        const natural = Math.abs(cell.textContent);

         //Apply colors to background
        if (j !== 0) {
          cell.style.backgroundColor = colorMap[natural];
          }
           //Apply colors to text
          if (natural > limit / 2) {
            cell.classList.add('light-blue');
          } else {
            cell.classList.add('dark-blue');
          }
      }
      row.appendChild(cell);
    }
    fragment.appendChild(row);
  }
  table.appendChild(fragment);
  tableContainer.appendChild(table);
}
