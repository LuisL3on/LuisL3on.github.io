console.log("Js se está ejecutando");


//************* Datos BBTs Jumbo *********************

var timeJ = document.querySelector('#tiempoJ');
const volumenBBT1J = document.querySelector('#BBT1J');
const volumenBBT2J = document.querySelector('#BBT2J');
const volumenBBT3J = document.querySelector('#BBT3J');
const volumenBBT4J = document.querySelector('#BBT4J');
const volumenBBT5J = document.querySelector('#BBT5J');
const volumenBBT6J = document.querySelector('#BBT6J');
const volumenBBT7J = document.querySelector('#BBT7J');
const volumenBBT8J = document.querySelector('#BBT8J');
const volumenBBT9J = document.querySelector('#BBT9J');
const volumenBBT10J = document.querySelector('#BBT10J');
const volumenBBT11J = document.querySelector('#BBT11J');
const volumenBBT12J = document.querySelector('#BBT12J');
const volumenBBT13J = document.querySelector('#BBT13J');
const volumenBBT14J = document.querySelector('#BBT14J');
const volumenBBT15J = document.querySelector('#BBT15J');

//******************** Botones Calcular *******************

var btnCalcularJumbo = document.getElementById('calcularJumbo');
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


//****************** Se definen acciones botones *****************
btnCalcularJumbo.addEventListener('click',OnclickbtncalcularJumbo);

//*********************** Funcion calcular Jumbo **********************
function OnclickbtncalcularJumbo(){
    
    if (checkbox.checked) {
        var fechaActual = new Date(fechaInput.value + 'T' + horaInput.value);
        console.log(fechaActual);
    } else {
        var fechaActual = new Date();
        console.log(fechaActual);
    }
     
    var tiempoSeparado = separarTiempo(timeJ.value);
    
    var vol = parseInt(volumenBBT1J.value,10) + parseInt(volumenBBT2J.value,10) + parseInt(volumenBBT3J.value,10) + parseInt(volumenBBT4J.value,10)+ parseInt(volumenBBT5J.value,10)+ parseInt(volumenBBT6J.value,10)+ parseInt(volumenBBT7J.value,10) + parseInt(volumenBBT8J.value,10) + parseInt(volumenBBT9J.value,10) + parseInt(volumenBBT10J.value,10) + parseInt(volumenBBT11J.value,10)+ parseInt(volumenBBT12J.value,10) + parseInt(volumenBBT13J.value,10) + parseInt(volumenBBT14J.value,10) + parseInt(volumenBBT15J.value,10) ;
    var horasMinutos = tiempoSeparado.resultado1*60;
    var minutosTotales = parseInt(horasMinutos) + parseInt(tiempoSeparado.resultado2);
    var minutosFinales = minutosTotales*vol/1000;
    
    fechaActual.setMinutes(fechaActual.getMinutes() + minutosFinales);

    var fechaSeparada = separarFecha(fechaActual); 

    alert("La línea Jumbo tiene cerveza hasta las: " + fechaSeparada.hora + ":" + fechaSeparada.minutos + ":" + fechaSeparada.segundos + " del " + fechaSeparada.dia + "/" + fechaSeparada.mes + "/" + fechaSeparada.anio); 

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












