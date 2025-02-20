import { Car } from "./car";

export class CarManager {
private cars: Car[] = [];

// Create (Add) a new car
createCar = (car: Car): void => {
  this.cars.push(car);
  console.log('Car created:', car);
};

// Read (Get) a car by ID
 getCar = (id: number): Car | undefined => {
  const car = this.cars.find((c) => c.id === id);
  if (car) {
    console.log('Car found:', car);
  } else {
    console.log('Car not found');
  }
  return car;
};

// Update (Modify) an existing car by ID
 updateCar = (id: number, updatedData: Partial<Car>): void => {
  const carIndex = this.cars.findIndex((c) => c.id === id);
  if (carIndex !== -1) {
    const car = this.cars[carIndex];
    this.cars[carIndex] = { ...car, ...updatedData };
    console.log('Car updated:', this.cars[carIndex]);
  } else {
    console.log('Car not found');
  }
};

// Delete (Remove) a car by ID
 deleteCar = (id: number): void => {
  const carIndex = this.cars.findIndex((c) => c.id === id);
  if (carIndex !== -1) {
    this.cars.splice(carIndex, 1);
    console.log('Car deleted');
  } else {
    console.log('Car not found');
  }
}
}