var totalpagar = 0, recargo = 0, valorDia = 0;

var edad = parseInt(prompt('Digite su edad'));
var diasHospitalizacion = parseInt(prompt('Digite cantidad de dias que duro hospitalizado'));

if(edad <= 10) {
    if(diasHospitalizacion <= 1) {
        valorDia = 20000;
        totalpagar = 20000;
    } else if(diasHospitalizacion <= 4) {
        valorDia = 30000;
        totalpagar = 30000 * diasHospitalizacion;
    } else if(diasHospitalizacion <= 7) {
        valorDia = 25000;
        recargo = 25000 * diasHospitalizacion * 0.05;
        totalpagar = 25000 * diasHospitalizacion + recargo;
    } else {
        valorDia = 15000;
        recargo = 15000 * diasHospitalizacion * 0.10;
        totalpagar = 15000 * diasHospitalizacion + recargo;
    }  
} else if(edad <= 17) {
    if(diasHospitalizacion <= 1) {
        valorDia = 20000;
        totalpagar = 20000;
    } else if(diasHospitalizacion <= 4) {
        valorDia = 30000;
        totalpagar = 30000 * diasHospitalizacion;
    } else if(diasHospitalizacion <= 7) {
        valorDia = 25000;
        totalpagar = 25000 * diasHospitalizacion + recargo;
    } else {
        valorDia = 15000;
        recargo = 15000 * diasHospitalizacion * 0.10;
        totalpagar = 15000 * diasHospitalizacion + recargo;
    }  
} else if(edad <= 49) {
    if(diasHospitalizacion <= 1) {
        valorDia = 20000;
        totalpagar = 20000;
    } else if(diasHospitalizacion <= 4) {
        valorDia = 30000;
        totalpagar = 30000 * diasHospitalizacion;
    } else if(diasHospitalizacion <= 7) {
        valorDia = 25000;
        totalpagar = 25000 * diasHospitalizacion + recargo;
    } else {
        valorDia = 15000;
        recargo = 15000 * diasHospitalizacion * 0.15;
        totalpagar = 15000 * diasHospitalizacion + recargo;
    }  
} else {
    if(diasHospitalizacion <= 1) {
        valorDia = 20000;
        totalpagar = 20000;
    } else if(diasHospitalizacion <= 4) {
        valorDia = 30000;
        totalpagar = 30000 * diasHospitalizacion;
    } else if(diasHospitalizacion <= 7) {
        valorDia = 25000;
        recargo = 25000 * diasHospitalizacion * 0.15;
        totalpagar = 25000 * diasHospitalizacion + recargo;
    } else {
        valorDia = 15000;
        recargo = 15000 * diasHospitalizacion * 0.20;
        totalpagar = 15000 * diasHospitalizacion + recargo;
    } 
}

alert('Días de hospitalización del paciente: ' + diasHospitalizacion + '\n' +
      'Valor dia: ' + valorDia + '\n' +
      'Valor del recargo: ' + recargo + '\n' +
      'total a pagar: ' + totalpagar);


