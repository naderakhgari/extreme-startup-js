function largest(numString) {
  let numbers = numString.split(", ").map(n => parseInt(n));
  let max = numbers.reduce((mx, item) => Math.max(mx, item));
  return max;
}

module.exports = { largest };