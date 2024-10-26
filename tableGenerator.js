  function getColor(value) {
    const absValue = Math.abs(value);
    if (isNaN(absValue)) {
      return '#ff0000'; // NaN is red
    } else if (absValue === 0) {
      return '#000000'; // 0 is black
    } else {
      const hexValue = absValue.toString(16).padStart(2, '0');
      return `#${hexValue}${hexValue}${hexValue}`;
    }
  }
    // Function to generate color based on a value within the limit
  function getColor(value) {
    const absValue = Math.abs(value);
    if (isNaN(absValue)) {
      return '#ff0000'; // NaN is red
    } else if (absValue === 0) {
      return '#000000'; // 0 is black
    } else {
      const hexValue = absValue.toString(16).padStart(2, '0');
	  const invertedHexvalue = 
      return `#${hexValue}${hexValue}${hexValue}`;
    }
  }

      // Apply grayscale color and text color
      const value = parseInt(cell.textContent);
      const color = mapValueToGrayScale(value);
      cell.style.backgroundColor = color;

      // Set text color to inverted hex value
      cell.style.color = `#${invertedHexValue}${invertedHexValue}${invertedHexValue}`;

      row.appendChild(cell);
  }
	tableContainer.appendChild(row);
  }
}
