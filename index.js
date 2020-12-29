function printString(myString) {
    console.log(myString[0]);
   
    if (myString.length > 1) {
      let mySubString = myString.substring(1, myString.length);
      printString(mySubString);
    } else {
      return true;
    }
  }
  function reverseString(str) {
    return (str.length < 2) ? str : reverseString(str.substring(1)) + str[0];
  };

<<<<<<< HEAD
  function isPalindrome(str) {
    let strLength = str.length;

    if (strLength < 2) {
      return true;
    } else if (str[strLength-1] === str[0]) {
      return isPalindrome(str.substring(1, strLength-1));
    } else {
      return false;
    }

  };

  function addUpTo(arr, idx) {     
    console.log(`The array: ${arr}`);
    console.log(`The index: ${idx}`);
    return idx ? arr[idx] + addUpTo(arr, --idx) : arr[idx];
  };
=======
<<<<<<< HEAD
  const reverseString = (str) => {
    console.log(str);
  };

  const isPalindrome = (str) => {
    console.log(str);
  };
=======
function printString(myString) {
  console.log(myString[0]);
 
  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

const reverseString= (str) => {
  
};
>>>>>>> 42456fd6561a62aba3b5c2d062389784c7532d26
>>>>>>> 2cfb8ad8d1c396bc9bad1af48136af5a190462d9
