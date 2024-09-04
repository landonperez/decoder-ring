// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  
  const square = {
    1: { a: 11, b: 21, c: 31, d: 41, e: 51 },
    2: { f: 12, g: 22, h: 32, "(i/j)": 42, k: 52 },
    3: { l: 13, m: 23, n: 33, o: 43, p: 53 },
    4: { q: 14, r: 24, s: 34, t: 44, u: 54 },
    5: { v: 15, w: 25, x: 35, y: 45, z: 55 },
  };

  const reverseSquare = Object.keys(square).reduce((acc, row) => {
    for (const [letter, number] of Object.entries(square[row])) {
      acc[number] = letter;
    }
    return acc;
  }, {});

  function polybius(input, encode = true) {
    if (!input) return false;
    input = input.toLowerCase();

    if (!encode) {
      const nonSpaceChars = input.replace(/\s/g, "");
      if (nonSpaceChars.length % 2 !== 0) return false;

      return input
        .match(/(\d{2})|\s/g)
        .map((pair) => {
          if (pair === " ") return " ";
          return reverseSquare[pair] === "(i/j)"
            ? "i/j"
            : reverseSquare[pair];
        })
        .join("");
    }

    return input
      .split("")
      .map((char) => {
        if (char === " ") return " ";
        if (char === "i" || char === "j") return 42;
        for (const row of Object.values(square)) {
          if (row[char]) return row[char];
        }
      })
      .join("");
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };


