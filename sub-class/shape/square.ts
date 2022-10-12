import { Shape } from '../../base/shape';

export class Square extends Shape {
  constructor(sides: number = 0, length: number = 0) {
    super(sides, length, length, 'square');
  }

  getArea(): number {
    return this.getLength() * this.getHeight();
  }
}
