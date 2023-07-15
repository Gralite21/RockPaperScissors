let score =
    JSON.parse(localStorage.getItem('score'));
if (score===null){
    score= {
        Wins : 0,
        Losses: 0,
        Ties: 0
    };
}

updateScoreElement();

function playGame (playerMove){
    const computerMove = pickComputerMove();
    let result = '';

    if (playerMove === 'Scissors'){
        if(computerMove==='Rock'){
            result = 'Lose';
        }
        else if (computerMove==='Paper'){
            result = 'Win';
        }
        else if (computerMove==='Scissors'){
            result = 'Tie';
        }}

    else if(playerMove === 'Paper'){
        if(computerMove==='Rock'){
            result = 'Win';
        }
        else if (computerMove==='Paper'){
            result = 'Tie';
        }
        else if (computerMove==='Scissors'){
            result = 'Lose';
        }
    }

    else if (playerMove ==='Rock'){
        if(computerMove==='Rock'){
            result = 'Tie';
        }
        else if (computerMove==='Paper'){
            result = 'Lose';
        }
        else if (computerMove==='Scissors'){
            result = 'Win';
        }
    }

    if (result === 'Win'){
        score.Wins += 1 ;
    } else if (result === 'Lose'){
        score.Losses += 1;
    } else if(result === 'Tie') {
        score.Ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));
    updateScoreElement();

    document.querySelector('.js-result').innerHTML=
        `You ${result}`;

    document.querySelector('.js-move').innerHTML=
        `You <img src="Rock-Paper-Scissors-files/${playerMove}-emoji.png" class="moveIcon"> <img src="Rock-Paper-Scissors-files/${computerMove}-emoji.png" class="moveIcon"> Computer`

}

function updateScoreElement(){
    document.querySelector('.js-score').innerHTML=
        `Wins: ${score.Wins}  Losses: ${score.Losses}  Ties:${score.Ties}`;
}


function pickComputerMove(){
    const randomNumber = (Math.random());

    let computerMove = ''

    if (randomNumber >=0 && randomNumber <1/3){
        computerMove = 'Rock';
    }
    else if (randomNumber >=1/3 && randomNumber <2/3){
        computerMove = 'Paper';
    }
    else if (randomNumber >= 2/3 && randomNumber <1)
    {computerMove = 'Scissors';
    }

    return computerMove;
}