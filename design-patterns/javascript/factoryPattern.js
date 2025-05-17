const VEHICLE_ENUM = {
  CAR: "car",
  TRUCK: "truck",
  TRACTOR: "tractor",
};

class Car {
  constructor({ company, license, owner, wheels }) {
    this.company = company;
    this.owner = owner;
    this.license = license;
    this.wheels = wheels;
  }

  drive() {
    return `${this.owner} is driving a ${this.company} car with license number
     ${this.license} car with ${this.wheels} wheels.`;
  }
}

class Truck {
  constructor({ company, license }) {
    this.company = company;
    this.license = license;
  }

  haul() {
    return `Hauling with a ${this.company} license ${this.license} truck.`;
  }
}

class Tractor {
  constructor({ company, license, wheels }) {
    this.company = company;
    this.license = license;
    this.wheels = wheels;
  }

  haul() {
    return `Hauling with a ${this.company} license ${this.license} tractor with ${this.wheels} wheels.`;
  }
}

function VehicleFactory() {
  // closures to encapsulate common properties or functionality
  const company = "Tata Motors";
  return {
    createVehicle: function (vehicle, license, owner, wheels) {
      // conditionally return objects
      switch (vehicle) {
        case VEHICLE_ENUM.CAR:
          return new Car({ company, license, owner, wheels });
          break;
        case VEHICLE_ENUM.TRUCK:
          return new Truck({ company, license });
          break;
        case VEHICLE_ENUM.TRACTOR:
          return new Tractor({ company, license, wheels });
          break;
        default:
          break;
      }
    },
  };
}

const Factory = VehicleFactory();

const myCar = Factory.createVehicle("car", "12345", "Saurabh Ojha", 4);
console.log(myCar.drive());

const myTractor = Factory.createVehicle("tractor", "999999", "Saurabh Ojha", 8);
console.log(myTractor.haul());
