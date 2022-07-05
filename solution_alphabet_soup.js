/* eslint-disable no-unused-vars, no-prototype-builtins */
describe("soup", () => {
  it("the soup function returns a boolean", () => {
    expect(typeof soup("d", "d")).toBe("boolean");
    expect(typeof soup("cbr", "f")).toBe("boolean");
  });

  it('the soup function returns true if the "characterBank" (second argument) has enough characters to create the "phrase" (first argument)', () => {
    const phrase = "d";
    const characterBank = "d";

    expect(soup(phrase, characterBank)).toBe(true);
  });

  it('the soup function returns false if the "characterBank" (second argument) does NOT have enough characters to create the "phrase" (first argument)', () => {
    const phrase = "brd";
    const characterBank = "bds";

    expect(soup(phrase, characterBank)).toBe(false);
  });

  it("the soup function returns the proper boolean value for complex phrases", () => {
    const phrase = "imhungry";
    const characterBank = "grhmnuyi";

    expect(soup(phrase, characterBank)).toBe(true);

    // additional phrases

    expect(soup("heeyah", "eyehah")).toBe(true);
    expect(soup("yep", "yea")).toBe(false);
  });

  it('the soup function returns true when there are "extra" characters in the character bank', () => {
    const phrase = "haveaniceday";
    const characterBank = "yhaceidgfdyjdneava";

    expect(soup(phrase, characterBank)).toBe(true);

    // additional phrases

    expect(soup("timmyturner", "trombnelessder")).toBe(false);
    expect(soup("jimmyneutron", "uenjymihmorntpklr")).toBe(true);
    expect(soup("yessir", "yes")).toBe(false);
  });
});
