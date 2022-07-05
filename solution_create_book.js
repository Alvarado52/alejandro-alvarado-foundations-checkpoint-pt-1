/* eslint-disable no-unused-vars, no-prototype-builtins */
describe("createBook", () => {
  it("`createBook` is a function", () => {
    expect(typeof createBook).toBe("function");
  });

  it("`createBook` returns an object (instance) ", () => {
    const book = createBook();
    expect(typeof book).toBe("object");
  });

  it("every instance has an id, title, author, price and rating property", () => {
    const book = createBook(
      1,
      "In Search Of Lost Time",
      "Marcel Proust",
      21.99
    );
    expect(book.id).toBe(1);
    expect(book.title).toBe("In Search Of Lost Time");
    expect(book.author).toBe("Marcel Proust");
    expect(book.price).toBe(21.99);
    expect(book.rating).toEqual([]);
  });

  it("every instance has an id, title, author, price, and rating property attached to the instance", () => {
    const book = createBook(
      1,
      "In Search Of Lost Time",
      "Marcel Proust",
      21.99
    );
    expect(book.hasOwnProperty("id")).toBe(true);
    expect(book.hasOwnProperty("title")).toBe(true);
    expect(book.hasOwnProperty("author")).toBe(true);
    expect(book.hasOwnProperty("price")).toBe(true);
    expect(book.hasOwnProperty("rating")).toBe(true);
  });

  it("the `getPrice` method returns the price of the book", () => {
    const donQuixote = createBook(
      3,
      "Don Quixote",
      "Miguel De Cervantes",
      14.99
    );
    expect(typeof donQuixote.getPrice()).toBe("number");
    expect(donQuixote.getPrice()).toBe(14.99);
  });

  it("the `getInfo` method returns the title and author", () => {
    const theGreatGatsby = createBook(
      2,
      "The Great Gatsby",
      "F. Scott Fitzgerald",
      6.99
    );
    expect(typeof theGreatGatsby.getInfo()).toBe("string");
    expect(theGreatGatsby.getInfo()).toBe(
      "The Great Gatsby by F. Scott Fitzgerald"
    );
  });

  it("the `addRating` method adds the rating to the rating property", () => {
    const inSearchOfLostTime = createBook(
      1,
      "In Search Of Lost Time",
      "Marcel Proust",
      21.99
    );
    const theGreatGatsby = createBook(
      2,
      "The Great Gatsby",
      "F. Scott Fitzgerald",
      6.99
    );

    inSearchOfLostTime.addRating("*****");
    expect(inSearchOfLostTime.rating).toEqual(["*****"]);

    theGreatGatsby.addRating("*****");
    theGreatGatsby.addRating("***");
    theGreatGatsby.addRating("*");
    theGreatGatsby.addRating("****");
    theGreatGatsby.addRating("**");

    expect(theGreatGatsby.rating).toEqual(["*****", "***", "*", "****", "**"]);
  });

  it("the `getRating` method returns the average rating", () => {
    const theOdyssey = createBook(4, "The Odyssey", "Homer", 10.99);
    const theIliad = createBook(5, "The Iliad", "Homer", 15.99);

    theOdyssey.addRating("*****");
    expect(theOdyssey.getRating()).toBe(5);

    theIliad.addRating("*****");
    theIliad.addRating("***");
    theIliad.addRating("*");
    theIliad.addRating("****");
    theIliad.addRating("**");

    expect(theIliad.getRating()).toBe(3);
  });

  it("the `getInfo`, `getPrice`, `addRating`, and `getRating` methods are only accessible via the instances' prototype chain", () => {
    const nineteenEightyFour = createBook(
      6,
      "Nineteen Eighty Four",
      "George Orwell",
      9.99
    );

    expect(nineteenEightyFour.hasOwnProperty("getInfo")).toBe(false);
    expect(nineteenEightyFour.hasOwnProperty("getPrice")).toBe(false);
    expect(nineteenEightyFour.hasOwnProperty("addRating")).toBe(false);
    expect(nineteenEightyFour.hasOwnProperty("getRating")).toBe(false);
  });

  it("`createBook` creates an instance using `Object.create` within the `createBook` function", () => {
    spyOn(Object, "create").and.callThrough();
    const greatExpectations = createBook(
      7,
      "Great Expectations",
      "Charles Dickens",
      4.99
    );
    const inSearchOfLostTime = createBook(
      1,
      "In Search Of Lost Time",
      "Marcel Proust",
      21.99
    );

    expect(Object.create.calls.count()).toBe(2);
  });
});
