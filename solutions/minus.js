function minus(question) {
  let matched = question.match(/what is (\d+) minus (\d+)/);
  if (matched !== null) {
    let num1 = parseInt(matched[1]);
    let num2 = parseInt(matched[2]);
    if (num1 < num2) {
      return "" + -(num2 - num1);
    } else {
      return "" + (num1 - num2);
    }
  }
  console.log(`Question ${question} didn't match minus`);
  return undefined;
}

module.exports = { minus };
