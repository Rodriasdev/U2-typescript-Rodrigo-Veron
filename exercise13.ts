enum Color {
    Red="Red",Green = "Green", Blue = "Blue"
};

function Colores(color:Color):string{
    return "Su color es "+color;
};

console.log(Colores(Color.Red));
