/* eslint-disable no-unused-vars */
describe("multiplicationTable", () => {
  it("returns an array", () => {
    const table = multiplicationTable(6, 12);

    expect(Array.isArray(table)).toBe(true);
  });

  it("every row is an array and the first argument represents the total amount of rows in the table", () => {
    const smallTable = multiplicationTable(2, 0);
    const mediumTable = multiplicationTable(4, 0);
    const largeTable = multiplicationTable(8, 0);

    expect(smallTable).toEqual([[], []]);
    expect(mediumTable).toEqual([[], [], [], []]);
    expect(largeTable).toEqual([[], [], [], [], [], [], [], []]);
  });

  it("in a 2x6 grid ( rows X columns ), the column values start at 1 and are multiplied by the current row", () => {
    const table = multiplicationTable(2, 6);

    expect(table).toEqual([
      [1, 2],
      [2, 4],
      [3, 6],
      [4, 8],
      [5, 10],
      [6, 12],
    ]);
  });

  it("in a 3x9 grid ( rows X columns ), the column values start at 1 and are multiplied by the current row", () => {
    const rows = 3;
    const columns = 9;
    const table = multiplicationTable(rows, columns);

    expect(table).toEqual([
      [1, 2, 3],
      [2, 4, 6],
      [3, 6, 9],
      [4, 8, 12],
      [5, 10, 15],
      [6, 12, 18],
      [7, 14, 21],
      [8, 16, 24],
      [9, 18, 27],
    ]);
  });

  it("in a 6x12 grid (rows X columns ), the column values start at 1 and are multiplied by the current row", () => {
    const rows = 6;
    const columns = 12;

    const table = multiplicationTable(rows, columns);

    expect(table).toEqual([
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
      [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36],
      [4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48],
      [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
      [6, 12, 18, 24, 30, 36, 42, 48, 54, 60, 66, 72],
    ]);
  });

  it("in a 0x0 grid (rows X columns), an empty array is returned", () => {
    const table = multiplicationTable(0, 0);
    expect(table).toEqual([]);
  });
});
