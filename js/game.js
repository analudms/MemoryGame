const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

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

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCard = '';
let secondCard = '';

const checkEndGame = () => {
    const disabledCard = document.querySelectorAll('.disabledCard');

    if (disabledCard.length === 20){
        clearInterval(this.loop);
        alert(`Parabéns ${spanPlayer.innerHTML}, seu tempo foi ${timer.innerHTML}!`);
    }
}

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

const loadGame = () => {

    const duplicateCharacter = [ ... characters, ... characters];

    const shuffledArray = duplicateCharacter.sort(() => Math.random() - 0.5);

    shuffledArray.forEach((character) => {
        const card = createCard(character);
        grid.appendChild(card);
    });
}

const startTime = () => {

    this.loop = setInterval(() => {

        const currentTime = Number(timer.innerHTML);
        timer.innerHTML = currentTime + 1;
    },1000);


}
window.onload = () => {

    spanPlayer.innerHTML = localStorage.getItem('player');

    loadGame()
    startTime()

}


