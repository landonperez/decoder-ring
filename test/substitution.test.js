const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution()", () => {
  it("should return false if the given alphabet isn't exactly 26 characters long", () => {
    const actual = substitution("thinkful", "short");
    expect(actual).to.be.false;
  });

  it("should return false if there are any duplicate characters in the given alphabet", () => {
    const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
    expect(actual).to.be.false;
  });

  it("should correctly translate the given phrase, based on the alphabet given to the function", () => {
    const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    const expected = "jrufscpw";
    expect(actual).to.equal(expected);
  });

  it("should maintain spaces in the message, before and after encoding", () => {
    const actual = substitution("you are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
    const expected = "elp xhm xf mbymwwmfj dne";
    expect(actual).to.equal(expected);
  });

  it("should maintain spaces in the message, before and after decoding", () => {
    const actual = substitution("elp xhm xf mbymwwmfj dne", "xoyqmcgrukswaflnthdjpzibev", false);
    const expected = "you are an excellent spy";
    expect(actual).to.equal(expected);
  });

  it("should ignore capital letters (e.g., 'A Message' and 'a message' should be the same)", () => {
    const actual = substitution("A Message", "xoyqmcgrukswaflnthdjpzibev");
    const expected = substitution("a message", "xoyqmcgrukswaflnthdjpzibev");
    expect(actual).to.equal(expected);
  });
});

