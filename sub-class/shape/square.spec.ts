import { Square } from './square';

describe('Square', () => {
  // Setup
  const expected = {
    sides: 4,
    length: 5,
    name: 'square',
  };
  const square = new Square(expected.sides, expected.length);

  it('should return fields passed to the square', () => {
    expect(expected.sides).toEqual(square.getSides());
    expect(expected.length).toEqual(square.getLength());
    expect(expected.name).toEqual(square.getName());
  });
  it('should multiply length by it self when getting the area', () => {
    expect(expected.length * expected.length).toBe(square.getArea());
  });
});
