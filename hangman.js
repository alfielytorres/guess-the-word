class Hangman{
    constructor(word,remainingGuesses, status='playing'){
        this.word=word.toLowerCase().split('') // splits the word into an array of its letters 
        this.remainingGuesses=remainingGuesses
        this.guessedLetters = []
        this.status=status
    }
    /*
    check if guess is unique 
    - if unque add in guesses and decrement guess 
    - if not unique do not add in guesses no decrement guess
    */
    guess(guess){
        
        //ensure that the input is a character
        if(guess.length!==1){
            throw new Error('Input must be a char')
        }
        
        guess=guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess)
        const isBadGuess = !this.word.includes(guess)
        const gameIsDone = this.status === 'failed' || this.status==='finished'

        //game must be playing
        if(this.status!=='playing'){
            return
        }

        if(isUnique){
            this.guessedLetters.push(guess)
        }

        //only decrement if we made bad guesses 
        if(isBadGuess && isUnique && !gameIsDone){
            this.remainingGuesses--
        }

        this.statusMessage
    }
    get statusMessage() {
        const isFinished = this.puzzle.toLowerCase()===this.word.join('')
        if(isFinished){
            this.status='finished'
            generatePlayAgainDOM()
        }else if(this.remainingGuesses>0){
            this.status='playing'
        }else if(this.remainingGuesses===0){
            this.status='failed'
            generatePlayAgainDOM()
        }
        return this.status
    }
    get guessMessage() {
        let message
        if(this.status==='playing'){
            message=`Guesses left: ${hangman.remainingGuesses}`
        }else if(this.status==='finished'){
            message=`Great You Guessed The Word!`
        }else if(this.status==='failed'){
            message=`Nice try the word was '${this.word.join('')}'`
        }
        return message
        
    }
    get puzzle() {
        let puzzle=''
        this.word.forEach(letter => {//first loop
           if(this.guessedLetters.includes(letter)|| letter == ' '){
                puzzle+=letter  // only assign to the puzzle if match/no match has been found
           }else{
                puzzle+='*'  // only assign to the puzzle if match/no match has been found
           }
           
        });
        return puzzle
    }
    
}


