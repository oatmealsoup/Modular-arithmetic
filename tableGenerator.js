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

  for (let i = -limit; i <= limit; i++) {
    const row = document.createElement('tr');

    for (let j = -limit; j <= limit; j++) {
      const cell = document.createElement('td');

      if (i === -limit || j === -limit) {
        cell.classList.add('bold-text');
      }
      if (i === -limit && j === -limit) {
        cell.textContent= "mod"
      }
      if (i === -limit) {
        cell.textContent = j;
      }
       if (j === -limit) {
        cell.textContent = i;
       }
       if(i > -limit && j > -limit) {
          cell.textContent = i % j;

          if (j !== 0) {
          const natural = Math.abs(cell.textContent);
          cell.style.backgroundColor = colorMap[natural];
          }
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
  }
  table.appendChild(fragment);
  tableContainer.appendChild(table);
}
