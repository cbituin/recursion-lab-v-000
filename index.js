// Code your solution here!
const printString = (myString) => {
    console.log(myString[0]);
   
    if (myString.length > 1) {
      let mySubString = myString.substring(1, myString.length);
      printString(mySubString);
    } else {
      return true;
    }
  };

  const reverseString = (str) => {
    console.log(str);
  };

  const isPalindrome = (str) => {
    console.log(str);
  };