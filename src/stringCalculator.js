function add(input) {
  if (input === '') return 0;
  return parseInt(input, 10);
}

module.exports = { add };