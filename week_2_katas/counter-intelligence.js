// Please do not change the name of this function
const counterIntelligence = (str) => {
  // Your code here
  if (!str) return '';
  str = str.toLowerCase();
  const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  const decoder = (letter) => {
    const difNum = alphabet.indexOf('x')-alphabet.indexOf(str[str.length - 1]);
    const total = alphabet.indexOf(letter) + difNum;
    return alphabet[total%alphabet.length].toUpperCase();
  }

  const newString = str.split("").map((letter)=>{
    if (/[^a-zA-Z]/g.test(letter)) return letter;
    return decoder(letter);
  });

  return newString.join("");
};

module.exports = { counterIntelligence };

