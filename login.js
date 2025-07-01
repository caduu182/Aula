btnentrar.addEventListener('click', function(event) {
    event.preventDefault();
    let usuario = document.getElementById('username').value;
    let senha = document.getElementById('password').value;
    
    if(usuario === 'admin' && senha === '1234') {
        alert('Bem-vindo, ' + usuario + '!');
        window.location.href = 'caduskt.html';
    } else {
        alert('Usuário ou senha incorretos. Tente novamente.');
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        document.getElementById('username').focus();
    }
});