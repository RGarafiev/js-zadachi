//Zadacha 1

// ((5 >= 7) || ("javascript" != "java")) && !(((11 * 3) == 99) && true)

// (false || true) && !(false && true)
// =>
// true && true 
// =>
// true 

//Zadacha 2

let age = 6;

if (age >= 18 && age <= 59) {
console.log('Вам еще работать и работать');
} else if (age > 59) 
   
{
    console.log('Вам пора на пенсию');
} else if (age >= 1 && age <= 17) 

    {
    console.log('Вам еще рано работать');
}

// Zadacha 3

const words = (n = 0) => n % 100 < 5 || n % 100 > 20 ? 
(n % 10 == 1 ? `${n} ворона`: n % 10 > 1 && n % 10 < 5 ? `${n} вороны`: `${n} ворон`) : `${n} ворон`;
console.log(words(22));

// Zadacha 4

const a = -6543;
const b = 1;
const c = 55;

let max = a;
let min = a;

if (b > max) {
  max = b;
} 
if (c > max) {
  max = c;
}

if (b < min) {
  min = b;
}
if (c < min) {
  min = c;
}

console.log(`Наибольшее число: ${max}`);
console.log(`Наименьшее число: ${min}`);

//Zadacha 5

function фрукты(apple, orange) {
  const appleWeight = apple * 100;
  const orangeWeight = orange * 150;

  if (appleWeight > orangeWeight) {
    console.log("Бери яблоки");
  } else if (orangeWeight > appleWeight) {
    console.log("Бери апельсины");
  } else {
    console.log("Вес одинаковый");
  }
}

фрукты(3,3)



































