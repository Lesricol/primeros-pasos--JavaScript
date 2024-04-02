function sayHello(name) {
  const greeting = 'Hola ' + name;
  console.log(greeting);
}

sayHello('Victor');

function calculateSquareArea(side) {
  const result = side * side;
  console.log(result);
}

calculateSquareArea(10);

function calculateTriangleArea(base, height) {
  const result = (base * height) / 2;
  console.log(result);
}

calculateTriangleArea(10, 15);

function calculateCircleArea(radius) {
  const result = 3.14 * radius * radius;
  console.log(result);
}

calculateCircleArea(2);

function celsiusToFahrenheit(celsius) {
  const result = celsius * 1.8 + 32;
  console.log(result);
}
celsiusToFahrenheit(25);

function fahrenheitToCelsius(fahrenheit) {
  const result = (fahrenheit - 32) / 1.8;
  console.log(result);
}

fahrenheitToCelsius(77);

function totalPrice(price) {
  const result = price * 0.21 + price;
  console.log(result);
}

totalPrice(200);

function writeMessage(name, material, size, note) {
  const message = name + ' ha pedido una caja de ' + material + ' de tamaño ' + size + '. ' + note;
  console.log(message);
}

writeMessage('Victor', 'leche bolivariana', 'grande', 'Bendiciones pa usted:*');
console.clear();

function addition(numberA, numberB, numberC) {
  const average = (numberA + numberB + numberC) / 3;
  return average;
}
const result = addition(10, 8, 8);
console.log(result);

function value(discount, price) {
  const result = price - price * (discount / 100);
  return result;
}
const finalValue = value(50, 20);
console.log(finalValue);

function words(wordA, wordB) {
  const combination = wordA + '-' + wordB;
  return combination;
}

const combination = words('mama', 'ñema');
console.log(combination);

function getMeters(kilometers) {
  return kilometers * 1000;
}

const totalMeters = getMeters(3);
console.log(totalMeters);

function getSeconds(hours) {
  return hours * (3600 / 1);
}

const totalSeconds = getSeconds(2);
console.log(totalSeconds);

function getSpeedInMetersPerSecond(speed) {
  const meters = getMeters(speed);
  const seconds = getSeconds(1);

  return meters / seconds;
}
const convertedSpeed = getSpeedInMetersPerSecond(70);
console.log(convertedSpeed + ' m/s');
