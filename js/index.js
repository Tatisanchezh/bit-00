"use strict";
//EJERRCICIO 1//
/*let nombre = prompt ("Ingresa tu nombre")
document.write("Hola, " + nombre + "!");*/

//EJERCICIO 2//
/*let nombre = prompt("Ingresa tu nombre")
let apellido = prompt("Ingresa tu apellido")
let resultado = document.write("Hola, " + nombre +"  " + apellido +"!");*/

//EJERCICIO 3//
/*let nombre = prompt("Ingresa tu nombre")
let respuesta = confirm("Hola" + " " + nombre + " " + "¿deseas ingresar a este sitio web?")
if (respuesta){
document.write("Bienvenid@")
}
else{
    document.write("Fue un gusto verte por aquí, Bye!")
}*/

//EJERCICIO 4//
/*let nombre = prompt("Ingresa tu nombre");
let edad = prompt("ingresa tu edad");
if (edad > 18) {
  document.write("Eres mayor de edad");
} else {
  document.write("Eres menor de edad");
}*/

//EJERCICIO 5//
/*const rol = prompt("ingresa tu rol");
switch (rol) {
  case "vendedor":
    document.write("Hola vendedor!");
    break;
  case "administrador":
    document.write("Hola administrador!");
    break;
  case "cliente":
    document.write("Hola cliente!");
    break;
  default:
    document.write("Tu rol no es valido para el ingreso!");
}*/

//EJERCICIO 6//
/*let numero = prompt("ingresar numero")
let res1 = (numero * 2)
let res2 = (numero / 2)
document.write("El doble de " + numero + " " + "es " + res1 + " " + "La mitad de " + numero + " " + "es " + res2)*/

//EJERCICIO 7 NUMEROS POSITIVOS Y NEGATIVOS//
/*let numero = prompt("ingresar numero");
if (numero > 0) {
  document.write("El numero es positivo");
} else {
  if (numero < 0) {
    document.write("El numero es negativo");
  } else {
    document.write("El numero es cero");
  }
}*/

//PAR O IMPAR//
/*let numero = prompt("ingresar numero");
if (numero % 2 === 0){
    document.write("El numero es par");
}else{
    document.write("El numero es impar");
}*/

//NUMERO MAYOR//
/*let num1=prompt('Ingrese TU PRIMER número');
let num2=prompt('Ingrese TU SEGUNDO número');
document.write(num1>num2 ? 'TU MEJOR NUMERO ES EL  '+num1 :'TU MEJOR NUMERO ES EL  '+num2);*/

//OPERACIONES BASICAS//
//-------------------------suma---------------//
/*let num1 = prompt('Ingrese TU PRIMER número')
let num2 = prompt('Ingrese TU PRIMER número')
let resultado = (parseInt(num1) + parseInt(num2))
document.write("la suma de " + num1 + " y " + num2 + " es igual a " + resultado)*/

//--------------------------RESTA------------------//
/*let num1 = prompt('Ingrese TU PRIMER número')
let num2 = prompt('Ingrese TU PRIMER número')
let resultado = (parseInt(num1) - parseInt(num2))
document.write("la resta de " + num1 + " y " + num2 + " es igual a " + resultado)*/


//--------------------------MULTIPLICACION-------------//
/*let num1 = prompt('Ingrese TU PRIMER número')
let num2 = prompt('Ingrese TU PRIMER número')
let resultado = (parseInt(num1) * parseInt(num2))
document.write(`el resultado de ${num1}*${num2}=`,resultado)*/

//--------------------------DIVISION--------------------//
let num1 = prompt("ingresar numero")
let num2 = prompt("ingresar numero")
let resultado = (num1 / num2)
document.write(`el resultado de ${num1}/${num2}=`,resultado);


