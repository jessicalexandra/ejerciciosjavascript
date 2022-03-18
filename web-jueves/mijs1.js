var salario =prompt("Ingrese su salario");
var salud=parseInt(salario)/100*8;
var pension=parseInt(salario)/100*8;
var total=parseInt(salario)-salud-pension;
 alert("salud :"+ salud +
    "\n pension :" + pension+
    "\n salario : " + salario+
    "\n total :"+ total);