// Please do not change the name of this function
const supermarketQueue = (customers, checkouts) => {
  // Your code here
  if (checkouts === 1) return customers.reduce((acc, curr) => acc + curr);

  const allCheckouts = [];
  let pos = 0;

  customers.forEach(cust => {
    if (allCheckouts.length === 0 || allCheckouts.length < checkouts){
      allCheckouts.push(cust);
    } else {
      allCheckouts[pos] += cust;
    }
    pos++;  

    if (pos >= checkouts) pos = 0;
  });

  return Math.max(...allCheckouts);

}

module.exports = { supermarketQueue }
