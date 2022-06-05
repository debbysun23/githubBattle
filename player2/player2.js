var addForm = document.forms["submit"];
var xhr = new XMLHttpRequest();
const input = addForm.querySelector('input[type ="text"]');

function callToServer(query) {
    xhr.open('GET', "https://api.github.com/users/" + query, true);
    xhr.responseType = 'text';
    xhr.send(null);
}

function handleMarkup (status, player) {
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
        let markup
        if (xhr.status === 200) {
            var player2 = JSON.parse(xhr.responseText);
            handleMarkup('success', player2)
            localStorage.setItem('PLAYER2', xhr.responseText)
             setTimeout(() => {
                window.location.href = `${window.location.origin}/playersBattle/playersBattle.html`;
            }, 3000);
        } else {
            handleMarkup('failed')
        }
    }
})

























// var gitHubInfo;
// var addForm = document.forms["submit"];
// var xhr = new XMLHttpRequest();
// const input = addForm.querySelector('input[type ="text"]');
// // let value = document.getElementsByClassName('input[type ="text"]').value;
// // let input = document.querySelector('.inp')

// function callToServer() {
// xhr .open ('GET', "https://api.github.com/users/"+input.value, true);
// xhr.responseType = 'text';
// xhr.send(null);

// xhr.onload = function() {
//     if (xhr.status === 200){
//         gitHubInfo = JSON.parse(xhr.responseText);
//         console.log(gitHubInfo);

//         /*document.getElementById("Name").innerHTML = gitHubInfo.followers_url;*/
//     }
// }}


// addForm.addEventListener("submit",  function(e) {
//     e.preventDefault();
//     console.log(input.value);
//     callToServer()

    

//     document.getElementById("photo").src= gitHubInfo.avatar_url;
//     document.querySelector("#Username").innerHTML =input.value;
//     document.querySelector(".inp").value = "";
//     document.getElementById("Name").innerHTML = gitHubInfo.followers;
//     document.getElementById("N").innerHTML = gitHubInfo.following;
//     document.getElementById("Na").innerHTML= gitHubInfo.public_repos;
// })

