function reverseNumber(num) {
    const reversedString = Math.abs(num).toString().split('').reverse().join('');
    return parseInt(reversedString) * Math.sign(num);
  }
  
  console.log(reverseNumber(32243));
  