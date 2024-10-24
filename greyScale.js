export function grayScale() {
  const cells = document.querySelectorAll('table td');
  
  cells.forEach((cell) => {
    const integer = parseInt(cell.textContent);
	  if (isNaN(number)) {
        cell.style.backgroundColor = 'red';
        return;
      }
	const natural = Math.abs(integer);
	const hex = natural.toString(16).padStart(2, '0');
	const invertedHex = (255 - natural).toString(16).padStart(2, '0');
	if (integer > 0){
		cell.style.backgroundColor = #${hex};
	}
	if (integer < 0){
	cell.style.backgroundColor = #${invertedHex};
	}
    else 
	cell.style.backgroundColor = 'yellow';
  });
}
