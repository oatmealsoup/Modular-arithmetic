export function mapValueToGrayScale(value) {
  const absoluteValue = Math.abs(value);
  const hexValue = absoluteValue.toString(16).padStart(2, '0');

  // Invert the scale if the value is negative
  if (value < 0) {
    const invertedHexValue = (255 - absoluteValue).toString(16).padStart(2, '0');
    return `#${invertedHexValue}${invertedHexValue}${invertedHexValue}`;
  } else {
    return `#${hexValue}${hexValue}${hexValue}`;
  }
}

function applyGrayscale() {
  const cells = document.querySelectorAll('table td');
  cells.forEach((cell) => {
    const value = parseInt(cell.textContent);
    const color = mapValueToGrayScale(value);
    cell.style.backgroundColor = color;
	cell.style.textColor = 'orange';
  });
}
