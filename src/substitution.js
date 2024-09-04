// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    
    if (!alphabet || alphabet.length !== 26 || new Set(alphabet).size !== 26) {
      return false;
    }

    const standardAlphabet = "abcdefghijklmnopqrstuvwxyz";

    input = input.toLowerCase();

    const encodeMap = {};
    const decodeMap = {};

    for (let i = 0; i < 26; i++) {
      encodeMap[standardAlphabet[i]] = alphabet[i];
      decodeMap[alphabet[i]] = standardAlphabet[i];
    }

    const map = encode ? encodeMap : decodeMap;

    return input
      .split("")
      .map((char) => {
        if (char === " ") return " ";
        
        return map[char];
      })
      .join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

