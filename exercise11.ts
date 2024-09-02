interface Shape{
    area(): number; 
};


class Circle implements Shape{
    r: number
    constructor(r:number){
        this.r = r
    }

    area(): number {
        return Math.PI * this.r**2
    };
};

console.log(new Circle(4));
