//EJEPLOS UTILIZANDO MAMP
/* const frutas = ["🍌", "🍏", "🍓"];

const nuevoArray = frutas.map((fruta) => fruta);
console.log(nuevoArray);
 */

/* const users = [
  { name: "jonh0", age: 23 },
  { name: "eduardo", age: 30 },
  { name: "luz", age: 40 },
];

const names = users.map((item) => item.name);
console.log(names); */

/* const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosPorDos = numeros.map((num) => num * 2);
console.log(numerosPorDos);
 */

// EJEMPLOS UTILIZANDO FILTER
// const users = [
//   { uid: 1, name: "jonh0", age: 23 },
//   { uid: 2, name: "eduardo", age: 30 },
//   { uid: 3, name: "luz", age: 40 },
// ];

// // const mayores = users.filter((item) => item.age > 30);
// // console.log(mayores);

// const userFiltadro = users.filter((item) => item.uid === 3);
// console.log(userFiltadro);

//EJEMPLO UTILIZANDO FIND
/* // const users = [
//   { uid: 1, name: "jonh0", age: 23 },
//   { uid: 2, name: "eduardo", age: 30 },
//   { uid: 3, name: "luz", age: 40 },
// ];
// // const luz = users.find((item) => item.uid === 3);
// // console.log(luz);

// //aplicando destructuri de datos si la condicion se cumple 
// const { age } = users.find((item) => item.uid === 2);
// console.log(age);
 */

//EJEMPLO CON SOME
/* const users = [
  { uid: 1, name: "jonh0", age: 23 },
  { uid: 2, name: "eduardo", age: 30 },
  { uid: 3, name: "luz", age: 40 },
];
const sister = users.some((item) => item.uid === 3);
console.log(sister); */

//EJEMPLO DE FindIndex
/* const users = [
  { uid: 1, name: "jonh0", age: 23 },
  { uid: 2, name: "eduardo", age: 30 },
  { uid: 3, name: "luz", age: 40 },
];
const indice = users.findIndex((item) => item.uid === 3);
console.log(users[indice]); */

/* EJEMPLO DE SLICE
const arr = ["cat", "dog", "tiger", "zebra"];

const arrayNuevo = arr.slice(1, 3);
console.log(arrayNuevo);
 */

/* EJEMPLO CON CONCAT
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);

console.log(array3);*/

//EJEMPLOS CON REDUCE
/* const numeros = [1, 2, 3, 4, 5];

const sumarTodos = numeros.reduce((acc, valorActual) => acc + valorActual);
console.log(sumarTodos); 
-------------------------------------------*/

const arrayNumeros = [
  [0, 1],
  [2, 3],
  [4, 5],
];
// const soloNumeros = arrayNumeros.reduce((acc, current) => acc.concat(current));
// console.log(soloNumeros);

const soloNumeros = [].concat(...arrayNumeros);
console.log(soloNumeros);
