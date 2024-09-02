class Car {
    make:string = "Tesla"
    
    constructor(){
        this.make = this.make
    };

    drive(){
        return console.log(`Driving a ${this.make}`);
    }
};