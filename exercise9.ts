class Car3 {
    private make:string = ""
    constructor(make:string){
        this.make = make
    };

    drive(){
        return console.log(`Driving a ${this.make}`);
    };

    getMake(){
        return this.make
    }
};

new Car3("Tesla").getMake()