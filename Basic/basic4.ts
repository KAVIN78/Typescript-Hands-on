interface Shape {
    calculateArea(): number;
  }

  class Rectangle implements Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
    }

    calculateArea(): number {
      return this.width * this.height;
    }
  }

  class Circle implements Shape {
    radius: number;

    constructor(radius: number) {
      this.radius = radius;
    }

    calculateArea(): number {
      return Math.PI * Math.pow(this.radius, 2);
    }
  }

  const rectangle = new Rectangle(5, 3);
  console.log("Area of Rectangle:", rectangle.calculateArea());

  const circle = new Circle(4);
  console.log("Area of Circle:", circle.calculateArea());