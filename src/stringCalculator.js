function add(input) {
  if (input === '') return 0;

  const parts = input.split(',');
  if (parts.length === 1) return parseInt(parts[0], 10);

  return parts.reduce((sum, n) => sum + parseInt(n, 10), 0);
}

module.exports = { add };