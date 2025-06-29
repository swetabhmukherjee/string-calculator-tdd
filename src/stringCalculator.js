function add(input) {
  if (input === '') return 0;

  let delimiter = /,|\n/;
  let numbers = input;
  const numbersArray = numbers.split(delimiter).map(n => parseInt(n, 10));
  const negatives = numbersArray.filter(n => n < 0);

  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(', ')}`);
  }

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