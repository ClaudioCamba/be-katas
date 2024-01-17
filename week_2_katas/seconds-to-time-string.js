// Please do not change the name of this function
const secondsToTimeString = (seconds) => {
  // Your code here
  let time = '';

  const duration = {
    'seconds': null,
    'minutes': null,
    'hours': null,
    'days': null,
    'years': null
  }

  while (seconds > 0) {
    if (seconds >= 31536000){
      seconds -= 31536000;
      duration.years += 1;
    } else if (seconds >= 86400){
      seconds -= 86400;
      duration.days += 1;
    } else if (seconds >= 3600){
      seconds -= 3600;
      duration.hours += 1;
    } else if (seconds >= 60){
      seconds -= 60;
      duration.minutes += 1;
    } else if (seconds >= 1){
      seconds -= 1;
      duration.seconds += 1;
    }
  }

  ['years','days','hours','minutes','seconds'].forEach((elem,i,arr) => {
    if (duration[elem]){
      if (duration[arr[i-1]]){
        elem === 'seconds'? time += ` and ` : time += `, `;
      }
      duration[elem] > 1 ? time += `${duration[elem]} ${elem}` : time += `${duration[elem]} ${elem.substring(0,elem.length-1)}`;
    }
  });


  return time;
};

module.exports = { secondsToTimeString };
