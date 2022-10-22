import { Mitsubishi } from "./mitsubishi.spec";

describe('Mitsubishi', () => {
  // Setup
  const expected = {
    name: 'Mitsubishi',
    speed: 175,
    color: 'navy blue',
  };
  const car = new Mitsubishi(expected.speed, expected.color);

  it('should return properties passed to the mitsubishi class', () => {
    expect(car.getName()).toEqual(expected.name);
    expect(car.getSpeed()).toEqual(expected.speed);
    expect(car.getColor()).toEqual(expected.color);
  });
});
