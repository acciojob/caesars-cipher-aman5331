// Your Script here.

const lookup = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  "?": "?",
  ",": ",",
};

function rot13(encodedStr) {
  let decodedStr = ''; // Your Result goes here
  // Only change code below this line
	for (let i = 0; i < encodedStr.length; i++) {
    const char = encodedStr[i];

    // Decode uppercase letters
     if (char.match(/[A-Z]/)) {
      // Convert the character code to ASCII value
      let ascii = encodedStr.charCodeAt(i);

      // Shift the ASCII value by 13 places
      ascii = (ascii - 65 + 13) % 26 + 65;

      // Convert the ASCII value back to a character
      const decodedChar = String.fromCharCode(ascii);
      decodedStr += decodedChar;
    } else {
      // Pass non-alphabetic characters as they are
      decodedStr += char;
    }
  }

  return decodedStr;
 }
               //return decodedArr

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(rot13("SERR YBIR? NPPVBWBO"));

// Do not change this line
window.rot13 = rot13;
