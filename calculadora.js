function obtenerResultado(){
    let numero1 = document.getElementById('trabajadas').value;
    let numero2 = document.getElementById('valor-hora').value;
    let numero3 = document.getElementById('horasextra').value;
    let numero4 = document.getElementById('extra').value;

    document.getElementById('parrafoSueldo').textContent = 'el resultado es ' + ((numero1 * numero2) + (numero3 * numero4));


}