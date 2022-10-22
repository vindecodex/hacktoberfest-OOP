import { Honda } from "./honda";

describe('Honda', () => {
  // Setup
  const expected = {
    name: 'Honda',
    speed: 150,
    color: 'black',
  };
  const car = new Honda(expected.speed, expected.color);

  it('should return properties passed to the honda class', () => {
    expect(car.getName()).toEqual(expected.name);
    expect(car.getSpeed()).toEqual(expected.speed);
    expect(car.getColor()).toEqual(expected.color);
  });
});
