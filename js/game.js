let keyboard = new Keyboard();
let canvas;
let world;
let ctx;

let isMuteSound = true;
let isPause = true;
let restart = false;
let audioBackgroundMusic = new Audio('audio/background-music.mp3');

/**
 * Init the game
 */
function init() {
    loadLevel1();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    loadMobileEvents();
    loadKeyboardEvents();
    toggleSound();
    
}


/**
 * Restart the game
 */
function restartGame() {
    loadLevel1();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    loadMobileEvents();
    loadKeyboardEvents();

    let gameOverScreen = document.getElementById('game-over-screen');
    gameOverScreen.style.display = 'none';

    let gameWinScreen = document.getElementById('game-win-screen');
    gameWinScreen.style.display = 'none';
}


/**
 * Pause the game
 */
function pauseGame() {
    let buttonPause = document.getElementById('btn-pause');
    buttonPause.setAttribute('src', 'icon/play-solid.svg');
    buttonPause.setAttribute('onclick', 'resumeGame()');
    isPause = true;
}


/**
 * Resume the game
 */
function resumeGame() {
    let buttonResume = document.getElementById('btn-pause');
    buttonResume.setAttribute('src', 'icon/pause-solid.svg');
    buttonResume.setAttribute('onclick', 'pauseGame()');
    isPause = false;
}


/**
 * Switch sound on/off
 */
function toggleSound() {
    let buttonSound = document.getElementById('btn-sound');
    if (buttonSound.getAttribute('src') == 'icon/volume-high-solid.svg') {
        buttonSound.setAttribute('src', 'icon/volume-xmark-solid.svg');
        isMuteSound = true;
    } else {
        buttonSound.setAttribute('src', 'icon/volume-high-solid.svg');
        isMuteSound = false;
    }
}


/**
 * Start the game
 */
function startGame() {
    let startScreen = document.getElementById('start-screen')
    startScreen.style.display = 'none';
    isPause = false;

    let buttonPause = document.getElementById('btn-pause');
    buttonPause.style.display = '';

    toggleSound();
}


/**
 * Open the game info
 */
function openInfo() {
    let info = document.getElementById('info')
    info.style.display = '';

    let menu = document.getElementById('menu');
    menu.style.display = 'none';

    pauseGame();
}


/**
 * Close the game info
 */
function closeInfo() {
    let info = document.getElementById('info')
    info.style.display = 'none';

    let menu = document.getElementById('menu');
    menu.style.display = '';
}


/**
 * Switch fullscreen on/off
 */
function fullscreen() {
    let canvas = document.getElementById("canvas");
    if (canvas.requestFullScreen)
        canvas.requestFullScreen();
    else if (canvas.webkitRequestFullScreen)
        canvas.webkitRequestFullScreen();
    else if (canvas.mozRequestFullScreen)
        canvas.mozRequestFullScreen();
}


/**
 * Load mobile events attack potion
 */
function loadMobileEventsAttackPotion() {
    document.getElementById('btn-attack-potion').addEventListener('touchstart', (e) => {
        if (e.cancelable) {
            e.preventDefault();
        }
        keyboard.D = true;
    });


    document.getElementById('btn-attack-potion').addEventListener('touchend', (e) => {
        if (e.cancelable) {
            e.preventDefault();
        }
        keyboard.D = false;
    });
}


/**
 * Load mobile events attack bubble
 */
function loadMobileEventsAttackBubble() {
    document.getElementById('btn-attack-bubble').addEventListener('touchstart', (e) => {
        if (e.cancelable) {
            e.preventDefault();
        }
        keyboard.SPACE = true;
    });


    document.getElementById('btn-attack-bubble').addEventListener('touchend', (e) => {
        if (e.cancelable) {
            e.preventDefault();
        }
        keyboard.SPACE = false;
    });
}


/**
 * Load mobile events move up
 */
function loadMobileEventsMoveUp() {
    document.getElementById('btn-move-up').addEventListener('touchstart', (e) => {
        if (e.cancelable) {
            e.preventDefault();
        }
        keyboard.UP = true;
    });


    document.getElementById('btn-move-up').addEventListener('touchend', (e) => {
        if (e.cancelable) {
            e.preventDefault();
        }
        keyboard.UP = false;
    });
}


/**
 * Load mobile events move left
 */
function loadMobileEventsMoveLeft() {
    document.getElementById('btn-move-left').addEventListener('touchstart', (e) => {
        if (e.cancelable) {
            e.preventDefault();
        }
        keyboard.LEFT = true;
    });


    document.getElementById('btn-move-left').addEventListener('touchend', (e) => {
        if (e.cancelable) {
            e.preventDefault();
        }
        keyboard.LEFT = false;
    });
}


/**
 * Load mobile events move right
 */
function loadMobileEventsMoveRight() {
    document.getElementById('btn-move-right').addEventListener('touchstart', (e) => {
        if (e.cancelable) {
            e.preventDefault();
        }
        keyboard.RIGHT = true;
    });


    document.getElementById('btn-move-right').addEventListener('touchend', (e) => {
        if (e.cancelable) {
            e.preventDefault();
        }
        keyboard.RIGHT = false;
    });
}


/**
 * Load mobile events move down
 */
function loadMobileEventsMoveDown() {
    document.getElementById('btn-move-down').addEventListener('touchstart', (e) => {
        if (e.cancelable) {
            e.preventDefault();
        }
        keyboard.DOWN = true;
    });


    document.getElementById('btn-move-down').addEventListener('touchend', (e) => {
        if (e.cancelable) {
            e.preventDefault();
        }
        keyboard.DOWN = false;
    });
}


/**
 * Init the mobile touch events
 */
function loadMobileEvents() {
    loadMobileEventsAttackPotion();
    loadMobileEventsAttackBubble();
    loadMobileEventsMoveUp();
    loadMobileEventsMoveLeft();
    loadMobileEventsMoveRight();
    loadMobileEventsMoveDown();
}


/**
 * Load keyboard events down
 */
function loadKeyboardEventsDown() {
    window.addEventListener('keydown', (event) => {
        if (event.key == 'ArrowLeft') {
            keyboard.LEFT = true;
        }

        if (event.key == 'ArrowRight') {
            keyboard.RIGHT = true;
        }

        if (event.key == 'ArrowUp') {
            keyboard.UP = true;
        }

        if (event.key == 'ArrowDown') {
            keyboard.DOWN = true;
        }

        if (event.key == ' ') {
            keyboard.SPACE = true;
        }

        if (event.key == 'd') {
            keyboard.D = true;
        }
    })
}


/**
 * Load keyboard events up
 */
function loadKeyboardEventsUp() {
    window.addEventListener('keyup', (event) => {
        if (event.key == 'ArrowLeft') {
            keyboard.LEFT = false;
        }

        if (event.key == 'ArrowRight') {
            keyboard.RIGHT = false;
        }

        if (event.key == 'ArrowUp') {
            keyboard.UP = false;
        }

        if (event.key == 'ArrowDown') {
            keyboard.DOWN = false;
        }

        if (event.key == ' ') {
            keyboard.SPACE = false;
        }

        if (event.key == 'd') {
            keyboard.D = false;
        }
    })
}


/**
 * Init the keyboard events
 */
function loadKeyboardEvents() {
    loadKeyboardEventsDown();
    loadKeyboardEventsUp();
}


/**
 * Show the game over screen
 */
function showGameOver() {
    let gameOver = document.getElementById('game-over-screen');
    gameOver.style.display = '';
}


/**
 * Show the game win screen
 */
function showGameWin() {
    let gameWin = document.getElementById('game-win-screen');
    gameWin.style.display = '';
}