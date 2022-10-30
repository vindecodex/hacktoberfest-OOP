import { Nissan } from "./nissan";

describe('Nissan', () => {
  it('should return fields passed to the Nissan', () => {
    // Setup
    const expected = {
      name: 'Nissan',
      speed: 42,
      color: 'Cyan',
		}
		const car = new Nissan(expected.speed, expected.color);

		expect(expected.name).toEqual(car.getName())
		expect(expected.speed).toEqual(car.getSpeed())
		expect(expected.color).toEqual(car.getColor())
	})
});
