function solve() {
  const text = document.getElementById('text').value;
  const naming = document.getElementById('naming-convention').value;
  const output = document.getElementById('result');
  let result

  if (naming == 'Pascal Case') {
    result = text.toLowerCase().split(' ').map(e => e.replace(e[0], e[0].toUpperCase())).join('');

  } else if (naming == 'Camel Case') {
    result = text.toLowerCase().split(' ').map((e, i) => i == 0 ? e : e.replace(e[0], e[0].toUpperCase())).join('')
  } else {
    result = 'Error!'
  }
  output.textContent = result
}