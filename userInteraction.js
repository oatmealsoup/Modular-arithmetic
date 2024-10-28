import { generateTable } from './tableGenerator.js';

const generate = document.getElementById("generate");
generate.addEventListener('click', () => {
  const limit = document.getElementById('limit').value;
  generateTable(limit);
});

