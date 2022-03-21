// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var array =[]; 
  for (clave in objeto) {
 
    array.push([clave,objeto[clave]])
  }

  return array;
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  objeto = {};
  for(var i = 0; i < string.length; i++) {

    if(Object.keys(objeto).includes(string[i])) { // a, d. s, j, f, d, s

      objeto[string[i]] = objeto[string[i]] + 1

    } else {

      objeto[string[i]] = 1; // { a: 1, d: 2, s: 2, j: 1, f: 1}
    }
  }
  return objeto;
  }

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  minusculas = "";
  mayúsculas = "";

  for(var i = 0; i < s.length; i++) {

    if(s[i] === s[i].toUpperCase()) { // s

      mayúsculas += s[i];

    } else {

      minusculas += s[i];
    }

  }

  // return (mayúsculas + minusculas);

  return "".concat(mayúsculas,minusculas);

}

function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

 var frase = str.split(' ').map(function(element){
   return element.split('').reverse().join('')
 }).join(' ')

 return frase
 }

function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  
var entero= numero.toString();
var newEntero;

newEntero = entero.split('').reverse().join('')
if(entero === newEntero){
  return 'Es capicua';
}
else{
  return 'No es capicua';
}
}

function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  cadena = cadena.replace('a','');
  cadena = cadena.replace('b','');
  cadena =cadena.replace('c','');

  return cadena;

}

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
var arr1 = new Array;
arr1 = arr.sort(function(a,b) {
  return a.length - b.length
})
return arr1;
}

function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
 var arreglo = [];
 for (let i = 0; i < arreglo1.length; i++) {
   for (let j = 0; j < arreglo2.length; j++) {
     if (arreglo1[i] === arreglo2[j]) {
       arreglo.push(arreglo1[i])
     }
   }
 }
 return arreglo;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
buscoInterseccion,
};