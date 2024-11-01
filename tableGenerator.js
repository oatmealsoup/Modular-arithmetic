  export function generateTable(limit) {
	const tableContainer = document.getElementById('tableContainer');
	//Clear table content
	tableContainer.textContent = '';
	//Create document fragment to optimize DOM manipulation
	const fragment = document.createDocumentFragment();
	//Create table
	const table = document.createElement('table');

	//Map natural numbers in limit to shades in an array
	const shadeMap = [];
	for (let i = 0; i <= limit; i++) {
		const normalized = i / limit;
		const shadeValue = Math.round(normalized * 255);
		shadeMap[i] = `rgb(${shadeValue}, ${shadeValue}, ${shadeValue})`;
	}
	
	// Store table content and style in 2D array
	const cells = [];
	for (let i = 0; i <= 2 * limit + 1; i++) {
		cells[i] = [];
			for (let j = 0; j <= 2 * limit + 1; j++) {
				// Adjust values for negative integers to clarify the use of the modulo function with domain [-limit, limit] (not an array, a set of integers)
				const adjustedI = i - limit - 1;
				const adjustedJ = j - limit - 1;
				// Modulo function
				const value = adjustedI - (adjustedJ * Math.floor(adjustedI / adjustedJ));
				// Shade integer values according to their absolute value, and use light or dark blue to contrast with the varying shades to avoid invisible content
				const natural = Math.abs(value);
				const cellStyle = {};
				cellStyle.backgroundColor = shadeMap[natural];
				cellStyle.color = natural > limit / 2 ? 'darkblue' : 'lightblue';	
				cells[i][j] = {value, style: cellStyle};
			}
	}
	
	//Fill table with 2D array objects, implementing the adjusted values of the 2D array indices for consistency
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

