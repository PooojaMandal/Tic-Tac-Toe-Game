console.log("Tic Tac Toe");
let music = new Audio("button.mp3")
let winmusic = new Audio("winaudio.mp3")
let turn = "X";
let isGameover = false;

//function to change turn

const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

//function to check someoe won or not

function checkWin() {
    wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 8],
        [0, 4, 8],

    ]

    let boxtext = document.getElementsByClassName("boxtext");
    wins.forEach(e => {

        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&
            (boxtext[e[2]].innerText === boxtext[e[1]].innerText) &&
            (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isGameover = true;
            /*   let image=document.getElementsByClassName("image");
              image.style.display='block'; */
            document.querySelector('.image').getElementsByTagName('img')[0].style.width = "200px";
            

        }
    }

    )
}

//game logic
let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            music.play();
            checkWin();
            if (!isGameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

//Reset button
let button = document.getElementById("reset");
button.addEventListener('click', () => {
    console.log('button clicked');
    let boxx = document.getElementsByClassName("boxtext");
    Array.from(boxx).forEach((boxx) => {
        boxx.innerText = '';
        turn = "X";
        isGameover = false;
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        document.querySelector('.image').getElementsByTagName('img')[0].style.width = "0";
    })

})





