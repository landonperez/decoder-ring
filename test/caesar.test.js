const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar()", () => {
  it("should return false if the shift value is equal to 0", () => {
    const actual = caesar("thinkful", 0);
    expect(actual).to.be.false;
  });

  it("should return false if the shift value is less than -25", () => {
    const actual = caesar("thinkful", -26);
    expect(actual).to.be.false;
  });

  it("should return false if the shift value is greater than 25", () => {
    const actual = caesar("thinkful", 26);
    expect(actual).to.be.false;
  });

  it("should return false if the shift value is not present", () => {
    const actual = caesar("thinkful");
    expect(actual).to.be.false;
  });

  it("should ignore capital letters", () => {
    const actual = caesar("A Message", 3);
    const expected = "d phvvdjh";
    expect(actual).to.equal(expected);
  });

  it("should handle shifts that go past the end of the alphabet", () => {
    const actual = caesar("z", 3);
    const expected = "c";
    expect(actual).to.equal(expected);
  });

  it("should maintain spaces and other nonalphabetic symbols when encoding", () => {
    const actual = caesar("This is a secret message!", 8);
    const expected = "bpqa qa i amkzmb umaaiom!";
    expect(actual).to.equal(expected);
  });

  it("should maintain spaces and other nonalphabetic symbols when decoding", () => {
    const actual = caesar("bpqa qa i amkzmb umaaiom!", 8, false);
    const expected = "this is a secret message!";
    expect(actual).to.equal(expected);
  });
});

