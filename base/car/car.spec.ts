import { Car } from './car';

describe('Car', () => {
  it('should return fields passed to the car', () => {
    // Setup
    const expected = {
      name: 'car',
      speed: 10,
      color: 'red',
		}
		const car = new Car(expected.name, expected.speed, expected.color);

		expect(expected.name).toEqual(car.getName())
		expect(expected.speed).toEqual(car.getSpeed())
		expect(expected.color).toEqual(car.getColor())
	})
})
