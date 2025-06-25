btnenviar.addEventListener('click', function(event) {
    let nome = document.getElementById('nome').value;
    let idade = document.getElementById('idade').value;
    
    if(idade >= 18) {
        alert (nome + ' ,Você é maior de idade, sua idade é ' + idade + ' anos.')
    }
    else {
        alert (nome + ' ,Você é menor de idade, sua idade é ' + idade + ' anos.')
    }
})