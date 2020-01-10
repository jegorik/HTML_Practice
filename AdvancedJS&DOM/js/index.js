function playSound(value) {
    switch (value) {
        case "w":
            var crash = new Audio("sounds/crash.wav");
            crash.play();
            break;

        case "a":
            var kick = new Audio("sounds/kick.wav");
            kick.play();
            break;

        case "s":
            var snare = new Audio("sounds/snare.wav");
            snare.play();
            break;

        case "d":
            var tom1 = new Audio("sounds/tom1.wav");
            tom1.play();
            break;

        case "j":
            var tom2 = new Audio("sounds/tom2.wav");
            tom2.play();
            break;

        case "k":
            var tom3 = new Audio("sounds/tom3.wav");
            tom3.play();
            break;

        case "l":
            var tom4 = new Audio("sounds/tom4.wav");
            tom4.play();
            break;
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed")
    }, 100);
}

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        playSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

document.addEventListener("keypress", function (event) {
    playSound(event.key);
    buttonAnimation(event.key);
});

