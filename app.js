

let hangman

const render = () =>{
    hangman.guessMessage
    generatePuzzleDOM()
    generateStatusDOM()
}

window.addEventListener('keypress', (e)=>{
    hangman.guess(e.key)
    render()
})



const startGame = async () => {
    const puzzle = await getPuzzle(2)
    hangman = new Hangman(puzzle, 5)
    render()
}

startGame()