function add(input) {
  if (input === '') return 0;

  let delimiter = /,|\n/;
  let numbers = input;

  if (input.startsWith('//')) {
    const [_, delim, rest] = input.match(/^\/\/(.+)\n([\s\S]*)$/);
    delimiter = new RegExp(delim);
    numbers = rest;
  }

  return numbers
    .split(delimiter)
    .reduce((sum, n) => sum + parseInt(n, 10), 0);
}


module.exports = { add };