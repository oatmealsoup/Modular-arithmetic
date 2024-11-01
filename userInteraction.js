import { generateTable } from './tableGenerator.js';

const generate = document.getElementById("generate");
generate.addEventListener('click', () => {
  const limit = document.getElementById('limit').value;
  if (limit < 150) {generateTable(limit);}
});

window.addEventListener('DOMContentLoaded', () => {
  document.documentElement.style.scrollBehavior = 'auto';
});

