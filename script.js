// Ejercicio 1---------------------------
const cars = ['Tesla', 'Mercedes', 'Honda'] 
const [ randomCar ] = cars // randomCar accede al valor 'Tesla'
const [ ,otherRandomCar ] = cars // , otherRandomCar  accede al valor 'Mercedes' porque la coma indica que omite ese primer indice 
//Predict the output
console.log(randomCar) // 'Tesla'
console.log(otherRandomCar) // 'Mercedes'


// Ejercicio 2---------------------------
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee; // para acceder al valor name almacenado en const employee, se le da un nuevo nombre que es itherName
//Predict the output
console.log(name); // no existe una const llamada name 
console.log(otherName); // accede al valor almacenado en name 'Elon'

//Ejercicio 3-----------------------------
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  // se un nuevo nombre a password, pasa a llamarse hashedPassword
//Predict the output
console.log(password); //existe la constante password con el valor '12345'
console.log(hashedPassword);//no existe el valor de password dentro de la constante person, por lo tanto no almacena ningun valor, da por resultado undefind  

// Ejercicio 4----------------------------
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; // almacena el valor 2 
const [,,,second] = numbers; // almacena el valor 5
const [,,,,,,,,third] = numbers; // almacena el valor 2
//Predict the output
console.log(first == second); // 2==5 false
console.log(first == third); // 2==2 true

//Ejercicio 5-----------------------------
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest; // key accede al valor almacenado en key de la const lastTest 'value'
const { secondKey } = lastTest; // secondKey accede al valor almacenado en secondKey de la const lasTest [1, 5, 1, 8, 3, 3]
const [ ,willThisWork] = secondKey; // accede al valor almacenado en ese indice en secondKey, el indice [1] con valor 5
//Predict the output
console.log(key); // 'value'
console.log(secondKey); // [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]); // accede al indice [0] de valor 1
console.log(willThisWork); // 5








