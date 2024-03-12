console.log("Js se está ejecutando");

//************* Datos BBTs 330 *********************

var time330 = document.querySelector('#tiempo330');
const volumenBBT1330 = document.querySelector('#BBT1330');
const volumenBBT2330 = document.querySelector('#BBT2330');
const volumenBBT3330 = document.querySelector('#BBT3330');
const volumenBBT4330 = document.querySelector('#BBT4330');
const volumenBBT5330 = document.querySelector('#BBT5330');
const volumenBBT6330 = document.querySelector('#BBT6330');
const volumenBBT7330 = document.querySelector('#BBT7330');
const volumenBBT8330 = document.querySelector('#BBT8330');
const volumenBBT9330 = document.querySelector('#BBT9330');
const volumenBBT10330 = document.querySelector('#BBT10330');
const volumenBBT11330 = document.querySelector('#BBT11330');
const volumenBBT12330 = document.querySelector('#BBT12330');
const volumenBBT13330 = document.querySelector('#BBT13330');
const volumenBBT14330 = document.querySelector('#BBT14330');
const volumenBBT15330 = document.querySelector('#BBT15330');

var btnCalcular330 = document.getElementById('calcular330');

btnCalcular330.addEventListener('click',Onclickbtncalcular330);

//*********************** Funcion calcular 330 **********************
function Onclickbtncalcular330(){
    
    
    var fechaActual = new Date();
    
    var tiempoSeparado = separarTiempo(time330.value);
    
    var vol = parseInt(volumenBBT1330.value,10) + parseInt(volumenBBT2330.value,10) + parseInt(volumenBBT3330.value,10) + parseInt(volumenBBT4330.value,10)+ parseInt(volumenBBT5330.value,10)+ parseInt(volumenBBT6330.value,10)+ parseInt(volumenBBT7330.value,10) + parseInt(volumenBBT8330.value,10) + parseInt(volumenBBT9330.value,10) + parseInt(volumenBBT10330.value,10) + parseInt(volumenBBT11330.value,10)+ parseInt(volumenBBT12330.value,10) + parseInt(volumenBBT13330.value,10) + parseInt(volumenBBT14330.value,10) + parseInt(volumenBBT15330.value,10) ;
    var horasMinutos = tiempoSeparado.resultado1*60;
    var minutosTotales = parseInt(horasMinutos) + parseInt(tiempoSeparado.resultado2);
    var minutosFinales = minutosTotales*vol/1000;
    
    fechaActual.setMinutes(fechaActual.getMinutes() + minutosFinales);

    var fechaSeparada = separarFecha(fechaActual); 

    alert("La línea 330 tiene cerveza hasta las: " + fechaSeparada.hora + ":" + fechaSeparada.minutos + ":" + fechaSeparada.segundos + " del " + fechaSeparada.dia + "/" + fechaSeparada.mes + "/" + fechaSeparada.anio); 
    
} 

// **********Función para separar horas : minutos : segundos 

function separarTiempo(tiempo){

    var tiempoSeparado = tiempo.split(":"); 
    
    if (tiempoSeparado.length === 3){
    
        var horas = tiempoSeparado[0];
        var minutos = tiempoSeparado[1];
        var segundos = tiempoSeparado[2];

        return {
            resultado1: horas,
            resultado2: minutos,
            resultado3: segundos
        };
    }

    else {
        alert("Formato incorrecto, ingrese el tiempo en formato HH:MM:SS");
        return;
    }

}

// *********Función para imprimir bien la fecha*************

function separarFecha(fecha){

    if(parseInt(fecha.getMinutes()) <= 9 && parseInt(fecha.getSeconds()) <=9){
        return {hora:fecha.getHours(), minutos:"0" + fecha.getMinutes(), segundos: "0" + fecha.getSeconds(), dia:fecha.getDate(), mes:fecha.getMonth() + 1, anio:fecha.getFullYear()}; 
    } 
    else if(parseInt(fecha.getMinutes()) <= 9 && parseInt(fecha.getSeconds()) > 9){
        return {hora:fecha.getHours(), minutos:"0" + fecha.getMinutes(), segundos:fecha.getSeconds(), dia:fecha.getDate(), mes:fecha.getMonth() + 1, anio:fecha.getFullYear()};
    } 
    else if (fecha.getMinutes() > 9 &&  parseInt(fecha.getSeconds()) <= 9){
        return {hora:fecha.getHours(), minutos:fecha.getMinutes(), segundos:"0" + fecha.getSeconds(), dia:fecha.getDate(), mes:fecha.getMonth() + 1, anio:fecha.getFullYear()};
    } 
    else {
        return {hora:fecha.getHours(), minutos:fecha.getMinutes(), segundos:fecha.getSeconds(), dia:fecha.getDate(), mes:fecha.getMonth() + 1, anio:fecha.getFullYear()};
    }
}












