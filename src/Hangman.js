class HangmanGame {
    
    constructor(word , number) {
        this.word = word.toLowerCase().split('')
        this.guessed = []
        this.remainingGuesses = number
        this.status = 'playing'
    }

    get puzzle() {
        let puzzle = ''

        this.word.forEach(letter => {
            
            if(this.guessed.includes(letter) || letter === ' '){
                puzzle += letter
            }
            else {
                puzzle += '*'
            }
        })
        return puzzle     
    }

    makeGuess(char) {
        if(this.status === 'playing'){
            char = char.toLowerCase()
            const isUnique = !this.guessed.includes(char)
            const isBadGuess = !this.word.includes(char)
            if(isUnique){
    
                this.guessed = [...this.guessed, char]
            } 
    
            if(isUnique && isBadGuess){
    
                this.remainingGuesses--
            }
    
            this.changeStatus()
        }
    }


    changeStatus() {
        const finished = this.word.every( letter => {
            return this.guessed.includes(letter) || letter === ' '
        })
       
        if(this.remainingGuesses === 0){
            this.status = 'failed'
        } else if(finished){
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
    }

    get statusMessage() {
        if(this.status === 'playing'){

            return `Guesses left : ${this.remainingGuesses}`
    
        } else if(this.status === 'finished'){
    
            return 'Great work! You guessed the word.'
    
        } else if(this.status === 'failed'){
    
            return `Nice Try! The word was "${this.word.join('')}".`
        }
    }
}

export { HangmanGame as default }
