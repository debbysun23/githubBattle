var addForm = document.forms["submit"];
var xhr = new XMLHttpRequest();
const input = addForm.querySelector('input[type ="text"]');

function callToServer(query) {
    xhr.open('GET', "https://api.github.com/users/" + query, true);
    xhr.responseType = 'text';
    xhr.send(null);
}

function handleMarkup (status, player) {
    let markup
    if (status === 'success') {
        markup = `
              <div class="photo item"><img id="photo" src=${player.avatar_url} alt="github avater"></div>
              <div class="item">Name:<span id="Nae dp">${player.login}</span></div>
              <div class="item">Username:<span id="Username">${player.login}</span></div>
              <div class="item">Followers:<span id="Name">${player.followers}</span></div>
              <div class="item">Following:<span id="N">${player.following}</span></div>
              <div class="item">Public repo:<span id="Na">${player.public_repos}</span></div>
         `
    } else {
        markup = `
                <h1>User not Found<h1>
                `
    }
    document.querySelector('#data').innerHTML = markup;
}


addForm.addEventListener("submit", function (e) {
    e.preventDefault();
    callToServer(input.value)
    document.querySelector(".inp").value = "";

    xhr.onload = function () {
        
        if (xhr.status === 200) {
            var player1 = JSON.parse(xhr.responseText);
            handleMarkup('success', player1)
            localStorage.setItem('PLAYER1', xhr.responseText)
             setTimeout(() => {
                location.href = "../player2/player2.html";
            }, 3000);
        } else {
            handleMarkup('failed')
        }
    }
})
