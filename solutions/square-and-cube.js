function isCube(n) {
  let r = Math.cbrt(n);
  return (Math.abs(Math.floor(r)-r) < 0.00001);
}

function isSquare(n) {
  let r = Math.sqrt(n);
  return (Math.abs(Math.floor(r)-r) < 0.00001);
}


function squareAndCube(question) {
  if (question.indexOf('is both a square and a cube') !== -1) {
    let numSeparatorIndex = question.lastIndexOf(':');
    if (numSeparatorIndex !== -1) {
      let numbers = question.substring(numSeparatorIndex+1).split(", ").map(n => parseInt(n));
      let powers = numbers.filter(n => isCube(n) && isSquare(n));
      return (powers.length > 0) ? "" + powers[0] : "";
    }
  }
  console.log(`Question ${question} didn't match longest`);
  return undefined;
}

module.exports = { squareAndCube };