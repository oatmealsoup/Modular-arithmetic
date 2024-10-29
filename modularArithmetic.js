function mod() {
  const a = parseInt(document.getElementById('a').value);
  const b = parseInt(document.getElementById('b').value);

  // Modulo calculation
  const result = ((a % b) + Math.abs(b)) % Math.abs(b);

  // Store values locally
  localStorage.setItem('a', a);
  localStorage.setItem('b', b);

  // Display the result
  document.getElementById('result').textContent = `The result of ${a} mod ${b} (for Euclidean division) is: ${result}`;
}
