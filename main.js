const player1 = {
  name: 'Skorpion',
  hp: 80,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['axe', 'katana', 'knife'],
  attack: function () {
    console.log(`<h3>${this.name}</h3> <h2>Fight...</h2>`);
  }
}

const player2 = {
  name: 'Liukang',
  hp: 50,
  img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
  weapon: ['axe', 'katana', 'knife'],
  attack: function () {
    console.log(`<h3>${this.name}</h3> <h2>Fight...</h2>`);
  }
}

const $arena = document.querySelector('.arenas');

function createPlayer (playerClass, player) {
  const $player = document.createElement('div');
  $player.classList.add(playerClass);

  const $progressBar = document.createElement('div');
  $progressBar.classList.add('progressbar');

  const $life = document.createElement('div');
  $life.classList.add('life');
  $life.style.width = player.hp + '%';

const $name = document.createElement('div');
  $name.classList.add('name');
  $name.innerText = player.name;

  $progressBar.appendChild($life);
  $progressBar.appendChild($name);

const $character = document.createElement('div');
  $character.classList.add('character');

  const $playerImg = document.createElement('img');
  $playerImg.src = player.img;
  $character.appendChild($playerImg);

  $player.appendChild($progressBar);
  $player.appendChild($character);

  $arena.appendChild($player);

}

createPlayer('player1', player1);
createPlayer('player2', player2);