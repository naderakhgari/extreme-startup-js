function fibonacci(question) {
  const fib = (index) =>{
    if(index<2){
      return index
    }else{
      let a =0
      let b= 1
      for(i=2; i<= index; i++){
        let temp = a+b
        a = b 
        b=temp
      }
      return b
    }
  }

  let matched = question.match(/what is the (\d+).+ number in the Fibonacci sequence/);
  if (matched !== null) {
    let index = parseInt(matched[1]);
    return "" + fib(index);
  }
  console.log(`Question ${question} didn't match fibonacci`);
  return undefined;
}

module.exports = { fibonacci };
