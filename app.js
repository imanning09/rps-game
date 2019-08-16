var userPoints = 0;
var botPoints = 0;
const userPoints_span = document.getElementById('user-points');
const botPoints_span = document.getElementById('bot-points');

const pointCounter_div = document.querySelector('point-counter');
const result_p = document.querySelector('.result > p');

const rock = document.getElementById('r');
const paper = document.getElementById('p');
const scissors = document.getElementById('s');


function getBotChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function letterToPlayer(letter) {
    if (letter === 'r') return 'Rock';
    if (letter === 'p') return 'Paper';
    return 'Scissors';
}

function win(user, bot) {
    userPoints++;
    userPoints_span.innerHTML = userPoints;
    botPoints_span.innerHTML = botPoints;
    userGlow = document.getElementById(user);
    result_p.innerHTML = `${letterToPlayer(user)} defeats ${letterToPlayer(bot)}. You Win!`;
    userGlow.classList.add('green-win');
    setTimeout(function() { 
        userGlow.classList.remove('green-win');
     }, 300);
}



function lose(user, bot) {
    botPoints++;
    userPoints_span.innerHTML = userPoints;
    botPoints_span.innerHTML = botPoints;
    userGlow = document.getElementById(user);
    result_p.innerHTML = `${letterToPlayer(user)} lost to ${letterToPlayer(bot)}. You Lose!`;
    userGlow.classList.add('red-lose');
    setTimeout(function() { 
        userGlow.classList.remove('red-lose');
     }, 300);
}
function draw(user, bot) {
    userPoints_span.innerHTML = userPoints;
    botPoints_span.innerHTML = botPoints;
    userGlow = document.getElementById(user);
    result_p.innerHTML = `${letterToPlayer(user)} equals ${letterToPlayer(bot)}. Its a Tie!`;
    userGlow.classList.add('gray-tie');
    setTimeout(function() { 
        userGlow.classList.remove('gray-tie');
     }, 300);
}


function execute(userChoice) {
    const botChoice = getBotChoice();
    switch (userChoice + botChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, botChoice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, botChoice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, botChoice);
            break;
    }
}

function main() {
rock.addEventListener('click', function() {
    execute('r');
});
paper.addEventListener('click', function() {
    execute('p');
});
scissors.addEventListener('click', function() {
    execute('s');
});
}

main();