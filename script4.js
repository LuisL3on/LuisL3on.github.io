const tgColor = document.querySelector('#tgColor');
const promMpalida = document.querySelector('#promPalida');
const pcMaltaCaramelo = document.querySelector('#pcCaramelo');
const pcMaltaPalida = document.querySelector('#pcPalida');
var btnCalcular = document.getElementById('calcularMalta');

btnCalcular.addEventListener('click',function(){
    
    var y = tgColor.value;
    var inter = 37.95793747511314;
    var cx1 = -0.00121708;
    var x1 = promMpalida.value;
    var cx2 = -0.00216472;
    //x2 es cantMalta
    var cx3 = -0.51230048;
    var x3 = pcMaltaPalida.value;
    var cx4 = 0.00371096;
    var x4 = pcMaltaCaramelo.value;

    var cantMalta = (inter + cx1*x1 + cx2*y+ cx3*x3 + cx4*x4);
    var bultos = cantMalta/25; 
    alert("Para los datos ingresados se deben dosificar " + cantMalta.toFixed(3) + " bultos de" + " malta caramelo");
});

