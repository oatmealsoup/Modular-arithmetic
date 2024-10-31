  export function generateTable(limit) {
	const tableContainer = document.getElementById('tableContainer');
	tableContainer.textContent = '';

	const fragment = document.createDocumentFragment();
	const table = document.createElement('table');

	const colorMap = [];
	for (let i = 0; i <= limit; i++) {
		const normalized = i / limit;
		const colorValue = Math.round(normalized * 255);
		colorMap[i] = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
	}

	const cells = [];
	for (let i = 0; i <= 2 * limit + 1; i++) {
		cells[i] = [];
			for (let j = 0; j <= 2 * limit + 1; j++) {
				const adjustedI = i - limit - 1;
				const adjustedJ = j - limit - 1;
				const value = adjustedI - (adjustedJ * Math.floor(adjustedI / adjustedJ));
				const natural = Math.abs(value);
				const cellStyle = {};
				cellStyle.backgroundColor = colorMap[natural];
				cellStyle.color = natural > limit / 2 ? 'darkblue' : 'lightblue';	

			cells[i][j] = {value, style: cellStyle};
			}
	}
	
	//Fill table with array data
	for (let i = 0; i <= 2 * limit + 1; i++) {
		const row = document.createElement('tr');
			for (let j = 0; j <= 2 * limit + 1; j++) {
				const cell = cells[i][j];
				const td = document.createElement('td');
				if (i === 0 && j === 0) {td.textContent = "mod";} 
				else if (i === 0) {
				td.textContent = j - limit - 1;
				td.classList.add('bold-text');
				} else if (j === 0) {
				td.textContent = i - limit - 1;
				td.classList.add('bold-text');
				} else {
				td.textContent = cell.value;
				td.style.backgroundColor = cell.style.backgroundColor;
				td.style.color = cell.style.color;
      }
      row.appendChild(td);
    }
    fragment.appendChild(row);
  }	
  table.appendChild(fragment);
  tableContainer.appendChild(table);
}

