//========== Car Class ==========
class Car {
  name: string;
  position: number;
  placment: number;
  constructor(name: string, position: number, placment: number) {
    this.name = name;
    this.position = position;
    this.placment = placment;
  }
}
// let numberOfCars: number;
let numberOfCars: string | null = prompt("please enter number of cars");

function randomOrder(inputCarCount: number): number[] {
  let randomNumbers: number[] = [];
  while (randomNumbers.length < inputCarCount) {
    let position = Math.floor(Math.random() * inputCarCount) + 1;
    if (!randomNumbers.includes(position)) {
      randomNumbers.push(position);
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

function carRace(numberOfCars: number) {
  let road: string[] = [..."*".repeat(300)];
  let cars: Car[] = [];
  for (let index = 0; index < numberOfCars; index++) {
    let name: string | null = prompt(
      `Please enter name of ${index + 1} car's name `
    );
    if (!name) {
      throw new Error("name can not be empty");
    }
    cars.push(new Car(name));
  }
  let stepOrder = randomOrder(numberOfCars);
  cars.forEach((item, index) => {
    item.position = randomOrder[index];
    item.placment = 0;
  });
  cars.sort((a, b) => {
    return (a.position = b.position);
  });
  console.log(stepOrder);
  cars.forEach((element) => {
    console.log(element.name);
  });
  let result: string[] = [];
  while (
    cars.filter((item) => {
      return item.placment > 300;
    }).length < numberOfCars
  ) {
    let steps = stepArray(10, numberOfCars);
    for (let index = 0; index < numberOfCars; index++) {
      cars[index].placment += steps[index];
      if (cars[index].placment < 300) {
        road[cars[index].placment] = cars[index].name;
        cars.filter((element) => {
          return (
            element.placment === cars[index].placment &&
            element.name !== cars[index].name
          );
        });
      } else {
        result.push(cars[index].name);
      }
    }
    console.log(road.join(""));
  }
  console.log(`the winers is : ${result[0]}`);
}

carRace(Number(numberOfCars));
