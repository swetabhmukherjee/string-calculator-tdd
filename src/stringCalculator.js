function add(input) {
  const delimiter = /,|\n/;
  const parts = input.split(delimiter);
  if (input === '') return 0;

  if (parts.length === 1) return parseInt(parts[0], 10);
  return parts.reduce((sum, n) => sum + parseInt(n, 10), 0);
}

module.exports = { add };