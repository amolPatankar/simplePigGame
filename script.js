'use strict';
// Selecting elements
const score0E = document.querySelector('#score--0');
const score1E = document.getElementById('score--1');
const diceE = document.querySelector('.dice');
const btnN = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0E = document.getElementById('current--0');
const current1E = document.getElementById('current--1');

const player0E = document.querySelector('.player--0');
const player1E = document.querySelector('.player--1');


//Starting Conditions
score0E.textContent = 0;
score1E.textContent = 0;
diceE.classList.add('hidden');

const scores = [0,0];
let currentScore = 0;
let actPlayer = 0;
let game = true;

const switchPlayer = function(){
    document.getElementById(`current--${actPlayer}`).textContent = 0;
    actPlayer = actPlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0E.classList.toggle('player--active');
    player1E.classList.toggle('player--active');
}

//Rolling functionality
btnRoll.addEventListener('click',function(){
    if(game){
    //Random dice roll
    const dice = Math.trunc(Math.random()*6) +1;
    console.log(dice);
    
    //Display dice by removing hidden class
    diceE.classList.remove('hidden');
    diceE.src = `dice-${dice}.png`;

    //Check if 1 is rolled
    if(dice!==1){
        //Add dice to current score
        currentScore += dice;
        document.getElementById(`current--${actPlayer}`).textContent = currentScore;
    }
    else{
        //Switch player
        switchPlayer();
    }
}
})

btnHold.addEventListener('click',function(){
    if(game){
    //Add current score to active player score
    scores[actPlayer] += currentScore;
    document.getElementById(`score--${actPlayer}`).textContent = scores[actPlayer];

    if(scores[actPlayer] >= 100){
        game = false;
        diceE.classList.add('hidden');
        document.querySelector(`.player--${actPlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${actPlayer}`).classList.remove('player--active');
    }else{  
        switchPlayer();
    }
}
})

btnN.addEventListener('click',function(){
    score0E.textContent = 0;
    score1E.textContent = 0;
    current0E.textContent = 0;
    current1E.textContent = 0;
    diceE.classList.add('hidden');
    if(scores[actPlayer]>=100){
        document.querySelector(`.player--${actPlayer}`).classList.remove('player--winner');
    }
    scores[0] = 0;
    scores[1] = 0;

    player1E.classList.remove('player--active');
    player0E.classList.add('player--active');

    currentScore = 0;
    actPlayer = 0;
    game = true;
})

