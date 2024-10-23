export function generateTable (limit) {
  // Pre-calculate values up to 1000
  const precalculatedValues = new Map();
  for (let i = 10000; i >= -10000; i--) {
    for (let j = 10000; j >= -10000; j--) {
      precalculatedValues.set(`${i}-${j}`, (i % j).toString());
    }
  }

  // ... (rest of the table generation code)

  // Use the pre-calculated values
  for (let j = limit; j >= limit; j--) {
    const cell = document.createElement('td');
    cell.classList.add('cell');
    if (limit <=1000) {
    cell.textContent = precalculatedValues.get(`${i}-${j}`);
    }
    else {
      cell.textContent = "Overload";
    }
    row.appendChild(cell);
  }
}
