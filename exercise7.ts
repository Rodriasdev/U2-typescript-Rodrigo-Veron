class Car {
    make:string = "Tesla"

    drive(){
        return console.log(`Driving a ${this.make}`);
    }
};

new Car().drive()