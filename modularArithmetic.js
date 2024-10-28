function mod() {
  const a = parseInt(document.getElementById('a').value);
  const b = parseInt(document.getElementById('b').value);

  // Basic modulo calculation
  const result = ((a % b)+b)%b;

  // Store values locally (using localStorage)
  localStorage.setItem('a', a);
  localStorage.setItem('b', b);

  // Display the result
  document.getElementById('result').textContent = `The result of ${a} mod ${b} (for Euclidean division) is: ${result}`;
}
