
function sayHello (name) {
    console.log ('hola ' + name);
}

sayHello('profe'+ ' '  +  'malvado');

function calculateSquareArea (side){
    const squareArea = side * 2;
    console.log (squareArea);
}

calculateSquareArea(10);

function calculateTriangleArea (base, height){
    const triangleArea = base * height / 2;
    console.log (triangleArea);
}

calculateTriangleArea(10,2);

function calculateCircleArea (radius){
    const circleArea = radius * 3.14;
    console.log (circleArea);
}

calculateCircleArea(21);

function celsiusToFahrenheit (degrees){
    const fahrenheit = degrees * 1.8 + 32;
    console.log (fahrenheit);
}

celsiusToFahrenheit(37);

function fahrenheitToCelsius (fahrenheit){
    const degrees = (fahrenheit - 32) / 1.8;
    console.log (degrees);
}

fahrenheitToCelsius(98);

function totalPrice (price){
    const totalPrice =price + (price * 0.21);
    console.log (totalPrice);
}

totalPrice(100);

function writeMessage ( name ,material , size , note){
    const message = name + " ha pedido una caja de " + material + " de tamaño "
+ size + ". " + note +  ".";
console.log (message);
}

writeMessage ( 'Macarena', 'carton' , 'standar' , 'Cuidado');