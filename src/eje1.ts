type ColorType = 'red' | 'yellow' | 'blue' | 'orange' | 'green';

abstract class ThreeDimensionalFigure {
  constructor(private readonly name: string, private color: ColorType) {
  }

  getName() {
    return this.name;
  }
  getColor() {
    return this.color;
  }
  setColor(color: ColorType) {
    this.color = color;
  }

  abstract getVolume(): number;
  abstract print(): void;
}

class Cube extends ThreeDimensionalFigure {
  private readonly faces = 6;

  constructor(name: string, color: ColorType, private base: number = 1,
    private height: number = 1, private depth: number = 1) {
    super(name, color);
  }

  getFaces() {
    return this.faces;
  }

  getVolume() {
    return this.base * this.height * this.depth;
  }

  print() {
    console.log(`I am a ${this.getName()}, I have ${this.getFaces()} faces, ` +
      `and my volume is ${this.getVolume()}`);
  }
}

abstract class TwoDimensionalFigure {
  constructor(private readonly name: string, private color: ColorType) {
  }

  getName() {
    return this.name;
  }
  getColor() {
    return this.color;
  }
  setColor(color: ColorType) {
    this.color = color;
  }

  abstract getArea(): number;
  abstract print(): void;
}

class Rectangle extends TwoDimensionalFigure {
  private readonly sides = 4;

  constructor(name: string, color: ColorType,
    private base: number = 1, private height: number = 1) {
    super(name, color);
  }

  getSides() {
    return this.sides;
  }

  getArea() {
    return this.base * this.height;
  }

  print() {
    console.log(`I am a ${this.getName()}, I have ${this.getSides()} sides, ` +
      `and my area is ${this.getArea()}`);
  }
}

class FigureCollection<T extends TwoDimensionalFigure | ThreeDimensionalFigure> {
    constructor(protected figures: T[]) {
    }
  
    addFigure(newFigure: T) {
      this.figures.push(newFigure);
    }
  
    getNumberOfFigures() {
      return this.figures.length;
    }
  
    getFigure(index: number) {
      return this.figures[index];
    }
  
    print() {
      this.figures.forEach((figure) => {
        figure.print();
      });
    }
  }
  
  class SearchableFigureCollection extends FigureCollection<ThreeDimensionalFigure> {
    constructor(figures: ThreeDimensionalFigure[]) {
      super(figures);
    }
  
    searchByVolume(volume: number) {
      return this.figures.filter((figure) => figure.getVolume() >= volume);
    }
  }
  
  const mySearchableFigureCollection = new SearchableFigureCollection([
    new Cube('GreenCube', 'green', 10, 10, 10),
    new Cube('BlueCube', 'blue', 10, 10, 10),
    new Cube('RedCube', 'red', 10, 10, 5),
  ]);
  
  const searchResults = mySearchableFigureCollection.searchByVolume(1000);
  
  if (searchResults) {
    searchResults.forEach((result) => {
      result.print();
    });
  }