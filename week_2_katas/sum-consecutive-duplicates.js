// Please do not change the name of this function
const sumConsecutiveDuplicates = (arr) => {
  // Your code here
  const newArr = [];
  
  arr.forEach((num,i,all)=>{
    if(all[i-1]){
      num === all[i-1] ? newArr[newArr.length-1] += num : newArr.push(num);
    } else {
      newArr.push(num);
    }
  });

  return newArr;
};

const reduceConsecutives = (arr) => {
  if (arr.toString() === sumConsecutiveDuplicates(arr).toString()){
    return arr;
  } else if (arr.toString() !== sumConsecutiveDuplicates(arr).toString()){
    return reduceConsecutives(sumConsecutiveDuplicates(arr));
  }
}

module.exports = { sumConsecutiveDuplicates, reduceConsecutives };
