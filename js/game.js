const grid = document.querySelector('.grid');

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

const createCard = (character) => {
    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../Image/${character}.png')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addE

    return card;
}

const loadGame = () => {

    const duplicateCharacter = [ ... characters, ... characters];

    const shuffledArray = duplicateCharacter.sort(() => Math.random() -0.5)


    shuffledArray.forEach((character) => {

        const card = createCard(character);
        grid.appendChild(card);
    });
}
loadGame()