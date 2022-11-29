let name= prompt("Como te llamas?").toUpperCase();
function mostrarTrivia(){
document.getElementById("trivia").style.display="block";
document.getElementById("borrar").style.display="none";
mostrarTrivia()
}
let counter = 0;
function reinicio(){
document.getElementById("trivia").reset();
}
function correcta() {
 
    //alert ("Respuesta Correcta")
    counter++;
  
};
function corregir(){
  alert ( name +  " Tu Puntaje Final es: " +  counter)
}
