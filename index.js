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