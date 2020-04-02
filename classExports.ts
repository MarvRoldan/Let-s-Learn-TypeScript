// One class should be in one file!
export class Square {
  // Properties
  private height: number;
  private width: number;

  // Constructor
  public constructor(height: number, width: number) {
    this.height = height;
    this.width = width;
  }

  // Methods
  getWidth(): number {
    return this.width;
  }

  getHeight(): number {
    return this.height;
  }

  getArea() {
    return this.height * this.width;
  }
};
