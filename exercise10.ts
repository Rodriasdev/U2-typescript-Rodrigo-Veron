import { Car3 } from "./exercise9";

class ElectricCar extends Car3 {
    batteryLife: number = 0
    constructor(make: string){
        super(make)
    }

    charge(){
        return console.log("El coche se está cargando.");
        
    }

};

new ElectricCar("Tesla").charge()