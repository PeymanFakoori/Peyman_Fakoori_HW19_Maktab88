//========== Car Class ==========
class Car {
  name: string;
  position: number;
  constructor(name: string, position: number) {
    this.name = name;
    this.position = position;
  }
}
const cars: Car[] = [];
let numberOfCars: number;

function randomOrder(inputCarCount: number): number[] {
  let randomNumbers: number[] = [];
  while (randomNumbers.length < inputCarCount) {
    let randOrder = Math.floor(Math.random() * inputCarCount) + 1;
    if (!randomNumbers.includes(randOrder)) {
      randomNumbers.push(randOrder);
    }
  }

  return randomNumbers;
}

function stepArray(Max: number, inputCount: number): number[] {
  let stepOrder: number[] = [];
  while (stepOrder.length < inputCount) {
    stepOrder.push(Math.random() * Max + 1);
  }
  return stepOrder;
}
