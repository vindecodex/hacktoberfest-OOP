import { Shape } from '../../../base/shape/shape';

export class Rectangle extends Shape {
  private width: number;

  constructor(sides: number = 0, length: number = 0, width: number = 0) {
    super(sides, length, 0, 'rectangle');
    this.width = width;
  }

  setWidth(width: number): void {
    this.width = width;
  }

  getWidth(): number {
    return this.width;
  }

  getArea(): number {
    return this.getLength() * this.width;
  }

  getPerimeter(): number {
    return 2 * (this.getLength() + this.width);
  }
}
