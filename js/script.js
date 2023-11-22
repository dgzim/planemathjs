//posicionamento inicial
document.querySelector(".menuFinal").style.right = '200%';
document.getElementById('questionBox').style.right = "200%";
document.getElementById('scoreBoard').style.right = '200%';
document.getElementById('lifeBoard').style.right = '-20%';
document.getElementById('btnZero').style.right = '200%';
document.getElementById('btnOne').style.right = "200%";
document.getElementById('btnTwo').style.right = '200%';
document.getElementById('btnThree').style.right = '-20%';
document.getElementById('btnFour').style.right = '200%';
document.getElementById('btnFive').style.right = "200%";
document.getElementById('btnSix').style.right = '200%';
document.getElementById('btnSeven').style.right = '-20%';
document.getElementById('btnEight').style.right = '200%';
document.getElementById('btnNine').style.right = '200%';
document.getElementById('btnTen').style.right = '200%';

let scoreInicial = 0, scoreAtual, inicialLife = 3, actualLife, heartMove, highScore = 0;



let size = 0;
let animaSize;



document.getElementById('btnInit').addEventListener('click', () => {
    gameplay();
});
document.getElementById('btnAgain').addEventListener('click', () => {
    gameplay();
});
document.getElementById('btnZero').addEventListener('click', zero);
document.getElementById('btnOne').addEventListener('click', one);
document.getElementById('btnTwo').addEventListener('click', two);
document.getElementById('btnThree').addEventListener('click', three);
document.getElementById('btnFour').addEventListener('click', four);
document.getElementById('btnFive').addEventListener('click', five);
document.getElementById('btnSix').addEventListener('click', six);
document.getElementById('btnSeven').addEventListener('click', seven);
document.getElementById('btnEight').addEventListener('click', eight);
document.getElementById('btnNine').addEventListener('click', nine);
document.getElementById('btnTen').addEventListener('click', ten);


//avião
let vel, dx, px, anima;
let reference, positon;

//tiro
let shoot, power, shooty, shootx;
power = 1.5;
let percent = '%';

//inimigo
let enemieVariation, enemiePosition, enemieResty = 150, enemieAnime, enemieRestx;
let shootEy, animeShoot;
shootEy = 100;

//vidas

let lifeSinit = 100, lifeS, animaLife;
let currency = false;


///reset positions
document.getElementById('enemie').style.bottom = enemieResty + percent;
document.getElementById('shoot').style.right = -200 + percent;
document.getElementById('shootEnemie').style.bottom = enemieResty + percent;
positon = 50;
function gameplay() {
    inicialPositions();
    scoreAtual = scoreInicial;
    actualLife = inicialLife;
    enemieRandomize();
    scoreShow();
    lifeIniciator();
}

