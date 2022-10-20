import { Shape } from '../../../base/shape/shape';

export class Triangle extends Shape {
  private side1: number;
  private side2: number;
  private side3: number;

  constructor(sides: number = 0, side1: number = 0, side2: number = 0, side3: number = 0) {
    super(sides, 0, 0, 'triangle');
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  setSide1(side: number): void {
    this.side1 = side;
  }

  getSide1(): number {
    return this.side1;
  }

  setSide2(side: number): void {
    this.side2 = side;
  }

  getSide2(): number {
    return this.side2;
  }

  setSide3(side: number): void {
    this.side3 = side;
  }

  getSide3(): number {
    return this.side3;
  }

  getArea(): number {
    const sp = this.getPerimeter() / 2; // Semi Perimeter
    
    return Math.sqrt(sp * (sp - this.side1) * (sp - this.side2) * (sp - this.side3));
  }

  getPerimeter(): number {
    return this.side1 + this.side2 + this.side3;
  }
}
