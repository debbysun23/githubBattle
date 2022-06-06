function handlePlayersMarkup() {
    const player1 = JSON.parse(localStorage.getItem('PLAYER1'))
    const player2 = JSON.parse(localStorage.getItem('PLAYER2'))


    const calculateScore = (playerInfo) => {
        const totalScore = playerInfo.followers + playerInfo.following + (playerInfo.public_repos / 2)
        return totalScore
    }

    let winner
    let losser

    var player1Score = calculateScore(player1)
    var player2Score = calculateScore(player2)

    if (player1Score > player2Score) {
        winner = player1
        losser = player2
    } else if (player2Score > player1Score) {
        winner = player2
        losser = player1
    }



    console.log(winner, losser)
    winnerMarkup = `

              <div class="item"> score: ${calculateScore(winner)}</div>  
              <div class="photo item"><img id="photo" width = 150px src=${winner.avatar_url} alt="github avater"></div>
              <div class="item">Name:<span id="Nae dp">${winner.login}</span></div>
              <div class="item">Username:<span id="Username">${winner.login}</span></div>
              <div class="item">Followers:<span id="Name">${winner.followers}</span></div>
              <div class="item">Following:<span id="N">${winner.following}</span></div>
              <div class="item">Public repo:<span id="Na">${winner.public_repos}</span></div>
         `

    losserMarkup = `
              <div class="item">Score: ${calculateScore(losser)}</div>  
              <div class="photo item"><img id="photo" width = 150px src=${losser.avatar_url} alt="github avater"></div>
              <div class="item">Name:<span id="Nae dp">${losser.login}</span></div>
              <div class="item">Username:<span id="Username">${losser.login}</span></div>
              <div class="item">Followers:<span id="Name">${losser.followers}</span></div>
              <div class="item">Following:<span id="N">${losser.following}</span></div>
              <div class="item">Public repo:<span id="Na">${losser.public_repos}</span></div>
         `
    document.querySelector('#winner').innerHTML = winnerMarkup;
    document.querySelector('#losser').innerHTML = losserMarkup;
}

window.addEventListener('load', handlePlayersMarkup);

document.getElementById("startbtn").addEventListener('click', function(){
    location.href = "../index.html";
});