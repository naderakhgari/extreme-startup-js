function plus(question) {
  let matched = question.match(/what is (\d+) plus (\d+)/)
  if (matched !== null) {
    let num1 = parseInt(matched[1]);
    let num2 = parseInt(matched[2]);
    return "" + (num1+num2);
  }
  console.log(`Question ${question} didn't match plus`);
  return undefined;
}

module.exports = { plus };