/*
var edad=prompt("digita la edad");
if(edad < 18){
    alert("usted es menor de edad");

}else if( edad>=18 && edad <=28){
    alert("usted es adulto adolecente")
}
else if (edad>=29 && edad <=49){
alert(" usted es adulto")
}
else{
    alert("ustes es un adulto mayor")

*/
/*
 var edad=prompt("digite la edad")
switch(true){
    case edad< 18:  alert("ustes es menor");
    break;
    case edad >=18 && edad <=28: alert(" usted es adolecente");
    break;
    case edad >=29 && edad <=49: alert(" usted es adulto");
    break;
    default: alert("Adulto mayor");
    break;
}
*/

var dia =prompt("digite un numero del 1 al 7");
switch( parseInt(dia)){
    case 1: alert("lunes");
    break;
    case 2: alert("martes");
    break;
    case 3: alert("miercoles");
    break;
    case 4: alert("jueves");
    break;
    case 5: alert("viernes");
    break;
    case 6: alert("sabado");
    break;
    case 7 : alert("domingo");
    break;
    default:alert("numero incorrecto")
    break

}
