
var efectivo,cupon,credito,pago=parseFloat,total,subtotal;
var producto1=parseFloat(prompt("ingresa el valor del producto 1"));
var producto2=parseFloat(prompt("ingresa el valor del producto 2"));
var producto3=parseFloat(prompt("ingresa el valor del producto 3"));
 var total=producto1+producto2+producto3;
 var subtotal=total*0.5;
 var sub=total*0.3;
 
var pago =parseFloat(prompt(" digite 1 (efectivo) 2 (cupon) 3 (credito)"));
switch( parseFloat(pago)){
    case 1: alert("el valor a pagar es"+total);
    break;
    case 2: alert("el valor a pagar es "+(total-sub));
    break;
    case 3: alert("el valor a pagar es:  " +(total+subtotal));
    break;
 
    default:alert("numero incorrecto")}