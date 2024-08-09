// Please do not change the name of this function
const findClosingParenthesis = (str, num) => {
  // Your code here
  if (typeof str !== 'string' || str.length === 0) return -1;
  if (typeof num !== 'number' || num === undefined) return -1;
  
  const string = str.split('');
  let open = [], close = [], count = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === '('){
      count++;
      open.push(count);
      close.unshift(count)
    }
    if (string[i] === ')'){
      if (open[open.length-1] === num && close[0] === num){
        return i;
      }
      open.pop();
      close.shift();
    }

  }
}

module.exports = { findClosingParenthesis }
