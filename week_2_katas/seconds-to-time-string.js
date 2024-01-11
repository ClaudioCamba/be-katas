// Please do not change the name of this function
const secondsToTimeString = (seconds) => {
  // Your code here
  let time;
  if (seconds < 60){
    time = seconds > 1 ? seconds + ' seconds' : seconds + ' second';
  }else {
    let mins = seconds / 60;
    time = mins > 1 ? mins + ' minutes' : mins + ' minute';
    
  }
  return time;
};

module.exports = { secondsToTimeString };
