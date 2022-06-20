
const game = () => {
	let playerScore = 0;
	let computerScore = 0;
	let moves = 0;


	const playGame = () => {
		const rockBtn = document.querySelector('.rock');
		const paperBtn = document.querySelector('.paper');
		const scissorBtn = document.querySelector('.scissor');
		const playerOptions = [rockBtn,paperBtn,scissorBtn];
		const computerOptions = ['rock','paper','scissors']
		
		
		playerOptions.forEach(option => {
			option.addEventListener('click',function(){

				const movesLeft = document.querySelector('.movesleft');
				moves++;
				movesLeft.innerText = `Moves Left: ${3-moves}`;
				

				const choiceNumber = Math.floor(Math.random()*3);
				const computerChoice = computerOptions[choiceNumber];

				winner(this.innerText,computerChoice)
				
				if(moves == 3){
					gameOver(playerOptions,movesLeft);
				}
			})
		})
		
	}

	// Function to decide winner
	const winner = (player,computer) => {
		const result = document.querySelector('.result');
		const playerScoreBoard = document.querySelector('.p-count');
		const computerScoreBoard = document.querySelector('.c-count');
		player = player.toLowerCase();
		computer = computer.toLowerCase();
		if(player === computer){
			result.textContent = 'Tie'
		}
		else if(player == 'rock'){
			if(computer == 'paper'){
				result.textContent = 'the cat Won';
				computerScore++;
				computerScoreBoard.textContent = computerScore;

			}else{
				result.textContent = 'you Won'
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
		else if(player == 'scissors'){
			if(computer == 'rock'){
				result.textContent = 'the cat Won';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			}else{
				result.textContent = 'you Won';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
		else if(player == 'paper'){
			if(computer == 'scissors'){
				result.textContent = 'the cat Won';
				computerScore++;
				computerScoreBoard.textContent = computerScore;
			}else{
				result.textContent = 'you Won';
				playerScore++;
				playerScoreBoard.textContent = playerScore;
			}
		}
	}

	// Function to run when game is over
	const gameOver = (playerOptions,movesLeft) => {

		const chooseMove = document.querySelector('.move');
		const result = document.querySelector('.result');
		const reloadBtn = document.querySelector('.reload');

		playerOptions.forEach(option => {
			option.style.display = 'none';
		})

	
		chooseMove.innerText = 'Game Over!!'
		movesLeft.style.display = 'none';

		if(playerScore > computerScore){
			document.body.style.backgroundImage = "url('./images/winner.jpg')";
			document.body.style.backgroundRepeat = "no-repeat";
			document.getElementById("container").style.display = "none";

			document.body.style.color = "black";

			result.style.fontSize = '2rem';
			// result.innerText = 'And the winner is ..................... YOU!!!!!'
			result.style.color =  'rgb(232, 135, 8)';
		}
		else if(playerScore < computerScore){
			document.getElementById("game").style.backgroundImage = "url('./images/winner.png')";
			document.getElementById("container").style.display = "none";

			result.style.fontSize = '2rem';
			// result.innerText = 'LoOoOoOOOooOoOoOoOSsSeeeeR';
			result.style.color =  'rgb(232, 135, 8)';
		}
		else{
			result.style.fontSize = '2rem';
			result.innerText = 'Tie';
			document.getElementById("container").style.display = "none";

			result.style.color = 'grey'
		}
		reloadBtn.innerText = 'Restart';
		reloadBtn.style.display = 'flex'
		reloadBtn.addEventListener('click',() => {
			window.location.reload();
		})
	}


	// Calling playGame function inside game
	playGame();
	
}

// Calling the game function
game();
