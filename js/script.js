const input = document.querySelector('.loginInput');
const button = document.querySelector('.loginButton');
const form = document.querySelector('.loginForm');


//função para definir tamanho do nome do jogador e habilitar o botão
const validateInput = ({target}) => {
    if (target.value.length > 2){
        button.removeAttribute('disabled');  
    }else{
        button.setAttribute('disabled', '')
    }
}

//guardar nome do jogador no armazenamento local
const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem('player',input.value);
    window.location = 'pages/game.html';
}

input.addEventListener('input', validateInput)
form.addEventListener('submit', handleSubmit)
