function handlePlayersMarkup () {
    const player1 = JSON.parse(localStorage.getItem('PLAYER1'))
     const player2 = JSON.parse(localStorage.getItem('PLAYER2'))
     console.log(player1, player2)
        player1Markup = `
              <div class="photo item"><img id="photo" width = 150px src=${player1.avatar_url} alt="github avater"></div>
              <div class="item">Name:<span id="Nae dp">${player1.login}</span></div>
              <div class="item">Username:<span id="Username">${player1.login}</span></div>
              <div class="item">Followers:<span id="Name">${player1.followers}</span></div>
              <div class="item">Following:<span id="N">${player1.following}</span></div>
              <div class="item">Public repo:<span id="Na">${player1.public_repos}</span></div>
         `

         player2Markup = `
              <div class="photo item"><img id="photo" width = 150px src=${player2.avatar_url} alt="github avater"></div>
              <div class="item">Name:<span id="Nae dp">${player2.login}</span></div>
              <div class="item">Username:<span id="Username">${player2.login}</span></div>
              <div class="item">Followers:<span id="Name">${player2.followers}</span></div>
              <div class="item">Following:<span id="N">${player2.following}</span></div>
              <div class="item">Public repo:<span id="Na">${player2.public_repos}</span></div>
         `
    document.querySelector('#player1').innerHTML = player1Markup;
    document.querySelector('#player2').innerHTML = player2Markup;
}
window.addEventListener("load", handlePlayersMarkup);

document.getElementById('btt').addEventListener("click", function(){
     window.location.href = `${window.location.origin}/finalScore/final.html`
});

document.getElementById('bnt').addEventListener("click", function(){
     window.location.href = `${window.location.origin}/player1/player1.html`
});
