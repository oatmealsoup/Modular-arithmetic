export function generateTable(limit) {
  //Remove existing tables
  if (document.querySelector('table')) {
  document.querySelector('table').remove();
}
  //Table with column number
  const tableSize = 2 * limit + 1;
  const tableHTML = `<table>`;

  for (let i = 0; i < tableSize; i++) {
    let rowHTML = `<tr>`;
    for (let j = 0; j < tableSize; j++) {
      const cellValue = (limit - i) % (limit - j);
      const colorValue = Math.max(0, Math.min(255, Math.abs(cellValue)));
      const colorCode = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
      const textColor = colorValue > 128 ? '#FF0000' : '#FFA07A';

      rowHTML += `<td style="background-color: ${colorCode}; color: ${textColor}">${cellValue}</td>`;
    }
    rowHTML += `</tr>`;
    tableHTML += rowHTML;
  }

  tableHTML += `</table>`;

  const tableElement = document.createElement('div');
  tableElement.innerHTML = tableHTML;
  document.body.appendChild(tableElement);
}
