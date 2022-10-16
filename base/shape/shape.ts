export class Shape {
  constructor(
    private sides: number = 0,
    private length: number = 0,
    private height: number = 0,
    private name: string = 'shape', 
  ) {}

  getSides(): number {
    return this.sides;
  }

  getLength(): number {
    return this.length;
  }

  getHeight(): number {
    return this.height;
  }

  getName(): string {
    return this.name;
  }
}
