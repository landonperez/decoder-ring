const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius()", () => {
  it("should translate the letters 'i' and 'j' to 42 when encoding", () => {
    const actual = polybius("ij");
    const expected = "4242";
    expect(actual).to.equal(expected);
  });

  it("should translate 42 to (i/j) when decoding", () => {
    const actual = polybius("4242", false);
    const expected = "i/ji/j";
    expect(actual).to.equal(expected);
  });

  it("should ignore capital letters (e.g., 'A Message' and 'a message' should be the same)", () => {
    const actual = polybius("A Message");
    const expected = polybius("a message");
    expect(actual).to.equal(expected);
  });

  it("should maintain spaces in the message before and after encoding", () => {
    const actual = polybius("a message");
    const expected = "11 23513434112251";
    expect(actual).to.equal(expected);
  });

  it("should maintain spaces in the message before and after decoding", () => {
    const actual = polybius("11 23513434112251", false);
    const expected = "a message";
    expect(actual).to.equal(expected);
  });
});