function randomize(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

function zero() {
    px = positon;
    vel = 0.5;
    reference = 91.5;
    if (positon < reference) {
        dx = 1;
    } else {
        dx = -1;
    }
    game();
    enemiePosition = enemieResty;
    enemieAnimation();
}
function one() {
    px = positon;
    vel = 0.5;
    reference = 83.5;
    if (positon < reference) {
        dx = 1;
    } else {
        dx = -1;
    }
    game();
    enemiePosition = enemieResty;
    enemieAnimation();
}
function two() {
    px = positon;
    vel = 0.5;
    reference = 75.5;

    if (positon < reference) {
        dx = 1;
    } else {
        dx = -1;
    }
    game();
    enemiePosition = enemieResty;
    enemieAnimation();
}
function three() {
    px = positon;
    vel = 0.5;
    reference = 67.5;
    if (positon < reference) {
        dx = 1;
    } else {
        dx = -1;
    }
    game();
    enemiePosition = enemieResty;
    enemieAnimation();
}
function four() {
    px = positon;
    vel = 0.5;
    reference = 58.5;
    if (positon < reference) {
        dx = 1;
    } else {
        dx = -1;
    }
    game();
    enemiePosition = enemieResty;
    enemieAnimation();
}
function five() {
    px = positon;
    vel = 0.5;
    reference = 50;
    if (positon < reference) {
        dx = 1;
    } else {
        dx = -1;
    }
    game();
    enemiePosition = enemieResty;
    enemieAnimation();
}
function six() {
    px = positon;
    vel = 0.5;
    reference = 41;
    if (positon < reference) {
        dx = 1;
    } else {
        dx = -1;
    }
    game();
    enemiePosition = enemieResty;
    enemieAnimation();
}
function seven() {
    px = positon;
    vel = 0.5;
    reference = 33.5;
    if (positon < reference) {
        dx = 1;
    } else {
        dx = -1;
    }
    game();
    enemiePosition = enemieResty;
    enemieAnimation();
}
function eight() {
    px = positon;
    vel = 0.5;
    reference = 24.5;
    if (positon < reference) {
        dx = 1;
    } else {
        dx = -1;
    }
    game();
    enemiePosition = enemieResty;
    enemieAnimation();
}
function nine() {
    px = positon;
    vel = 0.5;
    reference = 15.5;
    if (positon < reference) {
        dx = 1;
    } else {
        dx = -1;
    }
    game();
    enemiePosition = enemieResty;
    enemieAnimation();
}
function ten() {
    px = positon;
    vel = 0.5;
    reference = 5;
    if (positon < reference) {
        dx = 1;
    } else {
        dx = -1;
    }
    game();
    enemiePosition = enemieResty;
    enemieAnimation();
}
function game() {
    px += dx * vel;
    document.getElementById('plane').style.right = px + percent;
    anima = requestAnimationFrame(game);
    if (dx > 0) {
        if (px >= reference) {
            cancelAnimationFrame(anima);
            positon = reference;
            positon = px;
            shooty = 18;
            setTimeout(() => {
                shoots();
            }, 1000);

        }
    } else {
        if (px <= reference) {
            cancelAnimationFrame(anima);
            positon = reference;
            positon = px;
            shooty = 18;
            setTimeout(() => {
                shoots();
            }, 1000);

        }
    }


}

function shoots() {

    shootx = positon;
    shooty += power;
    document.getElementById('shoot').style.right = shootx + percent;
    document.getElementById('shoot').style.bottom = shooty + percent;
    shoot = requestAnimationFrame(shoots);
    if (shooty > 80) {
        cancelAnimationFrame(shoot);
        document.getElementById('shoot').style.right = -200 + percent;
        if (shootx < enemieRestx - 5 || shootx > enemieRestx + 5) { //trabalhando a pontuação
            enemieShootAnimation();
            lifeS = lifeSinit;
            actualLife--;
            lifeMovement();
            if (actualLife < 1) {
                loseGame();
            } else {
                setTimeout(() => {
                    document.getElementById('enemie').style.bottom = '150%';
                    enemieRandomize();
                }, 1000);
            }
            
        } else {
            scoreAtual++;
            scoreShow(scoreAtual);
            setTimeout(() => {
                document.getElementById('enemie').style.bottom = '150%';
                enemieRandomize();
            }, 1000);
        }
    }
}

function enemieAnimation() {
    enemieVariation = 0.7;
    enemiePosition -= enemieVariation;
    enemieAnime = requestAnimationFrame(enemieAnimation);
    document.getElementById('enemie').style.bottom = enemiePosition + percent;
    if (enemiePosition <= 90) {
        cancelAnimationFrame(enemieAnime);
        shootEy = 80;
    }

}

function enemieRandomize() {
    let n1 = randomize(0, 20);
    let n2 = randomize(0, 10);

    let naux, menor, maior;
    naux = n1 - n2;
    if (n1 - n2 > 0) {
        maior = n1;
        menor = n2;
        medio = n1 - n2;
    } else {
        maior = n2;
        menor = n1;
        medio = n2 - n1;
    }


    document.getElementById('numberOne').textContent = medio;
    document.getElementById('response').textContent = maior;
    if (menor == 0) {
        enemieRestx = 91.5;
    }
    if (menor == 1) {
        enemieRestx = 83.5;
    }
    if (menor == 2) {
        enemieRestx = 75.5;
    }
    if (menor == 3) {
        enemieRestx = 67.5;
    }
    if (menor == 4) {
        enemieRestx = 58.5;
    }
    if (menor == 5) {
        enemieRestx = 50;
    }
    if (menor == 6) {
        enemieRestx = 41;
    }
    if (menor == 7) {
        enemieRestx = 33.5;
    }
    if (menor == 8) {
        enemieRestx = 24.5
    }
    if (menor == 9) {
        enemieRestx = 15.5;
    }
    if (menor == 10) {
        enemieRestx = 5;
    }
    document.getElementById('enemie').style.right = enemieRestx + percent;
    document.getElementById('shootEnemie').style.right = enemieRestx + percent;
    document.getElementById('questionBox').style.right = "39%";



}
function enemieShootAnimation() {
    shootEy -= power;
    animeShoot = requestAnimationFrame(enemieShootAnimation);
    document.getElementById('shootEnemie').style.bottom = shootEy + percent;
    if (shootEy <= 15) {
        cancelAnimationFrame(animeShoot);
        document.getElementById('shootEnemie').style.bottom = enemieResty + percent;
    }
}

function lifeLose(initiatior) {
    if (initiatior == 2) {
        heartMove = 'lifeOne';
    }
    if (initiatior == 1) {
        heartMove = 'lifeThree';
    }
    if (initiatior == 0) {
        heartMove = 'lifeTwo';
    }
    return heartMove;
}

function lifeMovement() {
    lifeS -= 2.5;
    document.getElementById(lifeLose(actualLife)).style.width = lifeS + percent;
    animaLife = requestAnimationFrame(lifeMovement);
    if (lifeS < 0) {
        cancelAnimationFrame(animaLife);
    }
}

function scoreShow(atual) {
    atual = scoreAtual;
    document.getElementById('score').textContent = atual;
    document.getElementById('scoreBoard').style.right = '75%';
}

function loseGame() {
    document.getElementById('questionBox').style.right = '200%';
    document.getElementById('scoreBoard').style.right = '200%';
    document.getElementById('enemie').style.bottom = enemieResty + percent;
    document.querySelector(".menuFinal").style.right = '38%';
    document.getElementById('questionBox').style.right = "200%";
    document.getElementById('scoreBoard').style.right = '200%';
    document.getElementById('lifeBoard').style.right = '-20%';
    document.getElementById('btnZero').style.right = '200%';
    document.getElementById('btnOne').style.right = "200%";
    document.getElementById('btnTwo').style.right = '200%';
    document.getElementById('btnThree').style.right = '-20%';
    document.getElementById('btnFour').style.right = '200%';
    document.getElementById('btnFive').style.right = "200%";
    document.getElementById('btnSix').style.right = '200%';
    document.getElementById('btnSeven').style.right = '-20%';
    document.getElementById('btnEight').style.right = '200%';
    document.getElementById('btnNine').style.right = '200%';
    document.getElementById('btnTen').style.right = '200%';
    document.getElementById('scoreFinalShow').textContent = scoreAtual;
    if (scoreAtual > highScore) {
        highScore = scoreAtual;
        console.log('passou aqui');
    }
    document.getElementById('highScoreShow').textContent = highScore;
    currency = true;
}


function lifeExpand(reference) {
    size += 2.5;
    document.getElementById(lifeLose(reference)).style.width = size + percent;
    animaSize = requestAnimationFrame(lifeExpand);
    if (size > 99) {
        cancelAnimationFrame(animaSize);
    }
}
function lifeIniciator() {
    document.getElementById(lifeLose(0)).style.width = '0%';
    document.getElementById(lifeLose(1)).style.width = '0%';
    document.getElementById(lifeLose(2)).style.width = '0%'
    size = 0;
    lifeExpand(0);
    setTimeout(() => {
        size = 0;
        lifeExpand(1);
    }, 800);
    setTimeout(() => {
        size = 0;
        lifeExpand(2);
    }, 1500);
}
 
function inicialPositions() {
    document.getElementById('btnZero').style.right = '92%';
    document.getElementById('btnOne').style.right = "84%";
    document.getElementById('btnTwo').style.right = '76%';
    document.getElementById('btnThree').style.right = '68%';
    document.getElementById('btnFour').style.right = '60%';
    document.getElementById('btnFive').style.right = "51%";
    document.getElementById('btnSix').style.right = '42%';
    document.getElementById('btnSeven').style.right = '34%';
    document.getElementById('btnEight').style.right = '25%';
    document.getElementById('btnNine').style.right = '16%';
    document.getElementById('btnTen').style.right = '5%';
    document.getElementById('menuInicial').style.right = '140%';
    document.getElementById('lifeBoard').style.right = '3%';
    document.querySelector(".menuFinal").style.right = '200%';
}