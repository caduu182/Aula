soma.addEventListener('click', function(event) {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    
    soma = num1 + num2;
        alert('A soma é: ' + soma);
})
subtracao.addEventListener('click', function(event) {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    
    subtracao = num1 - num2;
        alert('A subtração é: ' + subtracao);
})
multiplicacao.addEventListener('click', function(event) {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    
    multiplicacao = num1 * num2;
        alert('A multiplicação é: ' + multiplicacao);
})
divisao.addEventListener('click', function(event) {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    
    if (num2 !== 0) {
        divisao = num1 / num2;
        alert('A divisão é: ' + divisao);
    } else {
        alert('Divisão por zero não é permitida.');
    }
});