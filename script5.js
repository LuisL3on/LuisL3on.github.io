var btnCalcularVel = document.getElementById('calcularVel');

btnCalcularVel.addEventListener('click',OnclickbtncalcularVel);

var velTras = document.querySelector('#velTras');
var volRes = document.querySelector('#volRes');

function OnclickbtncalcularVel(){

    var fechaActual = new Date();
    var velTrasDec = parseInt(velTras.value,10);
    var volResDec = parseInt(volRes.value,10);
    var minutosTrasiego = 60*volResDec/velTrasDec; 
    fechaActual.setMinutes(fechaActual.getMinutes() + minutosTrasiego);
    var fechaSeparada = separarFecha(fechaActual);
    
    alert("El trasiego finaliza a las : " + fechaSeparada.hora + ":" + fechaSeparada.minutos + ":" + fechaSeparada.segundos + " del " + fechaSeparada.dia + "/" + fechaSeparada.mes + "/" + fechaSeparada.anio);

}

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
