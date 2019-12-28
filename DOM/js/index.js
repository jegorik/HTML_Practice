function game() {
    var player1Score = Math.floor((Math.random() * 6) + 1);
    var player2Score = Math.floor((Math.random() * 6) + 1);

    document.querySelector("#player1").innerHTML = "<img src=images/" + player1Score + ".png" + ">";
    document.querySelector("#player2").innerHTML = "<img src=images/" + player2Score + ".png" + ">";

    if (player1Score > player2Score) {
        document.querySelector("#result").innerHTML = "&#x270C Player 1 win!";
    } else if (player1Score === player2Score) {
        document.querySelector("#result").innerHTML = "Draw!";
    } else {
        document.querySelector("#result").innerHTML = "Player 2 win! &#x270C";
    }
}

document.onload(game());