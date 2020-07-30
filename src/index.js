import {generatePuzzleDOM, generateStatusDOM}  from './dom'
import Hangman from './hangman'
import getPuzzle from './requests'

let hangman

const render = (hangman) =>{
    hangman.guessMessage
    generatePuzzleDOM(hangman)
    generateStatusDOM(hangman)
}

window.addEventListener('keypress', (e)=>{
    hangman.guess(e.key)
    render(hangman)
})



const startGame = async () => {
    const puzzle = await getPuzzle(2)
    hangman = new Hangman(puzzle, 5)
    render(hangman)
}

startGame()
