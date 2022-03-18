var precio= parseInt(prompt("ingresa el precio del producto"));
var iva= parseFloat(prompt("ingrese el valor del IVA"));
 subtotal =precio*iva
total=subtotal+precio

alert(" El valor del iva es "+subtotal)
alert("El valor del producto sin iva es "+precio);
alert("El valor del producto con IVA es "+total)