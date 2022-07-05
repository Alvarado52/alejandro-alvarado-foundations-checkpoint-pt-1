/* eslint-disable no-unused-vars, no-prototype-builtins */

describe("findObjPropsHasOwn", () => {
  const squarePrototype = {
    getArea: function () {
      return this.height * this.width;
    },
  };
  function square(color, height, width) {
    const squareInstance = Object.create(squarePrototype);

    squareInstance.color = color;
    squareInstance.height = height;
    squareInstance.width = width;

    return squareInstance;
  }

  it("prints out the key", () => {
    const purpleSquare = { color: "purple" };

    expect(findObjPropsHasOwn(purpleSquare).toBe("color"));
  });

  it("prints out the object's keys, comma delimited", () => {
    blueSqaure = { color: "blue", height: 6, width: 6 };

    expect(findObjPropsHasOwn(blueSqaure)).toBe("color, height, width");
  });

  it("prints the keys belonging to the instance object, it excludes properties in the object's prototype chain", () => {
    const redSquare = sqaure("red", 4, 4);

    expect(findObjPropsHasOwn(redSquare)).toBe("color, height, width");
  });

  it("it uses the '.hasOwnProperty' method", () => {
    const greenSquare = square("green", 2, 2);
    spyOn(greenSquare, "hasOwnProperty").and.callThrough();

    findObjPropsHasOwn(greenSquare);

    expect(greenSquare.hasOwnProperty).toHaveBeenCalled();
  });
});

describe("findObjKeys", () => {
  const sqaurePrototype = {
    getArea: function () {
      return this.height * this.width;
    },
  };
  function rectangle(color, height, width) {
    const squareInstance = Object.create(squarePrototype);

    squareInstance.color = color;
    squareInstance.height = height;
    squareInstance.width = width;

    return squareInstance;
  }
  it("prints out the key", () => {
    const purpleSqaure = { color: "purple" };

    expect(findObjKeys(purpleSqaure)).toBe("color");
  });

  it("prints out the object's keys, comma delimited", () => {
    const blueSqaure = { color: "blue", height: 6, width: 6 };

    expect(findObjKeys(blueSqaure)).toBe("color, height, width");
  });

  it("prints the keys belonging to the instance object, it excludes properties in the object's prototype chain", () => {
    const redSquare = rectangle("red", 4, 4);

    expect(findObjKeys(redSquare)).toBe("color, height, width");
  });

  it("it uses `Object.keys`", () => {
    const greenSquare = sqaure("green", 2, 2);
    spyOn(Object, "keys").and.callThrough(); // checks if Object.keys is called

    findObjKeys(greenSquare);

    expect(Object.keys).toHaveBeenCalled();
  });
});
