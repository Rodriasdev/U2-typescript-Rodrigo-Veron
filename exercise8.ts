class Car2 {
    make:string
    constructor(make:string){
        this.make = make
    };

    drive(){
        return console.log(`Driving a ${this.make}`);
    };
};

new Car2("Tesla").drive();