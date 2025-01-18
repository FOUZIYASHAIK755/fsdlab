// Create the car object
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2022,
    getDetails: function () {
        return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
    },
};

// Create the electricCar object using prototypal inheritance
const electricCar = Object.create(car);

// Add an additional property and method to electricCar
electricCar.batteryCapacity = "75 kWh";
electricCar.getBatteryInfo = function () {
    return `Battery Capacity: ${this.batteryCapacity}`;
};

// Set properties specific to electricCar
electricCar.make = "Tesla";
electricCar.model = "Model 3";
electricCar.year = 2023;

// Test the functionality
console.log(electricCar.getDetails()); // Output: Make: Tesla, Model: Model 3, Year: 2023
console.log(electricCar.getBatteryInfo()); // Output: Battery Capacity: 75 kWh
