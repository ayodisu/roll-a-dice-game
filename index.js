const startBtn = document.querySelector('#start');
const rollBtn = document.querySelector('#rollDice');
const notify = document.querySelector('#notify');
const display = document.querySelector('#display');



// START PROCESS
let p1,p2;
startBtn.addEventListener('click', ()=> {
    p1 = prompt('Enter Player 1');
    p2 = prompt('Enter Player 2');
    
    notify.innerHTML = `
        <h3>${p1}</h3>
        <h2>Get Started</h2>
        <h3>${p2}</h3>
    `;

    startBtn.classList.add('d-none');
    rollBtn.classList.remove('d-none');
    display.classList.remove('d-none');
})

// GAME PROCESS
rollBtn.addEventListener('click', ()=> {
    let rand1 = Math.floor(Math.random() * 6) + 1;
    let rand2 = Math.floor(Math.random() * 6) + 1;
    let winner;

    // GAME LOGIC

    if (rand1 > rand2) {
        winner = p1 + ' Wins!';
    }
    else if (rand1 === rand2) {
        winner = 'Draw';
    }else {
        winner = p2 + ' Wins!';
    }

    notify.innerHTML = `
        <h3>${p1}</h3>
        <h2>${winner}</h2>
        <h3>${p2}</h3>
    `;

    display.innerHTML = `
        <img src="dice-img/${rand1}.png" alt="" class="img-fluid animate__animated animate__rotateIn">
        <img src="dice-img/${rand2}.png" alt="" class="img-fluid animate__animated animate__rotateIn">
    `;
})