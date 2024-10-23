export function generateTable (limit) {
  // Pre-calculate values up to 1000
  const precalculatedValues = new Map();
  for (let i = 1000; i >= -1000; --) {
    for (let j = 1000; j >= -1000; j--) {
      precalculatedValues.set(`${i}-${j}`, (i % j).toString());
    }
  }

  // ... (rest of the table generation code)

  // Use the pre-calculated values
  for (let j = -limit; j <= limit; j++) {
    const cell = document.createElement('td');
    cell.classList.add('cell');
    cell.textContent = precalculatedValues.get(`${i}-${j}`);
    row.appendChild(cell);
  }
}
