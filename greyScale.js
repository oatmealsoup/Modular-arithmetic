export function grayScale(value) {
  if (isNaN(value)) {
    return '#ff0000'; // NaN is red
  }

  const absoluteValue = Math.abs(value);

  if (absoluteValue === 0) {
    return '#000000'; // 0 is black
  }

  const hexValue = absoluteValue.toString(16).padStart(2, '0');

  // Invert the scale if the value is negative
  if (value < 0) {
    const invertedHexValue = (255 - absoluteValue).toString(16).padStart(2, '0');
    return `#${invertedHexValue}${invertedHexValue}${invertedHexValue}`;
  } else {
    return `#${hexValue}${hexValue}${hexValue}`;
  }
}
