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

function randomOrder(inputCarCount: number) {
  let randomNumbers: number[] = [];
  while (randomNumbers.length < inputCarCount) {
    let randOrder = Math.floor(Math.random() * inputCarCount) + 1;
    if (!randomNumbers.includes(randOrder)) {
      randomNumbers.push(randOrder);
    }
  }

  return randomNumbers;
}
