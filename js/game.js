//criação de constantes para acessar do html no js
const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

//criando array com personagens para criar cartas
const characters = [
    'beth',
    'jerry',
    'jessica',
    'meeseeks',
    'morty',
    'pessoa-passaro',
    'pickle-rick',
    'rick',
    'scroopy',
    'summer',
]

//criando função para criar elementos para criar cartas
const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCard = '';
let secondCard = '';

//função para verificar se o jogador acertou todas as cartas
const checkEndGame = () => {
    const disabledCard = document.querySelectorAll('.disabledCard');

    if (disabledCard.length === 20){
        clearInterval(this.loop);
        alert(`Parabéns ${spanPlayer.innerHTML}, seu tempo foi ${timer.innerHTML}!`);
    }
}

//função verifica se as cartas são iguais
const checkCards = () => {
    const firstCharacter = firstCard.getAttribute('data-character');
    const secondCharacter = secondCard.getAttribute('data-character');
    
    if (firstCharacter === secondCharacter) {

        firstCard.firstChild.classList.add('disabledCard');
        secondCard.firstChild.classList.add('disabledCard');
        
        firstCard = '';
        secondCard = '';

        checkEndGame();

    }else{

        setTimeout(() => {
            firstCard.classList.remove('reveal_card');
            secondCard.classList.remove('reveal_card');

            firstCard = '';
            secondCard = '';

        }, 500);
    }
}

//função verifica se não tem nenhuma carta aberta e revela a carta clicada
const revealCard = ({target}) => {
    if (target.parentNode.className.includes('reveal_card')){
        return;
    }

    if (firstCard === '') {
        target.parentNode.classList.add('reveal_card') ;
        firstCard = target.parentNode;
    }else if (secondCard === ''){
        target.parentNode.classList.add('reveal_card') ;
        secondCard = target.parentNode;

        checkCards();
    }
}

//função cria carta com adição de evento ao clicar
const createCard = (character) => {
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../Image/${character}.png')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-character', character)

    return card;
}

//função de início de jogo, duplicando as cartas para criar o jogo
const loadGame = () => {

    const duplicateCharacter = [ ... characters, ... characters];

    const shuffledArray = duplicateCharacter.sort(() => Math.random() - 0.5);
//forEach -> percorre elementos do array e executa uma ação para cada um deles
    shuffledArray.forEach((character) => {
        const card = createCard(character);
        grid.appendChild(card);
    });
}

//função para começar o cronômetro
const startTime = () => {

    this.loop = setInterval(() => {

        const currentTime = Number(timer.innerHTML);
        timer.innerHTML = currentTime + 1;
    },1000);
}

//evento acionado quando a página estiver carregada
window.onload = () => {

    spanPlayer.innerHTML = localStorage.getItem('player');

    loadGame()
    startTime()

}


