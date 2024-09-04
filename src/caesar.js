// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  
  function shiftChar(char, shift) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const charLower = char.toLowerCase();
    const charIndex = alphabet.indexOf(charLower);

    if (charIndex === -1) return char;

    let newIndex = (charIndex + shift) % 26;
    if (newIndex < 0) newIndex += 26; 

    return alphabet[newIndex];
  }

  function caesar(input, shift, encode = true) {
    
    if (!shift || shift < -25 || shift > 25) return false;

    if (!encode) shift = -shift;

    const result = input
      .split("")
      .map((char) => shiftChar(char, shift))
      .join("");

    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

