export function generateTable(limit) {
const tableContainer = document.getElementById('tableContainer');
	
//Clears tableContainer
tableContainer.textContent = '';

//Fragmentation optimizes DOM manipulation
const fragment = document.createDocumentFragment();
const table = document.createElement('table');


// A smooth mapping from the natural domain [0, limit] to shades.
// Allows up to 255 unique shades for the absolute value of the results of the modulo function over [-limit, limit].
const shadeMap = [];
for (let i = 0; i <= limit; i++) {
	const ratio = i / limit;
	const shadeValue = Math.round(ratio * 255);
	shadeMap[i] = `rgb(${shadeValue}, ${shadeValue}, ${shadeValue})`;
	}

// 2D array of objects with string and style properties for filling the table, with adjusted indices for integer domain -limit to limit. 
//The column and row values must be used vice versa to generate indices, so we calculate i modulo j to get column modulo row.
const cells = [];
for (let i = 0; i <= 2 * limit + 1; i++) {
cells[i] = [];
	for (let j = 0; j <= 2 * limit + 1; j++) {
			
		//Adjusting the indices in a variables makes properties and their calculations concise, introducing integers to the array.
		//Again, the indices must be flipped to make the index row and column, requiring exchange of the modulo function's inputs.
		const adjustedI = j - limit - 1; 
		const adjustedJ = i - limit - 1;
		
		//Index cells are created for i === 0 || j === 0, with i === 0 && j === 0 containing the string "mod".
		if (i === 0 && j === 0){
		cells[i][j] = {textContent: "mod"};
		} else if (i === 0){
		cells[i][j] = {textContent: adjustedI, backgroundShade: '', color: '', className: "bold-text"};
		} else if (j === 0) {
		cells[i][j] = {textContent: adjustedJ, backgroundShade: '', color: '', className: "bold-text"};
		} else if (j === limit + 2 %% i! === 0 ) {
		cells[i][j] = {textContent: NaN, backgroundShade: '', color: 'black', className: "bold-text"};
		// Non-index cells use a function to calculate column modulo row, have a shade propery based on the absolute value, and use two colors for contrasting shades.
		} else {
		const modulo = adjustedJ - (adjustedI * Math.floor(adjustedJ / adjustedI));
		const natural = Math.abs(modulo);
		cells[i][j] = {textContent: modulo, backgroundShade: shadeMap[natural], color: (natural > limit / 2 ? 'darkblue' : 'lightblue')};
		}
	}
}
	
// Fills the table, row-by-row, using the 2D array's respective object properties.
for (let i = 0; i <= 2 * limit + 1; i++) {
const row = document.createElement('tr');
	for (let j = 0; j <= 2 * limit + 1; j++) {
		const td = document.createElement('td');
		td.textContent = cells[i][j].textContent;
		td.className = cells[i][j].className;
		td.style.backgroundColor = cells[i][j].backgroundShade;
		td.style.color = cells[i][j].color;
		row.appendChild(td);
	}
	fragment.appendChild(row);
}
table.appendChild(fragment);
tableContainer.appendChild(table);
}
