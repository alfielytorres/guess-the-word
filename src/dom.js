

const generatePuzzleDOM = (hangman) => {
    const word = document.getElementById('word-div')
    const wordText = document.createElement('p')
    wordText.setAttribute('class','word-text')
    word.textContent=''

    let editedPuzzle 
    hangman.puzzle.split('').forEach(char => {
        const letterElement = document.createElement('span')
        letterElement.textContent = char
        wordText.appendChild(letterElement)
    })

    word.appendChild(wordText)
}


const generateStatusDOM = (hangman) => {
    //generate guess
    const guessLeft = document.getElementById('guesses-left-div')
    const guessText = document.createElement('p')
    guessText.setAttribute('class','guesses-left')
    guessLeft.textContent=''
    guessText.textContent=hangman.guessMessage
    guessLeft.appendChild(guessText)

}


const generatePlayAgainDOM = () => {

    //generate play again button 
    const buttonPlay = document.getElementById('play-again-div')
    const button = document.createElement('button')
    button.setAttribute('class','btn btn-primary')
    button.setAttribute('onClick','window.location.reload();')
    buttonPlay.textContent=''
    button.textContent = 'Play Again!'
    buttonPlay.appendChild(button)


}

export {generatePuzzleDOM, generateStatusDOM, generatePlayAgainDOM} 