console.log("Js se está ejecutando");

//************* Datos BBTs Latas *********************

var timeL = document.querySelector('#tiempoL');
const volumenBBT1L = document.querySelector('#BBT1L');
const volumenBBT2L = document.querySelector('#BBT2L');
const volumenBBT3L = document.querySelector('#BBT3L');
const volumenBBT4L = document.querySelector('#BBT4L');
const volumenBBT5L = document.querySelector('#BBT5L');
const volumenBBT6L = document.querySelector('#BBT6L');
const volumenBBT7L = document.querySelector('#BBT7L');
const volumenBBT8L = document.querySelector('#BBT8L');
const volumenBBT9L = document.querySelector('#BBT9L');
const volumenBBT10L = document.querySelector('#BBT10L');
const volumenBBT11L = document.querySelector('#BBT11L');
const volumenBBT12L = document.querySelector('#BBT12L');
const volumenBBT13L = document.querySelector('#BBT13L');
const volumenBBT14L = document.querySelector('#BBT14L');
const volumenBBT15L = document.querySelector('#BBT15L');

var btnCalcularLatas = document.querySelector('#calcularLatas');
var fechaHoraDiv = document.getElementById('fechaHora');
var checkbox = document.getElementById('mostrarFila');
var fechaInput = document.getElementById('fecha');
var horaInput = document.getElementById('hora');

fechaHoraDiv.classList.add('hidden');
checkbox.addEventListener('change',OnclickCheck);

function OnclickCheck(){
    if (checkbox.checked) {
        fechaHoraDiv.classList.remove('hidden');
    } else {
        fechaHoraDiv.classList.add('hidden');
    }
}


btnCalcularLatas.addEventListener('click',OnclickbtncalcularLatas);

//*********************** Funcion calcular Latas **********************
function OnclickbtncalcularLatas(){
    
    if (checkbox.checked) {
        var fechaActual = new Date(fechaInput.value + 'T' + horaInput.value);
        console.log(fechaActual);
    } else {
        var fechaActual = new Date();
        console.log(fechaActual);
    }
    
    var tiempoSeparado = separarTiempo(timeL.value);
    
    var vol = parseInt(volumenBBT1L.value,10) + parseInt(volumenBBT2L.value,10) + parseInt(volumenBBT3L.value,10) + parseInt(volumenBBT4L.value,10)+ parseInt(volumenBBT5L.value,10)+ parseInt(volumenBBT6L.value,10)+ parseInt(volumenBBT7L.value,10) + parseInt(volumenBBT8L.value,10) + parseInt(volumenBBT9L.value,10) + parseInt(volumenBBT10L.value,10) + parseInt(volumenBBT11L.value,10)+ parseInt(volumenBBT12L.value,10) + parseInt(volumenBBT13L.value,10) + parseInt(volumenBBT14L.value,10) + parseInt(volumenBBT15L.value,10) ;
    var horasMinutos = tiempoSeparado.resultado1*60;
    var minutosTotales = parseInt(horasMinutos) + parseInt(tiempoSeparado.resultado2);
    var minutosFinales = minutosTotales*vol/1000;
    
    fechaActual.setMinutes(fechaActual.getMinutes() + minutosFinales);

    var fechaSeparada = separarFecha(fechaActual); 

    alert("La línea Latas tiene cerveza hasta las: " + fechaSeparada.hora + ":" + fechaSeparada.minutos + ":" + fechaSeparada.segundos + " del " + fechaSeparada.dia + "/" + fechaSeparada.mes + "/" + fechaSeparada.anio); 

    return;
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












