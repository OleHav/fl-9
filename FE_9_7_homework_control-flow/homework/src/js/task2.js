let ready = confirm(`Do you want to play a game?`);

const range = 5;
const magicNum = 1;
const maxPrize = 10;

if (ready) {
    go(range, maxPrize);
} else {
    alert(`You did not become a millionaire, but can!`)
}

function go(range, prize, totalPrize = 0) {
    
    let randomNum = Math.floor(Math.random() * (range + magicNum));
    let currentPrize = prize;
    let attemptsNum = 3;
    
    for (attemptsNum; attemptsNum > 0; attemptsNum--) {
        let userNum = prompt(`Enter a number from 0 to ${range} 
            \n Attempts left: ${attemptsNum} 
            \n Total prize: ${totalPrize}$ 
            \n Possible prize on current attempt: ${currentPrize}$`);
                if (+userNum === randomNum) {
                    let gameOver = confirm(`Congratulation! Your prize is: ${currentPrize + totalPrize}$
            \n Do you want to continue?`);
            if (gameOver) {
                go(range *2, prize *3, totalPrize + currentPrize);
            } else {
                alert(`Thank you for a game. Your prize is: ${currentPrize + totalPrize}$`);
                    if (confirm(`Do you want to play again?`)) {
                        go(range, maxPrize);
                        break;
                } 
                break;
            }
            break;
        } else if (!userNum) {
            break;
        } else {
            if (attemptsNum === magicNum) {
                alert(`Thank you for a game. Your prize is: ${totalPrize}`);
                    if (confirm('Do you want to play again?')) {
                        go(range, maxPrize);
                }
            }
        }
    currentPrize = Math.floor(currentPrize/2);
    }
}