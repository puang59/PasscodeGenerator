const button = document.getElementById("gen-btn");
const pc = document.getElementById("passcode");
const length_a = document.getElementById("length");

// checkbox
const uc = document.getElementById("uc");
const lc = document.getElementById("lc");
const n = document.getElementById("n");
const c = document.getElementById("c");
const s = document.getElementById("s");
//const inputText = document.getElementById("input-txt");

var video = document.getElementById("myVideo");
var btn = document.getElementById("p-btn");

function code(length) {
    var result = "";
    var characters = "";
    if (uc.checked === true)
        characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lc.checked === true)
        characters += "abcdefghijklmnopqrstuvwxyz";
    if (n.checked === true)
        characters += "1234567890";
    if (c.checked === true)
        characters += "{}[]()/\`~,;:.<>";
    if (s.checked === true)
        characters += "@#$%";
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
    pc.append(code(length_a.value));
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