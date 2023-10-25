function calcularSoma() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultado = num1 + num2;
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}

function calcularSubtracao() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultado = num1 - num2;
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}

function calcularMultiplicacao() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultado = num1 * num2;
    document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}

function calcularDivisao() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    if (num2 !== 0) {
        var resultado = num1 / num2;
        document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
    } else {
        document.getElementById("resultado").innerHTML = "Não é possível dividir por zero.";
    }
}
