function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        document.getElementById('resultado').innerHTML = "Por favor, ingresa valores válidos.";
        return;
    }

    const imc = peso / (altura * altura);
    let clasificacion = "";

    if (imc < 18.5) {
        clasificacion = "Bajo peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        clasificacion = "Normal";
    } else if (imc >= 25 && imc < 29.9) {
        clasificacion = "Sobrepeso";
    } else {
        clasificacion = "Obesidad";
    }

    document.getElementById('resultado').innerHTML = `Tu IMC es ${imc.toFixed(2)} (${clasificacion})`;
}
function cambiarColor(){
    document.body.classList.toggle('dark');
}