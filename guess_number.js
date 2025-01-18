class Game {
    constructor() {
        this.targetNumber = this.generateRandomNumber();
        this.attempts = 0;
        this.gameOver = false;
    }

    // Generate a random number between 1 and 100
    generateRandomNumber() {
        return Math.floor(Math.random() * 100) + 1;
    }

    // Check the user's guess and provide feedback
    checkGuess(userGuess) {
        this.attempts++;

        if (userGuess === this.targetNumber) {
            this.gameOver = true;
            return `Correct! You guessed the number in ${this.attempts} attempts.`;
        } else if (userGuess < this.targetNumber) {
            return "Higher!";
        } else {
            return "Lower!";
        }
    }

    // Reset the game
    resetGame() {
        this.targetNumber = this.generateRandomNumber();
        this.attempts = 0;
        this.gameOver = false;
    }
}

// Create a new game instance
const game = new Game();

// Function to start a new game or interact with the current game
function startGame() {
    console.log("Welcome to the Number Guessing Game!");
    console.log("Guess a number between 1 and 100");

    // Simulate user input using prompt (in browser)
    let userGuess;
    while (!game.gameOver) {
        userGuess = parseInt(prompt("Enter your guess:"));

        // Validate input
        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            console.log("Please enter a valid number between 1 and 100.");
            continue;
        }

        // Check the guess and give feedback
        const result = game.checkGuess(userGuess);
        console.log(result);

        if (game.gameOver) {
            console.log("Congratulations! You won!");
            if (confirm("Do you want to play again?")) {
                game.resetGame();
                startGame(); // Restart the game
            }
        }
    }
}

// Start the game
startGame();
