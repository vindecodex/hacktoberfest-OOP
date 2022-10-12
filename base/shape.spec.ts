import { Shape } from './shape';

describe('Shape', () => {
  it('should return fields passed to the shape', () => {
    // Setup
    const expected = {
      sides: 4,
      length: 10,
      height: 20,
      name: 'Rectangle',
    };
    const shape = new Shape(
      expected.sides,
      expected.length,
      expected.height,
      expected.name,
    );

    expect(expected.sides).toEqual(shape.getSides());
    expect(expected.length).toEqual(shape.getLength());
    expect(expected.height).toEqual(shape.getHeight());
    expect(expected.name).toEqual(shape.getName());
  });
});
