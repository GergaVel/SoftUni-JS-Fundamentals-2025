class Vehicle {
    constructor(vehicleType, vehicleModel, vehicleParts, vehicleFuel){
        this.type = vehicleType;
        this.model = vehicleModel;

        vehicleParts.quality = vehicleParts.engine * vehicleParts.power;
        this.parts = vehicleParts;
        this.fuel = vehicleFuel;
    }

    drive(fuelLoss){
        this.fuel -= fuelLoss;
    }
}

// don't submit in judge
let parts = { engine: 6, power: 100 }; //don't pay too much attention to this, it's just anothr object   
let vehicle = new Vehicle('a', 'b', parts, 200);
vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);