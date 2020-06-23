const twoDArray = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
//Expected output: 1,2,3,4,8,12,16,15,14,13,9,5,6,7,10,11
// console.log(twoDArray[0]);
const printNum = () => {
  // console.log(twoDArray.length);
  // first print the first array
  for (let i = 0; i < twoDArray.length; i++) {
    // console.log(array[i]);
    for (let j = 0; j < twoDArray[i].length; j++) {
      if (i === 0) console.log(`Numbers are ${twoDArray[i][j]}`);
      if (i !== 0 && j === twoDArray[i].length - 1)
        console.log(`Numbers are ${twoDArray[i][j]}`);
    }
  }
  // now run loop in reverse order
  for (let i = twoDArray.length - 1; i > 0; i--) {
    // console.log(twoDArray[i]);
    for (let j = 0; j < twoDArray[i].length; j++) {
      let reversedArray = [];
      if (i === twoDArray.length - 1) {
        //revrerse first array
        reversedArray = twoDArray[i].sort((a, b) => (a > b ? -1 : 1));
        //skip the last because its printed earlier
        if (j !== 0) console.log(`Numbers are ${reversedArray[j]}`);
      }
      if (i === twoDArray.length - 2) {
        //print only first number
        if (j === 0) console.log(`Numbers are ${twoDArray[i][j]}`);
        // to delay this execution so that it will be printed later
        setTimeout(() => {
          if (j !== 0 && j !== twoDArray[i].length - 1)
            console.log(`Numbers are ${twoDArray[i][j]}`);
        }, 0);
      }
      if (i === twoDArray.length - 3) {
        //skip the last
        if (j !== twoDArray[i].length - 1)
          console.log(`Numbers are ${twoDArray[i][j]}`);
      }
    }
  }
};
printNum();

