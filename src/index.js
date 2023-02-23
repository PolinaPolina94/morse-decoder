const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  // write your solution here
  let word = [];
  for (let i = 0; i < expr.length; i = i + 10) {
    word.push(expr.slice(i, i + 10));
  }
  for (let i = 0; i < word.length; i++) {
    if (word[i] == "**********") {
      word[i] = " ";
      continue;
    }
    let letter = "";
    for (let j = 0; j < 10; j = j + 2) {
      if (word[i][j] + word[i][j + 1] == "10") {
        letter += ".";
      } else if (word[i][j] + word[i][j + 1] == "11") {
        letter += "-";
      }
    }

    word[i] = MORSE_TABLE[letter];
  }

  return word.join("");

}

module.exports = {
  decode,
};
