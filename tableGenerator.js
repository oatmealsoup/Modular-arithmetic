export function generateTable(limit) {
  const tableSize = 2 * limit + 1;
  const tableRows = [];

  for (let i = 0; i < tableSize; i++) {
    const row = [];
    for (let j = 0; j < tableSize; j++) {
      const cellValue = (limit - i) % (limit - j);
      const colorValue = Math.max(0, Math.min(255, Math.abs(cellValue)));
      const colorCode = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
      row.push(`<td style="background-color: ${colorCode}">${cellValue}</td>`);
    }
    tableRows.push(`<tr>${row.join('')}</tr>`);
  }

  const tableHTML = `<table>${tableRows.join('')}</table>`;
  const tableElement = document.createElement('div');
  tableElement.innerHTML = tableHTML;

  document.body.appendChild(tableElement);
}
