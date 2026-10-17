let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const gencompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];

}

const drawGame = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor ="#1d135d";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `YOU WIN!! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `YOU LOST. ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor ="red";
    }
}
const playGame = (userChoice) => {
    // Generate computer choice
    const compChoice = gencompChoice();
    if(userChoice === compChoice){
        // Draw game
        drawGame();
    }else {
        let userWin = true;
        if(userChoice ==="rock") {
            // scissor, paper
            userWin = compChoice ==="paper"? false : true;
        } else if(userChoice ==="paper") {
            // rock, scissor,
            userWin = compChoice === "scissor"? false: true;
        }else {
            // rock, paper,
            compChoice === "rock"? false: true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});