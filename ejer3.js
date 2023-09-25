let nombre = null;
let edad = null;



let input = document.getElementById("name");
input.addEventListener("keyup", function (event) {
  nombre = event.target.value;
  //console.log(nombre);
});

let input2 = document.getElementById("age");
input2.addEventListener("keyup", function (event) {
  edad = event.target.value;
  });

const button = document.querySelector("btn");

btn.addEventListener("click", function (event) {
  event.preventDefault();
  mayorEdad(edad)
  });

function mayorEdad(edad){
if (edad > 18){
    document.write("Bienvenid@, " + nombre + "  ¡eres mayor de edad!")
}else{
    document.write("¡Lo siento " + nombre + " eres menor de edad!")
}}

