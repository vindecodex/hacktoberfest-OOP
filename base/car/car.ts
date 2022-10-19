export class Car {
  constructor(
    private name: string = 'car',
    private speed: number = 0,
    private color: string = 'black', 
  ) {}

  getName(): string {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }

  getSpeed(): number {
    return this.speed;
  }

  setSpeed(speed: number) {
    this.speed = speed;
  }

  getColor(): string {
    return this.color;
  }

  setColor(color: string) {
    this.color = color;
  }

}
