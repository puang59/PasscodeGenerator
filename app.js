const button = document.getElementById("gen-btn");
const pc = document.getElementById("passcode");
const inputText = document.getElementById("input-txt");

var video = document.getElementById("myVideo");
var btn = document.getElementById("p-btn");

//code

function code(length) {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var characterLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characterLength));
    }
    return result;
}

function hasNumber(myString) {
    return /\d/.test(myString);
}

button.addEventListener('click', function () {
    pc.innerText = "";
    if (hasNumber(inputText.value))
        pc.append(code(inputText.value));
    else
        pc.append("My brain! I think its broken!");
});

function pauseplay() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}

btn.addEventListener('click', function () {
    pauseplay();
})