const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const player1 = {
  player: 1,
  name: 'Skorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['axe', 'katana', 'knife'],
  attack: function () {
    console.log(`<h3>${this.name}</h3> <h2>Fight...</h2>`);
  }
}

const player2 = {
  player: 2,
  name: 'Liukang',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
  weapon: ['axe', 'katana', 'knife'],
  attack: function () {
    console.log(`<h3>${this.name}</h3> <h2>Fight...</h2>`);
  }
}

function createEl (tag, className) {
  const $tag = document.createElement(tag);
  if (className) {
    $tag.classList.add(className);
  }
  return $tag;
}

function createPlayer (playerObj) {
  const $player = createEl('div', `player${playerObj.player}`);
  const $progressBar = createEl('div', 'progressbar');
  const $life = createEl('div', 'life');
  const $name = createEl('div', 'name');
  const $character = createEl('div', 'character');
  const $playerImg = createEl('img');

  $life.style.width = playerObj.hp + '%';
  $name.innerText = playerObj.name;
  $playerImg.src = playerObj.img;

  $progressBar.appendChild($name);
  $progressBar.appendChild($life);

  $character.appendChild($playerImg);

  $player.appendChild($progressBar);
  $player.appendChild($character);

  return $player;
}

function changeHP (player) {

  player.hp -= Math.ceil(Math.random() * 20);

  displayFightResult(player);

  console.log(`Player: ${player.player}, ${player.hp} hp`);
}



function playerWins (name) {
  let $winsTitle = document.querySelector('.winsTitle');
    if (!$winsTitle) {
      $winsTitle = createEl('div', 'winsTitle');
    }
    if (!name) {
      $winsTitle.innerText = 'Dead Heat';
    } else {
      $winsTitle.innerText = name + ' wins';
    }
    return $winsTitle;
}

function displayFightResult(player) {
  const $playerLife = document.querySelector(`.player${player.player} .life`);
  $playerLife.style.width = player.hp + '%';
  if (player.hp <= 0) {
    player.hp = 0;
    if (player1.hp === 0 && player2.hp === 0) {
      $arenas.appendChild(playerWins());
    } else {
      player.player === 1 ? $arenas.appendChild(playerWins(player2.name)) : $arenas.appendChild(playerWins(player1.name));
    }

    $playerLife.style.width = player.hp + '%';

    $randomButton.disabled = true;
    $randomButton.style = 'display: none';
  }
}

$randomButton.addEventListener('click', () => {
  changeHP(player1);
  changeHP(player2);
})

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
