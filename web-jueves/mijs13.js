var promedio=parseFloat;
var nota1=parseFloat(prompt("ingrese la nota uno"));
var nota2=parseFloat(prompt("ingrese la nota dos"));
var nota3=parseFloat(prompt("ingrese la nota tres"));
var promedio=(nota1+nota2+nota3)/3;

if(promedio<=10){
 alert ("MALO")
}
else if(promedio>=11 && promedio <=13){
alert("REGULAR")
}
else if(promedio<=14 && promedio <=16){
    alert("BUENO")
}
else{
    alert("MUY BUENO")
}