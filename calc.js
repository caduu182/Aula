soma.addEventListener('click', function(event) {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    
    if (!isNaN(num1) && !isNaN(num2)) {
        let resultado = num1 + num2;
        alert('A soma de ' + num1 + ' e ' + num2 + ' é ' + resultado);
    } else {
        alert('Por favor, insira números válidos.');
    }
}