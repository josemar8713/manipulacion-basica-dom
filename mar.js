
const h1 = document.querySelector ("h1");
const input1 =document.querySelector("#cantidad1");
const input2 =document.querySelector("#cantidad2");
const btn =document.querySelector("#botonc");
const presultado =document.querySelector("#resultado");

btn.addEventListener("click",calculasuma);

function calculasuma (){
const sumainputs = input1.value + input2.value
presultado.innerHTML= "Nombre " + sumainputs;



}